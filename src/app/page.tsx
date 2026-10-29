import Link from "next/link";
import { site } from "@/config/site";
import { products } from "@/content/products";
import { articles } from "@/content/articles";
import { whatsappLink } from "@/lib/whatsapp";
import ProductCard from "@/components/products/ProductCard";
import ProcessJourney from "@/components/home/ProcessJourney";
import VisitSipi from "@/components/home/VisitSipi";
import { ArrowIcon, CherryMark, WhatsAppIcon } from "@/components/shared/Icons";

const reasons = [
  { title: "Single origin", text: "Arabica from Sipi and the slopes of Mount Elgon, Eastern Uganda." },
  { title: "Highland grown", text: "Cool mountain air lets cherries ripen slowly for a sweeter, more complex cup." },
  { title: "Nothing wasted", text: "Even the cherry husks are dried and turned into our fruity cascara." },
  { title: "Easy ordering", text: "Order on WhatsApp in seconds — we confirm price and delivery with you." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-espresso text-cream">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(158,42,43,0.45),transparent_55%),radial-gradient(circle_at_10%_90%,rgba(192,138,62,0.25),transparent_50%)]" />
        <div className="container-page relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="eyebrow !text-gold">{site.tagline}</p>
            <h1 className="mt-4 font-serif text-5xl font-bold leading-[1.05] sm:text-6xl">
              Coffee from the slopes of <span className="text-gold italic">Mount Elgon</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-latte">
              Rich, aromatic Arabica grown around Sipi, Uganda — from instant dark roast to whole beans and fruity
              cascara. Order straight to your door on WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-primary">
                Shop our coffee <ArrowIcon />
              </Link>
              <a
                href={whatsappLink(`Hello ${site.name}! I would like to place an order.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon /> Order on WhatsApp
              </a>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cherry/40 to-gold/20 blur-2xl" />
            <div className="relative flex h-full items-center justify-center rounded-full border border-white/10 bg-white/5">
              <svg viewBox="0 0 200 200" className="w-3/4" aria-hidden="true">
                <path d="M60 150h80a10 10 0 0 0 10-10V95H50v45a10 10 0 0 0 10 10Z" fill="#f8f2e9" />
                <path d="M150 105h10a14 14 0 0 1 0 28h-10" stroke="#f8f2e9" strokeWidth="8" fill="none" />
                <ellipse cx="100" cy="95" rx="50" ry="8" fill="#4a2c1d" />
                <ellipse cx="100" cy="160" rx="70" ry="8" fill="#ecdfcc" opacity=".3" />
                <path d="M85 80c-8-10 8-15 0-28M100 78c-8-10 8-15 0-28M115 80c-8-10 8-15 0-28" stroke="#ecdfcc" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".6" />
              </svg>
              <CherryMark className="absolute bottom-16 right-16 h-16 w-16" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Our coffee</p>
              <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Something for every coffee lover</h2>
            </div>
            <Link href="/shop" className="flex items-center gap-1 font-semibold text-cherry hover:underline">
              View all products <ArrowIcon />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Story teaser */}
      <section className="bg-latte/50 py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Born in Sipi, beneath the falls</h2>
            <p className="mt-5 leading-relaxed text-roast">
              Sipi, in Kapchorwa District, sits high on the northern slopes of Mount Elgon. Cool air, rich volcanic
              soils and generations of farming know-how make it one of Uganda&apos;s special places for Arabica coffee.
            </p>
            <p className="mt-4 leading-relaxed text-roast">
              Cherry&apos;s Coffee was started to share that coffee with homes, offices and cafés across Uganda and beyond.
            </p>
            <Link href="/our-story" className="btn-outline mt-8">
              Read our story <ArrowIcon />
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-cherry">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-roast">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessJourney />
      <VisitSipi />

      {/* Journal teaser */}
      <section className="pb-20">
        <div className="container-page">
          <p className="eyebrow">Coffee journal</p>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Brew better, learn more</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {articles.map((a) => (
              <Link key={a.slug} href={`/journal/${a.slug}`} className="group rounded-2xl border border-latte bg-white p-6 transition hover:shadow-lg">
                <p className="text-xs text-mocha">{a.readMinutes} min read</p>
                <h3 className="mt-2 font-serif text-xl font-bold group-hover:text-cherry">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-roast">{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale CTA */}
      <section className="bg-cherry py-16 text-cream">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold">Serving coffee to your customers?</h2>
            <p className="mt-2 text-latte">Wholesale supply for cafés, hotels, shops, offices and distributors.</p>
          </div>
          <Link href="/wholesale" className="btn bg-cream text-espresso hover:bg-latte">
            Wholesale enquiries <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
