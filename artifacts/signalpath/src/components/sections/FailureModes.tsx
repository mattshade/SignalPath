import React from "react";

export default function FailureModes() {
  const modes = [
    {
      name: "Low-confidence output",
      risk: "User acts on a hallucination or poor synthesis.",
      response: "System refuses to recommend, degrades to 'Information Only' view.",
      path: "Provide direct links to raw Datadog logs."
    },
    {
      name: "Conflicting signals",
      risk: "Error rates up, but revenue also up. AI struggles to weigh.",
      response: "Surface conflict explicitly in the UI with a 'Mixed Signals' badge.",
      path: "Prompt user for qualitative business context."
    },
    {
      name: "Missing data",
      risk: "Datadog API timeout during synthesis.",
      response: "Display 'Partial Context' warning. Identify missing source.",
      path: "Allow decision based on available data with forced manual confirmation."
    },
    {
      name: "Ignored alerts",
      risk: "User dismisses critical notification.",
      response: "Escalate via PagerDuty based on time-to-acknowledge rules.",
      path: "Automate safe default (e.g., pause rollout) if SLA breached."
    },
    {
      name: "Risky recommendations",
      risk: "AI suggests complex rollback instead of simple pause.",
      response: "Require secondary approval (two-person rule) for destructive actions.",
      path: "Enforce 'Least Destructive Action' policy in recommendation engine."
    },
    {
      name: "Stakeholder disagreement",
      risk: "Support wants pause, Engineering wants to monitor.",
      response: "Log decision rationale explicitly attached to the acting user.",
      path: "Generate automated post-mortem detailing timeline and reasoning."
    }
  ];

  return (
    <section className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-border/40 pb-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Failure Modes</h2>
          <p className="text-muted-foreground mt-2 text-lg">Designing for when the AI is wrong or uncertain.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modes.map((mode, i) => (
            <div key={i} className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm flex flex-col h-full">
              <h3 className="font-semibold text-lg text-foreground mb-4 pb-4 border-b border-border/40">
                {mode.name}
              </h3>
              <div className="space-y-4 flex-1 text-sm">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-destructive block mb-1">The Risk</span>
                  <span className="text-muted-foreground leading-relaxed">{mode.risk}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-1">UX Response</span>
                  <span className="text-foreground leading-relaxed font-medium">{mode.response}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-chart-2 block mb-1">Recovery Path</span>
                  <span className="text-muted-foreground leading-relaxed">{mode.path}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
