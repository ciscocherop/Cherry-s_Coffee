export type ProductSize = {
  label: string;
  // 0 means "price on request" until the real price is confirmed.
  priceUGX: number;
};

export type NutritionRow = {
  label: string;
  amount: string;
  dailyValue?: string;
  indent?: boolean;
};

export type Product = {
  slug: string;
  name: string;
  category: "Instant Coffee" | "Coffee Powder" | "Coffee Beans" | "Cascara";
  shortDescription: string;
  description: string[];
  // Placeholder visual used until real product photos are added to /public/images/products.
  image?: string;
  tone: "dark" | "medium" | "cascara" | "instant";
  sizes: ProductSize[];
  inStock: boolean;
  tastingNotes: string[];
  // Strength of the cup on a 1–5 scale, shown as dots on cards and product pages.
  intensity: 1 | 2 | 3 | 4 | 5;
  roast: "Light" | "Medium" | "Medium-dark" | "Dark";
  brewGuide: { title: string; steps: string[] };
  ingredients: string;
  nutrition?: { servingSize: string; servingsPerContainer: string; rows: NutritionRow[] };
};
