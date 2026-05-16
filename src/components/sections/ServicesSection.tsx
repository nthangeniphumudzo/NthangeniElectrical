import { services } from "../../data/siteContent";
import { PageSection } from "../layout/PageSection";
import { SectionHeader } from "../ui/SectionHeader";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  const featured = services.find((s) => s.featured) ?? services[0];
  const rest = services.filter((s) => s !== featured);

  return (
    <PageSection id="services" muted>
      <SectionHeader
        eyebrow="What We Do"
        align="center"
        title={
          <>
            Everything Your Property <span>Needs.</span>
          </>
        }
        description="From foundations to solar panels — full electrical, solar, and plumbing services for homes, businesses and new builds."
        className="mx-auto"
      />

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        <ServiceCard service={featured} featured />
        {rest.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </PageSection>
  );
}
