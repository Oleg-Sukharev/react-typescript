import { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import mc from "@/utils/mergeClasses";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  error?: string | any;
  dirtyField?: boolean;
}

const InputField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, error, dirtyField, ...restProps } = props;

  return (
    <div>
      <label htmlFor={label} className={mc(dirtyField && "text-blue-400")}>
        {label}
      </label>
      <input id={label} ref={ref} {...restProps} />
      {error && <span>{error}</span>}
    </div>
  );
});

export default InputField;
