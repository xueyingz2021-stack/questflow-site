"use client";

import { motion } from "framer-motion";

/* ── Four Beats → mapped to feature sections ── */

/* Beat 1: Problem */
const PROBLEM = {
  title: "The Problem",
  desc: "Polymarket is a gold mine \u2014 but no human can keep up. Thousands of markets, 24/7 odds movement, breaking news every minute. You miss alpha while you sleep.",
};

/* Beat 2: Identity Shift */
const IDENTITY = {
  title: "The Shift",
  desc: "You don\u2019t get a tool. You get your own AI Clone with its own wallet, its own token, running 24/7, hunting for edge. Your Clone is your digital self in prediction markets.",
};

/* Beat 3: What It Finds */
const FINDS = [
  { icon: "\u{1F4B0}", label: "Mispriced odds across 10+ platforms" },
  { icon: "\u{1F433}", label: "Whale movements & smart money signals" },
  { icon: "\u{1F4F0}", label: "Breaking news before the market reacts" },
  { icon: "\u{1F504}", label: "Cross-market arbitrage opportunities" },
  { icon: "\u2728", label: "Hidden edges you didn\u2019t know existed" },
];

/* Beat 4: What It Does */
const DOES_STEPS = [
  { step: "Discovers", desc: "Scans every market, every second" },
  { step: "Analyzes", desc: "Multi-agent roundtable for conviction" },
  { step: "Bets", desc: "On-chain execution, self-custody" },
  { step: "Earns", desc: "Profits, tokens, copy-trading fees" },
];

/* ── Questflow vs Others comparison ── */
const COMPARE_ROWS = [
  { feature: "Market Sources", questflow: "10+ aggregated", others: "1\u20132 platforms" },
  { feature: "AI Analysis", questflow: "Multi-agent roundtable", others: "Single model" },
  { feature: "Availability", questflow: "24/7 autonomous", others: "Manual" },
  { feature: "Cross-Market Arbitrage", questflow: "\u2713", others: "\u2717" },
  { feature: "Own AI Clone", questflow: "\u2713", others: "\u2717" },
  { feature: "Clone Token Economy", questflow: "\u2713", others: "\u2717" },
  { feature: "Self-Custody", questflow: "\u2713", others: "Varies" },
  { feature: "Speed to React", questflow: "Seconds", others: "Minutes\u2013hours" },
];

export default function WhyQuestflow() {
  return (
    <section id="why" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-brand-300)]">
            Built Different
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Why Questflow?
          </h2>
        </motion.div>

        {/* ── Beat 1 & 2: Problem → Identity Shift (two columns) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {/* Problem */}
          <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{"\u{274C}"}</span>
              <h3 className="text-lg font-bold text-red-400">
                {PROBLEM.title}
              </h3>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {PROBLEM.desc}
            </p>
          </div>

          {/* Identity Shift */}
          <div className="rounded-2xl border border-green-500/20 bg-green-500/[0.04] p-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{"\u{1F916}"}</span>
              <h3 className="text-lg font-bold text-green-400">
                {IDENTITY.title}
              </h3>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {IDENTITY.desc}
            </p>
          </div>
        </motion.div>

        {/* ── Beat 3: What Your Clone Finds ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            What Your Clone Finds
          </h3>
          <div className="max-w-2xl mx-auto rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-card)] p-6">
            <ul className="space-y-3">
              {FINDS.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]"
                >
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── Beat 4: What Your Clone Does ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            What Your Clone Does
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {DOES_STEPS.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-[var(--color-brand-500)]/20 bg-gradient-to-br from-[var(--color-brand-500)]/10 to-[var(--color-brand-600)]/5 p-5 text-center"
              >
                <p className="text-xs font-mono text-[var(--color-text-tertiary)] mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h4 className="text-base font-bold text-[var(--color-brand-300)] mb-1">
                  {item.step}
                </h4>
                <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
                  {item.desc}
                </p>
                {/* Arrow connector */}
                {i < DOES_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-[var(--color-text-tertiary)]/40">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-[var(--color-text-tertiary)] mt-4">
            Automatically. While you sleep.
          </p>
        </motion.div>

        {/* ── Questflow vs Others comparison table ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Questflow vs Others
          </h3>
          <div className="rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-card)] overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 text-sm font-semibold border-b border-[var(--color-border-default)]">
              <div className="px-6 py-4 text-[var(--color-text-tertiary)]">
                Feature
              </div>
              <div className="px-6 py-4 text-center text-[var(--color-brand-300)]">
                Questflow
              </div>
              <div className="px-6 py-4 text-center text-[var(--color-text-tertiary)]">
                Others
              </div>
            </div>

            {/* Table rows */}
            {COMPARE_ROWS.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 text-sm ${
                  i < COMPARE_ROWS.length - 1
                    ? "border-b border-[var(--color-border-default)]"
                    : ""
                }`}
              >
                <div className="px-6 py-4 text-[var(--color-text-secondary)]">
                  {row.feature}
                </div>
                <div className="px-6 py-4 text-center text-green-400 font-medium">
                  {row.questflow}
                </div>
                <div className="px-6 py-4 text-center text-[var(--color-text-tertiary)]">
                  {row.others}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
