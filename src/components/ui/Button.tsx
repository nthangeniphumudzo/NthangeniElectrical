import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { ButtonVariant } from "../../types";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  size?: "default" | "lg";
}

const variantStyles: Record<ButtonVariant, string> = {
  solid:
    "bg-surface-invert text-surface hover:bg-brand-blue hover:text-white dark:hover:bg-brand-blue",
  ghost:
    "border-2 border-border bg-transparent text-foreground hover:border-foreground-secondary hover:bg-surface-muted",
  cta: "bg-brand-yellow text-[#111318] shadow-lg shadow-brand-yellow/25 hover:bg-brand-yellow-dark hover:shadow-brand-yellow/40",
};

const sizeStyles = {
  default: "min-h-11 px-6 py-3 text-base sm:text-sm",
  lg: "min-h-12 px-8 py-3.5 text-base",
};

export function Button({
  variant = "solid",
  href,
  children,
  icon,
  size = "default",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`touch-target inline-flex w-full items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.98] sm:w-auto sm:hover:-translate-y-0.5 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
      {icon}
    </a>
  );
}
