import { marqueeItems } from "../../data/siteContent";

export function MarqueeStrip() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-border bg-surface-invert py-3.5">
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex shrink-0 items-center gap-3 text-xs font-semibold tracking-[0.15em] text-surface/70 uppercase after:text-brand-yellow after:content-['•']"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
