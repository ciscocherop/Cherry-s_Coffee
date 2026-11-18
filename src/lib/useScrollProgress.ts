"use client";

import { useEffect, useRef, useState } from "react";

/**
 * How far an element has travelled through the viewport, from 0 to 1.
 *
 * - "sticky": 0 when the element's top hits the top of the screen, 1 when its
 *   bottom reaches the bottom of the screen. Use for tall sections with a
 *   sticky inner panel.
 * - "anchor": 0 when the element's top reaches `anchor` (fraction of screen
 *   height), 1 when its bottom does. Use for things drawn as you read down.
 */
export function useScrollProgress<T extends HTMLElement>(
  mode: "sticky" | "anchor" = "anchor",
  anchor = 0.6,
) {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw =
        mode === "sticky"
          ? -rect.top / Math.max(1, rect.height - vh)
          : (vh * anchor - rect.top) / Math.max(1, rect.height);
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [mode, anchor]);

  return [ref, progress] as const;
}
