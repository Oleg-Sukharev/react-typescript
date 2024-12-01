import { useEffect, useRef, useState } from "react";

export const HeaderMenuItem = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("click", handler);

    return () => window.removeEventListener("click", handler);
  });
};
