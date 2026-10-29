import Link from "next/link";
import { nav, site } from "@/config/site";
import { products } from "@/content/products";
import { CherryMark, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/shared/Icons";
import { whatsappLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-espresso text-latte">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <CherryMark />
            <span className="font-serif text-xl font-bold text-cream">{site.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-sand">
            Arabica coffee from Sipi and the slopes of Mount Elgon, Uganda.
          </p>
          <div className="mt-5 flex gap-4 text-sm">
            <a href={site.social.facebook} className="hover:text-cream" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={site.social.instagram} className="hover:text-cream" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={site.social.tiktok} className="hover:text-cream" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-lg text-cream">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cream">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-lg text-cream">Our coffee</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="hover:text-cream">{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-lg text-cream">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={whatsappLink(`Hello ${site.name}!`)} className="flex items-center gap-2 hover:text-cream" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneHref}`} className="flex items-center gap-2 hover:text-cream">
                <PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 break-all hover:text-cream">
                <MailIcon className="h-4 w-4 shrink-0" /> {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PinIcon className="h-4 w-4" /> {site.location.town}, {site.location.district}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-sand sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Grown in Sipi · Mount Elgon · Uganda</p>
        </div>
      </div>
    </footer>
  );
}
