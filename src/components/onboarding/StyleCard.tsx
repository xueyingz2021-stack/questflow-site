"use client";

import { motion } from "framer-motion";
import type { AnalysisStyle } from "@/stores/onboardingStore";

interface StyleCardProps {
  icon: string;
  label: string;
  description: string;
  value: AnalysisStyle;
  selected: boolean;
  onSelect: () => void;
}

export default function StyleCard({
  icon,
  label,
  description,
  selected,
  onSelect,
}: StyleCardProps) {
  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative flex flex-col items-start gap-2 rounded-2xl border p-4 text-left transition-all duration-200 cursor-pointer ${
        selected
          ? "border-[var(--color-brand-400)] bg-[var(--color-brand-400)]/10 shadow-[0_0_20px_rgba(130,38,255,0.15)]"
          : "border-[var(--color-border-default)] bg-[var(--color-surface-card)] hover:border-[var(--color-border-default)]/60"
      }`}
    >
      {selected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-brand-400)]"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 6L5 8.5L9.5 4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      )}

      <span className="text-2xl">{icon}</span>
      <div>
        <p className="font-semibold text-[var(--color-text-primary)]">{label}</p>
        <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
          {description}
        </p>
      </div>
    </motion.button>
  );
}
