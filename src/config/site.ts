// Business details used across the whole website.
// TODO: replace every placeholder below with the real details before launch.

export const site = {
  name: "Cherry's Coffee",
  tagline: "Sipi's Finest Coffee",
  description:
    "Arabica coffee from Sipi and the slopes of Mount Elgon, Uganda. Instant coffee, ground coffee, roasted beans and coffee cascara — order easily on WhatsApp.",
  // Used for sitemap, canonical URLs and social previews. Update when the domain is bought.
  url: "https://cherryscoffee.example.com",

  // WhatsApp number in international format, digits only (no +, spaces or dashes).
  whatsapp: "256700000000",
  // Phone number as it should be displayed and dialled.
  phoneDisplay: "+256 700 000 000",
  phoneHref: "+256700000000",
  email: "hello@cherryscoffee.example.com",

  location: {
    town: "Sipi Town",
    district: "Kapchorwa District",
    region: "Mount Elgon, Eastern Uganda",
  },

  // Get a free access key at https://web3forms.com (it is safe to expose publicly).
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",

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
