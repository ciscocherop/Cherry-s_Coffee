import Link from "next/link";
import { nav, site } from "@/config/site";
import { products } from "@/content/products";
import { CherryMark, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/shared/Icons";
import { whatsappLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    // Sticky on desktop: the page content scrolls up off it like a lifted card.
    <footer className="site-footer bg-espresso text-kraft">
      {/* inline style block for hover effects (server-safe) */}
      <style>{`
        .footer-link:hover { color: var(--crema); }
      `}</style>

      {/* Big sign-off */}
      <div className="container-page pt-16 md:pt-24">
        <p
          className="leading-none"
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(3rem, 11vw, 9rem)",
            fontWeight: 400,
            color: "var(--crema)",
            letterSpacing: "-0.02em",
          }}
        >
          {site.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/shop" className="btn-primary">Shop our coffee</Link>
          <a
            href={whatsappLink(`Hello ${site.name}! I would like to place an order.`)}
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-4 w-4" /> Order on WhatsApp
          </a>
        </div>
      </div>

      <div
        className="container-page mt-14 grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4"
        style={{ borderTop: "1px solid oklch(0.78 0.09 70 / 0.12)" }}
      >
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <CherryMark className="h-9 w-9 text-crema" />
            <span
              className="text-xl font-bold text-crema"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {site.name}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-kraft">
            Arabica coffee from Sipi and the slopes of Mount Elgon, Uganda.
          </p>
          <div className="mt-5 flex gap-4 text-sm">
            <a href={site.social.facebook} className="footer-link text-kraft transition" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={site.social.instagram} className="footer-link text-kraft transition" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={site.social.tiktok} className="footer-link text-kraft transition" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h2 className="text-lg text-crema" style={{ fontFamily: "var(--font-display)" }}>
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-link text-kraft transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-lg text-crema" style={{ fontFamily: "var(--font-display)" }}>
            Our coffee
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="footer-link text-kraft transition">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg text-crema" style={{ fontFamily: "var(--font-display)" }}>
            Get in touch
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-kraft">
            <li>
              <a
                href={whatsappLink(`Hello ${site.name}!`)}
                className="footer-link flex items-center gap-2 text-kraft transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneHref}`} className="footer-link flex items-center gap-2 text-kraft transition">
                <PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="footer-link flex items-center gap-2 break-all text-kraft transition">
                <MailIcon className="h-4 w-4 shrink-0" /> {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PinIcon className="h-4 w-4" /> {site.location.town}, {site.location.district}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid oklch(0.78 0.09 70 / 0.1)" }}>
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-kraft sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Grown in Sipi · Mount Elgon · Uganda</p>
        </div>
      </div>
    </footer>
  );
}
