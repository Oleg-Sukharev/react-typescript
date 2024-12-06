import { useLayoutEffect, useState } from "react";

type WindowSize = {
  width: number;
  height: number;
};

export default function useWindowSize() {
  const [size, setSize] = useState<WindowSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const resizeHandler = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const debouncedResizeHandler = debounce(resizeHandler, 1000);

    window.addEventListener("resize", debouncedResizeHandler);

    return () => window.removeEventListener("resize", debouncedResizeHandler);
  }, []);

  return size;
}

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return ((...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => func(...args), delay);
  }) as T;
}
