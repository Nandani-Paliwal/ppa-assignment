import { type FC, type ReactNode, type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react'
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import Link from "next/link";

const buttonClassVariants = cva(
  "inline-flex min-w-max items-center gap-2 flex-shrink-0 dark:ring-offset-darkGrey font-normal focus:outline-none focus:ring-2  cursor-pointer ",
  {
    variants: {
      variant: {
        primary:
          "bg-primary hover:bg-primaryShade-3 text-white focus:ring-darkGrey active:bg-primaryShade-2",
        secondary:
          "bg-white hover:bg-silver border border-primary text-primary active:bg-silver focus:ring-lightGrey focus:bg-silver",
        tertiary:
          "text-primary hover:bg-silver active:bg-primaryTint-5 focus:ring-darkGrey focus:bg-white",
      },
      size: {
        normal: "rounded px-4 py-3 md:px-8 md:py-4 text-para-l",
        medium: "rounded px-4 py-4 md:px-8 md:py-[14px] text-para-m",
        small: "rounded px-3 py-1 md:px-6 md:py-2 text-para-s",
      },
      fullWidth: {
        true: "w-full justify-center",
      },
      state: {
        loading: "cursor-wait",
        disabled: "cursor-not-allowed state shadow-none bg-silver text-blueGrey active",
      },
    },
    compoundVariants: [
      {
        state: "loading",
        variant: "primary",
        className: "bg-primaryShade-2 transition-colors ",
      },
      {
        state: "loading",
        variant: "secondary",
        className:
          "bg-silver border-transparent hover:bg-silver transition-colors ",
      },
      {
        state: "loading",
        variant: "tertiary",
        className: "bg-primaryTint-5 ",
      },
      {
        state: "disabled",
        variant: "primary",
        className: " ",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "normal",
    },
  }
);

interface ButtonProps 
extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
		VariantProps<typeof buttonClassVariants> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "normal" | "medium" | "small";
  children?: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  href?: string;
  className?: string;
}
const Button: FC<ButtonProps> = ({
  size,
  variant,
  fullWidth,
  icon,
  iconPosition = "right",
  loading = false,
  disabled = false,
  href,
  children,
  className,
  ...props
}) => {
  const classes = clsx(
    buttonClassVariants({
      size,
      variant,
      fullWidth,
      state: loading ? "loading" : disabled ? "disabled" : undefined,
      className,
    })
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {loading && (
        <span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 animate-spin"
          >
            <path
              d="M11 1L11 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 18L11 21"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 11L18 11"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 11L1 11"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.071 3.92893L15.9497 6.05025"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.05003 15.95L3.92871 18.0713"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.92897 3.92893L6.05029 6.05025"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.9495 15.95L18.0708 18.0713"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      )}
      {icon && iconPosition === "right" && !loading && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );


  return (
    <button type="button" className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

export default Button;
