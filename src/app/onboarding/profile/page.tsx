"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useOnboardingStore } from "@/stores/onboardingStore";
import ProgressIndicator from "@/components/onboarding/ProgressIndicator";
import TwitterImport from "@/components/onboarding/TwitterImport";

export default function ProfileStep() {
  const { profile, setProfile } = useOnboardingStore();

  const canContinue = profile.username.trim().length >= 3;

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link
          href="/onboarding"
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
        <ProgressIndicator currentStep={2} totalSteps={6} />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h1 className="text-3xl font-bold">Set Up Your Profile</h1>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Your profile is the foundation of your Clone&apos;s identity.
          Your Clone will represent you across the platform.
        </p>
      </motion.div>

      {/* Twitter Import */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <TwitterImport />
      </motion.div>

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-[var(--color-border-default)]" />
        <span className="text-xs text-[var(--color-text-tertiary)]">OR</span>
        <div className="flex-1 h-px bg-[var(--color-border-default)]" />
      </div>

      {/* Avatar upload */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center"
      >
        <button className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-[var(--color-border-default)] bg-[var(--color-surface-card)] transition-all hover:border-[var(--color-brand-400)]/50 cursor-pointer group">
          {profile.avatar ? (
            <div className="h-full w-full rounded-full bg-gradient-to-br from-[var(--color-brand-400)] to-[var(--color-brand-600)] flex items-center justify-center text-2xl">
              {profile.username.charAt(0).toUpperCase() || "?"}
            </div>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[var(--color-text-tertiary)] group-hover:text-[var(--color-brand-400)] transition-colors"
            >
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </motion.div>

      {/* Username */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-2"
      >
        <label className="text-sm font-medium text-[var(--color-text-primary)]">
          Username <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={profile.username}
          onChange={(e) => setProfile({ username: e.target.value })}
          placeholder="e.g. CryptoSage"
          maxLength={20}
          className="w-full rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-tertiary)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-brand-400)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-400)]/30 transition-all"
        />
        {profile.username.trim() && (
          <p className="text-xs text-[var(--color-text-tertiary)]">
            questflow.com/@{profile.username}
          </p>
        )}
      </motion.div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-2"
      >
        <label className="text-sm font-medium text-[var(--color-text-primary)]">
          Bio
        </label>
        <textarea
          value={profile.bio}
          onChange={(e) => setProfile({ bio: e.target.value })}
          placeholder="Tell us about yourself (max 160 chars)"
          maxLength={160}
          rows={3}
          className="w-full rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-tertiary)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-brand-400)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-400)]/30 transition-all resize-none"
        />
        <div className="flex justify-between">
          <p className="text-xs text-[var(--color-text-tertiary)]">
            This will be your Clone&apos;s base personality.
          </p>
          <p className="text-xs text-[var(--color-text-tertiary)]">
            {profile.bio.length}/160
          </p>
        </div>
      </motion.div>

      {/* Continue */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {canContinue ? (
          <Link
            href="/onboarding/interests"
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
