const words = [
  "Sipi",
  "Mount Elgon",
  "100% Arabica",
  "Hand-picked",
  "Sun-dried",
  "Small-batch roasted",
  "Keep Sipping!!!",
];

export default function OriginMarquee() {
  // The list is rendered twice so the -50% translate loops seamlessly.
  const row = [...words, ...words];

  return (
    <div
      className="overflow-hidden py-4"
      style={{ backgroundColor: "var(--accent)", color: "var(--crema)" }}
      aria-label={words.join(", ")}
    >
      <div className="marquee-track" aria-hidden="true">
        {row.map((w, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span
              className="px-6"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
            >
              {w}
            </span>
            <span style={{ color: "var(--kraft)" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
