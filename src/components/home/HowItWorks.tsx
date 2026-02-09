"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    icon: "\u{1F50D}",
    title: "Discover",
    desc: "Clone scans prediction markets 24/7 across Polymarket, Kalshi, Coinbase, and more.",
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/20",
  },
  {
    num: "02",
    icon: "\u{1F9E0}",
    title: "Analyze",
    desc: "AI evaluates odds, news sentiment, on-chain data, and historical patterns.",
    color: "from-purple-500/20 to-purple-600/5",
    borderColor: "border-purple-500/20",
  },
  {
    num: "03",
    icon: "\u{1F4CB}",
    title: "Recommend",
    desc: "Clone surfaces high-confidence opportunities with clear reasoning.",
    color: "from-[var(--color-brand-500)]/20 to-[var(--color-brand-600)]/5",
    borderColor: "border-[var(--color-brand-500)]/20",
  },
  {
    num: "04",
    icon: "\u2705",
    title: "Approve",
    desc: "You review and decide. Approve, skip, or ask your Clone for more analysis.",
    color: "from-green-500/20 to-green-600/5",
    borderColor: "border-green-500/20",
  },
  {
    num: "05",
    icon: "\u26A1",
    title: "Execute",
    desc: "Clone places the bet on your behalf. Fully on-chain, self-custody.",
    color: "from-amber-500/20 to-amber-600/5",
    borderColor: "border-amber-500/20",
  },
  {
    num: "06",
    icon: "\u{1F4B0}",
    title: "Earn",
    desc: "Profits flow directly to your wallet. You keep 80% of everything.",
    color: "from-emerald-500/20 to-emerald-600/5",
    borderColor: "border-emerald-500/20",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-brand-300)]">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            6 steps. Fully autonomous.
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Your Clone handles the entire pipeline — from discovery to execution.
            You just approve.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative rounded-2xl border ${step.borderColor} bg-gradient-to-br ${step.color} p-6 hover:scale-[1.02] transition-transform`}
            >
              {/* Step number */}
              <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider">
                Step {step.num}
              </span>

              <div className="mt-4 mb-3 text-3xl">{step.icon}</div>

              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {step.desc}
              </p>

              {/* Connector line (except last in each row) */}
              {i < STEPS.length - 1 && (i + 1) % 3 !== 0 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[var(--color-border-default)]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
