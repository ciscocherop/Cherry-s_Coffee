"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { nav, site } from "@/config/site";
import { CherryMark } from "@/components/shared/Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <style>{`
        .nav-link { color: var(--muted-foreground); transition: color 0.2s; }
        .nav-link:hover { color: var(--primary); }
        .nav-link.active { color: var(--accent); }

        /* Mobile drawer */
        .mobile-drawer {
          position: fixed;
          inset: 0;
          z-index: 200;
          pointer-events: none;
        }
        .mobile-drawer.open { pointer-events: all; }

        .drawer-backdrop {
          position: absolute;
          inset: 0;
          background: oklch(0.17 0.025 40 / 0.55);
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .mobile-drawer.open .drawer-backdrop { opacity: 1; }

        .drawer-panel {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(85vw, 320px);
          background: var(--espresso);
          transform: translateX(100%);
          transition: transform 0.38s cubic-bezier(0.4,0,0.2,1);
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow-y: auto;
        }
        .mobile-drawer.open .drawer-panel {
          transform: translateX(0);
        }

        .drawer-nav-item {
          display: flex;
          align-items: center;
          padding: 1rem 1.5rem;
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 400;
          color: var(--crema);
          border-bottom: 1px solid oklch(0.78 0.09 70 / 0.1);
          transition: background 0.2s, padding-left 0.2s;
          gap: 0.75rem;
        }
        .drawer-nav-item:hover, .drawer-nav-item:focus {
          background: oklch(0.78 0.09 70 / 0.07);
          padding-left: 2rem;
        }
        .drawer-nav-item.active {
          color: var(--kraft);
          border-left: 3px solid var(--accent);
        }
        .drawer-nav-item .step-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: oklch(0.78 0.09 70 / 0.3);
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .drawer-nav-item.active .step-dot { background: var(--accent); }
      `}</style>

      <header
        className="sticky top-0 border-b border-border"
        style={{
          zIndex: 100,
          backgroundColor: "oklch(0.955 0.018 75 / 0.95)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="container-page flex h-16 items-center justify-between">
          {/* Logo — clicking always goes home */}
          <Link href="/" className="flex items-center gap-2.5">
            <CherryMark className="h-9 w-9 text-accent" />
            <span className="leading-tight">
              <span
                className="block text-lg font-bold text-espresso"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {site.name}
              </span>
              <span className="eyebrow block" style={{ color: "var(--muted-foreground)" }}>
                {site.tagline}
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
            {nav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${isActive(item.href) ? " active" : ""}`}
                style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 500 }}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/shop" className="btn-accent">Order now</Link>
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            className="rounded-sm p-2 text-primary md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75">
              {open
                ? <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
                : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer — slides in from right */}
      <div id="mobile-drawer" className={`mobile-drawer${open ? " open" : ""}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
        {/* Backdrop */}
        <div className="drawer-backdrop" onClick={() => setOpen(false)} />

        {/* Panel */}
        <div className="drawer-panel">
          {/* Drawer header */}
          <div
            className="flex items-center justify-between px-6 py-5"
            style={{ borderBottom: "1px solid oklch(0.78 0.09 70 / 0.12)" }}
          >
            <div className="flex items-center gap-2.5">
              <CherryMark className="h-8 w-8 text-crema" />
              <span
                style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 400, color: "var(--crema)" }}
              >
                Cherry&apos;s Coffee
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{ color: "var(--kraft)", padding: "0.25rem" }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav aria-label="Mobile navigation">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`drawer-nav-item${isActive(item.href) ? " active" : ""}`}
              >
                <span className="step-dot" />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA at bottom */}
          <div className="mt-auto p-6" style={{ borderTop: "1px solid oklch(0.78 0.09 70 / 0.1)" }}>
            <Link href="/shop" className="btn-primary w-full justify-center" onClick={() => setOpen(false)}>
              Order now
            </Link>
            <p
              className="mt-4 text-center"
              style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.28em", color: "var(--kraft)" }}
            >
              Keep Sipping
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
