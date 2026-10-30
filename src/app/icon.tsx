import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#2b1a12", // espresso
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 48 48"
          fill="none"
        >
          {/* Bold C arc */}
          <path
            d="M38 10a20 20 0 1 0 0 28"
            stroke="#c8a882"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Cup body */}
          <path
            d="M17 20h14l-2 10a2 2 0 0 1-2 1.5h-6a2 2 0 0 1-2-1.5Z"
            fill="#9e3a2b"
          />
          {/* Cup handle */}
          <path
            d="M31 23h2.5a3 3 0 0 1 0 6H31"
            stroke="#9e3a2b"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Saucer */}
          <rect x="14" y="31.5" width="20" height="2" rx="1" fill="#c8a882" />
          {/* Steam */}
          <path
            d="M20 18c0-1.5 2-1.5 2-3M24 18c0-1.5 2-1.5 2-3"
            stroke="#c8a882"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
