import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/shared/Icons";

const stories = [
  {
    title: "Coffee with roots",
    text: "Grown on the slopes of Mount Elgon, where coffee has been part of family life for generations.",
    href: "/our-story",
    image: "/images/branding1.jpeg",
    alt: "Cherry's Coffee branding",
  },
  {
    title: "From cherry to cup",
    text: "Hand-picked, sun-dried and roasted in small batches — every step done with care.",
    href: "#journey",
    image: "/images/process_coffee.jpeg",
    alt: "Coffee being processed",
  },
  {
    title: "Born beneath the falls",
    text: "Sipi's cool air and rich volcanic soil give our Arabica its naturally sweet character.",
    href: "#visit",
    image: "/images/sipifalls.jpg",
    alt: "Sipi Falls, Mount Elgon",
  },
];

export default function NumberedStories() {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--background)" }}>
      <div className="container-page">
        <p className="eyebrow">Why Cherry&apos;s</p>
        <h2
          className="mt-3 max-w-2xl leading-tight"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--espresso)" }}
        >
          Every cup <em style={{ fontStyle: "italic" }}>tells a story</em>.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {stories.map((s, i) => (
            <Link key={s.title} href={s.href} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden" style={{ borderRadius: "var(--radius)", backgroundColor: "var(--secondary)" }}>
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, oklch(0.12 0.02 40 / 0.95) 0%, oklch(0.12 0.02 40 / 0.7) 40%, transparent 70%)" }}
                />
                <span
                  aria-hidden="true"
                  className="absolute left-5 top-4"
                  style={{ fontFamily: "var(--font-display)", fontSize: "56px", lineHeight: 1, color: "var(--crema)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 400, color: "var(--crema)" }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 leading-relaxed" style={{ fontSize: "14px", color: "oklch(0.78 0.09 70 / 0.8)" }}>
                    {s.text}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 transition-transform group-hover:translate-x-1" style={{ fontSize: "13px", fontWeight: 500, color: "var(--crema)" }}>
                    Discover <ArrowIcon />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
