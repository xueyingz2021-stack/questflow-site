"use client";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressIndicator({
  currentStep,
  totalSteps,
}: ProgressIndicatorProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-[var(--color-text-tertiary)]">
        Step {currentStep} of {totalSteps}
      </span>
      <div className="flex gap-1.5">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i < currentStep
                ? "bg-[var(--color-brand-400)] scale-100"
                : "bg-[var(--color-border-default)] scale-75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
