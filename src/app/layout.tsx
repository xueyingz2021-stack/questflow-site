import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Questflow - Your AI Clone Works 24/7",
  description: "Create your AI Clone that analyzes prediction markets and earns for you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
