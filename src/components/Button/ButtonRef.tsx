import { ButtonHTMLAttributes, PropsWithChildren, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>((props, ref) => {
  const { onClick, className, children } = props;

  return (
    <button ref={ref} className={`rounded bg-blue-500 p-2 text-white ${className}`} onClick={onClick}>
      {children}
    </button>
  );
});

export default Button;
