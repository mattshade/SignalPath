import React from "react";

export default function DesignSystem() {
  const colors = [
    { name: "Background", var: "var(--background)", hex: "#FAFAF7" },
    { name: "Foreground", var: "var(--foreground)", hex: "#0F0F0F" },
    { name: "Muted", var: "var(--muted)", hex: "#E8E4DC" },
    { name: "Muted Foreground", var: "var(--muted-foreground)", hex: "#6B6B6B" },
    { name: "Destructive", var: "var(--destructive)", hex: "#D4875A" },
    { name: "Success", var: "var(--chart-2)", hex: "#3D6B4F" },
  ];

  return (
    <section className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-border/40 pb-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Design Language</h2>
          <p className="text-muted-foreground mt-2 text-lg">Calm surfaces, sharp typography, purposeful color.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Typography */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Typography Scale</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] text-muted-foreground mb-1">Playfair Display / SemiBold / 72px</p>
                  <p className="font-serif text-6xl font-semibold leading-tight text-foreground">Editorial</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground mb-1">Playfair Display / Bold / 36px</p>
                  <p className="font-serif text-4xl font-bold leading-tight text-foreground">Section Header</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground mb-1">Playfair Display / Italic / 24px</p>
                  <p className="font-serif text-2xl italic leading-tight text-foreground">Pull Quote Style</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground mb-1">Inter / Regular / 18px</p>
                  <p className="font-sans text-lg text-foreground leading-relaxed">Body text for readability and clarity. System typography designed to disappear when necessary and assert itself when critical.</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground mb-1">Inter / Medium / 12px / Uppercase</p>
                  <p className="font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">Functional Label</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colors & Components */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Color Palette</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {colors.map((color) => (
                  <div key={color.name} className="space-y-2">
                    <div 
                      className="h-20 w-full rounded-xl border border-border/50 shadow-sm" 
                      style={{ backgroundColor: `hsl(${color.var})` }} 
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">{color.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Component Expressions</h3>
              <div className="flex flex-col gap-6">
                
                {/* Confidence Badge */}
                <div className="bg-card border border-border/50 p-4 rounded-xl flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="46" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
                        <circle cx="50" cy="50" r="46" fill="none" stroke="hsl(var(--chart-5))" strokeWidth="8" strokeDasharray="289" strokeDashoffset={289 - (289 * 0.95)} />
                      </svg>
                      <span className="text-[10px] font-bold">95%</span>
                    </div>
                    <span className="text-sm font-medium">Confidence Score</span>
                  </div>
                </div>

                {/* Status indicator */}
                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-destructive bg-destructive/10 px-3 py-1.5 rounded-md">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse" />
                    SYSTEM DEGRADED
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-chart-2 bg-chart-2/10 px-3 py-1.5 rounded-md">
                    <div className="w-1.5 h-1.5 rounded-full bg-chart-2" />
                    ROLLOUT PAUSED
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
