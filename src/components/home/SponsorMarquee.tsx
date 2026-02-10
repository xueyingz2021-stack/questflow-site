"use client";

const SPONSORS = [
  { name: "Coinbase", logo: "coinbase" },
  { name: "OKX", logo: "okx" },
  { name: "CyberFund", logo: "cyberfund" },
  { name: "Polymarket", logo: "polymarket" },
  { name: "Kalshi", logo: "kalshi" },
];

// Double the list for seamless loop
const MARQUEE_ITEMS = [...SPONSORS, ...SPONSORS, ...SPONSORS];

export default function SponsorMarquee() {
  return (
    <section className="py-10 border-y border-[var(--color-border-default)]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-4">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-[var(--color-text-tertiary)]">
          Backed by & Integrated with
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--color-surface-primary)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--color-surface-primary)] to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="flex animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
          {MARQUEE_ITEMS.map((sponsor, i) => (
            <div
              key={`${sponsor.name}-${i}`}
              className="flex-shrink-0 mx-10 flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-lg bg-[var(--color-surface-card)] border border-[var(--color-border-default)] flex items-center justify-center text-sm font-bold text-[var(--color-text-tertiary)]">
                {sponsor.name.charAt(0)}
              </div>
              <span className="text-sm font-semibold text-[var(--color-text-secondary)] whitespace-nowrap">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
