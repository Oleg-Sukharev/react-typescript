import * as React from "react";

import mc from "@/utils/mergeClasses";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  dirtyField?: boolean;
  error?: string | any;
  label: string;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, dirtyField, ...props }, ref) => {
    return (
      <div className={className}>
        <label htmlFor={label} className={mc("text-sm ", dirtyField && "text-blue-400")}>
          {label}
        </label>
        <textarea
          id={label}
          className={mc(
            "placeholder:gray-700 block w-full rounded-md border p-2 py-1.5 pr-10 text-gray-700 focus:border-blue-300",
            dirtyField && "text-blue-400",
          )}
          ref={ref}
          {...props}
        />
        {error && <span className="mt-2 text-sm text-red-600">{error}</span>}
      </div>
    );
  },
);

export default Textarea;
