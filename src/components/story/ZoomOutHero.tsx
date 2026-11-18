"use client";

import Image from "next/image";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { site } from "@/config/site";

// Innermost first. Each picture becomes a framed window inside the next one as
// the camera pulls back — from a single cherry out to the whole mountain.
const stages = [
  { image: "/images/story/cherries.jpg", eyebrow: "It starts small", title: "A handful of ripe cherries." },
  { image: "/images/story/garden.jpg", eyebrow: "Picked by hand", title: "One family garden." },
  { image: "/images/sipifalls.jpg", eyebrow: "Beneath the falls", title: "One town: Sipi." },
  { image: "/images/story/mountain.jpg", eyebrow: `Since ${site.founded.month} ${site.founded.year} · Mount Elgon`, title: "From one classmate's cup to cafés across Uganda." },
];

// How much of the next picture each window fills.
const WINDOW = 0.34;

export default function ZoomOutHero() {
  const [ref, p] = useScrollProgress<HTMLElement>("sticky");
  const last = stages.length - 1;
  // Finish the zoom a little before the end so the final view holds for a beat.
  const t = Math.min(last, (p / 0.85) * last);
  const active = Math.min(last, Math.round(t));

  return (
    <section ref={ref} className="under-nav relative" style={{ height: `${stages.length * 100 + 60}vh`, backgroundColor: "var(--espresso)" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Picture layers: outermost at the bottom of the stack */}
        {stages
          .map((stage, k) => ({ stage, k, scale: Math.pow(1 / WINDOW, k - t) }))
          .reverse()
          .map(({ stage, k, scale }) =>
            scale > 14 || scale < 0.015 ? null : (
              <div
                key={stage.image}
                className="absolute inset-0 overflow-hidden"
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: "50% 50%",
                  willChange: "transform",
                  // Keep the frame line and corners a steady size on screen.
                  borderRadius: k < t ? `${28 / scale}px` : 0,
                  boxShadow: k < t ? `0 0 0 ${4 / scale}px var(--crema), 0 ${30 / scale}px ${60 / scale}px rgba(0,0,0,0.5)` : "none",
                }}
              >
                <Image src={stage.image} alt="" fill priority={k < 2} className="object-cover" sizes="100vw" />
              </div>
            ),
          )}

        {/* Readability scrim */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(to top, oklch(0.17 0.025 40 / 0.85) 0%, oklch(0.17 0.025 40 / 0.2) 45%, oklch(0.17 0.025 40 / 0.35) 100%)" }}
        />

        {/* Captions */}
        <div className="container-page relative flex h-full flex-col justify-end pb-24 md:pb-20">
          <p className="eyebrow-crema" style={{ opacity: 0.8 }}>
            Our story · {String(active + 1).padStart(2, "0")} / {String(stages.length).padStart(2, "0")}
          </p>
          <div className="relative mt-3 min-h-[9rem] sm:min-h-[11rem]">
            {stages.map((stage, i) => {
              const Tag = i === 0 ? "h1" : "p";
              return (
                <div
                  key={stage.title}
                  className="absolute inset-x-0 bottom-0"
                  style={{
                    opacity: i === active ? 1 : 0,
                    transform: `translateY(${i === active ? 0 : i < active ? -24 : 24}px)`,
                    transition: "opacity 0.5s, transform 0.5s",
                  }}
                  aria-hidden={i !== active && i !== 0}
                >
                  <p className="eyebrow-crema" style={{ color: "var(--kraft)" }}>{stage.eyebrow}</p>
                  <Tag
                    className="mt-2 max-w-3xl leading-[1.02]"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.75rem, 8vw, 6rem)", fontWeight: 400, color: "var(--crema)" }}
                  >
                    {stage.title}
                  </Tag>
                </div>
              );
            })}
          </div>

          {/* Progress bar + hint */}
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 max-w-xs" style={{ backgroundColor: "oklch(0.78 0.09 70 / 0.25)" }}>
              <div className="h-px" style={{ width: `${(t / last) * 100}%`, backgroundColor: "var(--crema)" }} />
            </div>
            <span className="eyebrow-crema" style={{ fontSize: "10px", opacity: p < 0.95 ? 0.7 : 0, transition: "opacity 0.4s" }}>
              Scroll to zoom out
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
