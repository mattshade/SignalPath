import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ScenarioOverview from "@/components/sections/ScenarioOverview";
import JourneyMap from "@/components/sections/JourneyMap";
import MobileProductConcept from "@/components/sections/MobileProductConcept";
import TrustControlModel from "@/components/sections/TrustControlModel";
import DecisionFramework from "@/components/sections/DecisionFramework";
import SystemStateDiagram from "@/components/sections/SystemStateDiagram";
import FailureModes from "@/components/sections/FailureModes";
import BeforeAfter from "@/components/sections/BeforeAfter";
import DesignSystem from "@/components/sections/DesignSystem";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* SECTION 1: STICKY TOP NAV */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/80 border-b border-border/40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className="font-serif font-bold text-2xl tracking-tight text-foreground">SignalPath</span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest hidden md:inline-block font-medium">Designing AI-assisted decisions</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#scenario" className="hover:text-foreground transition-colors" data-testid="nav-scenario">Scenario</a>
            <a href="#journey" className="hover:text-foreground transition-colors" data-testid="nav-journey">Journey</a>
            <a href="#concept" className="hover:text-foreground transition-colors" data-testid="nav-concept">Concept</a>
            <a href="#trust" className="hover:text-foreground transition-colors" data-testid="nav-trust">Trust</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-32 md:gap-48 pb-32">
        <HeroSection />
        <ScenarioOverview />
        <JourneyMap />
        <MobileProductConcept />
        <TrustControlModel />
        <DecisionFramework />
        <SystemStateDiagram />
        <FailureModes />
        <BeforeAfter />
        <DesignSystem />
      </main>

      {/* SECTION 12: FOOTER */}
      <footer className="border-t border-border/40 py-16 px-6 bg-muted/30">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <span className="font-serif font-bold text-xl text-foreground">SignalPath</span>
            <p className="text-sm text-muted-foreground mt-2">Designing AI-assisted decisions for moments that cannot wait.</p>
          </div>
          <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
            A portfolio case study in mobile UX strategy and AI interaction design. Local mock data only.
          </p>
        </div>
      </footer>

      <MobileNav />
    </div>
  );
}
