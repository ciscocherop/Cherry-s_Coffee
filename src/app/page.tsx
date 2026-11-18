import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { products } from "@/content/products";
import { articles } from "@/content/articles";
import { whatsappLink } from "@/lib/whatsapp";
import ProductCard from "@/components/products/ProductCard";
import ProcessJourney from "@/components/home/ProcessJourney";
import VisitSipi from "@/components/home/VisitSipi";
import NumberedStories from "@/components/home/NumberedStories";
import CoffeeProfileQuiz from "@/components/home/CoffeeProfileQuiz";
import LoopVideo from "@/components/shared/LoopVideo";
import GrownWithCare from "@/components/home/GrownWithCare";
import PackageBag from "@/components/products/PackageBag";
import Reveal from "@/components/shared/Reveal";
import { ArrowIcon, WhatsAppIcon } from "@/components/shared/Icons";

const reasons = [
  { title: "One origin, one story", text: "Every bean comes from Sipi and the slopes of Mount Elgon. You always know where your cup began." },
  { title: "Ripened slowly", text: "Cool mountain air gives cherries time to ripen, and time is what builds sweetness and depth." },
  { title: "Nothing wasted", text: "Even the cherry husks are sun-dried and turned into our fruity cascara." },
  { title: "Made for sharing", text: "Coffee is a reason to pause and gather. Order on WhatsApp and we'll bring the cup to you." },
];

const heroStats = [
  { value: "100%", label: "Arabica" },
  { value: "4", label: "Varieties" },
  { value: "1", label: "Origin" },
];

