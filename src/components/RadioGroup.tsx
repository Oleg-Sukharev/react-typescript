import mc from "@/utils/mergeClasses";
import { forwardRef } from "react";

interface RadioGroupProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  values: Readonly<string[]>;
  error?: string;
  dirtyField?: boolean;
}

const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>((props, ref) => {
  const { label, error, values, dirtyField, className, ...restProps } = props;

  return (
    <div className={mc("pb-25 relative", className)}>
      <label className={mc("text-sm ", dirtyField && "text-blue-400")}>{label}</label>
      <div className="flex flex-wrap gap-3">
        {values.map((element, index) => (
          <div className="flex items-center gap-x-3" key={element + index}>
            <input
              type="radio"
              ref={ref}
              value={element + index}
              id={element + index}
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
              {...restProps}
            />
            <label htmlFor={element + index} className="block cursor-pointer">
              {element}
            </label>
          </div>
        ))}
      </div>

      {error && <span className="absolute left-0 top-[100%] mt-2 w-full text-sm text-red-600">{error}</span>}
    </div>
  );
});

export default RadioGroup;
