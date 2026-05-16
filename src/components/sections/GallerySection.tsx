import { images } from "../../data/images";
import { PageSection } from "../layout/PageSection";
import { SectionHeader } from "../ui/SectionHeader";

const galleryAlts = [
  "Electrical conduit installation",
  "Distribution board upgrade",
  "Solar inverter system",
  "Geyser replacement",
  "Plumbing installation",
  "Electric fence setup",
  "Motor gate automation",
  "New build electrical work",
];

const gridSpans = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "sm:col-span-2",
  "",
  "",
];

export function GallerySection() {
  return (
    <PageSection id="work">
      <SectionHeader
        eyebrow="Real Projects"
        align="center"
        title={
          <>
            Work We&rsquo;re <span>Proud Of.</span>
          </>
        }
        description="Every job documented — from conduit on new builds to inverter systems and geyser replacements across Gauteng."
        className="mx-auto"
      />

      <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:auto-rows-[200px] lg:grid-cols-3 lg:auto-rows-[220px] lg:gap-4">
        {images.gallery.map((src, index) => (
          <figure
            key={src}
            className={`reveal group relative min-h-[200px] overflow-hidden rounded-2xl sm:min-h-0 ${gridSpans[index] ?? ""}`}
          >
            <img
              src={src}
              alt={galleryAlts[index] ?? `Project ${index + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-brand-blue/25 to-transparent sm:opacity-0 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100" aria-hidden />
            <figcaption className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 text-sm font-semibold text-white sm:translate-y-full sm:bg-transparent sm:pt-4 sm:transition-transform sm:duration-300 sm:group-hover:translate-y-0">
              {galleryAlts[index]}
            </figcaption>
          </figure>
        ))}
      </div>
    </PageSection>
  );
}
