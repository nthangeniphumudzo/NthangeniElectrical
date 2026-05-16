import {
  businessHours,
  contactItems,
  serviceChecklist,
  siteConfig,
} from "../../data/siteContent";
import { MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "../icons/Icons";
import { PageSection } from "../layout/PageSection";
import { SectionHeader } from "../ui/SectionHeader";

function ContactIcon({ type }: { type: (typeof contactItems)[number]["type"] }) {
  if (type === "email") return <MailIcon />;
  if (type === "address") return <MapPinIcon />;
  return <PhoneIcon />;
}

export function ContactSection() {
  return (
    <PageSection id="contact">
      <SectionHeader
        eyebrow="Get In Touch"
        align="center"
        title={
          <>
            Let&rsquo;s Get <span>Started.</span>
          </>
        }
        description="Ready for a quote, COC inspection, or just some advice? We respond fast on every channel."
        className="mx-auto"
      />

      <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-5 lg:gap-10">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className={`reveal card-surface flex items-start gap-4 p-4 sm:p-5 ${
                  item.type === "address" ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-yellow text-[#111318]">
                  <ContactIcon type={item.type} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs font-bold tracking-widest text-foreground-muted uppercase">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="touch-target block break-all py-0.5 text-base font-semibold text-foreground transition-colors hover:text-accent-foreground sm:text-base"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="block text-base leading-relaxed font-semibold whitespace-pre-line text-foreground">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal touch-target mt-4 flex w-full min-h-12 items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-bold tracking-wide text-white transition-all active:scale-[0.98] sm:hover:-translate-y-0.5 sm:hover:shadow-lg sm:hover:shadow-[#25D366]/30"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
        </div>

        <aside className="panel-invert reveal p-5 sm:p-8 lg:col-span-2">
          <h3 className="font-display text-lg font-bold text-brand-yellow">
            Business Hours
          </h3>
          <ul className="mt-4" role="list">
            {businessHours.map((row) => (
              <li
                key={row.day}
                className="flex flex-col gap-1 border-b py-3.5 text-sm last:border-0 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between min-[400px]:gap-4"
                style={{ borderColor: "var(--theme-on-invert-border)" }}
              >
                <span className="text-on-invert-muted">{row.day}</span>
                <span
                  className={`font-semibold min-[400px]:shrink-0 min-[400px]:text-right ${
                    row.highlight ? "text-brand-yellow" : "text-on-invert"
                  }`}
                >
                  {row.time}
                </span>
              </li>
            ))}
          </ul>

          <div
            className="my-6 h-px"
            style={{ background: "var(--theme-on-invert-border)" }}
            aria-hidden
          />

          <h3 className="font-display text-lg font-bold text-brand-yellow">
            Services Checklist
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 min-[400px]:grid-cols-2" role="list">
            {serviceChecklist.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 font-bold text-brand-yellow" aria-hidden>
                  ✓
                </span>
                <span className="text-on-invert leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </PageSection>
  );
}
