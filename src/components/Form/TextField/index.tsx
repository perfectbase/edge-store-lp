/* eslint-disable react/display-name */
import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import ErrorText from "../ErrorText";
import InputLabel from "../InputLabel";

export const variants = {
  base: "px-3 py-1.5 w-full text-base font-normal text-white placeholder:text-gray-700 bg-black bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-white focus:outline-none border-primary focus:ring-primary focus:border-primary",
  error: "border-red-500 focus:ring-red-500 focus:border-red-500",
};

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <>
        <InputLabel label={label} htmlFor={props.id} />
        <input
          ref={ref}
          type={props.type ?? "text"}
          className={twMerge(
            variants.base,
            error ? variants.error : "",
            className
          )}
          {...props}
        />
        <ErrorText message={error} />
      </>
    );
  }
);
export default TextField;
