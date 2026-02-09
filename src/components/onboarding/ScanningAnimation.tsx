"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ScanItem {
  icon: string;
  text: string;
  result?: string;
}

interface ScanningAnimationProps {
  interests: string[];
  onComplete: () => void;
}

const interestToIcon: Record<string, string> = {
  Politics: "\u{1F3DB}",
  Crypto: "\u{1FA99}",
  Sports: "\u26BD",
  Finance: "\u{1F4B0}",
  Tech: "\u{1F4BB}",
  Culture: "\u{1F3AC}",
  "World Events": "\u{1F30D}",
  Science: "\u{1F52C}",
  Gaming: "\u{1F3AE}",
  "AI & ML": "\u2728",
};

export default function ScanningAnimation({
  interests,
  onComplete,
}: ScanningAnimationProps) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const scanItems: ScanItem[] = [
    {
      icon: "\u26A1",
      text: "Scanning 127 active markets...",
      result: "127 markets found",
    },
    ...interests.slice(0, 3).map((interest) => ({
      icon: interestToIcon[interest] || "\u{1F4CA}",
      text: `${interest}: scanning markets...`,
      result: `${Math.floor(Math.random() * 40) + 15} markets found`,
    })),
    {
      icon: "\u{1F4CA}",
      text: "Analyzing top opportunities...",
      result: "3 high-confidence picks",
    },
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    scanItems.forEach((_, i) => {
      const timer = setTimeout(
        () => {
          setCompletedSteps((prev) => [...prev, i]);
          if (i === scanItems.length - 1) {
            setTimeout(onComplete, 800);
          }
        },
        1200 + i * 1000
      );
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-card)] p-5 backdrop-blur-sm">
      <div className="space-y-3">
        <AnimatePresence>
          {scanItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.3, duration: 0.4 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm text-[var(--color-text-secondary)]">
                  {completedSteps.includes(i) ? item.result : item.text}
                </span>
              </div>

              <div>
                {completedSteps.includes(i) ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 6L5 8.5L9.5 4"
                        stroke="#22c55e"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                ) : (
                  <motion.div
                    className="h-4 w-4 rounded-full border-2 border-[var(--color-brand-400)]/30 border-t-[var(--color-brand-400)]"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
