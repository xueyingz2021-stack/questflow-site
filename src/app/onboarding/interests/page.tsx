"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useOnboardingStore } from "@/stores/onboardingStore";
import ProgressIndicator from "@/components/onboarding/ProgressIndicator";
import InterestCard from "@/components/onboarding/InterestCard";

const INTERESTS = [
  { icon: "\u{1F3DB}\uFE0F", label: "Politics" },
  { icon: "\u{1FA99}", label: "Crypto" },
  { icon: "\u26BD", label: "Sports" },
  { icon: "\u{1F4B0}", label: "Finance" },
  { icon: "\u{1F4BB}", label: "Tech" },
  { icon: "\u{1F3AC}", label: "Culture" },
  { icon: "\u{1F30D}", label: "World Events" },
  { icon: "\u{1F52C}", label: "Science" },
  { icon: "\u{1F3AE}", label: "Gaming" },
  { icon: "\u2728", label: "AI & ML" },
];

export default function InterestsStep() {
  const { interests, toggleInterest } = useOnboardingStore();

  const canContinue = interests.length >= 2;

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link
          href="/onboarding/profile"
          className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors flex items-center gap-1"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 4L6 8L10 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </Link>
        <ProgressIndicator currentStep={3} totalSteps={6} />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h1 className="text-3xl font-bold">What Markets Interest You?</h1>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Your Clone will focus on these topics to find the best opportunities.
          Select at least 2.
        </p>
      </motion.div>

      {/* Interest Grid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-3 gap-3"
      >
        {INTERESTS.map((interest, i) => (
          <motion.div
            key={interest.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
          >
            <InterestCard
              icon={interest.icon}
              label={interest.label}
              selected={interests.includes(interest.label)}
              onToggle={() => toggleInterest(interest.label)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Selected count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <p className="text-sm text-[var(--color-text-secondary)]">
          Selected:{" "}
          {interests.length > 0 ? (
            <span className="text-[var(--color-brand-300)]">
              {interests.join(", ")} ({interests.length}/10)
            </span>
          ) : (
            <span className="text-[var(--color-text-tertiary)]">
              None selected (0/10)
            </span>
          )}
        </p>
        {interests.length === 1 && (
          <p className="text-xs text-amber-400 mt-1">
            Select at least 1 more topic
          </p>
        )}
      </motion.div>

      {/* Continue */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {canContinue ? (
          <Link
            href="/onboarding/clone"
            className="block w-full rounded-2xl bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] px-8 py-4 text-base font-semibold text-white text-center transition-all hover:shadow-[0_0_30px_rgba(130,38,255,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Continue
          </Link>
        ) : (
          <button
            disabled
            className="w-full rounded-2xl bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] px-8 py-4 text-base font-semibold text-white text-center opacity-40 cursor-not-allowed"
          >
            Continue
          </button>
        )}
      </motion.div>
    </div>
  );
}
