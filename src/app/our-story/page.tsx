import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import PageHeader from "@/components/shared/PageHeader";
import ProcessJourney from "@/components/home/ProcessJourney";
import VisitSipi from "@/components/home/VisitSipi";

export const metadata = pageMetadata(
  "Our Story",
  "The story of Cherry's Coffee — Arabica coffee from Sipi Town, Kapchorwa District, on the slopes of Mount Elgon, Uganda.",
  "/our-story",
);

// TODO: replace the story text with the founder's own words and real photos.
export default function OurStoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="Coffee with roots in Sipi"
        intro="Cherry's Coffee shares the Arabica of Sipi and Mount Elgon with coffee lovers across Uganda and beyond."
      />

      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_320px]">
          <article className="max-w-none space-y-5 text-lg leading-relaxed text-roast">
            <h2 className="font-serif text-3xl font-bold text-espresso">Where it begins</h2>
            <p>
              High on the northern slopes of Mount Elgon in Kapchorwa District lies Sipi Town, famous for its three
              waterfalls and the green coffee gardens that cover its hills. The cool climate, rich volcanic soil and
              rainfall make it a wonderful home for Arabica coffee.
            </p>
            <p>
              For generations, families here have grown, picked and processed coffee by hand. Cherry&apos;s Coffee was
              founded to bring that coffee — and its story — straight to your cup.
            </p>
            <h2 className="pt-4 font-serif text-3xl font-bold text-espresso">Why &ldquo;Cherry&rdquo;?</h2>
            <p>
              Every coffee bean starts life inside a bright red fruit called a coffee cherry. Our name is a reminder
              that great coffee begins with ripe, carefully picked cherries — and that nothing should go to waste.
              That&apos;s why we also offer cascara, made from the dried cherry husks.
            </p>
            <h2 className="pt-4 font-serif text-3xl font-bold text-espresso">Our promise</h2>
            <p>
              We describe our coffee honestly, pack it with care and stay close to the people and places it comes
              from. When you order, you talk to us directly.
            </p>
          </article>

          <aside className="h-fit space-y-4 rounded-2xl bg-latte/60 p-6">
            <h2 className="font-serif text-xl font-bold">At a glance</h2>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="font-semibold">Origin</dt>
                <dd className="text-roast">Sipi Town, Kapchorwa District</dd>
              </div>
              <div>
                <dt className="font-semibold">Region</dt>
                <dd className="text-roast">Mount Elgon, Eastern Uganda</dd>
              </div>
              <div>
                <dt className="font-semibold">Coffee type</dt>
                <dd className="text-roast">Arabica</dd>
              </div>
              <div>
                <dt className="font-semibold">Products</dt>
                <dd className="text-roast">Instant coffee, ground coffee, roasted beans, cascara</dd>
              </div>
            </dl>
            <Link href="/shop" className="btn-primary w-full">Shop our coffee</Link>
          </aside>
        </div>
      </section>

      <ProcessJourney />
      <VisitSipi />
    </>
  );
}
