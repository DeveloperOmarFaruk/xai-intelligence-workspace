"use client";

import {
  ArrowUpRight,
  LineChart,
  Network,
  Share2,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    label: "Self-healing information fabrics",
  },
  {
    icon: Share2,
    label: "Recursive semantic optimization",
  },
  {
    icon: LineChart,
    label: "Predictive graph re-weighting",
  },
];

export default function WowFeatures() {
  return (
    <div>
      <div className="eyebrow inline-flex items-center gap-2">
        <Network className="h-3 w-3" />
        Autonomous Topology
      </div>

      <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
        Dynamic Information
        <br />
        <span className="italic text-gradient">Restructuring.</span>
      </h2>

      <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
        Our proprietary engine dynamically reorganizes information clusters into
        coherent intelligence graphs, identifying hidden causal relationships in
        real-time.
      </p>

      <ul className="mt-6 space-y-3 text-sm">
        {features.map((feature) => (
          <li key={feature.label} className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-primary/30 bg-primary/10">
              <feature.icon className="h-4 w-4 text-primary" />
            </span>

            {feature.label}
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="mt-8 inline-flex items-center gap-2 text-sm text-primary transition hover:text-primary-glow"
      >
        Explore Network View
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}
