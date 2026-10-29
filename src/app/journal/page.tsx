import Link from "next/link";
import { articles } from "@/content/articles";
import { pageMetadata } from "@/lib/seo";
import PageHeader from "@/components/shared/PageHeader";
import { ArrowIcon } from "@/components/shared/Icons";

export const metadata = pageMetadata(
  "Coffee Journal",
  "Brewing guides, Arabica coffee explained and stories from Sipi, Uganda — from the Cherry's Coffee journal.",
  "/journal",
);

export default function JournalPage() {
  return (
    <>
      <PageHeader eyebrow="Coffee journal" title="Brew better, learn more" intro="Guides, tips and stories from the slopes of Mount Elgon." />
      <section className="py-16">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link key={a.slug} href={`/journal/${a.slug}`} className="group flex flex-col rounded-2xl border border-latte bg-white p-6 transition hover:shadow-lg">
              <p className="text-xs text-mocha">
                {new Date(a.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · {a.readMinutes} min read
              </p>
              <h2 className="mt-2 font-serif text-2xl font-bold group-hover:text-cherry">{a.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-roast">{a.excerpt}</p>
              <span className="mt-5 flex items-center gap-1 text-sm font-semibold text-cherry">
                Read article <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
