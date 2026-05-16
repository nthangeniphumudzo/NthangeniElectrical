import type { ServiceItem } from "../../types";
import { ServiceIcon } from "../icons/Icons";

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  if (featured) {
    return (
      <article className="reveal group card-surface relative col-span-1 overflow-hidden border-brand-yellow/30 p-5 sm:col-span-full sm:p-8 lg:col-span-2 lg:flex lg:items-start lg:gap-8">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 via-transparent to-brand-blue/10 opacity-60 dark:from-brand-yellow/5" aria-hidden />
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-yellow/20 text-brand-yellow sm:h-14 sm:w-14">
          <ServiceIcon name={service.icon} />
        </div>
        <div className="relative mt-4 min-w-0 flex-1 lg:mt-0">
          <span className="mb-2 inline-block rounded-full bg-brand-yellow px-3 py-0.5 text-[0.65rem] font-bold tracking-wider text-[#111318] uppercase">
            Most Popular
          </span>
          <h3 className="font-display text-lg font-bold text-foreground sm:text-xl lg:text-2xl">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted sm:text-base">
            {service.description}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="reveal group card-surface flex h-full min-w-0 flex-col p-5 transition-all duration-300 active:scale-[0.99] sm:p-6 sm:hover:-translate-y-1 sm:hover:border-accent-foreground/30">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-brand-yellow group-hover:text-[#111318]">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="font-display text-base font-bold text-foreground">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">
        {service.description}
      </p>
    </article>
  );
}
