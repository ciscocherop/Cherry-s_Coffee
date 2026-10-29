export default function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="border-b border-latte bg-latte/50">
      <div className="container-page py-14 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-roast">{intro}</p>}
      </div>
    </section>
  );
}
