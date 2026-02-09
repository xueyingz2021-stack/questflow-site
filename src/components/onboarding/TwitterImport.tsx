"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOnboardingStore } from "@/stores/onboardingStore";

export default function TwitterImport() {
  const [loading, setLoading] = useState(false);
  const { profile, setProfile } = useOnboardingStore();

  const handleImport = async () => {
    setLoading(true);

    // Simulate Twitter OAuth and data fetch
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setProfile({
      avatar: "/mock-avatar.png",
      username: "CryptoWhale",
      bio: "Crypto enthusiast | DeFi analyst | Building the future of decentralized finance",
      twitterConnected: true,
      twitterHandle: "@CryptoWhale",
    });

    setLoading(false);
  };

  const handleDisconnect = () => {
    setProfile({
      avatar: null,
      username: "",
      bio: "",
      twitterConnected: false,
      twitterHandle: null,
    });
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {profile.twitterConnected ? (
          <motion.div
            key="connected"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-2xl border border-green-500/30 bg-green-500/5 p-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8L6.5 11.5L13 5"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-green-400">
                  Imported from {profile.twitterHandle}
                </p>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Fields auto-filled. You can edit them below.
                </p>
              </div>
              <button
                onClick={handleDisconnect}
                className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors cursor-pointer"
              >
                Disconnect
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="connect"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onClick={handleImport}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 rounded-2xl border border-[var(--color-border-default)] bg-[var(--color-surface-card)] p-4 transition-all hover:border-[var(--color-border-default)]/60 hover:bg-white/[0.06] disabled:opacity-60 cursor-pointer"
          >
            {loading ? (
              <>
                <motion.div
                  className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <span className="text-sm text-[var(--color-text-secondary)]">
                  Connecting to Twitter...
                </span>
              </>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-sm font-medium text-[var(--color-text-primary)]">
                  Import from Twitter
                </span>
              </>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
