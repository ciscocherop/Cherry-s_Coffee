import type { Product } from "@/types/product";

interface Props {
  product: Pick<Product, "intensity" | "roast">;
  // "light" for use on dark backgrounds
  tone?: "dark" | "light";
}

export default function IntensityMeter({ product, tone = "dark" }: Props) {
  const on = tone === "dark" ? "var(--accent)" : "var(--crema)";
  const off = tone === "dark" ? "var(--border)" : "oklch(0.78 0.09 70 / 0.25)";
  const label = tone === "dark" ? "var(--muted-foreground)" : "var(--kraft)";

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1" aria-label={`Intensity ${product.intensity} of 5, ${product.roast} roast`}>
      <span
        style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: label }}
      >
        Intensity
      </span>
      <span className="flex gap-1" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className="h-1.5 w-4 rounded-full"
            style={{ backgroundColor: n <= product.intensity ? on : off }}
          />
        ))}
      </span>
      <span className="whitespace-nowrap" style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: label }} aria-hidden="true">
        {product.roast} roast
      </span>
    </div>
  );
}
