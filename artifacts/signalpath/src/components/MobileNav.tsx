import React from "react";

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-xl border-t border-border/40 pb-safe pt-2 px-6 z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <a href="#scenario" className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-foreground" data-testid="mobnav-scenario">
          <span className="text-[10px] font-medium uppercase tracking-wider">Scenario</span>
        </a>
        <a href="#journey" className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-foreground" data-testid="mobnav-journey">
          <span className="text-[10px] font-medium uppercase tracking-wider">Journey</span>
        </a>
        <a href="#concept" className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-foreground" data-testid="mobnav-concept">
          <span className="text-[10px] font-medium uppercase tracking-wider">Concept</span>
        </a>
        <a href="#trust" className="flex flex-col items-center gap-1 p-2 text-muted-foreground hover:text-foreground" data-testid="mobnav-trust">
          <span className="text-[10px] font-medium uppercase tracking-wider">Trust</span>
        </a>
      </div>
    </nav>
  );
}
