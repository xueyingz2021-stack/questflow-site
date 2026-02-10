"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    icon: "\u{1F50D}",
    title: "Discover",
    headline: "Your Clone scans every market, all the time.",
    bullets: [
      "Monitors 10+ prediction markets 24/7",
      "Detects mispriced odds & whale movements",
      "Reacts to breaking news in seconds",
    ],
    color: "text-blue-400",
    bg: "from-blue-500/15 to-blue-600/5",
    borderColor: "border-blue-500/20",
    bulletColor: "text-blue-400",
  },
  {
    num: "02",
    icon: "\u26A1",
    title: "Bet",
    headline: "High-confidence picks, one-click execution.",
    bullets: [
      "Surfaces opportunities with clear reasoning",
      "You approve or let it run fully autonomous",
      "On-chain execution with self-custody",
    ],
    color: "text-[var(--color-brand-300)]",
    bg: "from-[var(--color-brand-500)]/15 to-[var(--color-brand-600)]/5",
    borderColor: "border-[var(--color-brand-500)]/20",
    bulletColor: "text-[var(--color-brand-400)]",
  },
  {
    num: "03",
    icon: "\u{1F4B0}",
    title: "Earn",
    headline: "Multiple revenue streams, not just bets.",
    bullets: [
      "Profits flow directly to your wallet",
      "Earn from copy trading, Q&A, subscriptions",
      "Your Clone token grows with your reputation",
    ],
    color: "text-emerald-400",
    bg: "from-emerald-500/15 to-emerald-600/5",
    borderColor: "border-emerald-500/20",
    bulletColor: "text-emerald-400",
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
            3 Steps. Fully Autonomous.
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Your Clone handles everything — from discovery to execution.
          </p>
        </motion.div>

        {/* Steps — 3-column cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`group relative rounded-2xl border ${step.borderColor} bg-gradient-to-br ${step.bg} p-7 hover:scale-[1.02] transition-transform`}
            >
              {/* Step number */}
              <span className="text-[10px] font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider">
                Step {step.num}
              </span>

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mt-4 mb-2">
                <span className="text-3xl">{step.icon}</span>
                <h3 className={`text-2xl font-bold ${step.color}`}>
                  {step.title}
                </h3>
              </div>

              {/* Headline */}
              <p className="text-sm font-medium text-[var(--color-text-primary)] mb-4">
                {step.headline}
              </p>

              {/* Bullet points */}
              <ul className="space-y-2">
                {step.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)] leading-relaxed"
                  >
                    <span className={`mt-1 flex-shrink-0 ${step.bulletColor}`}>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2.5 6L5 8.5L9.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Connector arrow */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 w-8 items-center justify-center text-[var(--color-text-tertiary)]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M7 4l6 6-6 6"
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
      </div>
    </section>
  );
}
