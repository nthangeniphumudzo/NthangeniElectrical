import type { ElementType, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Reveal({ children, className = "", as: Tag = "div" }: RevealProps) {
  return <Tag className={`reveal opacity-0 translate-y-6 transition-all duration-[650ms] ease-out [&.in]:translate-y-0 [&.in]:opacity-100 ${className}`}>{children}</Tag>;
}
