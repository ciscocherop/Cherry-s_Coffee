import Image from "next/image";
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

export default function OurStoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="Coffee with roots in Sipi"
        intro="Cherry's Coffee shares the Arabica of Sipi and Mount Elgon with coffee lovers across Uganda and beyond."
      />

      {/* ── Where it begins ────────────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "var(--background)" }}>
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: text */}
          <div>
            <p className="eyebrow">Where it begins</p>
            <h2
              className="mt-3 leading-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 400, color: "var(--espresso)" }}
            >
              High on the slopes of{" "}
              <em style={{ fontStyle: "italic" }}>Mount Elgon</em>
            </h2>
            <p className="mt-5 leading-relaxed" style={{ fontSize: "15px", color: "var(--primary)" }}>
              Sipi Town, in Kapchorwa District, sits high on the northern slopes of Mount Elgon.
              The cool climate, rich volcanic soil and generous rainfall make it one of Uganda&apos;s
              finest homes for Arabica coffee.
            </p>
            <p className="mt-4 leading-relaxed" style={{ fontSize: "15px", color: "var(--primary)" }}>
              For generations, families here have grown, picked and processed coffee by hand.
              Cherry&apos;s Coffee was founded to bring that coffee — and its story — straight to your cup.
            </p>
            <p className="mt-4 leading-relaxed" style={{ fontSize: "15px", color: "var(--primary)" }}>
              Every cup carries a naturally sweet taste with a warm caramel finish and a rich aroma
              that is genuinely a pleasure to breathe in — healthy, soothing and completely natural.
              Once you smell it, you already know it&apos;s going to be good.
            </p>
            <p
              className="mt-5 font-medium"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--accent)" }}
            >
              Every cup is naturally sweet — just keep sipping.
            </p>
          </div>

          {/* Right: process photo */}
          <div className="relative aspect-[4/3] w-full overflow-hidden" style={{ borderRadius: "var(--radius)" }}>
            <Image
              src="/images/process_coffee.jpeg"
              alt="Coffee processing in Sipi — from cherry to cup"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ── Why Cherry + Our Promise — side by side ────────────────── */}
      <section className="py-16" style={{ backgroundColor: "var(--secondary)" }}>
        <div className="container-page grid gap-10 lg:grid-cols-2">
          {/* Why "Cherry"? */}
          <div
            className="p-8"
            style={{ backgroundColor: "var(--card)", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
          >
            <p className="eyebrow">The name</p>
            <h2
              className="mt-3 leading-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 400, color: "var(--espresso)" }}
            >
              Why &ldquo;Cherry&rdquo;?
            </h2>
            <p className="mt-4 leading-relaxed" style={{ fontSize: "15px", color: "var(--primary)" }}>
              Every coffee bean starts life inside a bright red fruit called a coffee cherry.
              Our name is a reminder that great coffee begins with ripe, carefully picked
              cherries — and that nothing should go to waste.
            </p>
            <p className="mt-3 leading-relaxed" style={{ fontSize: "15px", color: "var(--primary)" }}>
              That&apos;s why we also offer cascara: the dried cherry husks brewed into a light,
              fruity tea-like drink full of natural sweetness.
            </p>
          </div>

          {/* Our promise */}
          <div
            className="p-8"
            style={{ backgroundColor: "var(--card)", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}
          >
            <p className="eyebrow">Our promise</p>
            <h2
              className="mt-3 leading-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 400, color: "var(--espresso)" }}
            >
              Honest coffee, always
            </h2>
            <p className="mt-4 leading-relaxed" style={{ fontSize: "15px", color: "var(--primary)" }}>
              We describe our coffee honestly, pack it with care and stay close to the people
              and places it comes from. When you order, you talk to us directly — no middlemen,
              no surprises.
            </p>
            <p className="mt-3 leading-relaxed" style={{ fontSize: "15px", color: "var(--primary)" }}>
              Available in 50 g, 150 g, 320 g and 1 kg packs, delivered anywhere in Uganda.
            </p>
            <Link href="/shop" className="mt-6 btn-accent inline-flex">
              Shop our coffee
            </Link>
          </div>
        </div>
      </section>

      {/* ── At a glance ────────────────────────────────────────────── */}
      <section className="py-12" style={{ backgroundColor: "var(--background)" }}>
        <div className="container-page">
          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 p-8"
            style={{ backgroundColor: "var(--espresso)", borderRadius: "var(--radius)" }}
          >
            {[
              { label: "Origin", value: "Sipi Town, Kapchorwa" },
              { label: "Region", value: "Mount Elgon, Eastern Uganda" },
              { label: "Coffee type", value: "100% Arabica" },
              { label: "Sizes", value: "50 g · 150 g · 320 g · 1 kg" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p
                  style={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.28em", color: "var(--kraft)" }}
                >
                  {label}
                </p>
                <p
                  className="mt-1"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--crema)" }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessJourney />
      <VisitSipi />
    </>
  );
}
