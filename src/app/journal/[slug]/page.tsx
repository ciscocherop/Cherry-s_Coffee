import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/content/articles";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  return pageMetadata(article.title, article.excerpt, `/journal/${article.slug}`);
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug);
  if (!article) notFound();

  return (
    <article className="py-14 sm:py-20">
      <div className="container-page max-w-3xl">
        <Link href="/journal" className="text-sm text-mocha hover:text-cherry">← Coffee Journal</Link>
        <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">{article.title}</h1>
        <p className="mt-4 text-sm text-mocha">
          {new Date(article.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · {article.readMinutes} min read
        </p>
        <div className="mt-10 space-y-8">
          {article.sections.map((section, i) => (
            <section key={i}>
              {section.heading && <h2 className="font-serif text-2xl font-bold">{section.heading}</h2>}
              {section.paragraphs.map((p) => (
                <p key={p} className="mt-3 text-lg leading-relaxed text-roast">{p}</p>
              ))}
            </section>
          ))}
        </div>
        <div className="mt-14 rounded-2xl bg-espresso p-8 text-cream">
          <h2 className="font-serif text-2xl font-bold">Ready for a fresh cup?</h2>
          <p className="mt-2 text-latte">Try Arabica coffee from Sipi, delivered to your door.</p>
          <Link href="/shop" className="btn-primary mt-5">Shop our coffee</Link>
        </div>
      </div>
    </article>
  );
}
