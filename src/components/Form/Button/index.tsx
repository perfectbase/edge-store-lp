/* eslint-disable react/display-name */
import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const className = {
  base: "rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent font-[futura] font-medium transition-colors duration-200",
  disabled: "pointer-events-none bg-gray-300 text-gray-500",
  variants: {
    primary:
      "text-gray-100 bg-primary hover:bg-primary-800 focus:bg-primary-800 active:bg-primary-800",
    danger: "text-white bg-red-500 hover:bg-red-600 focus:bg-red-600",
  },
};

type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> & {
  variant?: keyof typeof className.variants;
  href?: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, href, variant, ...props }, ref) => {
    const ButtonBase = () => (
      <button
        ref={ref}
        type={props.type || "button"}
        className={twMerge(
          className.base,
          twMerge(
            className.variants[variant ?? "primary"],
            props.disabled ? className.disabled : ""
          )
        )}
        {...props}
      >
        {children}
      </button>
    );
    return (
      <>
        {href && props.disabled !== true ? (
          <Link href={href}>
            <a>
              <ButtonBase />
            </a>
          </Link>
        ) : (
          <ButtonBase />
        )}
      </>
    );
  }
);

export default Button;
