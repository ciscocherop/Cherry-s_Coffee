import Image from "next/image";
import { chapters } from "@/content/history";
import Reveal from "@/components/shared/Reveal";

// Chapter-by-chapter story in the style of an editorial history page: the
// chapter title stays pinned on the left while its milestones scroll past.
export default function HistoryChapters() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "var(--background)" }}>
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Table of contents</p>
          <ol className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {chapters.map((c) => (
              <li key={c.numeral}>
                <a href={`#chapter-${c.numeral}`} className="group flex items-baseline gap-3">
                  <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent)" }}>{c.numeral}</span>
                  <span className="transition-colors group-hover:text-[var(--accent)]" style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--espresso)" }}>
                    {c.title}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </Reveal>

        {chapters.map((chapter) => (
          <div
            key={chapter.numeral}
            id={`chapter-${chapter.numeral}`}
            className="mt-24 grid scroll-mt-28 gap-10 border-t pt-12 md:mt-32 md:grid-cols-[1fr_2fr] md:gap-16"
            style={{ borderColor: "var(--border)" }}
          >
            {/* Pinned chapter heading */}
            <div>
              <div className="md:sticky md:top-32">
                <p className="eyebrow">Chapter {chapter.numeral}</p>
                <p
                  aria-hidden="true"
                  className="mt-2 leading-none"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(5rem, 12vw, 9rem)", fontWeight: 400, color: "transparent", WebkitTextStroke: "1.5px var(--kraft)" }}
                >
                  {chapter.numeral}
                </p>
                <h2 className="mt-3 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "var(--espresso)" }}>
                  {chapter.title}
                </h2>
                <p className="mt-2" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--muted-foreground)" }}>
                  {chapter.span}
                </p>
              </div>
            </div>

            {/* Milestones */}
            <div className="space-y-20">
              {chapter.milestones.map((m, i) => (
                <article key={m.title}>
                  <Reveal>
                    <p className="eyebrow" style={{ color: "var(--muted-foreground)" }}>— {m.marker} —</p>
                    <p className="mt-3" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent)" }}>({m.label})</p>
                    <h3 className="mt-1 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "var(--espresso)" }}>
                      {m.title}
                    </h3>
                    <p className="mt-4 max-w-xl leading-relaxed" style={{ fontSize: "16px", color: "var(--primary)" }}>
                      {m.text}
                    </p>
                  </Reveal>

                  {m.image && (
                    <Reveal from="scale" className="mt-8">
                      <div
                        className="relative aspect-[16/10] overflow-hidden"
                        style={{ borderRadius: i % 2 === 0 ? "2rem" : "9999px 9999px 2rem 2rem" }}
                      >
                        <Image src={m.image} alt={m.title} fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="(min-width: 768px) 60vw, 100vw" />
                      </div>
                    </Reveal>
                  )}

                  {m.quote && (
                    <Reveal className="mt-8">
                      <blockquote
                        className="max-w-xl leading-snug"
                        style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.5rem, 3vw, 2.1rem)", color: "var(--accent)" }}
                      >
                        “{m.quote}”
                      </blockquote>
                    </Reveal>
                  )}
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
