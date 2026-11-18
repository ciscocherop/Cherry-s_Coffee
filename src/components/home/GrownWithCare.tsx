"use client";

import Image from "next/image";
import { useScrollProgress } from "@/lib/useScrollProgress";

// TODO: confirm these sustainability statements with the farmers you buy from.
const panels = [
  {
    eyebrow: "Grown with care",
    title: "Small gardens on a big mountain.",
    text: "Sipi coffee grows in small family gardens on the slopes of Mount Elgon, often alongside bananas and shade trees.",
  },
  {
    eyebrow: "Nothing wasted",
    title: "Every part of the cherry counts.",
    text: "The husks left after processing are sun-dried and brewed into our fruity cascara instead of being thrown away.",
  },
  {
    eyebrow: "Close to the source",
    title: "Fewer hands, fresher coffee.",
    text: "We stay close to the people who grow our coffee and talk to you directly — from garden to cup, keep sipping!!!",
  },
];

const mix = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * A tall section with a pinned photo. As you scroll, the colour wash over the
 * photo shifts from roasted brown to Mount Elgon green and the statements change.
 */
export default function GrownWithCare({ image = "/images/sipifalls.jpg" }: { image?: string }) {
  const [ref, p] = useScrollProgress<HTMLElement>("sticky");

  // espresso oklch(0.17 0.025 40) → leaf oklch(0.34 0.09 150)
  const wash = `oklch(${mix(0.17, 0.34, p)} ${mix(0.025, 0.09, p)} ${mix(40, 150, p)} / ${mix(0.55, 0.78, p)})`;
  const active = Math.min(panels.length - 1, Math.floor(p * panels.length * 0.999));

  return (
    <section ref={ref} className="relative" style={{ height: "260vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <Image
          src={image}
          alt="Coffee country around Sipi, Mount Elgon"
          fill
          className="object-cover"
          sizes="100vw"
          style={{ transform: `scale(${mix(1.15, 1, p)})`, transition: "transform 0.1s linear" }}
        />
        {/* Colour wash that turns green as you scroll */}
        <div aria-hidden="true" className="absolute inset-0" style={{ background: `linear-gradient(to top, ${wash} 0%, ${wash} 35%, oklch(0.17 0.025 40 / 0.25) 100%)` }} />

        <div className="container-page relative flex h-full flex-col justify-end pb-24 md:pb-28">
          {/* Progress pips */}
          <div className="mb-8 flex gap-2" aria-hidden="true">
            {panels.map((_, i) => (
              <span
                key={i}
                className="h-1 rounded-full"
                style={{
                  width: i === active ? 48 : 16,
                  backgroundColor: i <= active ? "var(--crema)" : "oklch(0.78 0.09 70 / 0.35)",
                  transition: "width 0.4s, background-color 0.4s",
                }}
              />
            ))}
          </div>

          <div className="relative min-h-[260px] max-w-2xl sm:min-h-[220px]">
            {panels.map((panel, i) => (
              <div
                key={panel.title}
                className="absolute inset-x-0 bottom-0"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: `translateY(${i === active ? 0 : i < active ? -30 : 30}px)`,
                  transition: "opacity 0.6s, transform 0.6s",
                }}
                aria-hidden={i !== active}
              >
                <p className="eyebrow-crema">{panel.eyebrow}</p>
                <h2 className="mt-3 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 6vw, 4.25rem)", fontWeight: 400, color: "var(--crema)" }}>
                  {panel.title}
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed" style={{ fontSize: "17px", color: "oklch(0.95 0.02 80 / 0.85)" }}>
                  {panel.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
