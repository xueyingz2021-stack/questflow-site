"use client";

import type { RiskTolerance } from "@/stores/onboardingStore";

interface RiskSliderProps {
  value: RiskTolerance;
  onChange: (value: RiskTolerance) => void;
}

const levels: RiskTolerance[] = ["conservative", "moderate", "aggressive"];
const labels: Record<RiskTolerance, string> = {
  conservative: "Conservative",
  moderate: "Moderate",
  aggressive: "Aggressive",
};

export default function RiskSlider({ value, onChange }: RiskSliderProps) {
  const currentIndex = levels.indexOf(value);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-[var(--color-text-tertiary)]">Conservative</span>
        <span className="text-xs text-[var(--color-text-tertiary)]">Aggressive</span>
      </div>

      <div className="relative h-2 rounded-full bg-[var(--color-surface-tertiary)]">
        {/* Filled portion */}
        <div
          className="absolute h-full rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-300)] transition-all duration-300"
          style={{ width: `${(currentIndex / (levels.length - 1)) * 100}%` }}
        />

        {/* Track dots */}
        {levels.map((level, i) => (
          <button
            key={level}
            onClick={() => onChange(level)}
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-5 w-5 rounded-full border-2 transition-all duration-200 cursor-pointer ${
              i <= currentIndex
                ? "bg-[var(--color-brand-400)] border-[var(--color-brand-300)]"
                : "bg-[var(--color-surface-tertiary)] border-[var(--color-border-default)]"
            }`}
            style={{ left: `${(i / (levels.length - 1)) * 100}%` }}
          />
        ))}
      </div>

      <p className="mt-3 text-center text-sm font-medium text-[var(--color-brand-300)]">
        {labels[value]}
      </p>
    </div>
  );
}
