"use client";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--color-surface-primary)] flex flex-col">
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--color-brand-500)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[var(--color-brand-700)]/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <main className="relative flex-1 flex flex-col items-center justify-center px-4 py-8">
        {children}
      </main>
    </div>
  );
}
