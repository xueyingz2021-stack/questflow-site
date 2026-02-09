"use client";

import { motion, AnimatePresence } from "framer-motion";

interface TourStep {
  title: string;
  description: string;
  position: "top-left" | "top-right" | "center" | "bottom";
}

interface TourTooltipProps {
  steps: TourStep[];
  currentStep: number;
  onNext: () => void;
  onSkip: () => void;
}

const positionClasses: Record<string, string> = {
  "top-left": "top-24 left-8",
  "top-right": "top-24 right-8",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  bottom: "bottom-24 left-1/2 -translate-x-1/2",
};

export default function TourTooltip({
  steps,
  currentStep,
  onNext,
  onSkip,
}: TourTooltipProps) {
  const step = steps[currentStep];
  if (!step) return null;

  const isLast = currentStep === steps.length - 1;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`absolute ${positionClasses[step.position]} z-10`}
        >
          <div className="w-80 rounded-2xl border border-[var(--color-brand-400)]/30 bg-[var(--color-surface-secondary)] p-5 shadow-2xl shadow-[var(--color-brand-500)]/10">
            {/* Step indicator */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-1.5">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 w-6 rounded-full transition-all ${
                      i <= currentStep
                        ? "bg-[var(--color-brand-400)]"
                        : "bg-[var(--color-border-default)]"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-[var(--color-text-tertiary)]">
                {currentStep + 1}/{steps.length}
              </span>
            </div>

            <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-1.5">
              {step.title}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              {step.description}
            </p>

            <div className="flex items-center justify-between">
              <button
                onClick={onSkip}
                className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors cursor-pointer"
              >
                Skip Tour
              </button>
              <button
                onClick={onNext}
                className="rounded-xl bg-[var(--color-brand-500)] px-5 py-2 text-sm font-medium text-white transition-all hover:bg-[var(--color-brand-400)] cursor-pointer"
              >
                {isLast ? "Done! Let's Go" : `Next ${currentStep + 1}/${steps.length}`}
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
