"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible");

  useEffect(() => {
    // Start fade-out after 2.2 s, remove from DOM after the 0.7 s transition
    const fadeTimer = setTimeout(() => setPhase("fading"), 2200);
    const removeTimer = setTimeout(() => setPhase("gone"), 2900);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--espresso)",
        opacity: phase === "fading" ? 0 : 1,
        transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1)",
        pointerEvents: phase === "fading" ? "none" : "all",
      }}
    >
      {/* Grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          opacity: 0.1,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />

      {/* Logo mark — animated draw */}
      <div style={{ animation: "splashPop 0.6s cubic-bezier(0.34,1.56,0.64,1) both" }}>
        <svg
          viewBox="0 0 96 96"
          width="96"
          height="96"
          fill="none"
          aria-label="Cherry's Coffee logo"
        >
          {/* Bold C arc */}
          <path
            d="M76 20a36 36 0 1 0 0 56"
            stroke="var(--crema)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            style={{ animation: "splashStroke 0.9s ease forwards", strokeDasharray: 160, strokeDashoffset: 160 }}
          />
          {/* Cup body */}
          <path
            d="M34 40h28l-4 20a4 4 0 0 1-4 3H42a4 4 0 0 1-4-3Z"
            fill="var(--accent)"
            style={{ animation: "splashFadeIn 0.4s 0.7s ease both" }}
          />
          {/* Cup handle */}
          <path
            d="M62 46h5a6 6 0 0 1 0 12h-5"
            stroke="var(--accent)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            style={{ animation: "splashFadeIn 0.4s 0.85s ease both" }}
          />
          {/* Saucer */}
          <rect
            x="28" y="64" width="40" height="4" rx="2"
            fill="var(--kraft)"
            style={{ animation: "splashFadeIn 0.4s 0.95s ease both" }}
          />
          {/* Steam wisps */}
          <path
            d="M40 36c0-3 4-3 4-6M48 36c0-3 4-3 4-6"
            stroke="var(--crema)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            style={{ animation: "splashFadeIn 0.5s 1.1s ease both" }}
          />
        </svg>
      </div>

      {/* Wordmark */}
      <div style={{ marginTop: "1.5rem", textAlign: "center", animation: "splashFadeUp 0.6s 0.5s cubic-bezier(0.34,1.56,0.64,1) both" }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            fontWeight: 400,
            color: "var(--crema)",
            letterSpacing: "0.02em",
            lineHeight: 1,
          }}
        >
          Cherry&apos;s Coffee
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.32em",
            color: "var(--kraft)",
            marginTop: "0.5rem",
            animation: "splashFadeIn 0.5s 1s ease both",
          }}
        >
          Keep Sipping
        </p>
      </div>

      <style>{`
        @keyframes splashPop {
          from { transform: scale(0.6); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
        @keyframes splashFadeUp {
          from { transform: translateY(16px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes splashFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes splashStroke {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
