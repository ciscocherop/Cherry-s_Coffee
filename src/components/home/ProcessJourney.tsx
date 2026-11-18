"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Reveal from "@/components/shared/Reveal";
import LoopVideo from "@/components/shared/LoopVideo";
import { useScrollProgress } from "@/lib/useScrollProgress";

// Steps with a `video` play it (muted, looping, only while on screen); the
// image is used as its poster/fallback.
const steps: { title: string; text: string; image: string; video?: string }[] = [
  { title: "Picking", text: "Ripe red cherries are hand-picked from coffee gardens on the slopes of Mount Elgon.", image: "/videos/coffee-picking-poster.jpg", video: "/videos/coffee-picking.mp4" },
  { title: "Wet processing", text: "Skin and pulp are removed and the beans are washed for a clean, bright cup.", image: "/videos/coffee-pulping-poster.jpg", video: "/videos/coffee-pulping.mp4" },
  { title: "Dry processing", text: "Beans are sun-dried on raised beds. The dried husks become our cascara.", image: "/images/process_coffee.jpeg" },
  { title: "Hulling", text: "The parchment layer is removed to reveal the green coffee bean.", image: "/images/coffee_cascara.jpg" },
  { title: "Roasting", text: "Small-batch roasting draws out deep aroma, sweetness and flavour.", image: "/videos/coffee-roasting-poster.jpg", video: "/videos/coffee-roasting.mp4" },
  { title: "Your cup", text: "Packed fresh and delivered to you — ready to brew and enjoy.", image: "/images/branding.jpeg" },
];

type Pt = { x: number; y: number };

// Smooth S-curves through each point: the line swings side to side down the page.
function buildPath(points: Pt[]) {
  if (points.length === 0) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1];
    const b = points[i];
    const dy = (b.y - a.y) * 0.55;
    d += ` C ${a.x} ${a.y + dy} ${b.x} ${b.y - dy} ${b.x} ${b.y}`;
  }
  return d;
}

