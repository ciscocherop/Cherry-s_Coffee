"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    href: "/",
    label: "Home",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12L12 3l9 9" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    href: "/shop",
    label: "Shop",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    href: "/our-story",
    label: "Story",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    href: "/journal",
    label: "Journal",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "Contact",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <style>{`
        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          align-items: stretch;
          background: var(--espresso);
          border-top: 1px solid oklch(0.78 0.09 70 / 0.12);
          padding-bottom: env(safe-area-inset-bottom, 0px);
          /* only show on mobile */
        }
        @media (min-width: 768px) {
          .bottom-nav { display: none; }
        }
        .bottom-nav-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          padding: 10px 4px 8px;
          color: oklch(0.78 0.09 70 / 0.45);
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          transition: color 0.18s;
          position: relative;
        }
        .bottom-nav-item.active {
          color: var(--crema);
        }
        .bottom-nav-item.active::before {
          content: '';
          position: absolute;
          top: 0;
          left: 20%;
          right: 20%;
          height: 2px;
          background: var(--accent);
          border-radius: 0 0 2px 2px;
        }
        .bottom-nav-item:not(.active):active {
          color: var(--kraft);
        }
      `}</style>

      {/* Spacer so page content isn't hidden behind the bar */}
      <div className="h-16 md:hidden" aria-hidden="true" />

      <nav className="bottom-nav" aria-label="Mobile bottom navigation">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`bottom-nav-item${isActive(item.href) ? " active" : ""}`}
            aria-current={isActive(item.href) ? "page" : undefined}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
