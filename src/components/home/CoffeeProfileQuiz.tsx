"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { products } from "@/content/products";
import IntensityMeter from "@/components/products/IntensityMeter";
import PackageBag from "@/components/products/PackageBag";
import { ArrowIcon } from "@/components/shared/Icons";

type Slug = (typeof products)[number]["slug"];

// Each answer gives 2 points to the coffee it suits best and 1 to a near match.
// Match score = winner's points ÷ the most it could have scored.
const questions: { question: string; answers: { label: string; best: Slug; also?: Slug }[] }[] = [
  {
    question: "How do you like your mornings?",
    answers: [
      { label: "Quick — I'm out the door", best: "organic-instant-coffee-dark-roast" },
      { label: "Slow, with a proper brew", best: "arabica-coffee-powder", also: "roasted-arabica-coffee-beans" },
      { label: "Light and a little different", best: "coffee-cascara" },
    ],
  },
  {
    question: "Pick a flavour you love",
    answers: [
      { label: "Dark chocolate", best: "roasted-arabica-coffee-beans", also: "organic-instant-coffee-dark-roast" },
      { label: "Citrus & brown sugar", best: "arabica-coffee-powder" },
      { label: "Dried fruit & honey", best: "coffee-cascara" },
    ],
  },
  {
    question: "How do you brew at home?",
    answers: [
      { label: "Kettle and a spoon", best: "organic-instant-coffee-dark-roast", also: "coffee-cascara" },
      { label: "French press or saucepan", best: "arabica-coffee-powder" },
      { label: "I grind my own beans", best: "roasted-arabica-coffee-beans" },
    ],
  },
  {
    question: "How strong should it hit?",
    answers: [
      { label: "Bold — wake me up", best: "organic-instant-coffee-dark-roast", also: "roasted-arabica-coffee-beans" },
      { label: "Balanced and smooth", best: "arabica-coffee-powder" },
      { label: "Gentle, barely any kick", best: "coffee-cascara" },
    ],
  },
  {
    question: "Your perfect coffee moment?",
    answers: [
      { label: "At my desk, mid-task", best: "organic-instant-coffee-dark-roast" },
      { label: "Weekend ritual with friends", best: "roasted-arabica-coffee-beans", also: "arabica-coffee-powder" },
      { label: "Iced, on a warm afternoon", best: "coffee-cascara" },
    ],
  },
];

const blends: Record<Slug, { name: string; text: string }> = {
  "organic-instant-coffee-dark-roast": {
    name: "The Sunrise Sprinter",
    text: "You're up and moving before the mist lifts. You want a bold, dark cup that's ready in seconds and keeps pace with your day.",
  },
  "arabica-coffee-powder": {
    name: "The Slow Brewer",
    text: "For you, coffee is a ritual. You like to take your time, watch it brew and savour a bright, balanced cup from first sip to last.",
  },
  "roasted-arabica-coffee-beans": {
    name: "The Bean Purist",
    text: "You know freshness lives in the grind. Deep cocoa and caramel notes, ground just before brewing — nothing less will do.",
  },
  "coffee-cascara": {
    name: "The Cherry Explorer",
    text: "You like to try something different. Fruity, gentle and naturally sweet, cascara is the side of the coffee cherry most people never taste.",
  },
};

const R = 46; // ring radius in the 100×100 viewBox
const C = 2 * Math.PI * R;

function Ring({ value, track = "var(--border)" }: { value: number; track?: string }) {
  return (
    <svg viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
      <circle cx="50" cy="50" r={R} fill="none" stroke={track} strokeWidth="1.5" />
      <circle
        cx="50"
        cy="50"
        r={R}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={C}
        strokeDashoffset={C * (1 - value)}
        style={{ transition: "stroke-dashoffset 0.8s cubic-bezier(0.4,0,0.2,1)" }}
      />
    </svg>
  );
}