const sizes = ["50 g", "150 g", "320 g", "1 kg"];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="under-nav relative overflow-hidden" style={{ minHeight: "100svh", display: "flex", alignItems: "center" }}>
        {/* Background photo with a slow settle-in zoom; video plays over it when available */}
        <div className="hero-media absolute inset-0">
          <Image
            src="/images/banner.png"
            alt="Coffee from the slopes of Mount Elgon"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Roasting beans; the banner photo shows until it's ready */}
          <LoopVideo src="/videos/coffee-roasting.mp4" />
        </div>

        {/* Dark gradient scrim from left */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1]"
          style={{
            background: "linear-gradient(to right, oklch(0.12 0.02 40 / 0.92) 0%, oklch(0.12 0.02 40 / 0.75) 45%, oklch(0.12 0.02 40 / 0.15) 100%)",
          }}
        />

        {/* Grain overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
            opacity: 0.08,
            mixBlendMode: "overlay",
          }}
        />

        <div className="container-page relative z-[3] flex items-stretch gap-0 py-24 md:py-32 w-full">
          {/* Left: headline */}
          <div className="flex-1 pr-8 md:pr-16">
            <p className="eyebrow-crema">{site.tagline}</p>
            <h1
              className="mt-5 leading-[1.02]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.25rem, 7vw, 6rem)",
                fontWeight: 400,
                color: "var(--crema)",
              }}
            >
              Coffee from the slopes of{" "}
              <em style={{ fontStyle: "italic", color: "var(--kraft)" }}>
                Mount Elgon
              </em>
              .
            </h1>
            <p
              className="mt-6 max-w-md leading-relaxed"
              style={{ fontSize: "18px", color: "oklch(0.78 0.09 70 / 0.8)" }}
            >
              Coffee that wakes up the morning and carries a story from the hills of
              Sipi, Uganda. Hand-picked, slowly ripened, roasted with heart.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-primary">
                Shop our coffee <ArrowIcon />
              </Link>
              <a
                href={whatsappLink(`Hello ${site.name}! I would like to place an order.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <WhatsAppIcon /> Order on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: vertical rule + stats */}
          <div
            className="hidden flex-col justify-center gap-10 py-4 pl-10 md:flex"
            style={{ borderLeft: "1px solid oklch(0.78 0.09 70 / 0.25)" }}
          >
            {heroStats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "48px",
                    fontWeight: 400,
                    lineHeight: 1,
                    color: "var(--kraft)",
                  }}
                >
                  {s.value}
                </div>
                <div className="mt-1 eyebrow-crema">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NumberedStories />

      {/* ── Packaging showcase ───────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24" style={{ backgroundColor: "var(--espresso)" }}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[60%] h-[70vw] max-h-[720px] w-[70vw] max-w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, oklch(0.52 0.17 30 / 0.35), transparent 65%)" }}
        />
        <div className="container-page relative">
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="eyebrow-crema">The Cherry&apos;s range</p>
            <h2
              className="mt-3 leading-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 400, color: "var(--crema)" }}
            >
              Sipi&apos;s finest, <em style={{ fontStyle: "italic", color: "var(--kraft)" }}>packed fresh</em>.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <Link href={`/products/${p.slug}`} className="group block text-center">
                  <div
                    className="float-bag mx-auto w-[85%]"
                    style={{ animationDelay: `${i * -1.5}s`, ["--tilt" as string]: `${[-4, 3, -2, 4][i]}deg` }}
                  >
                    <div className="transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105">
                      <PackageBag tone={p.tone} className="w-full drop-shadow-[0_30px_30px_rgba(0,0,0,0.55)]" />
                    </div>
                  </div>
                  <p className="mt-6" style={{ fontFamily: "var(--font-display)", fontSize: "18px", color: "var(--crema)" }}>
                    {p.category}
                  </p>
                  <p className="mt-1 inline-flex items-center gap-1 transition-colors group-hover:text-[var(--crema)]" style={{ fontSize: "13px", color: "var(--kraft)" }}>
                    View <ArrowIcon className="h-3.5 w-3.5" />
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products grid ────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Our coffee</p>
              <h2
                className="mt-3 leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 400,
                  color: "var(--espresso)",
                }}
              >
                Something for every{" "}
                <em style={{ fontStyle: "italic" }}>coffee lover</em>.
              </h2>
            </div>
            <Link
              href="/shop"
              className="flex items-center gap-1 transition"
              style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 500, color: "var(--accent)" }}
            >
              View all products <ArrowIcon />
            </Link>
          </div>

          {/* Hairline-separated grid */}
          <div
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4"
            style={{ gap: "1px", backgroundColor: "var(--border)" }}
          >
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>

          {/* Package sizes strip */}
          <div
            className="mt-px flex items-center gap-0"
            style={{ borderTop: "none" }}
          >
            <p
              className="mr-6 shrink-0"
              style={{ fontFamily: "var(--font-body)", fontSize: "11.5px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.28em", color: "var(--muted-foreground)" }}
            >
              All sizes:
            </p>
            <div className="flex flex-wrap gap-2 py-4">
              {sizes.map((s) => (
                <span
                  key={s}
                  className="rounded-full px-3 py-1"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    fontWeight: 600,
                    backgroundColor: "var(--secondary)",
                    color: "var(--primary)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Story teaser ─────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--secondary)" }}>
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Our story</p>
            <h2
              className="mt-3 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--espresso)",
              }}
            >
              Born in Sipi,{" "}
              <em style={{ fontStyle: "italic" }}>beneath the falls</em>.
            </h2>
            <p className="mt-5 leading-relaxed" style={{ fontSize: "15px", color: "var(--primary)" }}>
              High on the northern slopes of Mount Elgon, beneath the waterfalls of Sipi,
              families have tended coffee for generations. Cool air, volcanic soil and
              patient hands make it one of Uganda&apos;s special places for Arabica.
            </p>
            <p className="mt-4 leading-relaxed" style={{ fontSize: "15px", color: "var(--primary)" }}>
              Cherry&apos;s Coffee was started to carry that coffee — and the people behind
              it — to homes, offices and cafés across Uganda and beyond. Take a moment,
              pour a cup, and keep sipping!!!
            </p>
            <Link href="/our-story" className="mt-8 btn-accent inline-flex">
              Read our story <ArrowIcon />
            </Link>
          </div>

          {/* Reason cards */}
          <ul className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <li key={r.title}>
              <Reveal
                delay={i * 100}
                className="h-full p-6"
                style={{
                  backgroundColor: "var(--card)",
                  borderRadius: "1.25rem",
                  border: "1px solid var(--border)",
                }}
              >
                <h3
                  style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 600, color: "var(--accent)" }}
                >
                  {r.title}
                </h3>
                <p className="mt-2 leading-relaxed" style={{ fontSize: "14px", color: "var(--primary)" }}>
                  {r.text}
                </p>
              </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Process journey ──────────────────────────────────────────── */}
      <ProcessJourney />

      <GrownWithCare video="/videos/coffee-picking.mp4" image="/videos/coffee-picking-poster.jpg" />

      <CoffeeProfileQuiz />

      {/* ── Visit Sipi ───────────────────────────────────────────────── */}
      <VisitSipi />

      {/* ── Journal teaser ───────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
        <div className="container-page">
          <p className="eyebrow">Coffee journal</p>
          <h2
            className="mt-3 leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 400,
              color: "var(--espresso)",
            }}
          >
            Brew better,{" "}
            <em style={{ fontStyle: "italic" }}>learn more</em>.
          </h2>

          {/* Full-width hairline rows */}
          <div className="mt-8">
            {articles.map((a, i) => (
              <Link
                key={a.slug}
                href={`/journal/${a.slug}`}
                className="group flex items-center gap-6 py-5 transition-all"
                style={{
                  borderTop: "1px solid var(--border)",
                  borderBottom: i === articles.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                {/* Numeral */}
                <span
                  aria-hidden="true"
                  className="hidden w-14 shrink-0 sm:block"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "36px",
                    fontWeight: 400,
                    lineHeight: 1,
                    color: "oklch(0.68 0.08 62 / 0.35)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title + read time */}
                <div className="flex-1 transition-transform group-hover:translate-x-1">
                  <h3
                    className="leading-snug"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                      fontWeight: 400,
                      color: "var(--espresso)",
                    }}
                  >
                    {a.title}
                  </h3>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.25em",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {a.readMinutes} min read
                  </p>
                </div>

                {/* Arrow */}
                <span
                  className="shrink-0 transition-transform group-hover:translate-x-1"
                  style={{ color: "var(--accent)" }}
                  aria-hidden="true"
                >
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wholesale CTA ────────────────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "var(--accent)", color: "var(--crema)" }}>
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 400,
                color: "var(--crema)",
              }}
            >
              Serving coffee to your customers?
            </h2>
            <p className="mt-2" style={{ fontSize: "15px", color: "oklch(0.78 0.09 70 / 0.8)" }}>
              Wholesale supply for cafés, hotels, shops, offices and distributors.
            </p>
          </div>
          {/* mailto link — no tel: prefix, opens email client directly */}
          <a
            href="mailto:ciscocherry@gmail.com?subject=Wholesale%20Enquiry%20%E2%80%94%20Cherry%27s%20Coffee"
            className="btn-ghost-dark shrink-0"
          >
            Wholesale enquiries <ArrowIcon />
          </a>
        </div>
      </section>
    </>
  );
}
