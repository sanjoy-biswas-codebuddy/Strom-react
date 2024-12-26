import React from "react";
import { tv } from "tailwind-variants";

interface ButtonProps {
  color?: "primary" | "secondary" | "orangeBordered" | "blueBordered";
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  isActive?: boolean;
  className?: string;
  disabled?: boolean;
}

const button = tv({
  base: "font-medium rounded-[30px] text-base px-4 lg:px-8 py-2 lg:py-4 mr-2 focus:outline-none uppercase text-white",
  variants: {
    color: {
      primary:
        "bg-[#FB0201] border border-[#FB0201] hover:bg-white hover:text-[#FB0201] focus:[#FB0201]",
      secondary:
        "bg-[#0355cc] border border-[#0355cc] hover:bg-white hover:text-[#0355cc]",
      orangeBordered:
        "bg-white border border-[#ff8a1d] text-[#FB0201] hover:bg-[#FB0201] hover:border-[#fff] hover:text-white",
      blueBordered:
        "bg-white border border-[#0355cc] text-[#0355cc] hover:bg-[#0355cc] hover:text-white",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

const Button: React.FC<ButtonProps> = ({
  color = "primary",
  children,
  onClick = () => { },
  ariaLabel,
  type = "button",
  className = "",
  disabled,
}) => {
  const buttonClasses = button({
    color: color,
  });

  return (
    <button
      onClick={onClick}
      className={`${buttonClasses} ${className}`}
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