export default function CoffeeProfileQuiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [shown, setShown] = useState(0); // animated score count-up

  const done = step >= questions.length;
  const match = done
    ? products.reduce((best, p) => ((scores[p.slug] ?? 0) > (scores[best.slug] ?? 0) ? p : best), products[0])
    : null;
  const score = match ? Math.round(((scores[match.slug] ?? 0) / (questions.length * 2)) * 100) : 0;

  useEffect(() => {
    if (!done) return;
    let frame = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / 1400);
      setShown(Math.round(score * (1 - Math.pow(1 - k, 3))));
      if (k < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [done, score]);

  function answer(best: Slug, also?: Slug) {
    setScores((s) => {
      const next = { ...s };
      next[best] = (next[best] ?? 0) + 2;
      if (also) next[also] = (next[also] ?? 0) + 1;
      return next;
    });
    setStep((n) => n + 1);
  }

  function restart() {
    setScores({});
    setShown(0);
    setStep(0);
  }

  const blend = match ? blends[match.slug as Slug] : null;

  return (
    <section className="relative overflow-hidden py-24" style={{ backgroundColor: "var(--secondary)" }} id="quiz">
      <style>{`
        @keyframes quizIn { from { opacity: 0; transform: scale(0.94); } to { opacity: 1; transform: scale(1); } }
        .quiz-in { animation: quizIn 0.5s cubic-bezier(0.2,0.7,0.2,1) both; }
        .quiz-bubble { transition: transform 0.25s, background-color 0.25s, color 0.25s, box-shadow 0.25s; }
        .quiz-bubble:hover, .quiz-bubble:focus-visible {
          transform: translateY(-6px) scale(1.05);
          background: var(--accent); color: var(--crema);
          box-shadow: 0 18px 30px -14px oklch(0.52 0.17 30 / 0.7);
        }
        @media (prefers-reduced-motion: reduce) { .quiz-in { animation: none; } }
      `}</style>

      {/* Soft decorative rings */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ border: "1px solid oklch(0.82 0.035 65 / 0.6)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ border: "1px solid oklch(0.82 0.035 65 / 0.4)" }} />

      <div className="container-page relative">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Find your blend</p>
          <h2 className="mt-3 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--espresso)" }}>
            What&apos;s your <em style={{ fontStyle: "italic" }}>coffee personality</em>?
          </h2>
          <p className="mt-4 leading-relaxed" style={{ fontSize: "15px", color: "var(--primary)" }}>
            {questions.length} quick questions. Get your match score and the Cherry&apos;s blend that defines you.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center" aria-live="polite">
          {/* The circle */}
          <div
            className="relative flex aspect-square w-[min(84vw,440px)] items-center justify-center rounded-full"
            style={{ backgroundColor: "var(--card)", boxShadow: "0 40px 80px -40px oklch(0.17 0.025 40 / 0.45)" }}
          >
            <Ring value={done ? shown / 100 : step / questions.length} />

            {!done ? (
              <div key={step} className="quiz-in px-12 text-center sm:px-16">
                <p className="eyebrow">
                  Question {step + 1} / {questions.length}
                </p>
                <h3 className="mt-3 leading-snug" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 4.5vw, 2.1rem)", fontWeight: 400, color: "var(--espresso)" }}>
                  {questions[step].question}
                </h3>
                {/* Step pips around the bottom */}
                <div className="mt-6 flex justify-center gap-2" aria-hidden="true">
                  {questions.map((_, i) => (
                    <span key={i} className="h-2 w-2 rounded-full" style={{ backgroundColor: i <= step ? "var(--accent)" : "var(--border)" }} />
                  ))}
                </div>
              </div>
            ) : (
              match &&
              blend && (
                <div key="result" className="quiz-in px-10 text-center">
                  <p className="eyebrow">Your match score</p>
                  <p className="mt-1 leading-none" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(4rem, 14vw, 6.5rem)", fontWeight: 400, color: "var(--accent)" }}>
                    {shown}
                    <span style={{ fontSize: "0.4em" }}>%</span>
                  </p>
                  <p className="mt-2" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.25rem, 3.5vw, 1.6rem)", color: "var(--espresso)" }}>
                    {blend.name}
                  </p>
                  <p className="mt-1" style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>
                    {match.name}
                  </p>
                </div>
              )
            )}
          </div>

          {/* Answers: round bubbles tucked under the circle */}
          {!done && (
            <div key={`a${step}`} className="quiz-in relative -mt-14 flex justify-center gap-3 sm:gap-6">
              {questions[step].answers.map((a) => (
                <button
                  key={a.label}
                  type="button"
                  onClick={() => answer(a.best, a.also)}
                  className="quiz-bubble flex aspect-square w-[27vw] max-w-[136px] items-center justify-center rounded-full p-3 text-center leading-tight sm:p-4"
                  style={{
                    backgroundColor: "var(--espresso)",
                    color: "var(--crema)",
                    fontSize: "clamp(11.5px, 3vw, 14px)",
                    fontWeight: 500,
                    border: "4px solid var(--secondary)",
                  }}
                >
                  {a.label}
                </button>
              ))}
            </div>
          )}

          {/* Result details */}
          {done && match && blend && (
            <div className="quiz-in mt-10 grid w-full max-w-3xl items-center gap-8 sm:grid-cols-[180px_1fr]">
              <PackageBag tone={match.tone} className="float-bag mx-auto w-40 drop-shadow-2xl sm:w-full" />
              <div className="text-center sm:text-left">
                <p className="leading-relaxed" style={{ fontSize: "16px", color: "var(--primary)" }}>
                  {blend.text}
                </p>
                <p className="mt-3" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent)" }}>
                  {match.tastingNotes.join(" · ")}
                </p>
                <div className="mt-3 flex justify-center sm:justify-start">
                  <IntensityMeter product={match} />
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
                  <Link href={`/products/${match.slug}`} className="btn-accent">
                    Shop your blend <ArrowIcon />
                  </Link>
                  <button type="button" onClick={restart} className="btn" style={{ border: "1px solid var(--border)", color: "var(--primary)" }}>
                    Take it again
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
