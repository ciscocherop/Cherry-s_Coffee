import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/content/products";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import ProductVisual from "@/components/products/ProductVisual";
import OrderPanel from "@/components/products/OrderPanel";
import ProductCard from "@/components/products/ProductCard";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return pageMetadata(product.name, product.shortDescription, `/products/${product.slug}`);
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const priced = product.sizes.filter((s) => s.priceUGX > 0);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    category: product.category,
    brand: { "@type": "Brand", name: site.name },
    // Only publish offers once real prices are set.
    ...(priced.length > 0 && {
      offers: priced.map((s) => ({
        "@type": "Offer",
        name: s.label,
        price: s.priceUGX,
        priceCurrency: "UGX",
        availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      })),
    }),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="py-10 sm:py-16">
        <div className="container-page">
          <nav className="text-sm text-mocha" aria-label="Breadcrumb">
            <Link href="/shop" className="hover:text-cherry">Shop</Link> <span aria-hidden="true">/</span>{" "}
            <span>{product.name}</span>
          </nav>

          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            <ProductVisual product={product} className="aspect-square rounded-3xl" />
            <div>
              <p className="eyebrow">{product.category}</p>
              <h1 className="mt-3 font-serif text-4xl font-bold leading-tight">{product.name}</h1>
              {product.description.map((para) => (
                <p key={para} className="mt-4 leading-relaxed text-roast">{para}</p>
              ))}
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tasting notes">
                {product.tastingNotes.map((n) => (
                  <li key={n} className="rounded-full bg-latte px-3 py-1 text-xs font-medium">{n}</li>
                ))}
              </ul>
              <div className="mt-8">
                <OrderPanel product={product} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-latte/50 py-16">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-8">
            <h2 className="font-serif text-2xl font-bold">{product.brewGuide.title}</h2>
            <ol className="mt-5 space-y-4">
              {product.brewGuide.steps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cherry text-sm font-bold text-cream">{i + 1}</span>
                  <span className="pt-1 leading-relaxed text-roast">{step}</span>
                </li>
              ))}
            </ol>
            <h3 className="mt-8 font-serif text-lg font-bold">Ingredients</h3>
            <p className="mt-1 text-roast">{product.ingredients}</p>
          </div>

          {product.nutrition ? (
            <div className="rounded-2xl bg-white p-8">
              <h2 className="font-serif text-2xl font-bold">Nutrition facts</h2>
              <div className="mt-5 border-2 border-espresso p-4 text-sm">
                <p>{product.nutrition.servingsPerContainer} servings per container</p>
                <p className="flex justify-between border-b-8 border-espresso pb-2 font-bold">
                  <span>Serving size</span> <span>{product.nutrition.servingSize}</span>
                </p>
                <p className="border-b border-espresso py-1 text-right text-xs font-bold">% Daily Value*</p>
                <table className="w-full">
                  <tbody>
                    {product.nutrition.rows.map((r) => (
                      <tr key={r.label} className="border-b border-sand">
                        <td className={`py-1 ${r.indent ? "pl-4" : "font-bold"}`}>
                          {r.label} <span className="font-normal">{r.amount}</span>
                        </td>
                        <td className="py-1 text-right font-bold">{r.dailyValue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-2 text-xs leading-relaxed">
                  * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily
                  diet. 2,000 calories a day is used for general nutrition advice. † Daily Value not established.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center rounded-2xl bg-espresso p-8 text-cream">
              <h2 className="font-serif text-2xl font-bold">Buying for a café or office?</h2>
              <p className="mt-3 text-latte">We supply larger quantities for businesses. Tell us what you need and we&apos;ll send a quote.</p>
              <Link href="/wholesale" className="btn-primary mt-6 self-start">Wholesale enquiry</Link>
            </div>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <h2 className="font-serif text-2xl font-bold">You may also like</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
