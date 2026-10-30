// Business details used across the whole website.
// TODO: replace every placeholder below with the real details before launch.

export const site = {
  name: "Cherry's Coffee",
  tagline: "Keep Sipping",
  description:
    "Arabica coffee from Sipi and the slopes of Mount Elgon, Uganda. Instant coffee, ground coffee, roasted beans and coffee cascara — order easily on WhatsApp.",
  // Used for sitemap, canonical URLs and social previews. Update when the domain is bought.
  url: "https://cherryscoffee.vercel.app",

  // WhatsApp number in international format, digits only (no +, spaces or dashes).
  whatsapp: "256703558174",
  // Phone number as it should be displayed and dialled.
  phoneDisplay: "+256 703 558 174",
  phoneHref: "+256703558174",
  // Second phone (voice calls)
  phone2Display: "+256 784 309 829",
  phone2Href: "+256784309829",
  email: "ciscocherry@gmail.com",

  location: {
    town: "Sipi Town",
    district: "Kapchorwa District",
    region: "Mount Elgon, Eastern Uganda",
  },

  // Web3Forms access key — safe to expose publicly (it only accepts submissions, not reads).
  web3formsKey: "c87ce459-5e7e-4281-a741-ef4a16f1b32a",

  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
  },

  delivery:
    "We deliver within Kampala and across Uganda by courier or bus parcel. Delivery cost and timing are confirmed on WhatsApp when you order.",
  responseTime: "We usually reply within a few hours, Monday to Saturday.",

  // Partner site for tourists visiting Sipi Falls.
  sipiFallsUrl: "https://sipifalls.resnetsystems.com/",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/our-story", label: "Our Story" },
  { href: "/journal", label: "Coffee Journal" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/contact", label: "Contact" },
] as const;
