import mc from "@/utils/mergeClasses";
import { forwardRef } from "react";

interface RadioGroupProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  values: Readonly<string[]>;
  error?: string;
  dirtyField?: boolean;
}

const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>((props, ref) => {
  const { label, error, values, dirtyField, ...restProps } = props;

  return (
    <div>
      <label className={mc("text-sm ", dirtyField && "text-blue-400")}>{label}</label>
      <div>
        {values.map((element, index) => (
          <div key={element + index}>
            <input type="radio" ref={ref} value={element + index} id={element + index} {...restProps} />
            <label htmlFor={element + index}>{element}</label>
          </div>
        ))}
      </div>

      {error && <span>{error}</span>}
    </div>
  );
});

export default RadioGroup;
