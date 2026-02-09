"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useOnboardingStore } from "@/stores/onboardingStore";
import CloneAvatar from "@/components/onboarding/CloneAvatar";
import ScanningAnimation from "@/components/onboarding/ScanningAnimation";
import ProgressIndicator from "@/components/onboarding/ProgressIndicator";

const FEATURES = [
  {
    icon: "\u{1F50D}",
    title: "Monitor markets 24/7",
    description:
      "Your Clone watches prediction markets around the clock and alerts you to high-confidence opportunities.",
  },
  {
    icon: "\u{1F4AC}",
    title: "Chat with other Clones",
    description:
      "@mention other AI Clones for second opinions. Get diverse perspectives in a roundtable chat.",
  },
  {
    icon: "\u{1F4DD}",
    title: "Auto-generate Quests",
    description:
      "Your Clone creates market analyses you can publish to earn followers and revenue.",
  },
  {
    icon: "\u{1F4B0}",
    title: "Earn while you sleep",
    description:
      "Your Clone finds alpha, you approve the bets. You keep 80% of all earnings.",
  },
];

export default function ActivatedStep() {
  const { clone, interests, setActivated } = useOnboardingStore();
  const [scanComplete, setScanComplete] = useState(false);

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center gap-8">
      {/* Avatar with glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CloneAvatar size="xl" style={clone.style} glowing animated />
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center space-y-2"
      >
        <h1 className="text-3xl font-bold">
          <span className="mr-2">{"\u2728"}</span>
          {clone.name || "Your Clone"} is Now Live!
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Your Clone is already scanning prediction markets for you.
        </p>
      </motion.div>

      {/* Scanning Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="w-full"
      >
        <ScanningAnimation
          interests={interests}
          onComplete={() => setScanComplete(true)}
        />
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scanComplete ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="w-full space-y-4"
      >
        <div className="h-px bg-[var(--color-border-default)]" />

        <p className="text-sm font-medium text-[var(--color-text-secondary)] text-center">
          Here&apos;s what {clone.name || "your Clone"} can do for you:
        </p>

        <div className="space-y-3">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: scanComplete ? 1 : 0, x: scanComplete ? 0 : -20 }}
              transition={{ delay: i * 0.15, duration: 0.3 }}
              className="flex gap-4 p-3 rounded-xl"
            >
              <span className="text-2xl flex-shrink-0">{feature.icon}</span>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {feature.title}
                </p>
                <p className="text-xs text-[var(--color-text-secondary)] mt-0.5 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scanComplete ? 1 : 0 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-sm"
      >
        {scanComplete ? (
          <Link
            href="/onboarding/tour"
            onClick={() => setActivated(true)}
            className="block w-full rounded-2xl bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] px-8 py-4 text-base font-semibold text-white text-center transition-all hover:shadow-[0_0_30px_rgba(130,38,255,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Go to Dashboard
          </Link>
        ) : (
          <button
            disabled
            className="w-full rounded-2xl bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] px-8 py-4 text-base font-semibold text-white text-center opacity-40 cursor-not-allowed"
          >
            Go to Dashboard
          </button>
        )}
      </motion.div>

      {/* Progress */}
      <ProgressIndicator currentStep={5} totalSteps={6} />
    </div>
  );
}
