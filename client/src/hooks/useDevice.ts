import { useState, useEffect } from "react";

const MAX_MOBILE_WIDTH = 425;
function getIsMobile(deviceWidth: number) {
  return deviceWidth <= MAX_MOBILE_WIDTH;
}

export default function useDevice() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isMobile, setIsMobile] = useState(getIsMobile(screenSize.width));

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const currIsMobile = getIsMobile(window.innerWidth);
      isMobile !== currIsMobile && setIsMobile(currIsMobile);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { screenSize, isMobile };
}
