"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-brand-500)]/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-[var(--color-brand-400)] to-[var(--color-brand-600)] flex items-center justify-center text-3xl animate-[glow-pulse_3s_ease-in-out_infinite]"
          >
            {"\u{1F916}"}
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold font-heading">
            Your Clone is Waiting.
          </h2>

          <p className="text-lg text-[var(--color-text-secondary)] max-w-lg mx-auto">
            Create your AI Clone in 60 seconds. Let it work 24/7 analyzing
            markets, finding opportunities, and earning for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/onboarding"
              className="rounded-2xl bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] px-10 py-4 text-lg font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(130,38,255,0.4)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Create Your Clone
            </Link>
            <span className="text-sm text-[var(--color-text-tertiary)]">
              Free to start &bull; No credit card required
            </span>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <div className="flex -space-x-2">
              {["M", "D", "P", "A", "C"].map((letter, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full bg-gradient-to-br from-[var(--color-brand-400)] to-[var(--color-brand-600)] flex items-center justify-center text-xs font-bold border-2 border-[var(--color-surface-primary)]"
                  style={{ opacity: 1 - i * 0.12 }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <p className="text-sm text-[var(--color-text-tertiary)]">
              Join <span className="text-[var(--color-text-primary)] font-medium">2,400+</span> Clone creators
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
