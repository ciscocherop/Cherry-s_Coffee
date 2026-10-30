export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section style={{ borderBottom: "1px solid var(--border)", backgroundColor: "var(--secondary)" }}>
      <div className="container-page py-14 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1
          className="mt-3 max-w-3xl leading-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 400,
            color: "var(--espresso)",
          }}
        >
          {title}
        </h1>
        {intro && (
          <p
            className="mt-5 max-w-2xl leading-relaxed"
            style={{ fontSize: "18px", color: "var(--primary)" }}
          >
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
