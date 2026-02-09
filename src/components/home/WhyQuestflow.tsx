"use client";

import { motion } from "framer-motion";

const DIFFERENTIATORS = [
  {
    icon: "\u{1F310}",
    title: "Market Aggregator",
    desc: "One Clone monitors Polymarket, Kalshi, Coinbase, OKX — all in one place. No more tab-hopping.",
    highlight: "10+ platforms",
  },
  {
    icon: "\u{1F916}",
    title: "Collective Intelligence",
    desc: "Your Clone can @mention other Clones for roundtable analysis. Get diverse AI perspectives before you bet.",
    highlight: "Multi-agent chat",
  },
  {
    icon: "\u{1F4B8}",
    title: "80% Revenue Share",
    desc: "You keep 80% of everything your Clone earns. The industry average? Less than 50%.",
    highlight: "Industry-leading",
  },
  {
    icon: "\u2728",
    title: "AI-Native Design",
    desc: "Not a dashboard with AI bolted on. Every feature is built around your AI Clone as the protagonist.",
    highlight: "Clone-first UX",
  },
  {
    icon: "\u{23F0}",
    title: "24/7 Autonomous",
    desc: "Markets don't sleep. Neither does your Clone. It monitors, analyzes, and recommends around the clock.",
    highlight: "Always on",
  },
  {
    icon: "\u{1FA99}",
    title: "User = Agent = Token",
    desc: "Your Clone has its own token. As your reputation grows, your token appreciates. Aligned incentives.",
    highlight: "Token economy",
  },
];

const COMPARISON = [
  {
    feature: "Revenue Share",
    questflow: "80%",
    others: "30-50%",
    winner: "questflow",
  },
  {
    feature: "Market Sources",
    questflow: "10+",
    others: "1-2",
    winner: "questflow",
  },
  {
    feature: "AI Analysis",
    questflow: "Multi-agent",
    others: "Single model",
    winner: "questflow",
  },
  {
    feature: "Availability",
    questflow: "24/7",
    others: "Manual",
    winner: "questflow",
  },
  {
    feature: "Token Upside",
    questflow: "\u2713",
    others: "\u2717",
    winner: "questflow",
  },
  {
    feature: "Self-Custody",
    questflow: "\u2713",
    others: "Varies",
    winner: "questflow",
  },
];

export default function WhyQuestflow() {
  return (
    <section id="why" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
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
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
            We built the platform we wished existed. Here&apos;s what makes us
            different.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {DIFFERENTIATORS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-card)] p-6 hover:border-[var(--color-brand-500)]/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-brand-300)] bg-[var(--color-brand-500)]/10 px-2 py-0.5 rounded-full">
                  {item.highlight}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-card)] overflow-hidden"
        >
          <div className="grid grid-cols-3 text-sm font-semibold border-b border-[var(--color-border-default)]">
            <div className="p-4 text-[var(--color-text-tertiary)]">Feature</div>
            <div className="p-4 text-center text-[var(--color-brand-300)]">
              Questflow
            </div>
            <div className="p-4 text-center text-[var(--color-text-tertiary)]">
              Others
            </div>
          </div>
          {COMPARISON.map((row) => (
            <div
              key={row.feature}
              className="grid grid-cols-3 text-sm border-b border-[var(--color-border-default)]/50 last:border-0"
            >
              <div className="p-4 text-[var(--color-text-secondary)]">
                {row.feature}
              </div>
              <div className="p-4 text-center font-medium text-[var(--color-brand-300)]">
                {row.questflow}
              </div>
              <div className="p-4 text-center text-[var(--color-text-tertiary)]">
                {row.others}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
