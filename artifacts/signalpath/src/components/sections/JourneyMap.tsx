import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stages = [
  {
    id: "01",
    title: "Alert",
    goal: "Understand urgency",
    action: "Taps notification",
    system: "Aggregates signals",
    ai: "Classifies severity",
    ui: "Alert card + 3-metric snapshot",
    emotion: "Startled to focused",
    pain: "Alert fatigue",
    opportunity: "Confidence-calibrated alerting",
    trust: "Severity justification"
  },
  {
    id: "02",
    title: "Triage",
    goal: "Assess if action needed",
    action: "Scans risk overview",
    system: "Cross-references patterns",
    ai: "Surfaces anomaly correlation",
    ui: "Risk heatmap with sparklines",
    emotion: "Concerned but orienting",
    pain: "Disconnected sources",
    opportunity: "Unified signal view",
    trust: "Show data sources"
  },
  {
    id: "03",
    title: "Context",
    goal: "Understand what changed",
    action: "Reviews AI summary",
    system: "Fetches logs, PRs, incidents",
    ai: "Synthesizes root cause",
    ui: "Event timeline + causal chain",
    emotion: "Understanding building",
    pain: "Too much to read",
    opportunity: "Progressive disclosure",
    trust: "Confidence per claim"
  },
  {
    id: "04",
    title: "AI Recommendation",
    goal: "Evaluate suggestion",
    action: "Reviews recommendation",
    system: "Runs option analysis",
    ai: "Recommends Pause Rollout at 82% confidence",
    ui: "Recommendation badge + tradeoff matrix",
    emotion: "Cautiously hopeful",
    pain: "Unclear reasoning",
    opportunity: "Explainable AI",
    trust: "Evidence chain"
  },
  {
    id: "05",
    title: "Trust Check",
    goal: "Validate AI reasoning",
    action: "Taps Show Evidence",
    system: "Expands evidence layer",
    ai: "Exposes signals + uncertainty",
    ui: "Evidence drawer with signal weights",
    emotion: "Skeptical to trusting",
    pain: "Black box",
    opportunity: "Layered transparency",
    trust: "Full evidence visibility"
  },
  {
    id: "06",
    title: "Decision",
    goal: "Make confident decision",
    action: "Confirms Pause Rollout",
    system: "Logs decision + context",
    ai: "Prepares follow-up",
    ui: "Decision confirmation with override option",
    emotion: "Resolved, accountable",
    pain: "No decision record",
    opportunity: "Audit trail",
    trust: "Human ownership explicit"
  },
  {
    id: "07",
    title: "Follow-through",
    goal: "Ensure action taken",
    action: "Reviews auto-notifications",
    system: "Triggers Slack and email",
    ai: "Drafts stakeholder updates",
    ui: "Action summary with confirmations",
    emotion: "Relieved, in control",
    pain: "Manual follow-up errors",
    opportunity: "Automated action layer",
    trust: "Automated vs manual clear"
  },
  {
    id: "08",
    title: "Learning Loop",
    goal: "Improve future accuracy",
    action: "Reviews outcome 48h later",
    system: "Updates AI model",
    ai: "Generates retrospective insight",
    ui: "Outcome card with calibration note",
    emotion: "Reflective, satisfied",
    pain: "Lessons lost",
    opportunity: "Closed feedback loop",
    trust: "Visible system improvement"
  }
];

export default function JourneyMap() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="journey" className="container mx-auto px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-b border-border/40 pb-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Journey Map</h2>
          <p className="text-muted-foreground mt-2 text-lg">The anatomy of an AI-assisted decision.</p>
        </div>

        {/* Desktop Horizontal Scroll */}
        <div className="hidden md:block relative">
          <div className="absolute top-[28px] left-0 right-0 h-0.5 bg-border/50 -z-10" />
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar gap-8"
            style={{ scrollbarWidth: 'none' }}
          >
            {stages.map((stage, idx) => (
              <div key={stage.id} className="min-w-[340px] snap-start">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center font-serif text-xl font-bold text-primary shadow-sm z-10">
                    {stage.id}
                  </div>
                  {idx !== stages.length - 1 && (
                    <div className="h-0.5 flex-1 bg-border/50 ml-4 hidden" />
                  )}
                </div>
                
                <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-serif text-xl font-bold mb-4 text-foreground">{stage.title}</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider block mb-1">User Goal</span>
                      <span className="text-foreground">{stage.goal}</span>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider block mb-1">User Action</span>
                      <span className="text-foreground">{stage.action}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border/30">
                      <div>
                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider block mb-1">System</span>
                        <span className="text-muted-foreground">{stage.system}</span>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider block mb-1">AI</span>
                        <span className="text-primary font-medium">{stage.ai}</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-border/30">
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider block mb-1">Key UI</span>
                      <span className="text-foreground">{stage.ui}</span>
                    </div>
                    <div className="pt-2 border-t border-border/30">
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider block mb-1">Emotion</span>
                      <span className="text-foreground">{stage.emotion}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border/30">
                      <div>
                        <span className="text-xs text-destructive font-medium uppercase tracking-wider block mb-1">Pain Point</span>
                        <span className="text-muted-foreground">{stage.pain}</span>
                      </div>
                      <div>
                        <span className="text-xs text-chart-2 font-medium uppercase tracking-wider block mb-1">Opportunity</span>
                        <span className="text-muted-foreground">{stage.opportunity}</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-border/30 bg-muted/20 p-2 rounded-lg mt-2">
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider block mb-1">Trust Requisite</span>
                      <span className="text-foreground font-medium">{stage.trust}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Stack */}
        <div className="md:hidden space-y-8 relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-border/50 -z-10" />
          {stages.map((stage) => (
            <motion.div 
              key={stage.id} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex gap-4 relative"
            >
              <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center font-serif text-xl font-bold text-primary shadow-sm shrink-0 z-10">
                {stage.id}
              </div>
              <div className="bg-card border border-border/50 rounded-2xl p-5 shadow-sm flex-1">
                <h3 className="font-serif text-lg font-bold mb-3 text-foreground">{stage.title}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider inline-block w-24">Goal:</span>
                    <span className="text-foreground">{stage.goal}</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider inline-block w-24">Action:</span>
                    <span className="text-foreground">{stage.action}</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider inline-block w-24">AI:</span>
                    <span className="text-primary font-medium">{stage.ai}</span>
                  </div>
                  <div className="pt-2 border-t border-border/30">
                    <span className="text-xs text-chart-2 font-medium uppercase tracking-wider block mb-1">Opportunity:</span>
                    <span className="text-muted-foreground">{stage.opportunity}</span>
                  </div>
                  <div className="pt-2 border-t border-border/30 bg-muted/20 p-2 rounded-lg">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider block mb-1">Trust:</span>
                    <span className="text-foreground font-medium">{stage.trust}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
