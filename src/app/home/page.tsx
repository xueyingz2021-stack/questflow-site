"use client";

import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/HeroSection";
import SponsorMarquee from "@/components/home/SponsorMarquee";
import HowItWorks from "@/components/home/HowItWorks";
import CloneAnatomy from "@/components/home/CloneAnatomy";
import RevenueStreams from "@/components/home/RevenueStreams";
import WhyQuestflow from "@/components/home/WhyQuestflow";
import Leaderboard from "@/components/home/Leaderboard";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-surface-primary)] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SponsorMarquee />
      <HowItWorks />
      <CloneAnatomy />
      <RevenueStreams />
      <WhyQuestflow />
      <Leaderboard />
      <FinalCTA />
      <Footer />
    </div>
  );
}
