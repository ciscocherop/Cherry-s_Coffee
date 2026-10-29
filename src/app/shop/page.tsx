import { products } from "@/content/products";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import PageHeader from "@/components/shared/PageHeader";
import ProductCard from "@/components/products/ProductCard";

export const metadata = pageMetadata(
  "Shop Coffee",
  "Buy Sipi Arabica instant coffee, ground coffee, roasted beans and coffee cascara from Cherry's Coffee. Order easily on WhatsApp.",
  "/shop",
);

export default function ShopPage() {
  return (
    <>
      <PageHeader
        eyebrow="Shop"
        title="Our coffee"
        intro="Choose your coffee, pick a size and send your order on WhatsApp. We'll confirm availability, price and delivery with you."
      />
      <section className="py-16">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <div className="mt-14 grid gap-6 rounded-2xl bg-latte/50 p-8 md:grid-cols-3">
            <div>
              <h2 className="font-serif text-lg font-bold">1. Choose</h2>
              <p className="mt-1 text-sm text-roast">Open a product and select the size and quantity you want.</p>
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold">2. Send on WhatsApp</h2>
              <p className="mt-1 text-sm text-roast">Your order is written for you — just press send.</p>
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold">3. Confirm &amp; receive</h2>
              <p className="mt-1 text-sm text-roast">{site.delivery}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
