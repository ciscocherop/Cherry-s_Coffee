"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import { formatPrice } from "@/content/products";
import { productOrderMessage, whatsappLink } from "@/lib/whatsapp";
import { site } from "@/config/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/shared/Icons";

export default function OrderPanel({ product }: { product: Product }) {
  const [sizeIndex, setSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const size = product.sizes[sizeIndex];

  const total = size.priceUGX > 0 ? formatPrice(size.priceUGX * quantity) : null;

  return (
    <div className="rounded-2xl border border-latte bg-white p-6">
      <fieldset>
        <legend className="text-sm font-semibold">Choose a size</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.sizes.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setSizeIndex(i)}
              aria-pressed={i === sizeIndex}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                i === sizeIndex ? "border-cherry bg-cherry text-cream" : "border-sand hover:border-cherry"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold">Quantity</p>
          <div className="mt-2 inline-flex items-center rounded-full border border-sand">
            <button type="button" className="px-4 py-2 text-lg" aria-label="Decrease quantity" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
              −
            </button>
            <span className="w-8 text-center font-semibold" aria-live="polite">{quantity}</span>
            <button type="button" className="px-4 py-2 text-lg" aria-label="Increase quantity" onClick={() => setQuantity((q) => Math.min(99, q + 1))}>
              +
            </button>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-wider text-mocha">{total ? "Estimated total" : "Price"}</p>
          <p className="font-serif text-2xl font-bold">{total ?? formatPrice(0)}</p>
        </div>
      </div>

      {product.inStock ? (
        <a
          href={whatsappLink(productOrderMessage(product.name, size.label, quantity))}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-6 w-full"
        >
          <WhatsAppIcon /> Order on WhatsApp
        </a>
      ) : (
        <p className="mt-6 rounded-lg bg-latte/60 p-3 text-center text-sm">This product is currently out of stock. Message us to be notified.</p>
      )}
      <a href={`tel:${site.phoneHref}`} className="btn-outline mt-3 w-full">
        <PhoneIcon /> Call to order
      </a>
      <p className="mt-4 text-xs leading-relaxed text-mocha">
        We confirm availability, final price, delivery and payment (Mobile Money or cash) on WhatsApp before you pay.
      </p>
    </div>
  );
}
