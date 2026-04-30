import React from "react";
import { motion } from "framer-motion";
import { User, Clock, AlertTriangle, Target, Smartphone, CheckCircle } from "lucide-react";

export default function ScenarioOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="scenario" className="px-6 container mx-auto">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="mb-12 border-b border-border/40 pb-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">The Scenario</h2>
            <p className="text-muted-foreground mt-2 text-lg">Context matters when decisions can't wait.</p>
          </div>

          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-10">
              <motion.div variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <User className="w-5 h-5" />
                  <h3 className="font-semibold">The User</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Product Lead at a Series B SaaS company. Responsible for core product stability and feature rollouts.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="w-5 h-5" />
                  <h3 className="font-semibold">The Situation</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Critical launch issue detected at 42% rollout. Error rates spiking, support tickets surging.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-2 text-chart-5">
                  <Target className="w-5 h-5" />
                  <h3 className="font-semibold">The Goal</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Diagnose the severity and make a go/no-go decision on the rollout within 15 minutes.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-2 text-chart-4">
                  <Clock className="w-5 h-5" />
                  <h3 className="font-semibold">The Constraints</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Away from desk, relying on fragmented information across Slack, Datadog, and email under extreme time pressure.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-2 text-chart-2">
                  <Smartphone className="w-5 h-5" />
                  <h3 className="font-semibold">Why Mobile Matters</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Incidents don't respect working hours. The system must adapt to the user's context, not the other way around.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-2 text-chart-2">
                  <CheckCircle className="w-5 h-5" />
                  <h3 className="font-semibold">Success Criteria</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  High confidence decision made swiftly, with automated follow-through and clear accountability.
                </p>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col justify-center">
              <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm relative">
                <div className="text-6xl text-muted/30 font-serif absolute top-4 left-4">"</div>
                <p className="font-serif text-xl italic leading-relaxed text-foreground relative z-10 pt-4">
                  The challenge is not more data, but helping users understand what matters, what the AI believes, what is uncertain, and what to do next.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
