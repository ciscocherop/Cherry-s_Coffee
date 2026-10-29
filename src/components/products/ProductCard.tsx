import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice } from "@/content/products";
import ProductVisual from "./ProductVisual";
import { ArrowIcon } from "@/components/shared/Icons";

export default function ProductCard({ product }: { product: Product }) {
  const lowest = product.sizes.filter((s) => s.priceUGX > 0).sort((a, b) => a.priceUGX - b.priceUGX)[0];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-latte bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-roast/10"
    >
      <ProductVisual product={product} className="aspect-[4/3]" />
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">{product.category}</p>
        <h3 className="mt-2 font-serif text-xl font-bold group-hover:text-cherry">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-roast">{product.shortDescription}</p>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="font-semibold">{lowest ? `From ${formatPrice(lowest.priceUGX)}` : "Price on request"}</span>
          <span className="flex items-center gap-1 font-semibold text-cherry">
            View <ArrowIcon />
          </span>
        </div>
        {!product.inStock && <p className="mt-2 text-xs font-semibold text-mocha">Currently out of stock</p>}
      </div>
    </Link>
  );
}
