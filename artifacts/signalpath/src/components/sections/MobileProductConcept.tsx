import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import { AlertCircle, ChevronRight, Pause, CheckCircle2, ShieldAlert, ArrowRight, Activity, Share2, Mail, CheckCheck } from "lucide-react";

const errorData = [
  { value: 2 }, { value: 3 }, { value: 2 }, { value: 5 },
  { value: 8 }, { value: 12 }, { value: 18 }, { value: 25 },
  { value: 32 }, { value: 45 }, { value: 68 }, { value: 85 }
];

export default function MobileProductConcept() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const goTo = (index: number) => emblaApi?.scrollTo(index);

  const screens = [
    {
      title: "Alert Summary",
      content: (
        <div className="flex flex-col h-full bg-card">
          <div className="p-4 border-b border-border/40 flex justify-between items-center bg-background/50 backdrop-blur-md">
            <span className="font-serif font-semibold">SignalPath</span>
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <span className="text-xs font-medium">JD</span>
            </div>
          </div>
          <div className="p-5 flex-1 overflow-y-auto">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-destructive bg-destructive/10 px-2.5 py-1 rounded-md mb-4">
              <AlertCircle className="w-3.5 h-3.5" />
              SEVERITY HIGH
            </div>
            <h2 className="text-2xl font-serif font-bold leading-tight mb-2">Critical Launch Alert</h2>
            <p className="text-sm text-muted-foreground mb-6">v2.4.0 rollout · Detected 2m ago</p>

            <div className="space-y-4">
              <div className="bg-muted/30 border border-border/50 rounded-xl p-4 flex justify-between items-center">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Error Rate</p>
                  <p className="text-xl font-semibold text-destructive">+18.4%</p>
                </div>
                <div className="h-8 w-20">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={errorData}>
                      <Line type="monotone" dataKey="value" stroke="hsl(var(--destructive))" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/30 border border-border/50 rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">Support Tickets</p>
                  <p className="text-xl font-semibold text-chart-1">+31%</p>
                </div>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-4">
                  <p className="text-xs text-muted-foreground mb-1">Users Affected</p>
                  <p className="text-xl font-semibold text-foreground">12,400</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 flex items-center justify-center">
                      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="46" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
                        <circle cx="50" cy="50" r="46" fill="none" stroke="hsl(var(--chart-5))" strokeWidth="8" strokeDasharray="289" strokeDashoffset={289 - (289 * 0.82)} />
                      </svg>
                      <span className="text-xs font-bold">82%</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">AI Confidence</p>
                      <p className="text-xs text-muted-foreground">Action recommended</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-border/40">
            <button
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-medium text-sm"
              data-testid="btn-triage"
              onClick={() => goTo(1)}
            >
              Triage Issue
            </button>
          </div>
        </div>
      )
    },
    {
      title: "AI Recommendation",
      content: (
        <div className="flex flex-col h-full bg-card">
          <div className="p-4 border-b border-border/40 flex items-center gap-3 bg-background/50 backdrop-blur-md">
            <button
              className="w-8 h-8 flex items-center justify-center text-foreground"
              data-testid="btn-back-2"
              onClick={() => goTo(0)}
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <span className="font-medium text-sm">Recommendation</span>
          </div>
          <div className="p-5 flex-1 overflow-y-auto">
            <div className="flex flex-col items-center justify-center text-center mt-6 mb-8">
              <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="hsl(var(--border))" strokeWidth="6" />
                  <circle cx="50" cy="50" r="46" fill="none" stroke="hsl(var(--chart-5))" strokeWidth="6" strokeDasharray="289" strokeDashoffset={289 - (289 * 0.82)} strokeLinecap="round" />
                </svg>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold font-serif">82%</span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wide">Confidence</span>
                </div>
              </div>

              <div className="bg-chart-5/20 text-chart-5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                High Confidence Path
              </div>
              <h2 className="text-3xl font-serif font-bold mb-3">Pause Rollout</h2>
              <p className="text-sm text-muted-foreground max-w-[240px]">
                Strong correlation between v2.4.0 rollout and checkout failures.
              </p>
            </div>

            <div className="bg-muted/20 border border-border/50 rounded-xl p-1 mb-6">
              <button
                className="w-full flex items-center justify-between p-3"
                data-testid="btn-evidence-view"
                onClick={() => goTo(2)}
              >
                <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">View Evidence & Signals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">4 signals</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </button>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1">Tradeoffs</p>
              <div className="flex items-center justify-between p-3 bg-card border border-border/50 rounded-xl">
                <span className="text-sm">Customer Impact</span>
                <span className="text-xs font-medium text-chart-2 bg-chart-2/10 px-2 py-1 rounded-md">Minimized</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-card border border-border/50 rounded-xl">
                <span className="text-sm">Engineering Risk</span>
                <span className="text-xs font-medium text-chart-4 bg-chart-4/10 px-2 py-1 rounded-md">Low</span>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-border/40 grid grid-cols-2 gap-3">
            <button
              className="w-full bg-muted text-foreground py-3.5 rounded-xl font-medium text-sm"
              data-testid="btn-ignore"
              onClick={() => goTo(0)}
            >
              Ignore
            </button>
            <button
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-md"
              data-testid="btn-execute"
              onClick={() => goTo(2)}
            >
              <Pause className="w-4 h-4 fill-current" /> Execute
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Decision Confirmation",
      content: (
        <div className="flex flex-col h-full bg-card">
          <div className="p-4 border-b border-border/40 flex items-center gap-3 bg-background/50 backdrop-blur-md">
            <button
              className="w-8 h-8 flex items-center justify-center text-foreground"
              data-testid="btn-back-3"
              onClick={() => { setConfirmed(false); goTo(1); }}
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <span className="font-medium text-sm">Action</span>
          </div>

          <AnimatePresence mode="wait">
            {confirmed ? (
              <motion.div
                key="confirmed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex flex-col items-center justify-center p-6 text-center gap-4"
              >
                <div className="w-20 h-20 rounded-full bg-chart-2/15 flex items-center justify-center mb-2">
                  <CheckCheck className="w-10 h-10 text-chart-2" />
                </div>
                <h2 className="text-2xl font-serif font-bold">Decision Logged</h2>
                <p className="text-sm text-muted-foreground max-w-[220px] leading-relaxed">
                  Rollout paused. Stakeholders notified. Incident record updated.
                </p>
                <div className="w-full mt-4 space-y-2 text-left">
                  {["Rollout paused via LaunchDarkly", "Slack #eng-incidents notified", "Stakeholder email sent", "Incident record created"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-muted/30 border border-border/40 rounded-xl px-4 py-3">
                      <CheckCircle2 className="w-4 h-4 text-chart-2 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <button
                  className="mt-4 w-full bg-muted text-foreground py-3 rounded-xl font-medium text-sm"
                  data-testid="btn-done"
                  onClick={() => { setConfirmed(false); goTo(0); }}
                >
                  Back to Start
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="confirm-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground mb-6 shadow-lg shadow-primary/20">
                    <Pause className="w-8 h-8 fill-current" />
                  </div>

                  <h2 className="text-2xl font-serif font-bold mb-2">Confirm Pause</h2>
                  <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                    This will halt the v2.4.0 rollout at 42% and trigger automated stakeholder communications.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex gap-3 items-start">
                      <div className="mt-0.5"><CheckCircle2 className="w-5 h-5 text-chart-2" /></div>
                      <div>
                        <p className="text-sm font-medium">Pause Rollout</p>
                        <p className="text-xs text-muted-foreground">via LaunchDarkly</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="mt-0.5"><Share2 className="w-5 h-5 text-chart-2" /></div>
                      <div>
                        <p className="text-sm font-medium">Notify #eng-incidents</p>
                        <p className="text-xs text-muted-foreground">via Slack</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="mt-0.5"><Mail className="w-5 h-5 text-chart-2" /></div>
                      <div>
                        <p className="text-sm font-medium">Update Stakeholders</p>
                        <p className="text-xs text-muted-foreground">Auto-drafted email</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 p-4 rounded-xl border border-border/50">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      By confirming, you take ownership of this decision. This action and the AI's reasoning will be logged in the incident record.
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-2">
                  <button
                    className="w-full relative overflow-hidden group bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-sm shadow-xl shadow-primary/20 transition-transform active:scale-[0.98]"
                    data-testid="btn-slide-confirm"
                    onClick={() => setConfirmed(true)}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Confirm Decision <ArrowRight className="w-4 h-4" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-active:translate-y-0 transition-transform duration-300"></div>
                  </button>
                  <button
                    className="w-full text-center text-xs text-muted-foreground font-medium mt-4 p-2 hover:text-foreground transition-colors"
                    data-testid="btn-cancel"
                    onClick={() => goTo(1)}
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )
    }
  ];

  return (
    <section id="concept" className="container mx-auto px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-b border-border/40 pb-6 text-center md:text-left">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Mobile Product Concept</h2>
          <p className="text-muted-foreground mt-2 text-lg">High-stakes UX designed for fragmented attention.</p>
        </div>

        <div className="relative -mx-6 md:mx-0 px-6 md:px-0">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 md:gap-10 pb-12 pt-4 items-center">
              {screens.map((screen, index) => (
                <div
                  key={index}
                  className={`relative flex-none w-[300px] h-[620px] transition-all duration-500 ease-out ${
                    selectedIndex === index ? "scale-100 opacity-100 z-20" : "scale-95 opacity-50 z-10 hidden md:block"
                  }`}
                >
                  <div className="absolute inset-0 bg-foreground rounded-[44px] shadow-2xl ring-1 ring-border/20">
                    <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50 pointer-events-none">
                      <div className="w-32 h-6 bg-foreground rounded-b-3xl"></div>
                    </div>
                    <div className="absolute inset-[6px] bg-background rounded-[38px] overflow-hidden">
                      {screen.content}
                    </div>
                  </div>

                  <div className={`absolute -bottom-10 left-0 right-0 text-center transition-opacity duration-300 ${selectedIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="font-medium text-sm text-foreground">{screen.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">Screen {index + 1} of {screens.length}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden flex justify-center gap-2 mt-8">
            {screens.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  selectedIndex === index ? "bg-primary w-6" : "bg-border"
                }`}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                data-testid={`dot-nav-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
