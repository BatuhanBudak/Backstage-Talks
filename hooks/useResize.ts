import { useEffect, useState, useCallback } from "react";

export default function useResize() {
  const resizeThreshold = 1000;
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [isDesktopScreen, setIsDesktopScreen] = useState(false);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
    if (window) {
      if (windowWidth < resizeThreshold) {
        setIsDesktopScreen(false);
      } else if (windowWidth >= resizeThreshold) {
        setIsDesktopScreen(true);
      }
    }
  }, [windowWidth]);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth, isDesktopScreen, handleResize]);

  return isDesktopScreen;
}
