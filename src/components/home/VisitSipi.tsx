import { site } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";
import { ArrowIcon, WhatsAppIcon } from "@/components/shared/Icons";

export default function VisitSipi() {
  return (
    <section className="py-20" id="visit">
      <div className="container-page">
        <div className="grid overflow-hidden rounded-3xl bg-leaf text-cream lg:grid-cols-2">
          <div className="relative min-h-64 bg-gradient-to-br from-leaf via-[#2f4630] to-espresso">
            {/* Illustrated Sipi Falls scene — replace with a real photo in /public/images/origin when available */}
            <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <path d="M0 140 L90 60 L170 120 L260 40 L400 130 V300 H0Z" fill="#2a3d29" />
              <path d="M0 190 L110 120 L220 180 L320 110 L400 160 V300 H0Z" fill="#344c33" />
              <rect x="246" y="58" width="16" height="150" fill="#cfe3e8" opacity=".75" />
              <rect x="251" y="58" width="5" height="150" fill="#fff" opacity=".6" />
              <ellipse cx="254" cy="212" rx="40" ry="10" fill="#cfe3e8" opacity=".5" />
              <path d="M0 240 Q100 210 200 240 T400 235 V300 H0Z" fill="#24150e" opacity=".55" />
              {[40, 80, 120, 330, 360].map((x) => (
                <g key={x}>
                  <circle cx={x} cy={250} r="14" fill="#3f5a3a" />
                  <circle cx={x - 4} cy={246} r="2.5" fill="#9e2a2b" />
                  <circle cx={x + 5} cy={252} r="2.5" fill="#9e2a2b" />
                </g>
              ))}
            </svg>
          </div>
          <div className="p-8 sm:p-12">
            <p className="eyebrow !text-gold">Visit the origin</p>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Come to Sipi — see where your coffee grows</h2>
            <p className="mt-4 leading-relaxed text-latte">
              Sipi sits beneath three beautiful waterfalls on the slopes of Mount Elgon. Join a coffee experience to
              walk the gardens, learn how cherries are picked and processed, roast beans the traditional way and taste
              the result — fresh from the source.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-latte">
              <li>• Guided coffee garden walk</li>
              <li>• Hands-on processing and traditional roasting</li>
              <li>• Tasting session with views of the falls</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink(`Hello ${site.name}! I would like to book a coffee experience in Sipi.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-cream text-espresso hover:bg-latte"
              >
                <WhatsAppIcon /> Book a coffee experience
              </a>
              <a href={site.sipiFallsUrl} target="_blank" rel="noopener noreferrer" className="btn border border-cream/60 hover:bg-cream/10">
                Explore Sipi Falls <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
