import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { products } from "@/content/products";
import { articles } from "@/content/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/shop", "/our-story", "/journal", "/wholesale", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...products.map((p) => ({ url: `${site.url}/products/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...articles.map((a) => ({ url: `${site.url}/journal/${a.slug}`, lastModified: a.date, priority: 0.6 })),
  ];
}
