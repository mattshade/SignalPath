import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2, Radio, ShieldCheck, Zap } from "lucide-react";

export default function HeroSection() {
  const signalNodes = [
    { left: "8%", top: "18%", delay: 0 },
    { left: "18%", top: "62%", delay: 0.8 },
    { left: "36%", top: "28%", delay: 1.6 },
    { left: "62%", top: "18%", delay: 0.4 },
    { left: "78%", top: "58%", delay: 1.2 },
    { left: "90%", top: "34%", delay: 2 },
  ];

  const contextChips = [
    {
      icon: Radio,
      label: "4 signals linked",
      className: "left-0 top-8 md:-left-24 md:top-20",
      delay: 0.7,
    },
    {
      icon: ShieldCheck,
      label: "Human confirmation required",
      className: "right-0 top-24 md:-right-32 md:top-28",
      delay: 0.95,
    },
    {
      icon: CheckCircle2,
      label: "Rollback avoided",
      className: "left-6 bottom-4 md:-left-28 md:bottom-20",
      delay: 1.2,
    },
  ];

  return (
    <section className="relative pt-24 md:pt-40 px-6 container mx-auto flex flex-col items-center overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[760px] -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-3xl"
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[10%] top-28 h-72 w-72 rounded-full bg-chart-5/30 blur-[100px]"
          animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[8%] top-44 h-80 w-80 rounded-full bg-destructive/10 blur-[110px]"
          animate={{ x: [0, -26, 0], y: [0, 22, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 opacity-[0.28] [background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_72%)]" />
        <svg className="absolute inset-x-0 top-16 mx-auto h-[420px] w-full max-w-6xl opacity-50" viewBox="0 0 1100 420" fill="none">
          <motion.path
            d="M55 285 C210 95 340 330 505 168 C662 14 778 270 1042 92"
            stroke="hsl(var(--primary))"
            strokeOpacity="0.16"
            strokeWidth="1.5"
            strokeDasharray="8 12"
            animate={{ strokeDashoffset: [0, -120] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M88 138 C270 245 350 60 520 210 C700 368 820 130 1018 262"
            stroke="hsl(var(--destructive))"
            strokeOpacity="0.14"
            strokeWidth="1.5"
            strokeDasharray="6 14"
            animate={{ strokeDashoffset: [0, 120] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        {signalNodes.map((node) => (
          <motion.div
            key={`${node.left}-${node.top}`}
            className="absolute h-2 w-2 rounded-full bg-primary/40 shadow-[0_0_30px_hsl(var(--primary)/0.35)]"
            style={{ left: node.left, top: node.top }}
            animate={{ scale: [1, 1.9, 1], opacity: [0.25, 0.8, 0.25] }}
            transition={{
              duration: 3.8,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto text-center space-y-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground shadow-sm backdrop-blur"
        >
          <Zap className="w-3.5 h-3.5 text-destructive" />
          AI-assisted incident decisions
        </motion.div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-foreground">
          Critical decisions rarely wait for a desk.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
          SignalPath gives launch owners a calm mobile command surface when telemetry, customers, and AI recommendations all arrive at once.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 md:mt-24 w-full max-w-md md:max-w-xl mx-auto relative"
      >
        {contextChips.map((chip) => (
          <motion.div
            key={chip.label}
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: [0, -6, 0], scale: 1 }}
            transition={{
              opacity: { duration: 0.6, delay: chip.delay },
              scale: { duration: 0.6, delay: chip.delay },
              y: {
                duration: 4.5,
                delay: chip.delay,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className={`absolute z-20 hidden rounded-2xl border border-border/60 bg-card/80 px-3.5 py-2.5 text-xs font-medium text-foreground shadow-lg backdrop-blur-md md:flex items-center gap-2 ${chip.className}`}
          >
            <chip.icon className="w-4 h-4 text-primary" />
            {chip.label}
          </motion.div>
        ))}

        {/* Animated Mobile Alert */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="bg-card/95 rounded-3xl shadow-2xl overflow-hidden border border-border/50 relative z-10 backdrop-blur"
        >
          <motion.div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="p-6 border-b border-border/40 bg-muted/20">
            <div className="flex items-center gap-3 text-destructive mb-3">
              <motion.div
                animate={{ scale: [1, 1.18, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <AlertCircle className="w-5 h-5" />
              </motion.div>
              <span className="font-semibold text-sm tracking-wide">CRITICAL ALERT</span>
            </div>
            <h3 className="text-xl font-medium text-foreground mb-1">Launch Anomaly Detected</h3>
            <p className="text-sm text-muted-foreground">v2.4.0 rollout • 42% complete</p>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Error Rate</p>
                <p className="text-lg font-semibold text-destructive">+18.4%</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Users Affected</p>
                <p className="text-lg font-semibold text-foreground">12,400</p>
              </div>
            </div>

            <div className="pt-4 border-t border-border/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-10 h-10">
                  <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <motion.circle 
                      cx="50" cy="50" r="46" 
                      fill="none" stroke="currentColor" 
                      strokeWidth="8" className="text-chart-5"
                      strokeDasharray="289"
                      initial={{ strokeDashoffset: 289 }}
                      animate={{ strokeDashoffset: 289 - (289 * 0.82) }}
                      transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                    />
                  </motion.svg>
                  <span className="text-xs font-bold text-foreground">82%</span>
                </div>
                <span className="text-sm font-medium text-foreground">AI Confidence</span>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                data-testid="hero-alert-btn"
                onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Triage <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Decorative background blur */}
        <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 rounded-full" />
      </motion.div>
    </section>
  );
}
