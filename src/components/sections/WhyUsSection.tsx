import { images } from "../../data/images";
import { floatingServices, whyItems } from "../../data/siteContent";
import { WhyIcon } from "../icons/Icons";
import { PageSection } from "../layout/PageSection";
import { SectionHeader } from "../ui/SectionHeader";

export function WhyUsSection() {
  return (
    <PageSection id="why" muted>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        {/* Image + services list — stacked, no overlap */}
        <div className="order-1 flex flex-col gap-5 lg:order-2">
          <div className="reveal overflow-hidden rounded-3xl">
            <img
              src={images.why}
              alt="Professional geyser installation"
              className="aspect-[4/3] w-full object-cover sm:aspect-[4/5] lg:aspect-[3/4]"
            />
          </div>

          <div className="reveal card-surface w-full p-5 sm:p-6">
            <p className="mb-4 text-xs font-bold tracking-widest text-foreground-muted uppercase">
              Services Offered
            </p>
            <ul className="space-y-3">
              {floatingServices.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-sm font-semibold leading-snug text-foreground sm:text-base"
                >
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-yellow"
                    aria-hidden
                  />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copy */}
        <div className="order-2 lg:order-1">
          <SectionHeader
            eyebrow="Why Choose Us"
            title={
              <>
                Quality You Can <span>Count On.</span>
              </>
            }
            description="We've built our reputation across Gauteng one job at a time — on skill, honesty and workmanship that lasts."
          />

          <div className="mt-8 space-y-4">
            {whyItems.map((item) => (
              <article
                key={item.title}
                className="reveal group card-surface flex gap-4 p-5 transition-colors hover:border-accent-foreground/20"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-brand-yellow group-hover:text-[#111318]">
                  <WhyIcon name={item.icon} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
}
