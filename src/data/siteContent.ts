import type {
  BusinessHour,
  ContactItem,
  NavLink,
  ServiceItem,
  StatItem,
  TrustItem,
  WhyItem,
} from "../types";

export const siteConfig = {
  name: "Nthangeni Electrical & Plumbing",
  phone: "060 372 7577",
  phoneHref: "tel:0603727577",
  phoneSecondary: "079 588 5713",
  phoneSecondaryHref: "tel:0795885713",
  email: "nthangenielectricalandplumbing@gmail.com",
  address: "466 Sekhwiri Street, Meadowlands Zone 8",
  addressLine2: "Johannesburg",
  location: "Meadowlands, Johannesburg",
  whatsappHref:
    "https://wa.me/27603727577?text=Hi%2C+I%27d+like+a+quote+from+Nthangeni+Electrical+and+Plumbing",
  jobsCompleted: "300+",
} as const;

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export const marqueeItems = [
  "Solar Systems",
  "Electrical Installations",
  "COC Certificates",
  "DB Boards",
  "Geyser Replacements",
  "Plumbing Solutions",
  "Electric Fencing",
  "Motor Gates",
  "Generators",
  "New Builds",
] as const;

export const trustItems: TrustItem[] = [
  { label: "COC Certified" },
  { label: "Solar Specialists" },
  { label: "24/7 Emergency" },
];

export const services: ServiceItem[] = [
  {
    title: "Solar Power Systems",
    description:
      "Full solar design and installation — Sunsynk, Deye, Freedom Won & Hubble. Grid-tied, hybrid, and off-grid solutions sized for your exact needs.",
    icon: "solar",
  },
  {
    title: "Certificates of Compliance",
    description:
      "COC inspections and legally binding documentation for sales, insurance and rental compliance.",
    icon: "coc",
  },
  {
    title: "Electrical Installations",
    description:
      "DB boards, wiring, conduit work in new builds and renovations. Residential and commercial fitouts.",
    icon: "electrical",
    featured: true,
  },
  {
    title: "DB Board Upgrades",
    description:
      "Professional distribution board installation with earth leakage, surge protection and full labelling.",
    icon: "db",
  },
  {
    title: "Plumbing Solutions",
    description:
      "Geyser replacements, burst pipes, new plumbing, drain clearing and bathroom installations.",
    icon: "plumbing",
  },
  {
    title: "Electric Fencing",
    description:
      "Security perimeter systems installed, energised and tested. SANS compliant.",
    icon: "fence",
  },
  {
    title: "Motor Gates & Garage",
    description:
      "Automated gate motors, garage automation, intercoms, and remote access systems.",
    icon: "gate",
  },
  {
    title: "Generator Services",
    description:
      "Generator installation, ATS changeover panels, load shedding solutions and maintenance.",
    icon: "generator",
  },
];

export const stats: StatItem[] = [
  { value: "300+", label: "Projects Completed" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "COC Certified Work" },
  { value: "24/7", label: "Emergency Response" },
];

export const whyItems: WhyItem[] = [
  {
    title: "Licensed & COC Authorised",
    description:
      "All work performed by licensed electricians. Every installation meets SANS 10142 requirements.",
    icon: "shield",
  },
  {
    title: "Solar Specialists",
    description:
      "We install Sunsynk, Deye, Freedom Won, and Hubble — designed for your energy needs and future-proofed.",
    icon: "sun",
  },
  {
    title: "New Build Experience",
    description:
      "From conduit on wet slabs to full fitouts — we work with builders and developers throughout the build process.",
    icon: "building",
  },
  {
    title: "Transparent Pricing",
    description:
      "Detailed quotes upfront with no hidden costs. We explain every line item — no surprises on completion.",
    icon: "layers",
  },
];

export const floatingServices = [
  "Solar & Battery Systems",
  "Electrical & COC",
  "Plumbing & Geysers",
  "Security & Gates",
] as const;

export const contactItems: ContactItem[] = [
  {
    label: "Primary Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    type: "phone",
  },
  {
    label: "Secondary Phone",
    value: siteConfig.phoneSecondary,
    href: siteConfig.phoneSecondaryHref,
    type: "phone",
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    type: "email",
  },
  {
    label: "Address",
    value: `${siteConfig.address}\n${siteConfig.addressLine2}`,
    type: "address",
  },
];

export const businessHours: BusinessHour[] = [
  { day: "Monday — Friday", time: "07:00 — 18:00" },
  { day: "Saturday", time: "08:00 — 15:00" },
  { day: "Sunday", time: "By Appointment" },
  { day: "Emergencies", time: "24 / 7 Available", highlight: true },
];

export const serviceChecklist = [
  "Solar Systems",
  "COC Certificates",
  "Electrical Install",
  "DB Boards",
  "Plumbing",
  "Geyser Install",
  "Electric Fence",
  "Motor Gates",
  "Generators",
  "New Builds",
] as const;
