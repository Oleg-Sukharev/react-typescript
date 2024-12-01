import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(({ onClick, children, ...rest }, ref) => {
  return (
    <button ref={ref} onClick={onClick} {...rest}>
      {children || "Button"}
    </button>
  );
});
