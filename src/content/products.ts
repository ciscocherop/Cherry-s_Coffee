import type { Product } from "@/types/product";

// TODO: confirm every size and price before launch. A price of 0 shows "Price on request".
export const products: Product[] = [
  {
    slug: "organic-instant-coffee-dark-roast",
    name: "Organic Instant Coffee — Dark Roast",
    category: "Instant Coffee",
    shortDescription: "A rich dark roast instant Arabica, ready in seconds.",
    description: [
      "Our Organic Instant Coffee is a delicious dark roast made from soluble Arabica coffee powder. It is enjoyed any time of day, especially first thing in the morning.",
      "The aroma and full flavour of our instant coffee will tempt you into a second cup.",
    ],
    tone: "instant",
    sizes: [
      { label: "100 g", priceUGX: 0 },
      { label: "225 g (75 servings)", priceUGX: 0 },
    ],
    inStock: true,
    tastingNotes: ["Dark chocolate", "Toasted", "Smooth finish"],
    brewGuide: {
      title: "Suggested use",
      steps: [
        "Mix 2 teaspoons with 6–8 oz (180–240 ml) of hot water.",
        "Stir well until fully dissolved.",
        "Add sweetener, milk or creamer as desired to enhance the flavour.",
      ],
    },
    ingredients: "Organic instant (soluble) coffee powder (Arabica).",
    nutrition: {
      servingSize: "2 tsp (3 g)",
      servingsPerContainer: "75",
      rows: [
        { label: "Total Fat", amount: "0 g", dailyValue: "0%" },
        { label: "Saturated Fat", amount: "0 g", dailyValue: "0%", indent: true },
        { label: "Trans Fat", amount: "0 g", indent: true },
        { label: "Cholesterol", amount: "0 mg", dailyValue: "0%" },
        { label: "Sodium", amount: "0 mg", dailyValue: "0%" },
        { label: "Total Carbohydrate", amount: "2 g", dailyValue: "1%" },
        { label: "Dietary Fiber", amount: "0 g", dailyValue: "0%", indent: true },
        { label: "Total Sugars", amount: "0 g", indent: true },
        { label: "Protein", amount: "0 g" },
        { label: "Potassium", amount: "152 mg", dailyValue: "4%" },
        { label: "Caffeine", amount: "94 mg", dailyValue: "†" },
      ],
    },
  },
  {
    slug: "arabica-coffee-powder",
    name: "Arabica Coffee Powder",
    category: "Coffee Powder",
    shortDescription: "Freshly ground Sipi Arabica for French press, moka pot or filter.",
    description: [
      "Arabica coffee grown on the slopes of Mount Elgon around Sipi, roasted and ground for an aromatic, full-bodied cup.",
      "A medium grind that suits French press, moka pot, pour-over and the traditional Ugandan way of boiling coffee.",
    ],
    tone: "medium",
    sizes: [
      { label: "150 g", priceUGX: 0 },
      { label: "200 g", priceUGX: 0 },
      { label: "250 g", priceUGX: 0 },
    ],
    inStock: true,
    tastingNotes: ["Citrus", "Brown sugar", "Bright acidity"],
    brewGuide: {
      title: "French press brew guide",
      steps: [
        "Use about 1 tablespoon (7 g) of coffee for every 120 ml of water.",
        "Pour water just off the boil (about 93 °C) over the grounds.",
        "Stir gently and let it steep for 4 minutes.",
        "Press the plunger slowly, pour and enjoy straight away.",
      ],
    },
    ingredients: "100% roasted and ground Arabica coffee.",
  },
  {
    slug: "roasted-arabica-coffee-beans",
    name: "Roasted Arabica Coffee Beans",
    category: "Coffee Beans",
    shortDescription: "Whole roasted beans — grind just before brewing for the freshest cup.",
    description: [
      "Whole Arabica beans roasted in small batches. Grinding just before you brew keeps the aroma and flavour at their best.",
      "Ideal for cafés, offices and coffee lovers with their own grinder or espresso machine.",
    ],
    tone: "dark",
    sizes: [
      { label: "250 g", priceUGX: 0 },
      { label: "500 g", priceUGX: 0 },
      { label: "1 kg", priceUGX: 0 },
    ],
    inStock: true,
    tastingNotes: ["Cocoa", "Caramel", "Red fruit"],
    brewGuide: {
      title: "Getting the best from whole beans",
      steps: [
        "Store beans in an airtight container away from light and heat.",
        "Grind only what you need, just before brewing.",
        "Use a fine grind for espresso, medium for filter and coarse for French press.",
      ],
    },
    ingredients: "100% roasted Arabica coffee beans.",
  },
  {
    slug: "coffee-cascara",
    name: "Coffee Cascara",
    category: "Cascara",
    shortDescription: "Dried coffee cherry husks that brew a fruity, tea-like drink.",
    description: [
      "Cascara means \"husk\" in Spanish. It is the dried skin and pulp of the coffee cherry, saved during processing instead of being thrown away.",
      "It brews into a light, naturally sweet infusion with notes of dried fruit — lovely hot or iced.",
    ],
    tone: "cascara",
    sizes: [
      { label: "100 g", priceUGX: 0 },
      { label: "200 g", priceUGX: 0 },
    ],
    inStock: true,
    tastingNotes: ["Dried cherry", "Hibiscus", "Honey"],
    brewGuide: {
      title: "How to brew cascara",
      steps: [
        "Use 2 tablespoons (about 10 g) of cascara per 250 ml of water.",
        "Pour hot water (about 95 °C) over the cascara.",
        "Steep for 4–6 minutes, then strain.",
        "For iced cascara, steep double strength and pour over ice.",
      ],
    },
    ingredients: "100% dried Arabica coffee cherry husks.",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(priceUGX: number) {
  return priceUGX > 0 ? `UGX ${priceUGX.toLocaleString("en-UG")}` : "Price on request";
}
