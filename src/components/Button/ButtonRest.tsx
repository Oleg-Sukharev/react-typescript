import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

interface ButtonPropsAlt extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className = "", ...restProps }, ref) => {
  return (
    <button ref={ref} className={className} {...restProps}>
      {children}
    </button>
  );
});

export default Button;
