import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-24 md:pt-40 px-6 container mx-auto flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto text-center space-y-8"
      >
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-foreground">
          Critical decisions rarely happen at a desk.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
          SignalPath is a mobile-first system for navigating high-stakes decisions with AI.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-24 w-full max-w-md mx-auto relative"
      >
        {/* Animated Mobile Alert */}
        <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border border-border/50 relative z-10">
          <div className="p-6 border-b border-border/40 bg-muted/20">
            <div className="flex items-center gap-3 text-destructive mb-3">
              <AlertCircle className="w-5 h-5" />
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
              >
                Triage <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Decorative background blur */}
        <div className="absolute inset-0 bg-primary/5 blur-[100px] -z-10 rounded-full" />
      </motion.div>
    </section>
  );
}
