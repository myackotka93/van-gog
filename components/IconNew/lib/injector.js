import { debounce } from "lodash"
import { fetchSvg } from "./fetcher"
import { extractFileName } from "./utils"

const SVG_NAMESPACE = "http://www.w3.org/2000/svg"

const INJECTION_DELAY = 20

class Injector {
  fragment = null

  cache = new Set()

  parseSvgString(svg) {
    return new DOMParser().parseFromString(svg, "image/svg+xml").children[0]
  }

  svgToSymbol({ id, svgString }) {
    const svgDocument = this.parseSvgString(svgString)
    const viewBox = svgDocument.getAttribute("viewBox")
    const symbol = document.createElementNS(SVG_NAMESPACE, "symbol")

    if (viewBox) {
      symbol.setAttributeNS(null, "viewBox", viewBox)
    }

    symbol.setAttributeNS(null, "id", id)
    symbol.innerHTML = svgDocument.innerHTML

    return symbol
  }

  accumulateSvg = ({ url, svgString }) => {
    const id = this.getId(url)
    const symbol = this.svgToSymbol({ id, svgString })

    this.fragment = this.fragment || document.createDocumentFragment()
    this.fragment.append(symbol)
  }

  flushSvg = () => {
    const sprite = this.getSymbolMountPoint()

    if (this.fragment) {
      sprite.appendChild(this.fragment)
      this.fragment = null
    }
  }

  deboucedflushSvg = debounce(this.flushSvg, INJECTION_DELAY)

  getSymbolMountPoint() {
    if (!this.symbolsMountingPoint) {
      const sprite = document.createElementNS(SVG_NAMESPACE, "svg")
      this.symbolsMountingPoint = sprite

      sprite.ariaHidden = "true"
      sprite.style.width = "0"
      sprite.style.height = "0"
      sprite.style.overflow = "hidden"

      document.body.appendChild(sprite)
    }

    return this.symbolsMountingPoint
  }

  getId(url) {
    return extractFileName(url)
  }

  async load(url, { flushImmediate, timeout, retryCount } = {}) {
    if (this.cache.has(url)) {
      return
    }

    this.cache.add(url)

    return fetchSvg(url, { timeout, retryCount })
      .then(svgString => {
        this.accumulateSvg({ url, svgString })
        flushImmediate ? this.flushSvg() : this.deboucedflushSvg()
      })
      .catch(error => {
        this.cache.delete(url)
        throw error
      })
  }
}

export const injector = new Injector()
