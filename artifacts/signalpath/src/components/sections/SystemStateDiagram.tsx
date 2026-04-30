import React from "react";
import { Database, BrainCircuit, Search, CheckCircle2, Cog, RefreshCcw } from "lucide-react";

export default function SystemStateDiagram() {
  const nodes = [
    { icon: Database, label: "Signals", desc: "Datadog, Sentry, Zendesk" },
    { icon: BrainCircuit, label: "AI Synthesis", desc: "Correlate anomalies" },
    { icon: Search, label: "Evidence Layer", desc: "Expose confidence & raw data" },
    { icon: BrainCircuit, label: "Recommendation", desc: "Suggest optimal path" },
    { icon: CheckCircle2, label: "Human Decision", desc: "Review, override, or confirm" },
    { icon: Cog, label: "Follow-up Auto", desc: "Slack, Jira, PagerDuty" },
    { icon: RefreshCcw, label: "Learning Loop", desc: "Update weights based on outcome" }
  ];

  return (
    <section className="container mx-auto px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-border/40 pb-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">System Architecture</h2>
          <p className="text-muted-foreground mt-2 text-lg">The flow of context from signal to learning.</p>
        </div>

        <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-sm relative">
          {/* Desktop Flow */}
          <div className="hidden md:flex justify-between items-center relative">
            <div className="absolute left-[50px] right-[50px] h-0.5 bg-gradient-to-r from-border via-primary/30 to-border -z-10 top-[40px]" />
            
            {nodes.map((node, i) => (
              <div key={i} className="flex flex-col items-center text-center w-32 relative group">
                <div className="w-20 h-20 bg-background border-2 border-border rounded-2xl flex items-center justify-center mb-4 group-hover:border-primary transition-colors shadow-sm relative bg-card">
                  <node.icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-medium text-sm text-foreground mb-1">{node.label}</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide leading-tight">{node.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile Flow */}
          <div className="md:hidden flex flex-col items-center gap-6 relative">
            <div className="absolute top-10 bottom-10 w-0.5 bg-gradient-to-b from-border via-primary/30 to-border -z-10" />
            
            {nodes.map((node, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-background border border-border rounded-xl p-4 w-full shadow-sm">
                <div className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center mb-3">
                  <node.icon className="w-6 h-6 text-foreground" />
                </div>
                <h4 className="font-medium text-foreground mb-1">{node.label}</h4>
                <p className="text-xs text-muted-foreground">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
