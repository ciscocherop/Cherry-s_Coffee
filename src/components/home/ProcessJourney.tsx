import Image from "next/image";

const steps = [
  { title: "Picking", text: "Ripe red cherries are hand-picked from coffee gardens on the slopes of Mount Elgon." },
  { title: "Wet processing", text: "Skin and pulp are removed and the beans are washed for a clean, bright cup." },
  { title: "Dry processing", text: "Beans are sun-dried on raised beds. The dried husks become our cascara." },
  { title: "Hulling", text: "The parchment layer is removed to reveal the green coffee bean." },
  { title: "Roasting", text: "Small-batch roasting draws out deep aroma, sweetness and flavour." },
  { title: "Your cup", text: "Packed fresh and delivered to you — ready to brew and enjoy." },
];

export default function ProcessJourney() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--espresso)" }}
    >
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

      {/* Top image strip — kept compact */}
      <div className="relative h-48 w-full overflow-hidden sm:h-56">
        <Image
          src="/images/processing.jpeg"
          alt="Coffee processing at Sipi"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* gradient fade into espresso below */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 40%, var(--espresso) 100%)",
          }}
        />
      </div>

      <div className="container-page relative pb-16 pt-10">
        {/* Header */}
        <p className="eyebrow-crema">From cherry to cup</p>
        <h2
          className="mt-3 max-w-2xl leading-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400,
            color: "var(--crema)",
          }}
        >
          The journey of every{" "}
          <em style={{ fontStyle: "italic", color: "var(--kraft)" }}>Cherry&apos;s</em>{" "}
          bean.
        </h2>

        {/* Steps grid */}
        <ol className="mt-14 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <li key={step.title} className="relative py-8">
                {/* Top hairline + accent dot */}
                <div
                  className="relative mb-6"
                  style={{ borderTop: "1px solid oklch(0.78 0.09 70 / 0.15)" }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                </div>

                {/* Step number */}
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase" as const,
                    color: "var(--kraft)",
                  }}
                >
                  {num}
                </span>

                {/* Title */}
                <h3
                  className="mt-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "var(--crema)",
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="mt-2 leading-relaxed"
                  style={{ fontSize: "14px", color: "oklch(0.78 0.09 70 / 0.65)" }}
                >
                  {step.text}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
