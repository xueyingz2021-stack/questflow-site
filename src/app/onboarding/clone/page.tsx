"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useOnboardingStore } from "@/stores/onboardingStore";
import type { AnalysisStyle } from "@/stores/onboardingStore";
import ProgressIndicator from "@/components/onboarding/ProgressIndicator";
import CloneAvatar from "@/components/onboarding/CloneAvatar";
import StyleCard from "@/components/onboarding/StyleCard";
import RiskSlider from "@/components/onboarding/RiskSlider";

const STYLES: {
  icon: string;
  label: string;
  description: string;
  value: AnalysisStyle;
}[] = [
  {
    icon: "\u{1F4CA}",
    label: "Analyst",
    description: "Data-driven, cautious. High win rate, detailed analysis.",
    value: "analyst",
  },
  {
    icon: "\u{1F3AF}",
    label: "Degen",
    description: "High risk, high reward. Larger bets, faster decisions.",
    value: "degen",
  },
  {
    icon: "\u{1F9E0}",
    label: "Balanced",
    description: "Mix of data & intuition. Moderate risk, diversified.",
    value: "balanced",
  },
  {
    icon: "\u{1F52E}",
    label: "Contrarian",
    description: "Goes against the crowd. Bets on mispriced markets.",
    value: "contrarian",
  },
];

const SUGGESTED_NAMES = ["Tars", "Jarvis", "Alpha", "Sage", "Nova", "Axiom", "Oracle", "Cipher"];

export default function CloneStep() {
  const { clone, setClone } = useOnboardingStore();

  const canContinue = clone.name.trim().length >= 2;

  const suggestName = () => {
    const randomName =
      SUGGESTED_NAMES[Math.floor(Math.random() * SUGGESTED_NAMES.length)];
    setClone({ name: randomName });
  };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link
          href="/onboarding/interests"
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
        <ProgressIndicator currentStep={4} totalSteps={6} />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h1 className="text-3xl font-bold">Meet Your Clone</h1>
      </motion.div>

      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="flex justify-center"
      >
        <CloneAvatar size="lg" style={clone.style} glowing animated />
      </motion.div>

      {/* Clone Name */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-2"
      >
        <label className="text-sm font-medium text-[var(--color-text-primary)]">
          Clone Name <span className="text-red-400">*</span>
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={clone.name}
            onChange={(e) => setClone({ name: e.target.value })}
            placeholder="e.g. Tars, Jarvis, Alpha..."
            maxLength={20}
            className="flex-1 rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-tertiary)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-brand-400)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-400)]/30 transition-all"
          />
          <button
            onClick={suggestName}
            className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-card)] px-4 py-3 text-sm text-[var(--color-text-secondary)] hover:border-[var(--color-brand-400)]/50 transition-all cursor-pointer"
            title="Random name"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M1.5 8a6.5 6.5 0 0112.5-2.5M14.5 8a6.5 6.5 0 01-12.5 2.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M14 2v3.5h-3.5M2 14v-3.5h3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <p className="text-xs text-[var(--color-text-tertiary)]">
          This is how others will see your Clone.
        </p>
      </motion.div>

      {/* Analysis Style */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-3"
      >
        <label className="text-sm font-medium text-[var(--color-text-primary)]">
          Analysis Style
        </label>
        <div className="grid grid-cols-2 gap-3">
          {STYLES.map((style) => (
            <StyleCard
              key={style.value}
              icon={style.icon}
              label={style.label}
              description={style.description}
              value={style.value}
              selected={clone.style === style.value}
              onSelect={() => setClone({ style: style.value })}
            />
          ))}
        </div>
      </motion.div>

      {/* Risk Tolerance */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-3"
      >
        <label className="text-sm font-medium text-[var(--color-text-primary)]">
          Risk Tolerance
        </label>
        <RiskSlider
          value={clone.riskTolerance}
          onChange={(value) => setClone({ riskTolerance: value })}
        />
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {canContinue ? (
          <Link
            href="/onboarding/activated"
            className="block w-full rounded-2xl bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] px-8 py-4 text-base font-semibold text-white text-center transition-all hover:shadow-[0_0_30px_rgba(130,38,255,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Create My Clone
          </Link>
        ) : (
          <button
            disabled
            className="w-full rounded-2xl bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] px-8 py-4 text-base font-semibold text-white text-center opacity-40 cursor-not-allowed"
          >
            Create My Clone
          </button>
        )}
      </motion.div>
    </div>
  );
}
