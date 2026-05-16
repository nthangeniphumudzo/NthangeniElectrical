import { images } from "../../data/images";
import { navLinks, siteConfig } from "../../data/siteContent";
import { getCurrentYear } from "../../utils/date";

export function Footer() {
  const year = getCurrentYear();

  return (
    <footer className="border-t border-border bg-surface-invert text-surface">
      <div className="container-app py-12 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] lg:py-14 lg:pb-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="inline-flex rounded-xl bg-white px-3 py-2">
              <img
                src={images.logo}
                alt={siteConfig.name}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-surface/60">
              Licensed electrical, solar, and plumbing professionals serving
              Meadowlands and greater Gauteng.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="mt-4 inline-block text-lg font-bold text-brand-yellow hover:underline"
            >
              {siteConfig.phone}
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold tracking-wide text-brand-yellow uppercase">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-surface/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold tracking-wide text-brand-yellow uppercase">
              Visit us
            </h3>
            <address className="mt-4 space-y-2 text-sm not-italic text-surface/70">
              <p>{siteConfig.address}</p>
              <p>{siteConfig.addressLine2}</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block break-all text-surface/90 hover:text-white"
              >
                {siteConfig.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center text-xs text-surface/45 sm:flex-row sm:text-left">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Licensed &amp; Insured &middot; COC Certified</p>
        </div>
      </div>
    </footer>
  );
}
