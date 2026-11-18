import type { Product } from "@/types/product";

// Stand-up pouch in the Cherry's Coffee house style: matte black bag, coloured
// lower band and an oval gold-rimmed label with the cup mark.
const variants: Record<Product["tone"], { band: string; bandDark: string; line1: string; line2?: string }> = {
  instant: { band: "#4a2a1a", bandDark: "#2a170e", line1: "ORGANIC INSTANT COFFEE", line2: "Dark Roast" },
  medium: { band: "#6b3f22", bandDark: "#3d2313", line1: "PREMIUM COFFEE POWDER", line2: "Medium Roast" },
  dark: { band: "#3e2417", bandDark: "#21130b", line1: "ROASTED COFFEE BEANS", line2: "Whole Bean" },
  cascara: { band: "#7a1f22", bandDark: "#47100f", line1: "COFFEE CASCARA", line2: "Cherry Husk Infusion" },
};

const GOLD = "#d4a94f";
const GOLD_DARK = "#9a7430";
const CREAM = "#f2e3c4";

export default function PackageBag({
  tone,
  weight = "320g",
  className = "",
  title,
}: {
  tone: Product["tone"];
  weight?: string;
  className?: string;
  title?: string;
}) {
  const v = variants[tone];
  const id = `bag-${tone}`;

  return (
    <svg
      viewBox="0 0 200 280"
      className={className}
      role="img"
      aria-label={title ?? `Cherry's Coffee ${v.line1.toLowerCase()} pack, ${weight}`}
    >
      <defs>
        {/* Matte sheen across the bag */}
        <linearGradient id={`${id}-body`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#0f0b09" />
          <stop offset="0.18" stopColor="#2a221d" />
          <stop offset="0.45" stopColor="#17110e" />
          <stop offset="0.8" stopColor="#221a16" />
          <stop offset="1" stopColor="#0c0907" />
        </linearGradient>
        <linearGradient id={`${id}-band`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor={v.bandDark} />
          <stop offset="0.3" stopColor={v.band} />
          <stop offset="0.7" stopColor={v.band} />
          <stop offset="1" stopColor={v.bandDark} />
        </linearGradient>
        <radialGradient id={`${id}-label`} cx="0.5" cy="0.4" r="0.65">
          <stop offset="0" stopColor="#4a2e1c" />
          <stop offset="1" stopColor="#1e120b" />
        </radialGradient>
        <linearGradient id={`${id}-gold`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#f3d27a" />
          <stop offset="0.5" stopColor={GOLD} />
          <stop offset="1" stopColor={GOLD_DARK} />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <path d="M14 18q0-8 8-8h156q8 0 8 8v244q0 10-10 10H24q-10 0-10-10Z" />
        </clipPath>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="100" cy="274" rx="84" ry="5" fill="#000" opacity="0.25" />

      <g clipPath={`url(#${id}-clip)`}>
        <rect x="0" y="0" width="200" height="280" fill={`url(#${id}-body)`} />
        {/* Coloured lower band */}
        <rect x="0" y="176" width="200" height="62" fill={`url(#${id}-band)`} />
        {/* Heat seal + zip */}
        <rect x="0" y="10" width="200" height="12" fill="#000" opacity="0.35" />
        <line x1="14" y1="34" x2="186" y2="34" stroke="#000" strokeWidth="2" opacity="0.5" />
        <line x1="14" y1="36" x2="186" y2="36" stroke="#3a302a" strokeWidth="0.8" />
        {/* Side gusset shading */}
        <rect x="14" y="0" width="6" height="280" fill="#000" opacity="0.25" />
        <rect x="180" y="0" width="6" height="280" fill="#000" opacity="0.3" />
      </g>

      {/* Tear notches */}
      <path d="M14 26l4 2-4 2ZM186 26l-4 2 4 2Z" fill="#000" opacity="0.6" />

      {/* Degassing valve */}
      <circle cx="100" cy="52" r="7" fill="#0a0807" stroke="#2f2722" strokeWidth="1.5" />
      <circle cx="100" cy="52" r="3" fill="#1c1613" />

      {/* Oval label */}
      <ellipse cx="100" cy="152" rx="66" ry="86" fill={`url(#${id}-label)`} stroke={`url(#${id}-gold)`} strokeWidth="3" />
      <ellipse cx="100" cy="152" rx="61" ry="81" fill="none" stroke={GOLD} strokeWidth="0.7" opacity="0.8" />

      {/* Cup with steam, flanked by beans */}
      <g transform="translate(100 88)">
        <path d="M-4 -14c-2 -3 2 -5 0 -8M2 -14c-2 -3 2 -5 0 -8" stroke={CREAM} strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.85" />
        <path d="M-10 -8h20l-2 10q-1 4-5 4h-6q-4 0-5-4Z" fill={`url(#${id}-gold)`} />
        <path d="M10 -5h3a3 3 0 0 1 0 6h-3" stroke={GOLD} strokeWidth="1.5" fill="none" />
        <ellipse cx="0" cy="7" rx="14" ry="2" fill={GOLD_DARK} />
        <g fill="#8a4a24">
          <ellipse cx="-24" cy="0" rx="6" ry="4" transform="rotate(-20 -24 0)" />
          <ellipse cx="24" cy="0" rx="6" ry="4" transform="rotate(20 24 0)" />
        </g>
        <path d="M-29 1q5-2 10-2M19 -1q5 0 10 2" stroke="#3a1d0e" strokeWidth="0.9" fill="none" />
      </g>

      {/* Wordmark */}
      <text x="100" y="122" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="21" fontWeight="700" fill={`url(#${id}-gold)`} letterSpacing="0.5">
        CHERRY&apos;S
      </text>
      <line x1="58" y1="134" x2="72" y2="134" stroke={GOLD} strokeWidth="0.8" />
      <line x1="128" y1="134" x2="142" y2="134" stroke={GOLD} strokeWidth="0.8" />
      <text x="100" y="138" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="13" fontWeight="700" fill={`url(#${id}-gold)`} letterSpacing="1.5">
        COFFEE
      </text>
      <text x="100" y="156" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontStyle="italic" fontSize="10" fill={CREAM}>
        Sipi&apos;s Finest Coffee
      </text>

      {/* Product line */}
      <line x1="48" y1="166" x2="152" y2="166" stroke={GOLD} strokeWidth="0.6" />
      <text x="100" y="176" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7.2" fontWeight="700" fill={GOLD} letterSpacing="0.3">
        {v.line1}
      </text>
      <line x1="48" y1="181" x2="152" y2="181" stroke={GOLD} strokeWidth="0.6" />
      {v.line2 && (
        <text x="100" y="192" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="7" fill={CREAM} opacity="0.9">
          {v.line2}
        </text>
      )}
      <text x="100" y="203" textAnchor="middle" fontFamily="Georgia, serif" fontSize="5.6" fill={CREAM} opacity="0.75">
        Freshly Packed for Rich Aroma
      </text>
      <text x="100" y="217" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill={CREAM}>
        Net Weight: {weight}
      </text>

      {/* Leaf flourish */}
      <g fill={GOLD} opacity="0.85">
        <path d="M100 228q-8-2-12 3q8 2 12-3Z" />
        <path d="M100 228q8-2 12 3q-8 2-12-3Z" />
        <circle cx="100" cy="228" r="1.4" />
      </g>
    </svg>
  );
}
