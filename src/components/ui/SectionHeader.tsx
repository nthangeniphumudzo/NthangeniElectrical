interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <header
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <p
        className={`reveal mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-accent-foreground uppercase ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-0.5 w-5 rounded-full bg-brand-yellow" aria-hidden />
        {eyebrow}
      </p>
      <h2
        className={`reveal font-display text-3xl leading-tight font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem] [&_span]:text-accent-foreground`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`reveal mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </header>
  );
}
