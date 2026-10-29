import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-28 text-center">
      <div className="container-page">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-serif text-4xl font-bold">This cup is empty</h1>
        <p className="mt-4 text-roast">We couldn&apos;t find the page you were looking for.</p>
        <Link href="/" className="btn-primary mt-8">Back to home</Link>
      </div>
    </section>
  );
}
