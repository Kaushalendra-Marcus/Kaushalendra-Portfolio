"use client";

import Navbar from "./Navbar";
import CommandPalette from "./CommandPalette";
import StarField from "./StarField";
import Footer from "./Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />
      <CommandPalette />
      <StarField variant="broad" />
      <main className="w-full max-w-5xl mx-auto px-6 lg:px-12 py-20 pt-28 relative z-10">
        {children}
        <Footer />
      </main>
    </div>
  );
}
