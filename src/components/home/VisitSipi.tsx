import Image from "next/image";
import { site } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";
import { ArrowIcon, WhatsAppIcon } from "@/components/shared/Icons";

export default function VisitSipi() {
  return (
    <section id="visit" style={{ backgroundColor: "var(--secondary)" }}>
      <div
        className="grid lg:grid-cols-2"
        style={{ minHeight: "480px" }}
      >
        {/* Left: real Sipi Falls photo — full bleed, no container padding */}
        <div className="relative min-h-72 lg:min-h-0 overflow-hidden">
          <Image
            src="/images/sipifalls.jpg"
            alt="Sipi Falls, Mount Elgon, Uganda"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        {/* Right: content panel */}
        <div
          className="flex flex-col justify-center p-10 sm:p-14 lg:p-16"
          style={{ backgroundColor: "oklch(0.20 0.030 41)" }}
        >
          <p className="eyebrow-crema">Visit the origin</p>
          <h2
            className="mt-4 leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              color: "var(--crema)",
            }}
          >
            Come to Sipi — see where your coffee grows.
          </h2>
          <p
            className="mt-5 leading-relaxed"
            style={{ fontSize: "15px", color: "oklch(0.78 0.09 70 / 0.75)", maxWidth: "36rem" }}
          >
            Walk the gardens, learn how cherries are picked and processed, roast beans the
            traditional way and taste the result — fresh from the source.
          </p>
          <ul
            className="mt-5 space-y-2"
            style={{ fontSize: "14px", color: "oklch(0.78 0.09 70 / 0.65)" }}
          >
            <li>— Guided coffee garden walk</li>
            <li>— Hands-on processing and traditional roasting</li>
            <li>— Tasting session with views of the falls</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink(
                `Hello ${site.name}! I would like to book a coffee experience in Sipi.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsAppIcon /> Book an experience
            </a>
            <a
              href={site.sipiFallsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Explore Sipi Falls <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
