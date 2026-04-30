import React from "react";
import {
  Activity,
  AlertTriangle,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Cog,
  Database,
  FileSearch,
  GitBranch,
  Lock,
  RefreshCcw,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export default function SystemStateDiagram() {
  const layers = [
    {
      icon: Database,
      title: "Signal Intake",
      subtitle: "What the system watches",
      detail:
        "Telemetry, support tickets, deploy events, feature flags, and incident history are normalized into one incident context.",
      items: ["Datadog", "Sentry", "Zendesk", "LaunchDarkly", "GitHub"],
    },
    {
      icon: BrainCircuit,
      title: "Reasoning Core",
      subtitle: "What the AI computes",
      detail:
        "The model correlates timing, blast radius, confidence, and reversibility before generating a ranked response path.",
      items: ["Anomaly correlation", "Causal hints", "Risk scoring", "Option ranking"],
    },
    {
      icon: UserCheck,
      title: "Human Control",
      subtitle: "Where trust is earned",
      detail:
        "Recommendations are paired with evidence, uncertainty, and override paths before any high-impact action can run.",
      items: ["Evidence drawer", "Confidence score", "Override", "Explicit confirm"],
    },
    {
      icon: Cog,
      title: "Action Layer",
      subtitle: "What happens after consent",
      detail:
        "Approved decisions trigger controlled automations while preserving a complete decision record for review.",
      items: ["Pause rollout", "Notify Slack", "Create Jira", "Email stakeholders"],
    },
  ];

  const trace = [
    {
      time: "00:00",
      label: "Error spike detected",
      system: "Checkout failures rise above baseline",
      user: "Receives high-severity alert",
      icon: AlertTriangle,
    },
    {
      time: "00:45",
      label: "Evidence assembled",
      system: "Deploy event, tickets, and logs are linked",
      user: "Sees why the alert matters",
      icon: FileSearch,
    },
    {
      time: "02:10",
      label: "Response paths ranked",
      system: "Pause rollout wins on reversibility",
      user: "Compares options before acting",
      icon: GitBranch,
    },
    {
      time: "03:00",
      label: "Human confirms",
      system: "Actions run and decision is logged",
      user: "Owns the final call",
      icon: CheckCircle2,
    },
  ];

  const safeguards = [
    {
      icon: Lock,
      label: "No silent automation",
      desc: "High-impact actions require explicit confirmation.",
    },
    {
      icon: ShieldCheck,
      label: "Confidence is visible",
      desc: "Scores explain strength without pretending certainty.",
    },
    {
      icon: ClipboardCheck,
      label: "Audit trail by default",
      desc: "Evidence, owner, timestamp, and action are preserved.",
    },
    {
      icon: RefreshCcw,
      label: "Outcome feedback",
      desc: "The system checks whether the intervention worked.",
    },
  ];

  return (
    <section className="container mx-auto px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 border-b border-border/40 pb-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            System Architecture
          </h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Not a black box: a layered decision system that turns noisy signals
            into accountable action.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
          <div className="bg-card border border-border/50 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                  Architecture Layers
                </p>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  From raw signal to governed action
                </h3>
              </div>
              <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground bg-muted/30 border border-border/50 rounded-full px-3 py-2">
                <Activity className="w-4 h-4 text-primary" />
                Live context graph
              </div>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-border to-chart-2/40" />
              <div className="space-y-4">
                {layers.map((layer, index) => (
                  <div key={layer.title} className="relative md:pl-20">
                    <div className="hidden md:flex absolute left-0 top-5 w-16 h-16 rounded-2xl bg-background border border-border items-center justify-center shadow-sm">
                      <layer.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="bg-background/60 border border-border/50 rounded-2xl p-5 hover:border-primary/40 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="md:hidden w-11 h-11 rounded-xl bg-muted/50 flex items-center justify-center shrink-0">
                          <layer.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                              Layer {index + 1}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider bg-muted text-muted-foreground px-2 py-1 rounded-md">
                              {layer.subtitle}
                            </span>
                          </div>
                          <h4 className="font-serif text-xl font-bold text-foreground mb-2">
                            {layer.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {layer.detail}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {layer.items.map((item) => (
                              <span
                                key={item}
                                className="text-xs bg-card border border-border/50 rounded-full px-3 py-1 text-foreground/80"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-primary/5 border border-primary/15 rounded-3xl p-6 md:p-8">
              <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                What the user actually learns
              </p>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                The architecture is designed to answer four human questions.
              </h3>
              <div className="space-y-3">
                {[
                  [
                    "Is this urgent?",
                    "Severity, blast radius, and time sensitivity are visible first.",
                  ],
                  [
                    "Why does the AI think that?",
                    "Every recommendation has linked signals and uncertainty.",
                  ],
                  [
                    "What are my options?",
                    "The system compares paths by impact, risk, and reversibility.",
                  ],
                  [
                    "Who owns the outcome?",
                    "The human confirms, the system logs, and follow-up is tracked.",
                  ],
                ].map(([question, answer]) => (
                  <div
                    key={question}
                    className="bg-card/70 border border-border/50 rounded-2xl p-4"
                  >
                    <p className="font-medium text-foreground text-sm mb-1">
                      {question}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-3xl p-6 md:p-8 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                Incident Trace
              </p>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                A single alert moving through the system
              </h3>
              <div className="space-y-4">
                {trace.map((step) => (
                  <div key={step.time} className="grid grid-cols-[52px_1fr] gap-4">
                    <div className="text-xs font-semibold text-muted-foreground pt-1">
                      {step.time}
                    </div>
                    <div className="relative pb-4 border-l border-border/50 pl-5 last:pb-0">
                      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center">
                        <step.icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <p className="font-medium text-sm text-foreground mb-1">
                        {step.label}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <span className="text-foreground/80">System:</span>{" "}
                        {step.system}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <span className="text-foreground/80">User:</span>{" "}
                        {step.user}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-6">
          {safeguards.map((safeguard) => (
            <div
              key={safeguard.label}
              className="bg-card border border-border/50 rounded-2xl p-5"
            >
              <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center mb-4">
                <safeguard.icon className="w-5 h-5 text-chart-2" />
              </div>
              <h4 className="font-medium text-foreground mb-2">
                {safeguard.label}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {safeguard.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-foreground text-background rounded-3xl p-6 md:p-8">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-6 items-center">
            <div>
              <p className="text-xs uppercase tracking-wider opacity-70 font-semibold mb-2">
                Design Principle
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold">
                Automation below the waterline, accountability above it.
              </h3>
            </div>
            <p className="text-sm md:text-base opacity-80 leading-relaxed">
              SignalPath can gather evidence, rank options, draft messages, and
              execute approved playbooks. It cannot hide uncertainty or bypass
              the person responsible for the decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
