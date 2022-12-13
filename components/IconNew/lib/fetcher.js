import { checkSvgContent } from "./utils"

const DEFAULT_TIMEOUT = 4800
const DEFAULT_RETRY_COUNT = 2

async function fetchWithTimeout(url, params) {
  const timeout = params?.timeout || DEFAULT_TIMEOUT
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  return fetch(url, {
    ...params,
    signal: controller.signal
  })
    .then(response => {
      clearTimeout(timeoutId)
      return response
    })
    .catch(error => {
      clearTimeout(timeoutId)
      throw error
    })
}

export function fetchSvg(url, params) {
  let retryCount =
    params?.retryCount === undefined ? DEFAULT_RETRY_COUNT : params?.retryCount

  function doFetch(url, params) {
    return fetchWithTimeout(url, params)
      .then(response => {
        if (response.ok) {
          return response.text()
        }

        throw new Error(`Unable to load SVG file: ${url}`)
      })
      .catch(error => {
        if (retryCount > 0) {
          retryCount--
          return doFetch(url, params)
        }

        throw error
      })
  }

  return doFetch(url, params).then(response => {
    checkSvgContent(response)
    return response
  })
}