export default function ProcessJourney() {
  const [wrapRef, progress] = useScrollProgress<HTMLDivElement>("anchor", 0.65);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const [geo, setGeo] = useState({ w: 0, h: 0, d: "", len: 0, dotsY: [] as number[] });
  const [tip, setTip] = useState<Pt | null>(null);

  // Measure where each step's dot sits, then thread the line through them.
  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const measure = () => {
      const box = wrap.getBoundingClientRect();
      const pts: Pt[] = dotRefs.current.filter((el): el is HTMLSpanElement => !!el).map((el) => {
        const r = el.getBoundingClientRect();
        return { x: r.left - box.left + r.width / 2, y: r.top - box.top + r.height / 2 };
      });
      const all = [{ x: box.width / 2, y: 0 }, ...pts, { x: box.width / 2, y: box.height }];
      setGeo({ w: box.width, h: box.height, d: buildPath(all), len: 0, dotsY: pts.map((p) => p.y) });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [wrapRef]);

  // Path length is only known once the path is in the DOM.
  useEffect(() => {
    if (pathRef.current && geo.d) {
      const len = pathRef.current.getTotalLength();
      setGeo((g) => (g.len === len ? g : { ...g, len }));
    }
  }, [geo.d]);

  // Bean that rides the tip of the line.
  useEffect(() => {
    if (!pathRef.current || !geo.len) return;
    const p = pathRef.current.getPointAtLength(geo.len * progress);
    setTip({ x: p.x, y: p.y });
  }, [progress, geo.len]);

  const reached = progress * geo.h;

  return (
    <section id="journey" className="relative overflow-hidden" style={{ backgroundColor: "var(--espresso)" }}>
      {/* Grain overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          opacity: 0.08,
          mixBlendMode: "overlay",
        }}
      />

      <div className="container-page relative pb-24 pt-20 md:pt-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-crema">The coffee life cycle</p>
          <h2
            className="mt-3 leading-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 400, color: "var(--crema)" }}
          >
            From cherry <em style={{ fontStyle: "italic", color: "var(--kraft)" }}>to cup</em>.
          </h2>
          <p className="mt-4" style={{ fontSize: "16px", color: "oklch(0.78 0.09 70 / 0.7)" }}>
            Follow the line — every Cherry&apos;s bean makes this journey before it reaches you.
          </p>
        </Reveal>

        <div ref={wrapRef} className="relative mt-16 md:mt-20">
          {/* The line, drawn as you scroll */}
          {geo.d && (
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0"
              width={geo.w}
              height={geo.h}
              viewBox={`0 0 ${geo.w} ${geo.h}`}
              fill="none"
            >
              <path d={geo.d} stroke="oklch(0.78 0.09 70 / 0.12)" strokeWidth="2" strokeDasharray="4 8" />
              <path
                ref={pathRef}
                d={geo.d}
                stroke="var(--accent)"
                strokeWidth="3"
                strokeLinecap="round"
                style={{
                  strokeDasharray: geo.len || 1,
                  strokeDashoffset: geo.len ? geo.len * (1 - progress) : 1,
                }}
              />
              {tip && progress > 0 && progress < 1 && (
                <g transform={`translate(${tip.x} ${tip.y})`}>
                  <circle r="14" fill="var(--accent)" opacity="0.25" />
                  <ellipse rx="7" ry="9.5" fill="var(--crema)" />
                  <path d="M0 -8 C -3 -3, 3 3, 0 8" stroke="var(--espresso)" strokeWidth="1.6" />
                </g>
              )}
            </svg>
          )}

          <ol className="relative z-10 space-y-20 md:space-y-28">
            {steps.map((step, i) => {
              const flip = i % 2 === 1;
              const active = geo.dotsY[i] !== undefined && reached >= geo.dotsY[i] - 4;
              return (
                <li key={step.title} className="relative grid items-center gap-8 md:grid-cols-2 md:gap-20">
                  {/* Dot the line passes through — on the row itself (not inside the
                      animated block) so its measured position never moves. */}
                  <span
                    ref={(el) => {
                      dotRefs.current[i] = el;
                    }}
                    aria-hidden="true"
                    className={`absolute left-0 top-4 block h-5 w-5 rounded-full md:top-1/2 md:-mt-2.5 ${flip ? "md:left-auto md:right-0" : ""}`}
                    style={{
                      backgroundColor: active ? "var(--accent)" : "var(--espresso)",
                      border: "2px solid var(--accent)",
                      boxShadow: active ? "0 0 0 8px oklch(0.52 0.17 30 / 0.2)" : "none",
                      transition: "background-color 0.4s, box-shadow 0.4s",
                    }}
                  />
                  {/* Text */}
                  <Reveal from={flip ? "right" : "left"} className={`pl-12 ${flip ? "md:order-2 md:pl-0 md:pr-14 md:text-right" : "md:pl-14"}`}>
                    <span
                      aria-hidden="true"
                      className="block leading-none"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(3.5rem, 8vw, 6rem)",
                        fontWeight: 400,
                        color: "transparent",
                        WebkitTextStroke: active ? "1.5px var(--kraft)" : "1px oklch(0.78 0.09 70 / 0.3)",
                        transition: "-webkit-text-stroke 0.4s",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, color: "var(--crema)" }}>
                      {step.title}
                    </h3>
                    <p className={`mt-3 max-w-sm leading-relaxed ${flip ? "md:ml-auto" : ""}`} style={{ fontSize: "15px", color: "oklch(0.78 0.09 70 / 0.7)" }}>
                      {step.text}
                    </p>
                  </Reveal>

                  {/* Photo — sits above the line so the line weaves behind it */}
                  <Reveal from="scale" delay={120} className={flip ? "md:order-1" : ""}>
                    <div
                      className="relative aspect-[4/3] overflow-hidden"
                      style={{ borderRadius: i % 3 === 0 ? "9999px 9999px 2rem 2rem" : "2rem", boxShadow: "0 30px 60px -30px #000" }}
                    >
                      {step.video ? (
                        <LoopVideo src={step.video} poster={step.image} />
                      ) : (
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(min-width: 768px) 45vw, 100vw"
                        />
                      )}
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
