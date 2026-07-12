"use client";

import KPI from "./KPI";

const kpiData = [
  {
    label: "Inference Speed",
    value: "12.4ms",
    delta: "-14%",
    tone: "up" as const,
  },
  {
    label: "Model Accuracy",
    value: "99.8%",
    delta: "+0.4%",
    tone: "up" as const,
  },
  {
    label: "Active Agents",
    value: "42",
    delta: "+3",
    tone: "up" as const,
  },
  {
    label: "Data Latency",
    value: "0.02ms",
    delta: "Stable",
    tone: "flat" as const,
  },
];

export default function KPISection() {
  return (
    <section className="space-y-4">
      {/* Welcome Header */}
      <div className="mb-8">
        <h3 className="font-display text-2xl tracking-tight">
          Welcome back 👋
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Here&apos;s what&apos;s happening across your AI workspace today.
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-xl tracking-tight">
            Key Performance Indicators
          </h3>

          <p className="text-sm text-muted-foreground">
            Live metrics from your AI infrastructure.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {kpiData.map((item) => (
          <KPI
            key={item.label}
            label={item.label}
            value={item.value}
            delta={item.delta}
            tone={item.tone}
          />
        ))}
      </div>
    </section>
  );
}
