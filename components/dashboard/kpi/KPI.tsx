"use client";

interface KPIProps {
  label: string;
  value: string;
  delta: string;
  tone: "up" | "flat";
}

export default function KPI({ label, value, delta, tone }: KPIProps) {
  return (
    <div className="rounded-2xl border border-border/70 bg-surface/60 p-4">
      <div className="flex items-center justify-between eyebrow">
        <span>{label}</span>

        <span
          className={
            tone === "up" ? "text-emerald-300/90" : "text-muted-foreground"
          }
        >
          {delta}
        </span>
      </div>

      <div className="mt-3 font-display text-3xl tracking-tight">{value}</div>
    </div>
  );
}
