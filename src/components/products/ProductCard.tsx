import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { ArrowIcon } from "@/components/shared/Icons";

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: Props) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden"
      style={{ backgroundColor: "var(--card)" }}
    >
      {/* Product image */}
      {product.image && (
        <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: "var(--secondary)" }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      )}

      <div className="relative flex flex-1 flex-col p-6 pt-5">
        {/* Large kraft numeral — background decoration */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-2 select-none leading-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "64px",
            fontWeight: 400,
            color: "oklch(0.68 0.08 62 / 0.15)",
            lineHeight: 1,
          }}
        >
          {num}
        </span>

        {/* Category pill */}
        <span
          className="self-start rounded-full px-3 py-0.5"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            backgroundColor: "var(--secondary)",
            color: "var(--muted-foreground)",
          }}
        >
          {product.category}
        </span>

        {/* Product name */}
        <h3
          className="mt-3 leading-snug"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "20px",
            fontWeight: 600,
            color: "var(--espresso)",
          }}
        >
          {product.name}
        </h3>

        {/* Italic tasting note */}
        {product.tastingNotes?.[0] && (
          <p
            className="mt-1.5 flex-1"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "14px",
              color: "var(--accent)",
            }}
          >
            {product.tastingNotes[0]}
          </p>
        )}

        {/* Sizes */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.sizes.map((s) => (
            <span
              key={s.label}
              className="rounded-full px-2 py-0.5"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 500,
                backgroundColor: "var(--muted)",
                color: "var(--muted-foreground)",
              }}
            >
              {s.label}
            </span>
          ))}
        </div>

        {/* Hairline footer row */}
        <div
          className="mt-4 flex items-center justify-between pt-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--muted-foreground)",
            }}
          >
            {product.inStock ? "In stock" : "Out of stock"}
          </span>
          <span
            className="flex items-center gap-1 transition-transform group-hover:translate-x-1"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--accent)",
            }}
          >
            View <ArrowIcon />
          </span>
        </div>
      </div>
    </Link>
  );
}
