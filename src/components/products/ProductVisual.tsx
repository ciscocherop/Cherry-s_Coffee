import Image from "next/image";
import type { Product } from "@/types/product";
import PackageBag from "@/components/products/PackageBag";

const tones: Record<Product["tone"], { bg: string }> = {
  instant: { bg: "from-roast to-espresso" },
  medium: { bg: "from-mocha to-roast" },
  dark: { bg: "from-espresso to-roast" },
  cascara: { bg: "from-cherry to-cherry-dark" },
};

// Shows the real product photo when one is set, otherwise an illustrated coffee bag.
export default function ProductVisual({ product, className = "" }: { product: Product; className?: string }) {
  if (product.image) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
    );
  }

  const t = tones[product.tone];
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${t.bg} ${className}`}>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
      <div className="absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-white/5" />
      <PackageBag tone={product.tone} className="relative h-3/4 drop-shadow-2xl" title={`${product.name} package`} />
    </div>
  );
}
