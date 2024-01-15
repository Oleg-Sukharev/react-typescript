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
      <label htmlFor={label} className={mc("text-sm ", dirtyField && "text-blue-400")}>
        {label}
      </label>
      <input
        id={label}
        className="placeholder:gray-700 block w-full rounded-md border p-2 py-1.5 pr-10 text-gray-700 focus:border-blue-300"
        ref={ref}
        {...restProps}
      />

      {error && <span className="mt-2 text-sm text-red-600">{error}</span>}
    </div>
  );
});

export default InputField;
