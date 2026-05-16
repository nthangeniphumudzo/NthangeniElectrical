import type { ReactNode } from "react";

interface PageSectionProps {
  id?: string;
  children: ReactNode;
  muted?: boolean;
  className?: string;
}

export function PageSection({
  id,
  children,
  muted = false,
  className = "",
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={`section-pad ${muted ? "bg-surface-muted" : "bg-surface"} ${className}`}
    >
      <div className="container-app">{children}</div>
    </section>
  );
}
