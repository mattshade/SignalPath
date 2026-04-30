import React from "react";
import { Check } from "lucide-react";

export default function DecisionFramework() {
  const Dot = ({ color }: { color: 'green' | 'yellow' | 'red' }) => (
    <div className={`w-3 h-3 rounded-full mx-auto ${
      color === 'green' ? 'bg-chart-2' : 
      color === 'yellow' ? 'bg-chart-4' : 'bg-destructive'
    }`} />
  );

  return (
    <section className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-border/40 pb-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Decision Framework</h2>
          <p className="text-muted-foreground mt-2 text-lg">Structured evaluation of options.</p>
        </div>

        <div className="bg-card border border-border/50 rounded-2xl shadow-sm overflow-x-auto">
          <div className="min-w-[800px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border/40 bg-muted/20">
                  <th className="p-4 font-medium text-sm text-muted-foreground">Options</th>
                  <th className="p-4 font-medium text-sm text-muted-foreground text-center">Customer Impact</th>
                  <th className="p-4 font-medium text-sm text-muted-foreground text-center">Eng Risk</th>
                  <th className="p-4 font-medium text-sm text-muted-foreground text-center">Time Sensitivity</th>
                  <th className="p-4 font-medium text-sm text-muted-foreground text-center">Reversibility</th>
                  <th className="p-4 font-medium text-sm text-muted-foreground text-center">Confidence</th>
                  <th className="p-4 font-medium text-sm text-muted-foreground text-center">AI Rec</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                <tr className="bg-primary/5">
                  <td className="p-4 font-semibold text-foreground flex items-center gap-2">
                    Pause Rollout
                    <span className="text-[10px] uppercase tracking-wider bg-primary text-primary-foreground px-2 py-0.5 rounded-sm">Recommended</span>
                  </td>
                  <td className="p-4"><Dot color="green" /></td>
                  <td className="p-4"><Dot color="green" /></td>
                  <td className="p-4"><Dot color="yellow" /></td>
                  <td className="p-4"><Dot color="green" /></td>
                  <td className="p-4 text-center font-medium text-sm">82%</td>
                  <td className="p-4 text-center"><Check className="w-5 h-5 mx-auto text-chart-2" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Continue Monitoring</td>
                  <td className="p-4"><Dot color="red" /></td>
                  <td className="p-4"><Dot color="yellow" /></td>
                  <td className="p-4"><Dot color="green" /></td>
                  <td className="p-4"><Dot color="yellow" /></td>
                  <td className="p-4 text-center font-medium text-sm">65%</td>
                  <td className="p-4 text-center text-muted-foreground">-</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Rollback to v2.3.0</td>
                  <td className="p-4"><Dot color="green" /></td>
                  <td className="p-4"><Dot color="red" /></td>
                  <td className="p-4"><Dot color="yellow" /></td>
                  <td className="p-4"><Dot color="red" /></td>
                  <td className="p-4 text-center font-medium text-sm">45%</td>
                  <td className="p-4 text-center text-muted-foreground">-</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Notify Stakeholders Only</td>
                  <td className="p-4"><Dot color="red" /></td>
                  <td className="p-4"><Dot color="red" /></td>
                  <td className="p-4"><Dot color="red" /></td>
                  <td className="p-4"><Dot color="green" /></td>
                  <td className="p-4 text-center font-medium text-sm">95%</td>
                  <td className="p-4 text-center text-muted-foreground">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
