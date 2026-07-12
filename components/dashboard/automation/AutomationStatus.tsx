"use client";

import { CircleDot } from "lucide-react";
import AutomationProgress from "./AutomationProgress";
import { automationData } from "@/data/data";

export default function AutomationStatus() {
  return (
    <section
      className="
        rounded-2xl
        border border-border/70
        bg-surface/60
        p-5
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium">Automation Status</div>

        <span
          className="
            inline-flex
            items-center
            gap-1.5
            text-[10px]
            font-mono
            uppercase
            tracking-widest
            text-emerald-300/90
          "
        >
          <CircleDot className="h-3 w-3" />
          Live
        </span>
      </div>

      {/* Progress Items */}
      <div className="mt-4 space-y-3">
        {automationData.map((item) => (
          <AutomationProgress
            key={item.name}
            name={item.name}
            percentage={item.percentage}
          />
        ))}
      </div>
    </section>
  );
}
