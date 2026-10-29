"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/config/site";
import { CherryMark } from "@/components/shared/Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-latte/70 bg-cream/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <CherryMark />
          <span className="leading-tight">
            <span className="block font-serif text-lg font-bold">{site.name}</span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-mocha">{site.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition hover:text-cherry ${isActive(item.href) ? "text-cherry" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/shop" className="btn-primary !px-5 !py-2">
            Order now
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-latte bg-cream md:hidden" aria-label="Mobile">
          <ul className="container-page flex flex-col py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 font-medium ${isActive(item.href) ? "text-cherry" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
