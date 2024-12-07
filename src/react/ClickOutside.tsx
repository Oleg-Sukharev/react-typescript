import { Button, Skeleton } from "@radix-ui/themes";
import { useRef, useState, useEffect } from "react";

const ClickOutside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      const handleEvent = (e: PointerEvent) => {
        const element = ref.current;

        if (element && !element.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("pointerdown", handleEvent);

      return () => document.removeEventListener("pointerdown", handleEvent);
    }
  }, [isOpen]);

  return (
    <section>
      <h2>Click Outside</h2>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      {isOpen && (
        <dialog
          ref={ref}
          open
          className="rounded-md bg-gray-300 p-4"
          aria-labelledby="modal-title"
          aria-modal="true"
          role="dialog"
        >
          <Button className="mb-2 ml-auto flex" onClick={() => setIsOpen(false)} aria-label="Close modal">
            X
          </Button>
          <h3 className="mb-4 text-lg font-bold">Modal Content</h3>
          <Skeleton height="5rem" />
        </dialog>
      )}
    </section>
  );
};

export default ClickOutside;
