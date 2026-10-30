"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reset and replay the fade-up animation on each route change
    el.style.animation = "none";
    // Force reflow
    void el.offsetHeight;
    el.style.animation = "pageEnter 0.45s cubic-bezier(0.4,0,0.2,1) both";
  }, [pathname]);

  return (
    <>
      <style>{`
        @keyframes pageEnter {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div ref={ref} style={{ animation: "pageEnter 0.45s cubic-bezier(0.4,0,0.2,1) both" }}>
        {children}
      </div>
    </>
  );
}
