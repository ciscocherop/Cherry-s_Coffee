"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Muted, looping background video for the hero.
 * Drop a file at /public/videos/hero.mp4 (and optionally hero.webm) and it fades
 * in over the photo. If the file is missing, can't play, or the visitor prefers
 * reduced motion, it stays hidden and the photo underneath shows instead.
 */
export default function HeroVideo({ src = "/videos/hero.mp4", webm = "/videos/hero.webm" }: { src?: string; webm?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v || !allowed) return;
    // Some browsers ignore the autoplay attribute until play() is called.
    v.play().catch(() => {});
  }, [allowed]);

  if (!allowed) return null;

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      style={{ opacity: ready ? 1 : 0, transition: "opacity 1.2s ease" }}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      onCanPlay={() => setReady(true)}
    >
      <source src={webm} type="video/webm" />
      <source src={src} type="video/mp4" />
    </video>
  );
}
