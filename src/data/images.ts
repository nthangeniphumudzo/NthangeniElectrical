export const images = {
  logo: "/images/logo.jpg",
  hero: ["/images/hero-1.jpg", "/images/hero-2.jpg", "/images/hero-3.jpg"] as const,
  gallery: Array.from({ length: 8 }, (_, i) => `/images/gallery-${i + 1}.jpg`),
  why: "/images/why.jpg",
} as const;
