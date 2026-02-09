"use client";

import { motion } from "framer-motion";
import type { AnalysisStyle } from "@/stores/onboardingStore";

interface CloneAvatarProps {
  size?: "sm" | "md" | "lg" | "xl";
  style?: AnalysisStyle;
  glowing?: boolean;
  animated?: boolean;
}

const styleColors: Record<AnalysisStyle, { primary: string; secondary: string }> = {
  analyst: { primary: "#3b82f6", secondary: "#1d4ed8" },
  degen: { primary: "#ef4444", secondary: "#dc2626" },
  balanced: { primary: "#8b5cf6", secondary: "#6d28d9" },
  contrarian: { primary: "#f59e0b", secondary: "#d97706" },
};

const sizeMap = {
  sm: 48,
  md: 80,
  lg: 120,
  xl: 160,
};

export default function CloneAvatar({
  size = "md",
  style = "balanced",
  glowing = false,
  animated = true,
}: CloneAvatarProps) {
  const px = sizeMap[size];
  const colors = styleColors[style];

  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{ width: px, height: px }}
      animate={animated ? { y: [0, -6, 0] } : undefined}
      transition={animated ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : undefined}
    >
      {/* Glow effect */}
      {glowing && (
        <motion.div
          className="absolute inset-0 rounded-full opacity-40 blur-xl"
          style={{ background: `radial-gradient(circle, ${colors.primary}, transparent)` }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Main avatar body */}
      <svg
        width={px}
        height={px}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Body circle */}
        <circle cx="60" cy="60" r="50" fill={`url(#gradient-${style})`} opacity="0.15" />
        <circle cx="60" cy="60" r="50" stroke={colors.primary} strokeWidth="2" opacity="0.4" />

        {/* Inner ring */}
        <circle cx="60" cy="60" r="38" fill={`url(#gradient-${style})`} opacity="0.25" />

        {/* Robot face */}
        {/* Head */}
        <rect x="35" y="28" width="50" height="40" rx="12" fill={colors.primary} opacity="0.9" />

        {/* Eyes */}
        <motion.circle
          cx="48"
          cy="48"
          r="5"
          fill="white"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="72"
          cy="48"
          r="5"
          fill="white"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />

        {/* Mouth */}
        <path
          d="M48 58 Q60 66 72 58"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Antenna */}
        <line x1="60" y1="28" x2="60" y2="18" stroke={colors.primary} strokeWidth="2" />
        <motion.circle
          cx="60"
          cy="15"
          r="4"
          fill={colors.primary}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Body base */}
        <rect x="42" y="70" width="36" height="20" rx="8" fill={colors.secondary} opacity="0.7" />

        <defs>
          <radialGradient id={`gradient-${style}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={colors.primary} />
            <stop offset="100%" stopColor={colors.secondary} />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
