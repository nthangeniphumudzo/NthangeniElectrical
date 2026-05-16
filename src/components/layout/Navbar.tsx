import { useEffect, useState } from "react";
import { images } from "../../data/images";
import { navLinks, siteConfig } from "../../data/siteContent";
import { useNavScroll } from "../../hooks/useNavScroll";
import { MenuIcon } from "../icons/Icons";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Navbar() {
  const scrolled = useNavScroll();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const navSolid = scrolled || mobileOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          navSolid
            ? "border-border bg-[var(--theme-nav)] shadow-sm backdrop-blur-xl"
            : "border-transparent bg-[var(--theme-nav)]/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <nav
          className="container-app flex h-14 items-center justify-between gap-2 sm:h-16"
          aria-label="Main navigation"
        >
          <a href="#top" className="touch-target shrink-0 rounded-lg">
            <img
              src={images.logo}
              alt={siteConfig.name}
              className="h-8 w-auto object-contain sm:h-9"
            />
          </a>

          <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-1 py-2 text-sm font-medium text-foreground-secondary transition-colors hover:text-accent-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={siteConfig.phoneHref}
              className="touch-target hidden rounded-full bg-brand-yellow px-3 py-2 text-xs font-bold text-[#111318] shadow-md md:inline-flex lg:px-4 lg:text-sm"
              aria-label={`Call ${siteConfig.phone}`}
            >
              <span className="hidden lg:inline">{siteConfig.phone}</span>
              <span className="lg:hidden">Call</span>
            </a>

            <ThemeToggle />

            <button
              type="button"
              className="touch-target rounded-full border border-border text-foreground lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <MenuIcon />
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={closeMobile}
            aria-label="Close menu"
          />
          <div
            id="mobile-nav"
            className="fixed inset-x-0 z-50 flex max-h-[min(85dvh,32rem)] flex-col overflow-y-auto border-t border-border bg-surface shadow-xl lg:hidden"
            style={{
              top: "calc(3.5rem + env(safe-area-inset-top, 0px))",
            }}
          >
            <div className="container-app flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="touch-target rounded-xl px-4 py-4 text-base font-medium text-foreground-secondary active:bg-surface-muted"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-3 border-t border-border pt-4">
                <Button href={siteConfig.phoneHref} variant="cta" onClick={closeMobile}>
                  Call {siteConfig.phone}
                </Button>
                <Button href="#contact" variant="solid" onClick={closeMobile}>
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
