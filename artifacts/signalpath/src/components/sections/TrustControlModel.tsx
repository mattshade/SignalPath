import React from "react";
import { Shield, Eye, AlertTriangle, UserCog, CheckSquare, Fingerprint, Activity } from "lucide-react";

export default function TrustControlModel() {
  const pillars = [
    {
      icon: Shield,
      title: "Confidence Indicators",
      desc: "Every AI claim is paired with a specific confidence score. No absolute certainty where none exists.",
      indicator: "82%"
    },
    {
      icon: Eye,
      title: "Evidence Visibility",
      desc: "Users can drill down into the raw data signals that inform the AI's recommendation.",
      indicator: "4 signals"
    },
    {
      icon: AlertTriangle,
      title: "Explicit Uncertainty",
      desc: "The system highlights what it doesn't know, preventing over-reliance on incomplete data.",
      indicator: "High variance"
    },
    {
      icon: UserCog,
      title: "Override Capability",
      desc: "The AI recommends, the human decides. Overriding is always a one-tap frictionless action.",
      indicator: "Always enabled"
    },
    {
      icon: CheckSquare,
      title: "Required Confirmations",
      desc: "High-impact actions require explicit sliding confirmation to prevent accidental triggering.",
      indicator: "Friction added"
    },
    {
      icon: Fingerprint,
      title: "Clear Ownership",
      desc: "Decisions are logged with the acting user's identity, maintaining clear human accountability.",
      indicator: "Audit trail"
    },
    {
      icon: Activity,
      title: "Continuous Monitoring",
      desc: "The system tracks the outcome of the decision, creating a feedback loop for future accuracy.",
      indicator: "Active"
    }
  ];

  return (
    <section id="trust" className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-border/40 pb-6 text-center md:text-left">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Trust & Control Model</h2>
          <p className="text-muted-foreground mt-2 text-lg">AI should advise, explain, and defer.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border/50">
                  {pillar.indicator}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {pillar.desc}
              </p>
            </div>
          ))}
          
          <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl flex flex-col justify-center items-center text-center lg:col-span-2 xl:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">The Golden Rule</h3>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              "Never automate a decision that requires human accountability without explicit consent."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
