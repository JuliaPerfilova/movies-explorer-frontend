import {useEffect, useState} from "react";


export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {

    let resizeTimeout;
    function handleResizeWithInterval() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null;
          setWindowWidth(window.innerWidth);
        }, 1000);
      }
    }

    window.addEventListener('resize', handleResizeWithInterval, false);

    return () => window.removeEventListener('resize', handleResizeWithInterval);
  }, []);

  return windowWidth;
}
