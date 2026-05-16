import { siteConfig } from "../../data/siteContent";
import { PhoneIcon, WhatsAppIcon } from "../icons/Icons";

/** Sticky call-to-action bar for small screens — primary mobile conversion path */
export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur-lg lg:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      role="navigation"
      aria-label="Quick contact"
    >
      <div className="container-app flex gap-3 py-3">
        <a
          href={siteConfig.phoneHref}
          className="touch-target flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-yellow text-sm font-bold text-[#111318] shadow-md active:scale-[0.98]"
        >
          <PhoneIcon />
          Call Now
        </a>
        <a
          href={siteConfig.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="touch-target flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-bold text-white shadow-md active:scale-[0.98]"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
