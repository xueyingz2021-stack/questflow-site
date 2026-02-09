"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CloneAvatar from "@/components/onboarding/CloneAvatar";
import ProgressIndicator from "@/components/onboarding/ProgressIndicator";

export default function WelcomeStep() {
  return (
    <div className="w-full max-w-lg mx-auto text-center flex flex-col items-center gap-8">
      {/* Logo area */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-sm font-medium tracking-widest uppercase text-[var(--color-brand-300)]"
      >
        Questflow
      </motion.div>

      {/* Animated Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <CloneAvatar size="xl" glowing animated />
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-3"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Your AI Clone Works 24/7.
          <br />
          <span className="bg-gradient-to-r from-[var(--color-brand-300)] to-[var(--color-brand-500)] bg-clip-text text-transparent">
            You Keep 80%.
          </span>
        </h1>
        <p className="text-base text-[var(--color-text-secondary)] max-w-md mx-auto leading-relaxed">
          Create your AI Clone in 60 seconds. It will analyze prediction markets,
          find opportunities, and earn for you.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="space-y-4 w-full max-w-sm"
      >
        <Link
          href="/onboarding/profile"
          className="block w-full rounded-2xl bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] px-8 py-4 text-base font-semibold text-white text-center transition-all hover:shadow-[0_0_30px_rgba(130,38,255,0.4)] hover:scale-[1.02] active:scale-[0.98]"
        >
          Get Started
        </Link>

        <p className="text-sm text-[var(--color-text-tertiary)]">
          Already have an account?{" "}
          <button className="text-[var(--color-brand-300)] hover:text-[var(--color-brand-200)] transition-colors cursor-pointer">
            Sign In
          </button>
        </p>
      </motion.div>

      {/* Progress */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <ProgressIndicator currentStep={1} totalSteps={6} />
      </motion.div>
    </div>
  );
}
