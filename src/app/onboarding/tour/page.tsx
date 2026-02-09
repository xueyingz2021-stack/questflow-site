"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useOnboardingStore } from "@/stores/onboardingStore";
import TourTooltip from "@/components/onboarding/TourTooltip";

const TOUR_STEPS = [
  {
    title: "Your Clone Card",
    description:
      "See your balance, active tasks, and published quests at a glance. Click the chat icon to talk to your Clone anytime.",
    position: "top-left" as const,
  },
  {
    title: "Clone Recommendations",
    description:
      "Your Clone will show you high-confidence opportunities here. Approve, Review, or Skip with one click.",
    position: "center" as const,
  },
  {
    title: "Market Feed",
    description:
      "Browse all prediction markets from Polymarket, Coinbase, Kalshi and more. Your Clone's confidence score helps you decide.",
    position: "bottom" as const,
  },
  {
    title: "Chat & Create",
    description:
      "Chat with your Clone or @other Clones for roundtable analysis. Create Quests to publish your insights and earn revenue.",
    position: "top-right" as const,
  },
];

export default function TourStep() {
  const { clone, setTourCompleted } = useOnboardingStore();
  const [tourStep, setTourStep] = useState(0);
  const [showTour, setShowTour] = useState(true);

  const handleNext = () => {
    if (tourStep < TOUR_STEPS.length - 1) {
      setTourStep(tourStep + 1);
    } else {
      finishTour();
    }
  };

  const finishTour = () => {
    setShowTour(false);
    setTourCompleted(true);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Tour overlay */}
      {showTour && (
        <TourTooltip
          steps={TOUR_STEPS}
          currentStep={tourStep}
          onNext={handleNext}
          onSkip={finishTour}
        />
      )}

      {/* Mock Home Page beneath the tour */}
      <div className={showTour ? "pointer-events-none" : ""}>
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0 space-y-4">
            {/* Clone Card */}
            <div className="rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-card)] p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[var(--color-brand-400)] to-[var(--color-brand-600)] flex items-center justify-center text-xs font-bold">
                    {(clone.name || "C").charAt(0)}
                  </div>
                  <span className="text-sm font-semibold">
                    {clone.name || "Your Clone"}
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <button className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M2 4h12M2 8h12M2 12h12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-tertiary)]">Balance</span>
                  <span className="text-[var(--color-text-primary)] font-medium">$50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-tertiary)]">Tasks</span>
                  <span className="text-[var(--color-text-primary)] font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-tertiary)]">Quests</span>
                  <span className="text-[var(--color-text-primary)] font-medium">0</span>
                </div>
              </div>
            </div>

            {/* Nav */}
            <nav className="space-y-1">
              {[
                { icon: "\u{1F3E0}", label: "Home", active: true },
                { icon: "\u{1F3AF}", label: "Quests" },
                { icon: "\u{1F4DA}", label: "Library" },
                { icon: "\u{1F4CA}", label: "GDP" },
              ].map((item) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                    item.active
                      ? "bg-[var(--color-brand-500)]/10 text-[var(--color-brand-300)]"
                      : "text-[var(--color-text-secondary)] hover:bg-white/5"
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </button>
              ))}

              <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-[var(--color-brand-500)]/20 text-[var(--color-brand-300)] hover:bg-[var(--color-brand-500)]/30 transition-colors cursor-pointer mt-3">
                <span>+</span>
                Create Quest
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Clone Recommendation Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-[var(--color-brand-400)]/20 bg-gradient-to-br from-[var(--color-brand-500)]/5 to-transparent p-6"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[var(--color-brand-400)] to-[var(--color-brand-600)] flex items-center justify-center text-lg font-bold flex-shrink-0">
                  {(clone.name || "C").charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-green-400">
                      {"\u{1F7E2}"} {clone.name || "Clone"} found 3 opportunities!
                    </span>
                  </div>

                  <div className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-secondary)] p-3 mt-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[var(--color-text-primary)]">
                        Fed rates March
                      </span>
                      <span className="text-[var(--color-brand-300)]">
                        85% confident
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-text-tertiary)] mt-1">
                      $50 {"\u2192"} +$31 potential return
                    </p>
                  </div>

                  <div className="flex gap-2 mt-3">
                    <button className="rounded-lg bg-green-500/20 text-green-400 px-4 py-1.5 text-xs font-medium hover:bg-green-500/30 transition-colors cursor-pointer">
                      {"\u2713"} Approve
                    </button>
                    <button className="rounded-lg bg-white/5 text-[var(--color-text-secondary)] px-4 py-1.5 text-xs font-medium hover:bg-white/10 transition-colors cursor-pointer">
                      Review
                    </button>
                    <button className="rounded-lg bg-white/5 text-[var(--color-text-tertiary)] px-4 py-1.5 text-xs font-medium hover:bg-white/10 transition-colors cursor-pointer">
                      Skip
                    </button>
                    <span className="flex items-center text-xs text-[var(--color-text-tertiary)] ml-auto">
                      {"\u25C0"} 1/3 {"\u25B6"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Market Feed */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                {["Polymarket", "Coinbase", "Kalshi", "OKX"].map((source, i) => (
                  <button
                    key={source}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      i === 0
                        ? "bg-[var(--color-brand-500)]/20 text-[var(--color-brand-300)]"
                        : "text-[var(--color-text-tertiary)] hover:bg-white/5"
                    }`}
                  >
                    {source}
                  </button>
                ))}
              </div>

              {/* Mock market rows */}
              {[
                {
                  title: "Who will Trump nominate as Fed Chair?",
                  yes: "52\u00A2",
                  no: "46\u00A2",
                  confidence: "32%",
                  time: "01h 03m",
                },
                {
                  title: "Will BTC hit $150k before March?",
                  yes: "38\u00A2",
                  no: "62\u00A2",
                  confidence: "78%",
                  time: "5d 12h",
                },
                {
                  title: "Fed cuts rates in March?",
                  yes: "62\u00A2",
                  no: "38\u00A2",
                  confidence: "85%",
                  time: "23d 4h",
                },
              ].map((market, i) => (
                <motion.div
                  key={market.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-card)] p-4 hover:border-[var(--color-border-default)]/60 transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[var(--color-text-primary)]">
                        {market.title}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-[var(--color-text-tertiary)]">
                        <span>
                          YES{" "}
                          <span className="text-green-400">{market.yes}</span>
                        </span>
                        <span>
                          NO{" "}
                          <span className="text-red-400">{market.no}</span>
                        </span>
                        <span>{market.time}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-lg ${
                          parseInt(market.confidence) > 70
                            ? "bg-green-500/10 text-green-400"
                            : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >
                        {market.confidence}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Post-tour notification */}
      {!showTour && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          className="fixed bottom-8 left-1/2 rounded-2xl border border-[var(--color-brand-400)]/30 bg-[var(--color-surface-secondary)] px-6 py-4 shadow-2xl shadow-[var(--color-brand-500)]/10 flex items-center gap-3"
        >
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[var(--color-brand-400)] to-[var(--color-brand-600)] flex items-center justify-center text-xs font-bold">
            {(clone.name || "C").charAt(0)}
          </div>
          <div>
            <p className="text-sm font-medium text-[var(--color-text-primary)]">
              {clone.name || "Your Clone"} found 3 opportunities!
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              Check them out above.
            </p>
          </div>
          <Link
            href="/onboarding"
            className="ml-4 rounded-lg bg-[var(--color-brand-500)] px-4 py-1.5 text-xs font-medium text-white hover:bg-[var(--color-brand-400)] transition-colors"
          >
            View
          </Link>
        </motion.div>
      )}
    </div>
  );
}
