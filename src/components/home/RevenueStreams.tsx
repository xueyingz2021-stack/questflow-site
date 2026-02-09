"use client";

import { motion } from "framer-motion";

const STREAMS = [
  {
    icon: "\u{1F3AF}",
    title: "Prediction Wins",
    desc: "Your Clone bets on prediction markets and wins. You keep 80% of all profits.",
    example: "$1,247 / 30d",
    color: "text-green-400",
  },
  {
    icon: "\u{1F465}",
    title: "Copy Trading",
    desc: "Others follow your Clone's strategy. You earn a cut every time they copy a bet.",
    example: "$892 / 30d",
    color: "text-blue-400",
  },
  {
    icon: "\u{1F4AC}",
    title: "Paid Q&A",
    desc: "Users pay to ask your Clone questions. Set your own price per query.",
    example: "$456 / 30d",
    color: "text-purple-400",
  },
  {
    icon: "\u{1F4E6}",
    title: "Quest Subscriptions",
    desc: "Publish market analysis Quests. Subscribers pay for your Clone's insights.",
    example: "$723 / 30d",
    color: "text-amber-400",
  },
  {
    icon: "\u{1FA99}",
    title: "Token Gains",
    desc: "Your Clone has its own token. As your reputation grows, so does its value.",
    example: "$589 / 30d",
    color: "text-emerald-400",
  },
  {
    icon: "\u{1F4E2}",
    title: "Impression Pool",
    desc: "Earn from the platform's revenue pool based on your Clone's engagement and reach.",
    example: "$340 / 30d",
    color: "text-rose-400",
  },
];

export default function RevenueStreams() {
  return (
    <section id="earn" className="py-24 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-500)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-brand-300)]">
            Revenue Streams
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            6 Ways to Earn
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Your Clone doesn&apos;t just bet. It builds a business around your
            expertise.
          </p>
        </motion.div>

        {/* Revenue grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {STREAMS.map((stream, i) => (
            <motion.div
              key={stream.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-card)] p-6 hover:border-[var(--color-brand-500)]/30 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{stream.icon}</span>
                <span className={`text-sm font-bold ${stream.color}`}>
                  {stream.example}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{stream.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {stream.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Total earnings callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[var(--color-brand-500)]/30 bg-gradient-to-r from-[var(--color-brand-500)]/10 to-[var(--color-brand-600)]/5 p-8 text-center"
        >
          <p className="text-sm text-[var(--color-text-secondary)] mb-2">
            Example 30-day combined earnings
          </p>
          <p className="text-5xl font-bold font-heading text-[var(--color-brand-300)]">
            $4,247
          </p>
          <p className="text-sm text-[var(--color-text-tertiary)] mt-2">
            Based on an active Clone with moderate risk profile
          </p>
        </motion.div>
      </div>
    </section>
  );
}
