import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

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
  className?: string;
}>;

export const ButtonsAlt = ({ children, onClick }: ButtonPropsAlt) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
