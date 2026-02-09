"use client";

import { motion } from "framer-motion";

interface InterestCardProps {
  icon: string;
  label: string;
  selected: boolean;
  onToggle: () => void;
}

export default function InterestCard({
  icon,
  label,
  selected,
  onToggle,
}: InterestCardProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`relative flex flex-col items-center justify-center gap-2 rounded-2xl border p-5 transition-all duration-200 cursor-pointer ${
        selected
          ? "border-[var(--color-brand-400)] bg-[var(--color-brand-400)]/10 shadow-[0_0_20px_rgba(130,38,255,0.15)]"
          : "border-[var(--color-border-default)] bg-[var(--color-surface-card)] hover:border-[var(--color-border-default)]/60"
      }`}
    >
      {/* Checkmark */}
      {selected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-brand-400)]"
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

      <span className="text-3xl">{icon}</span>
      <span className="text-sm font-medium text-[var(--color-text-primary)]">
        {label}
      </span>
    </motion.button>
  );
}
