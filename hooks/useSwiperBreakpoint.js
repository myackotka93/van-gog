import { useEffect, useRef } from "react";

export default function useSwiperBreakpoint(br) {
  const swiper = useRef();

  useEffect(() => {
    const breakpoint = window.matchMedia(br);

    const breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (swiper.current !== undefined) swiper.current.destroy(false, true);
        return;
      } else if (breakpoint.matches === false) {
        // swiper.current.init()
        // swiper.current.attachEvents()
        swiper.current.update()
        // swiper.current.attachEvents()
        // return swiper.current.update()
      }
    };

    breakpointChecker();
  }, [swiper, br]);

  return swiper
}