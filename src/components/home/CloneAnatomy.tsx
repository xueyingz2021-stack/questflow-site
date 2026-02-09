"use client";

import { motion } from "framer-motion";

const LAYERS = [
  {
    label: "Base AI Model",
    desc: "GPT-4 class reasoning engine",
    icon: "\u{1F9E0}",
    color: "from-blue-500/30 to-blue-600/10",
    border: "border-blue-500/30",
  },
  {
    label: "Your Interests",
    desc: "Politics, Crypto, Sports & more",
    icon: "\u{1F3AF}",
    color: "from-purple-500/30 to-purple-600/10",
    border: "border-purple-500/30",
  },
  {
    label: "Analysis Style",
    desc: "Analyst, Degen, Balanced, or Contrarian",
    icon: "\u{1F4CA}",
    color: "from-[var(--color-brand-500)]/30 to-[var(--color-brand-600)]/10",
    border: "border-[var(--color-brand-500)]/30",
  },
  {
    label: "Risk Profile",
    desc: "Conservative to Aggressive",
    icon: "\u{1F6E1}\uFE0F",
    color: "from-amber-500/30 to-amber-600/10",
    border: "border-amber-500/30",
  },
  {
    label: "Market Memory",
    desc: "Learns from every bet & outcome",
    icon: "\u{1F4BE}",
    color: "from-emerald-500/30 to-emerald-600/10",
    border: "border-emerald-500/30",
  },
];

export default function CloneAnatomy() {
  return (
    <section id="clone-anatomy" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-brand-300)]">
            Clone Anatomy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Your Clone. Your Rules.
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Every Clone is unique — built from your interests, style, and risk
            tolerance. No two Clones think alike.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual: Stacked layers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center"
          >
            <div className="w-full max-w-md space-y-3">
              {LAYERS.map((layer, i) => (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-center gap-4 rounded-xl border ${layer.border} bg-gradient-to-r ${layer.color} p-4 backdrop-blur-sm`}
                >
                  <span className="text-2xl flex-shrink-0">{layer.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                      {layer.label}
                    </p>
                    <p className="text-xs text-[var(--color-text-tertiary)]">
                      {layer.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Connecting line */}
            <div className="absolute left-[2.25rem] top-8 bottom-8 w-px bg-gradient-to-b from-blue-500/40 via-[var(--color-brand-500)]/40 to-emerald-500/40 hidden md:block" />
          </motion.div>

          {/* Right: Result */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-card)] p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[var(--color-brand-400)] to-[var(--color-brand-600)] flex items-center justify-center text-2xl font-bold animate-[glow-pulse_3s_ease-in-out_infinite]">
                  T
                </div>
                <div>
                  <p className="font-semibold text-lg">Tars</p>
                  <p className="text-xs text-[var(--color-text-tertiary)]">
                    Analyst &bull; Moderate Risk &bull; 24/7 Active
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Win Rate", value: "73%" },
                  { label: "Markets", value: "142" },
                  { label: "30d PnL", value: "+$2,847" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center rounded-xl bg-[var(--color-surface-secondary)] p-3"
                  >
                    <p className="text-lg font-bold text-[var(--color-brand-300)]">
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Recent Activity
                </p>
                {[
                  {
                    action: "Placed bet",
                    market: "Fed cuts rates March",
                    amount: "+$31",
                    time: "2m ago",
                  },
                  {
                    action: "Scanning",
                    market: "127 active markets",
                    amount: "",
                    time: "now",
                  },
                  {
                    action: "Won bet",
                    market: "BTC above $100k",
                    amount: "+$89",
                    time: "1h ago",
                  },
                ].map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-xs py-1.5 border-b border-[var(--color-border-default)]/50 last:border-0"
                  >
                    <span className="text-[var(--color-text-secondary)]">
                      {activity.action}:{" "}
                      <span className="text-[var(--color-text-primary)]">
                        {activity.market}
                      </span>
                    </span>
                    <div className="flex items-center gap-3">
                      {activity.amount && (
                        <span className="text-green-400">
                          {activity.amount}
                        </span>
                      )}
                      <span className="text-[var(--color-text-tertiary)]">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
