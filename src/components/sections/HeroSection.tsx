import { images } from "../../data/images";
import { siteConfig, stats, trustItems } from "../../data/siteContent";
import { ArrowRightIcon, CheckIcon } from "../icons/Icons";
import { Button } from "../ui/Button";

export function HeroSection() {
  return (
    <section
      id="top"
      className="hero-bg relative overflow-hidden pt-[calc(3.5rem+env(safe-area-inset-top,0px))] sm:pt-[calc(4rem+env(safe-area-inset-top,0px))]"
    >
      <div
        className="pointer-events-none absolute -top-32 right-0 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl sm:h-96 sm:w-96 dark:bg-brand-blue/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-brand-yellow/15 blur-3xl sm:h-72 sm:w-72"
        aria-hidden
      />

      <div className="container-app relative pb-10 pt-6 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-16">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-20">
          {/* Copy first on mobile */}
          <div className="flex flex-col">
            <span className="mb-4 inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground shadow-sm sm:mb-5 sm:px-4">
              <span className="h-2 w-2 shrink-0 rounded-full bg-brand-blue" aria-hidden />
              {siteConfig.location}
            </span>

            <h1 className="font-display text-[1.75rem] leading-[1.12] font-extrabold tracking-tight text-foreground min-[380px]:text-3xl sm:text-4xl sm:leading-[1.1] lg:text-[3.25rem]">
              Electrical &amp; Plumbing{" "}
              <span className="text-accent-foreground">Built to Last.</span>
            </h1>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground-muted sm:mt-5 sm:text-lg">
              Licensed professionals delivering solar systems, electrical
              installations, and plumbing solutions across Gauteng — on time, on
              budget, and certified.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8">
              <Button href="#contact" variant="cta" size="lg" icon={<ArrowRightIcon />}>
                Get a Free Quote
              </Button>
              <Button href="#work" variant="ghost" size="lg">
                See Our Work
              </Button>
            </div>

            <ul className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              {trustItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2 text-sm font-medium text-foreground-secondary"
                >
                  <CheckIcon />
                  {item.label}
                </li>
              ))}
            </ul>

            <dl className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-4 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-surface rounded-xl px-3 py-3 text-center sm:px-4"
                >
                  <dt className="font-display text-xl font-extrabold text-foreground sm:text-2xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-[0.6rem] leading-tight font-semibold tracking-wide text-foreground-muted uppercase sm:text-[0.65rem]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Images — simplified stack on mobile */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
              <img
                src={images.hero[0]}
                alt="Electrical installation work"
                className="aspect-[16/10] w-full object-cover sm:aspect-[4/3]"
              />
            </div>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
                <img
                  src={images.hero[1]}
                  alt="Solar panel installation"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
                <img
                  src={images.hero[2]}
                  alt="Plumbing and geyser work"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>

            <div className="flex items-center justify-center rounded-2xl bg-brand-yellow px-6 py-4 text-[#111318] shadow-lg shadow-brand-yellow/25 sm:justify-start">
              <div>
                <p className="font-display text-3xl leading-none font-extrabold sm:text-4xl">
                  {siteConfig.jobsCompleted}
                </p>
                <p className="mt-1 text-sm font-semibold tracking-wide opacity-80">
                  Jobs Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
