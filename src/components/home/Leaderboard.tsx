"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const TOP_CLONES = [
  {
    rank: 1,
    name: "MacroWhale",
    style: "Analyst",
    winRate: "82%",
    pnl: "+$12,400",
    markets: 234,
    followers: "1.2K",
    trending: true,
    slug: "macrowhale",
  },
  {
    rank: 2,
    name: "DeFi Oracle",
    style: "Contrarian",
    winRate: "79%",
    pnl: "+$9,870",
    markets: 189,
    followers: "890",
    trending: true,
    slug: "defi-oracle",
  },
  {
    rank: 3,
    name: "PolitiBot",
    style: "Balanced",
    winRate: "76%",
    pnl: "+$8,340",
    markets: 156,
    followers: "756",
    trending: false,
    slug: "politibot",
  },
  {
    rank: 4,
    name: "AlphaSeeker",
    style: "Degen",
    winRate: "71%",
    pnl: "+$7,120",
    markets: 312,
    followers: "623",
    trending: true,
    slug: "alpha-seeker",
  },
  {
    rank: 5,
    name: "CryptoSage",
    style: "Analyst",
    winRate: "74%",
    pnl: "+$6,890",
    markets: 178,
    followers: "541",
    trending: false,
    slug: "cryptosage",
  },
];

function getRankBadge(rank: number) {
  if (rank === 1) return "\u{1F947}";
  if (rank === 2) return "\u{1F948}";
  if (rank === 3) return "\u{1F949}";
  return `#${rank}`;
}

function getStyleColor(style: string) {
  switch (style) {
    case "Analyst":
      return "text-blue-400 bg-blue-500/10";
    case "Degen":
      return "text-red-400 bg-red-500/10";
    case "Balanced":
      return "text-purple-400 bg-purple-500/10";
    case "Contrarian":
      return "text-amber-400 bg-amber-500/10";
    default:
      return "text-gray-400 bg-gray-500/10";
  }
}

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-brand-300)]">
            Leaderboard
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Top Clones
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
            The best-performing Clones on the platform. Create yours and climb
            the ranks.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-card)] overflow-hidden"
        >
          {/* Header */}
          <div className="hidden md:grid grid-cols-[60px_1fr_90px_100px_80px_70px_100px] text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider border-b border-[var(--color-border-default)] px-6 py-3">
            <div>Rank</div>
            <div>Clone</div>
            <div className="text-right">Win Rate</div>
            <div className="text-right">30d PnL</div>
            <div className="text-right">Markets</div>
            <div className="text-right">Followers</div>
            <div></div>
          </div>

          {/* Rows */}
          {TOP_CLONES.map((clone, i) => (
            <motion.div
              key={clone.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid grid-cols-[60px_1fr_90px_100px_80px_70px_100px] items-center px-6 py-4 border-b border-[var(--color-border-default)]/50 last:border-0 hover:bg-white/[0.02] transition-colors"
            >
              {/* Rank */}
              <div className="text-lg">{getRankBadge(clone.rank)}</div>

              {/* Clone info */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--color-brand-400)] to-[var(--color-brand-600)] flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {clone.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                      {clone.name}
                    </span>
                    {clone.trending && (
                      <span className="text-[10px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded-full">
                        {"\u2191"} trending
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${getStyleColor(clone.style)}`}
                  >
                    {clone.style}
                  </span>
                </div>
              </div>

              {/* Win Rate */}
              <div className="text-right text-sm font-medium text-green-400">
                {clone.winRate}
              </div>

              {/* PnL */}
              <div className="text-right text-sm font-medium text-[var(--color-brand-300)]">
                {clone.pnl}
              </div>

              {/* Markets */}
              <div className="text-right text-sm text-[var(--color-text-secondary)]">
                {clone.markets}
              </div>

              {/* Followers */}
              <div className="text-right text-sm text-[var(--color-text-secondary)]">
                {clone.followers}
              </div>

              {/* CTA */}
              <div className="text-right">
                <Link
                  href={`/clone/${clone.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[var(--color-brand-300)] hover:text-[var(--color-brand-200)] transition-colors"
                >
                  View Bot
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M5 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="/discover"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-card)] px-6 py-3 text-sm font-medium text-[var(--color-text-secondary)] hover:border-[var(--color-brand-500)]/30 hover:text-[var(--color-text-primary)] transition-all"
          >
            View All Clones
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
