"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Muted, looping background video that only plays while it's on screen.
 * Shows its poster until the video can play. Visitors who prefer reduced
 * motion or have data-saver on just get the poster.
 */
export default function LoopVideo({
  src,
  poster,
  className = "",
  style,
}: {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    setAllowed(!reduced && !saveData);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v || !allowed) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.15 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [allowed]);

  return (
    <div className={`absolute inset-0 ${className}`} style={style}>
      {poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      )}
      {allowed && (
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: ready ? 1 : 0, transition: "opacity 1s ease" }}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onCanPlay={() => setReady(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
