import { useEffect } from "react";

// This hook is useful for implementing smooth scrolling behavior
// when navigating to anchor links, especially
// if you have sticky elements like headers or navigation bars.By specifying an offset,
// you can ensure that the target element doesn't get hidden behind these sticky elements.

export default function useSmoothScroll(offset: number = 100) {
  useEffect(() => {
    const handleScroll = (event: MouseEvent) => {
      event.preventDefault();

      const target = event.target as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.slice(1);
      if (!targetId) return;

      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleScroll));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleScroll));
    };
  }, [offset]);
}
