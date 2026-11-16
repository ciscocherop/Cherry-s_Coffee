"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/content/products";
import IntensityMeter from "@/components/products/IntensityMeter";
import { ArrowIcon } from "@/components/shared/Icons";

type Slug = (typeof products)[number]["slug"];

// Each answer adds a point to the products it suits; the highest score wins.
const questions: { question: string; answers: { label: string; suits: Slug[] }[] }[] = [
  {
    question: "How do you like your mornings?",
    answers: [
      { label: "Quick — I'm out the door", suits: ["organic-instant-coffee-dark-roast"] },
      { label: "Slow, with a proper brew", suits: ["arabica-coffee-powder", "roasted-arabica-coffee-beans"] },
      { label: "Something light and different", suits: ["coffee-cascara"] },
    ],
  },
  {
    question: "Pick a flavour you love",
    answers: [
      { label: "Dark chocolate", suits: ["organic-instant-coffee-dark-roast", "roasted-arabica-coffee-beans"] },
      { label: "Citrus & brown sugar", suits: ["arabica-coffee-powder"] },
      { label: "Dried fruit & honey", suits: ["coffee-cascara"] },
    ],
  },
  {
    question: "How do you brew at home?",
    answers: [
      { label: "Kettle and a spoon", suits: ["organic-instant-coffee-dark-roast", "coffee-cascara"] },
      { label: "French press or saucepan", suits: ["arabica-coffee-powder"] },
      { label: "I grind my own beans", suits: ["roasted-arabica-coffee-beans"] },
    ],
  },
];

export default function CoffeeProfileQuiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});

  const done = step >= questions.length;
  const match = done
    ? products.reduce((best, p) => ((scores[p.slug] ?? 0) > (scores[best.slug] ?? 0) ? p : best), products[0])
    : null;

  function answer(suits: Slug[]) {
    setScores((s) => {
      const next = { ...s };
      suits.forEach((slug) => (next[slug] = (next[slug] ?? 0) + 1));
      return next;
    });
    setStep((n) => n + 1);
  }

  function restart() {
    setScores({});
    setStep(0);
  }

  return (
    <section className="py-20" style={{ backgroundColor: "var(--secondary)" }} id="quiz">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Find your coffee</p>
          <h2
            className="mt-3 leading-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--espresso)" }}
          >
            What&apos;s your <em style={{ fontStyle: "italic" }}>coffee profile</em>?
          </h2>
          <p className="mt-5 max-w-md leading-relaxed" style={{ fontSize: "15px", color: "var(--primary)" }}>
            Three quick questions, one perfect match. Tell us how you like your cup and we&apos;ll point you to the
            Cherry&apos;s coffee made for you.
          </p>
        </div>

        <div className="p-8 sm:p-10" style={{ backgroundColor: "var(--card)", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
          {!done ? (
            <div aria-live="polite">
              <div className="flex gap-1.5" aria-hidden="true">
                {questions.map((_, i) => (
                  <span key={i} className="h-1 flex-1 rounded-full" style={{ backgroundColor: i <= step ? "var(--accent)" : "var(--border)" }} />
                ))}
              </div>
              <p className="mt-6 eyebrow">
                Question {step + 1} of {questions.length}
              </p>
              <h3 className="mt-2" style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 400, color: "var(--espresso)" }}>
                {questions[step].question}
              </h3>
              <div className="mt-6 grid gap-3">
                {questions[step].answers.map((a) => (
                  <button
                    key={a.label}
                    type="button"
                    onClick={() => answer(a.suits)}
                    className="flex items-center justify-between px-5 py-4 text-left transition hover:border-[var(--accent)]"
                    style={{ border: "1px solid var(--border)", borderRadius: "var(--radius)", fontSize: "15px", color: "var(--espresso)" }}
                  >
                    {a.label}
                    <span style={{ color: "var(--accent)" }}><ArrowIcon /></span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            match && (
              <div aria-live="polite" className="grid gap-6 sm:grid-cols-[140px_1fr] sm:items-center">
                {match.image && (
                  <div className="relative aspect-square overflow-hidden" style={{ borderRadius: "var(--radius)" }}>
                    <Image src={match.image} alt={match.name} fill className="object-cover" sizes="140px" />
                  </div>
                )}
                <div>
                  <p className="eyebrow">Your match</p>
                  <h3 className="mt-2" style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 400, color: "var(--espresso)" }}>
                    {match.name}
                  </h3>
                  <p className="mt-1" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent)" }}>
                    {match.tastingNotes.join(" · ")}
                  </p>
                  <div className="mt-3">
                    <IntensityMeter product={match} />
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={`/products/${match.slug}`} className="btn-accent">
                      See this coffee <ArrowIcon />
                    </Link>
                    <button type="button" onClick={restart} className="btn" style={{ border: "1px solid var(--border)", color: "var(--primary)" }}>
                      Start again
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
