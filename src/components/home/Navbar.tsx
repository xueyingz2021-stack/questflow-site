"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Earn", href: "#earn" },
  { label: "Why Questflow", href: "#why" },
  { label: "Leaderboard", href: "#leaderboard" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[var(--color-surface-primary)]/80 border-b border-[var(--color-border-default)]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/home" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--color-brand-400)] to-[var(--color-brand-600)] flex items-center justify-center text-sm font-bold">
            Q
          </div>
          <span className="font-heading text-lg font-semibold tracking-tight">
            Questflow
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/onboarding"
            className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors px-4 py-2"
          >
            Log in
          </Link>
          <Link
            href="/onboarding"
            className="text-sm font-medium bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white px-5 py-2 rounded-xl hover:shadow-[0_0_20px_rgba(130,38,255,0.3)] transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[var(--color-text-secondary)] cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[var(--color-border-default)] bg-[var(--color-surface-primary)]"
          >
            <div className="px-6 py-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm text-[var(--color-text-secondary)] hover:text-white py-2"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/onboarding"
                className="block text-center text-sm font-medium bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-brand-400)] text-white px-5 py-3 rounded-xl mt-4"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
