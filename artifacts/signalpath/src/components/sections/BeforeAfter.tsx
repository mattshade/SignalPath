import React from "react";
import { X, Check } from "lucide-react";

export default function BeforeAfter() {
  return (
    <section className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 border-b border-border/40 pb-6 text-center md:text-left">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">The Impact</h2>
          <p className="text-muted-foreground mt-2 text-lg">Shifting from reactive chaos to structured confidence.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="bg-card border border-destructive/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-destructive/60" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
                <X className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground">Before</h3>
            </div>
            
            <ul className="space-y-6">
              <li className="space-y-1">
                <p className="font-medium text-foreground text-lg">Slack Chaos</p>
                <p className="text-sm text-muted-foreground">Information scattered across threads, varying opinions without data backing.</p>
              </li>
              <li className="space-y-1">
                <p className="font-medium text-foreground text-lg">Fragmented Tools</p>
                <p className="text-sm text-muted-foreground">Switching between Datadog, LaunchDarkly, and Zendesk on a tiny mobile screen.</p>
              </li>
              <li className="space-y-1">
                <p className="font-medium text-foreground text-lg">Delayed Decisions</p>
                <p className="text-sm text-muted-foreground">Paralysis by analysis. Waiting to get to a laptop means thousands more users affected.</p>
              </li>
              <li className="space-y-1">
                <p className="font-medium text-foreground text-lg">Manual Follow-up</p>
                <p className="text-sm text-muted-foreground">Forgetting to update stakeholders while busy fixing the root cause.</p>
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="bg-card border border-chart-2/30 rounded-3xl p-8 relative overflow-hidden shadow-lg shadow-chart-2/5">
            <div className="absolute top-0 left-0 right-0 h-2 bg-chart-2" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-chart-2/10 flex items-center justify-center text-chart-2">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground">After</h3>
            </div>
            
            <ul className="space-y-6">
              <li className="space-y-1">
                <p className="font-medium text-foreground text-lg">Clear Mobile Triage</p>
                <p className="text-sm text-muted-foreground">One screen, curated signals, clear severity indicator.</p>
              </li>
              <li className="space-y-1">
                <p className="font-medium text-foreground text-lg">Structured Reasoning</p>
                <p className="text-sm text-muted-foreground">AI synthesis with explicit confidence scores and visible evidence trails.</p>
              </li>
              <li className="space-y-1">
                <p className="font-medium text-foreground text-lg">Confident Decisions</p>
                <p className="text-sm text-muted-foreground">One-tap actions with built-in safeguards and clear accountability logging.</p>
              </li>
              <li className="space-y-1">
                <p className="font-medium text-foreground text-lg">Automated Follow-through</p>
                <p className="text-sm text-muted-foreground">System handles the communication routing, letting humans focus on strategy.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
