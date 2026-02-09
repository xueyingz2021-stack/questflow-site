"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ACTIVITY_LINES = [
  { text: "Scanning Polymarket...", delay: 0 },
  { text: "Found: Fed rate +25bp @ 68%", delay: 1.5 },
  { text: "Confidence: 82% YES", delay: 3 },
  { text: "Placing $50 bet...", delay: 4.5 },
  { text: "+$31 potential return", delay: 6 },
];

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[var(--color-brand-500)]/[0.07] rounded-full blur-[120px]" />
        <div className="absolute top-60 right-0 w-[400px] h-[400px] bg-purple-600/[0.05] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-medium bg-[var(--color-brand-500)]/10 text-[var(--color-brand-300)] border border-[var(--color-brand-500)]/20 rounded-full px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                Prediction Markets are live
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.05] tracking-tight"
            >
              Your AI Clone.
              <br />
              <span className="bg-gradient-to-r from-[var(--color-brand-300)] via-purple-400 to-[var(--color-brand-500)] bg-clip-text text-transparent">
                Works 24/7.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-lg text-[var(--color-text-secondary)] max-w-lg leading-relaxed"
            >
              Create an AI agent that discovers, analyzes, and acts on
              opportunities across prediction markets — earning while you sleep.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/onboarding"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white font-semibold px-8 py-4 rounded-2xl text-base hover:shadow-[0_0_40px_rgba(130,38,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Create Your Clone
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <span className="text-sm text-[var(--color-text-tertiary)] self-center">
                30s setup &middot; Free to start
              </span>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8 pt-4"
            >
              {[
                { value: "1,247", label: "Creators" },
                { value: "$124K", label: "Earned" },
                { value: "127+", label: "Markets" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold font-heading">{stat.value}</p>
                  <p className="text-xs text-[var(--color-text-tertiary)]">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Clone Terminal Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="rounded-3xl border border-[var(--color-border-default)] bg-[var(--color-surface-secondary)]/80 backdrop-blur-xl p-6 shadow-2xl shadow-[var(--color-brand-500)]/5">
              {/* Terminal header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[var(--color-brand-400)] to-[var(--color-brand-600)] flex items-center justify-center text-sm font-bold">
                    T
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Tars</p>
                    <p className="text-xs text-green-400 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      Active &middot; 24/7 Autonomous
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[var(--color-text-tertiary)]">Balance</p>
                  <p className="text-lg font-bold font-heading">$2,847</p>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: "Win Rate", value: "76%", color: "text-green-400" },
                  { label: "Markets", value: "12", color: "text-[var(--color-brand-300)]" },
                  { label: "$CLONE", value: "$0.47", color: "text-amber-400" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-white/[0.03] border border-[var(--color-border-default)] p-3 text-center">
                    <p className="text-xs text-[var(--color-text-tertiary)]">{s.label}</p>
                    <p className={`text-sm font-semibold ${s.color}`}>{s.value}</p>
                  </div>
                ))}
              </div>

              {/* Activity feed */}
              <div className="rounded-xl bg-black/30 border border-[var(--color-border-default)] p-4 font-mono text-xs space-y-2 h-36 overflow-hidden">
                <p className="text-[var(--color-text-tertiary)] mb-2">// Clone Activity</p>
                {ACTIVITY_LINES.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: line.delay, duration: 0.4 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-[var(--color-brand-400)]">&gt;</span>
                    <span className={i === ACTIVITY_LINES.length - 1 ? "text-green-400" : "text-[var(--color-text-secondary)]"}>
                      {line.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Supported platforms */}
              <div className="mt-4 flex items-center gap-2 flex-wrap">
                <span className="text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wider">Powered by</span>
                {["Polymarket", "Kalshi", "Coinbase", "OKX"].map((p) => (
                  <span key={p} className="text-[10px] text-[var(--color-text-tertiary)] bg-white/[0.04] border border-[var(--color-border-default)] rounded-md px-2 py-0.5">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
