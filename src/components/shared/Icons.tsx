type IconProps = { className?: string };

export function WhatsAppIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.56.94.95-3.47-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.2 4.23-9.43 9.43-9.43 2.52 0 4.89.98 6.67 2.76a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.44 9.43m8.02-17.45A11.27 11.27 0 0 0 12.05.72C5.8.72.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.6l6.01-1.58a11.3 11.3 0 0 0 5.43 1.38h.01c6.25 0 11.34-5.09 11.35-11.34 0-3.03-1.18-5.88-3.33-8.02" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.28 6.72 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.37c0-.52-.35-.97-.85-1.09l-4.42-1.1c-.44-.11-.9.05-1.17.41l-.97 1.29a1.13 1.13 0 0 1-1.21.38 12.04 12.04 0 0 1-7.14-7.14 1.13 1.13 0 0 1 .38-1.21l1.3-.97c.36-.27.52-.73.4-1.17l-1.1-4.42A1.13 1.13 0 0 0 5.37 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.24a2.25 2.25 0 0 1-1.07 1.92l-7.5 4.61a2.25 2.25 0 0 1-2.36 0L3.32 8.9a2.25 2.25 0 0 1-1.07-1.91v-.25" />
    </svg>
  );
}

export function PinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.14-7.5 11.25-7.5 11.25S4.5 17.64 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

/**
 * Cherry's Coffee logo mark — a bold "C" with a coffee cup nestled inside.
 * The C is drawn in espresso brown; the cup sits centred inside the opening.
 */
export function CherryMark({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-label="Cherry's Coffee logo mark">
      {/* Bold C arc — open on the right */}
      <path
        d="M38 10a20 20 0 1 0 0 28"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        style={{ color: "var(--accent)" }}
      />

      {/* Cup body */}
      <path
        d="M17 20h14l-2 10a2 2 0 0 1-2 1.5h-6a2 2 0 0 1-2-1.5Z"
        fill="currentColor"
        style={{ color: "var(--accent)" }}
      />

      {/* Cup handle */}
      <path
        d="M31 23h2.5a3 3 0 0 1 0 6H31"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        style={{ color: "var(--accent)" }}
      />

      {/* Saucer */}
      <rect x="14" y="31.5" width="20" height="2" rx="1" fill="currentColor" style={{ color: "var(--accent)" }} />

      {/* Steam wisps */}
      <path
        d="M20 18c0-1.5 2-1.5 2-3M24 18c0-1.5 2-1.5 2-3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        style={{ color: "var(--kraft)" }}
      />
    </svg>
  );
}
