/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const variants = {
  input: {
    base: "rounded mt-1 border-gray-300 text-primary focus:border-primary-300 focus:ring focus:ring-offset-0 focus:ring-primary-200 focus:ring-opacity-50 cursor-pointer",
    disabled: "bg-gray-200 border-gray-200 cursor-default",
  },
  label: {
    base: "pl-2 inline-block text-white cursor-pointer",
    disabled: "text-gray-400 cursor-default",
  },
};

type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  id: string;
  labelClassName?: string;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, className, labelClassName, ...props }, ref) => {
    return (
      <div className="flex">
        <input
          ref={ref}
          type="checkbox"
          className={twMerge(
            variants.input.base,
            props.disabled ? variants.input.disabled : "",
            className
          )}
          {...props}
        />
        {children && (
          <label
            className={twMerge(
              variants.label.base,
              props.disabled ? variants.label.disabled : "",
              labelClassName
            )}
            htmlFor={props.id}
          >
            {children}
          </label>
        )}
      </div>
    );
  }
);

export default Checkbox;
