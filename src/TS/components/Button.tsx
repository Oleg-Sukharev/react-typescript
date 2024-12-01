import { ComponentPropsWithoutRef, PropsWithChildren, forwardRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};

type ButtonPropsAlt = PropsWithChildren<{
  onClick: () => void;
}>;

export const ButtonsAlt = ({ children, onClick }: ButtonPropsAlt) => {
  return <button onClick={onClick}>{children}</button>;
};

export interface ButtonPropsAl extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const ButtonAlt = forwardRef<HTMLButtonElement, ButtonPropsAl>(({ className, ...props }, ref) => {
  return <button ref={ref} {...props} />;
});

export default Button;
