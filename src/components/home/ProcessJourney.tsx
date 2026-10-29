const steps = [
  { title: "Picking", text: "Ripe red cherries are hand-picked from coffee gardens on the slopes of Mount Elgon.", icon: "🍒" },
  { title: "Wet processing", text: "Skin and pulp are removed and the beans are washed for a clean, bright cup.", icon: "💧" },
  { title: "Dry processing", text: "Beans are sun-dried on raised beds. The dried husks become our cascara.", icon: "☀️" },
  { title: "Hulling", text: "The parchment layer is removed to reveal the green coffee bean.", icon: "🌱" },
  { title: "Roasting", text: "Small-batch roasting draws out deep aroma, sweetness and flavour.", icon: "🔥" },
  { title: "Your cup", text: "Packed fresh and delivered to you — ready to brew and enjoy.", icon: "☕" },
];

export default function ProcessJourney() {
  return (
    <section className="bg-espresso py-20 text-cream" id="journey">
      <div className="container-page">
        <p className="eyebrow !text-gold">From cherry to cup</p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl font-bold sm:text-4xl">The journey of every Cherry&apos;s Coffee bean</h2>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cherry text-2xl" aria-hidden="true">{step.icon}</span>
                <span className="font-serif text-sm text-gold">Step {i + 1}</span>
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sand">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
