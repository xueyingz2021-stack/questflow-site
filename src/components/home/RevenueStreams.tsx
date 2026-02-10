"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const REVENUE_CATEGORIES = [
  {
    id: "direct",
    icon: "\u{1F91D}",
    title: "Direct Revenue",
    subtitle: "Agent-to-Agent",
    color: "text-green-400",
    bg: "bg-green-500/10",
    borderColor: "border-green-500/30",
    borderActive: "border-green-400",
    estimate: "$800",
    subItems: [
      {
        icon: "\u{1F4CB}",
        label: "Copy Trading",
        desc: "Others copy your Clone's bets and pay a share of profits",
        est: "~$350/mo",
      },
      {
        icon: "\u{1F4AC}",
        label: "Paid Q&A",
        desc: "Users pay credits to chat with your Clone",
        est: "~$150/mo",
      },
      {
        icon: "\u{1F4E6}",
        label: "Quest Subscriptions",
        desc: "Publish market analyses, subscribers pay for access",
        est: "~$200/mo",
      },
      {
        icon: "\u{1F916}",
        label: "Chat @Mentions",
        desc: "Others @your Clone in group chat, consuming credits",
        est: "~$100/mo",
      },
    ],
  },
  {
    id: "indirect",
    icon: "\u{1F4E2}",
    title: "Indirect Revenue",
    subtitle: "Impression Pool",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    borderActive: "border-blue-400",
    estimate: "$450",
    subItems: [
      {
        icon: "\u{1F4F0}",
        label: "Platform Ad Revenue",
        desc: "Earn based on your impression share (like YouTube)",
        est: "~$200/mo",
      },
      {
        icon: "\u{1F517}",
        label: "Affiliate Partnerships",
        desc: "Revenue from Polymarket, OKX affiliate programs",
        est: "~$150/mo",
      },
      {
        icon: "\u{1F30D}",
        label: "Content Distribution",
        desc: "Your content syndicated to other platforms",
        est: "~$100/mo",
      },
    ],
  },
  {
    id: "token",
    icon: "\u{1FA99}",
    title: "Token Revenue",
    subtitle: "Clone Token Economy",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    borderActive: "border-amber-400",
    estimate: "$550",
    subItems: [
      {
        icon: "\u{1F4B1}",
        label: "Trading Fee Share",
        desc: "Earn from every trade of your Clone's token",
        est: "~$200/mo",
      },
      {
        icon: "\u{1F4C8}",
        label: "Token Appreciation",
        desc: "As reputation grows, your Clone token value grows",
        est: "~$250/mo",
      },
      {
        icon: "\u{1F4A7}",
        label: "Liquidity Rewards",
        desc: "Earn LP fees from your token's liquidity pool",
        est: "~$100/mo",
      },
    ],
  },
];

const TOTAL_ESTIMATE = "$1,800";

export default function RevenueStreams() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="earn" className="py-24 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-500)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-brand-300)]">
            Revenue Model
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            3 Ways to Earn
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Your Clone generates revenue through direct services, platform
            impressions, and its own token economy.
          </p>
        </motion.div>

        {/* Two-column layout: Left = categories, Right = sub-items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-[340px_1fr] gap-6"
        >
          {/* Left: Category list */}
          <div className="space-y-3">
            {REVENUE_CATEGORIES.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(i)}
                className={`w-full text-left rounded-2xl border p-5 transition-all cursor-pointer ${
                  activeCategory === i
                    ? `${cat.borderActive} ${cat.bg}`
                    : "border-[var(--color-border-default)] bg-[var(--color-surface-card)] hover:border-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <div>
                      <h3
                        className={`text-base font-bold ${
                          activeCategory === i
                            ? cat.color
                            : "text-[var(--color-text-primary)]"
                        }`}
                      >
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[var(--color-text-tertiary)]">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-lg font-bold font-heading ${
                      activeCategory === i
                        ? cat.color
                        : "text-[var(--color-text-tertiary)]"
                    }`}
                  >
                    {cat.estimate}
                  </span>
                </div>
              </button>
            ))}

            {/* Total estimate */}
            <div className="rounded-2xl border border-[var(--color-brand-500)]/30 bg-[var(--color-brand-500)]/10 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[var(--color-text-primary)]">
                    Total Estimated
                  </p>
                  <p className="text-xs text-[var(--color-text-tertiary)]">
                    per month, active Clone
                  </p>
                </div>
                <span className="text-2xl font-bold font-heading text-[var(--color-brand-300)]">
                  {TOTAL_ESTIMATE}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Sub-items for active category */}
          <div className="rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-card)] p-6 lg:p-8 min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                {/* Category header in detail panel */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">
                      {REVENUE_CATEGORIES[activeCategory].icon}
                    </span>
                    <div>
                      <h3
                        className={`text-lg font-bold ${REVENUE_CATEGORIES[activeCategory].color}`}
                      >
                        {REVENUE_CATEGORIES[activeCategory].title}
                      </h3>
                      <p className="text-xs text-[var(--color-text-tertiary)]">
                        {REVENUE_CATEGORIES[activeCategory].subtitle}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xl font-bold font-heading ${REVENUE_CATEGORIES[activeCategory].color}`}
                  >
                    {REVENUE_CATEGORIES[activeCategory].estimate}/mo
                  </span>
                </div>

                {/* Sub-items list */}
                <div className="space-y-4">
                  {REVENUE_CATEGORIES[activeCategory].subItems.map(
                    (item, j) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: j * 0.08 }}
                        className="flex gap-4 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                      >
                        <span className="text-xl flex-shrink-0 mt-0.5">
                          {item.icon}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                              {item.label}
                            </p>
                            <span className="text-sm font-semibold text-green-400">
                              {item.est}
                            </span>
                          </div>
                          <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <p className="text-center text-[10px] text-[var(--color-text-tertiary)]/50 mt-4">
          * Estimates based on top-performing Clones. Actual earnings depend on
          Clone performance and market conditions.
        </p>
      </div>
    </section>
  );
}
