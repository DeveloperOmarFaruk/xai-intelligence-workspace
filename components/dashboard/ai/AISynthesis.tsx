"use client";

import { Sparkles } from "lucide-react";
import SynthCard from "./SynthCard";

const synthesisData = [
  {
    title: "Anomaly Detected in Cluster 7",
    body: "Predicted resource leak in reasoning sub-module. Optimization suggested.",
  },
  {
    title: "New Pattern Emerged",
    body: "Correlation found between supply-chain latency and region-4 output.",
  },
];

export default function AISynthesis() {
  return (
    <section
      className="
        rounded-2xl
        border border-primary/25
        bg-gradient-to-b
        from-primary/10
        to-transparent
        p-5
      "
    >
      {/* Header */}
      <div className="flex items-center gap-2 eyebrow text-primary/90">
        <Sparkles className="h-3 w-3" />
        AI Synthesis
      </div>

      {/* Cards */}
      <div className="mt-4 space-y-3">
        {synthesisData.map((item) => (
          <SynthCard key={item.title} title={item.title} body={item.body} />
        ))}
      </div>
    </section>
  );
}
