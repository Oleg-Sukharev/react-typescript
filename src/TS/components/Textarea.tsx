import * as React from "react";

import mc from "@/utils/mergeClasses";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  dirtyField?: boolean;
  error?: string | any;
  label: string;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ error, label, dirtyField, ...props }, ref) => {
  return (
    <div>
      <label htmlFor={label} className={mc(dirtyField && "text-blue-400")}>
        {label}
      </label>
      <textarea id={label} ref={ref} {...props} />
      {error && <span>{error}</span>}
    </div>
  );
});

export default Textarea;
