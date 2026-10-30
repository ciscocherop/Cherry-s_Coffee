"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import { productOrderMessage, whatsappLink } from "@/lib/whatsapp";
import { site } from "@/config/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/shared/Icons";

export default function OrderPanel({ product }: { product: Product }) {
  const [sizeIndex, setSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const size = product.sizes[sizeIndex];

  return (
    <>
      <style>{`
        .size-btn {
          border-radius: 9999px;
          padding: 0.5rem 1.25rem;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          border: 1px solid var(--border);
          background: var(--card);
          color: var(--primary);
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .size-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .size-btn[aria-pressed="true"] {
          background: var(--accent);
          border-color: var(--accent);
          color: var(--crema);
          box-shadow: 0 2px 8px oklch(0.52 0.17 30 / 0.25);
        }
        .qty-btn {
          padding: 0.5rem 1rem;
          font-size: 1.1rem;
          color: var(--primary);
          transition: color 0.2s;
          background: none;
          border: none;
          cursor: pointer;
        }
        .qty-btn:hover { color: var(--accent); }
      `}</style>

      <div
        className="p-6"
        style={{ borderRadius: "var(--radius)", border: "1px solid var(--border)", backgroundColor: "var(--card)" }}
      >
        {/* Size selector */}
        <fieldset>
          <legend
            style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--muted-foreground)" }}
          >
            Choose a size
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.sizes.map((s, i) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setSizeIndex(i)}
                aria-pressed={i === sizeIndex}
                className="size-btn"
              >
                {s.label}
              </button>
            ))}
          </div>
        </fieldset>

        {/* Quantity */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <div>
            <p
              style={{ fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--muted-foreground)" }}
            >
              Quantity
            </p>
            <div
              className="mt-2 inline-flex items-center"
              style={{ borderRadius: "9999px", border: "1px solid var(--border)", backgroundColor: "var(--background)" }}
            >
              <button
                type="button"
                className="qty-btn"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span
                className="w-8 text-center"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem" }}
                aria-live="polite"
              >
                {quantity}
              </span>
              <button
                type="button"
                className="qty-btn"
                aria-label="Increase quantity"
                onClick={() => setQuantity((q) => Math.min(99, q + 1))}
              >
                +
              </button>
            </div>
          </div>
          <div className="text-right">
            <p
              style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--muted-foreground)" }}
            >
              {size.label} × {quantity}
            </p>
            <p
              style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 400, color: "var(--espresso)" }}
            >
              Price on request
            </p>
          </div>
        </div>

        {/* Order on WhatsApp */}
        {product.inStock ? (
          <a
            href={whatsappLink(productOrderMessage(product.name, size.label, quantity))}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full py-3"
            style={{ backgroundColor: "#1f9d55", color: "#fff", fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 500, transition: "background 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#178246")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#1f9d55")}
          >
            <WhatsAppIcon /> Order on WhatsApp
          </a>
        ) : (
          <p className="mt-6 p-3 text-center text-sm" style={{ backgroundColor: "var(--muted)", borderRadius: "var(--radius)" }}>
            Currently out of stock. Message us to be notified.
          </p>
        )}

        {/* Call buttons */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <a
            href={`tel:${site.phoneHref}`}
            className="flex items-center justify-center gap-1.5 rounded-full py-2.5"
            style={{ border: "1px solid var(--border)", fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, color: "var(--primary)", transition: "border-color 0.2s, color 0.2s" }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--accent)"; el.style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.color = "var(--primary)"; }}
          >
            <PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}
          </a>
          <a
            href={`tel:${site.phone2Href}`}
            className="flex items-center justify-center gap-1.5 rounded-full py-2.5"
            style={{ border: "1px solid var(--border)", fontFamily: "var(--font-body)", fontSize: "13px", fontWeight: 500, color: "var(--primary)", transition: "border-color 0.2s, color 0.2s" }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--accent)"; el.style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.color = "var(--primary)"; }}
          >
            <PhoneIcon className="h-4 w-4" /> {site.phone2Display}
          </a>
        </div>

        <p className="mt-4 text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          We confirm availability, price, delivery and payment (Mobile Money or cash) on WhatsApp before you pay.
        </p>
      </div>
    </>
  );
}
