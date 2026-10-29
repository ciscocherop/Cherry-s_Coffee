import Image from "next/image";
import type { Product } from "@/types/product";

const tones: Record<Product["tone"], { bg: string; bag: string; label: string }> = {
  instant: { bg: "from-roast to-espresso", bag: "#1b0f0a", label: "#c08a3e" },
  medium: { bg: "from-mocha to-roast", bag: "#3a2215", label: "#f8f2e9" },
  dark: { bg: "from-espresso to-roast", bag: "#2b1a12", label: "#ecdfcc" },
  cascara: { bg: "from-cherry to-cherry-dark", bag: "#5e1718", label: "#f8f2e9" },
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
      <svg viewBox="0 0 120 150" className="relative h-3/4 drop-shadow-2xl" role="img" aria-label={`${product.name} package`}>
        <path d="M22 18h76l8 120a6 6 0 0 1-6 6H20a6 6 0 0 1-6-6Z" fill={t.bag} />
        <path d="M22 18h76l2 10H20Z" fill="#000" opacity=".25" />
        <rect x="30" y="50" width="60" height="62" rx="4" fill={t.label} />
        <circle cx="54" cy="66" r="6" fill="#9e2a2b" />
        <circle cx="65" cy="65" r="5" fill="#7c1f20" />
        <path d="M60 52c-1 4-3 7-6 9M60 52c1 4 3 7 5 8" stroke="#3f5a3a" strokeWidth="1.5" fill="none" />
        <text x="60" y="86" textAnchor="middle" fontFamily="Georgia, serif" fontSize="8" fontWeight="700" fill="#24150e">CHERRY&apos;S</text>
        <text x="60" y="95" textAnchor="middle" fontFamily="Georgia, serif" fontSize="6" fill="#24150e">COFFEE</text>
        <text x="60" y="105" textAnchor="middle" fontFamily="Arial" fontSize="4" letterSpacing=".5" fill="#7a5238">
          {product.category.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}
