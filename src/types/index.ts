export interface NavLink {
  label: string;
  href: string;
}

export interface TrustItem {
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: ServiceIconName;
  featured?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface WhyItem {
  title: string;
  description: string;
  icon: WhyIconName;
}

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
  type: "phone" | "email" | "address";
}

export interface BusinessHour {
  day: string;
  time: string;
  highlight?: boolean;
}

export type ServiceIconName =
  | "solar"
  | "coc"
  | "electrical"
  | "db"
  | "plumbing"
  | "fence"
  | "gate"
  | "generator";

export type WhyIconName = "shield" | "sun" | "building" | "layers";

export type ButtonVariant = "solid" | "ghost" | "cta";
