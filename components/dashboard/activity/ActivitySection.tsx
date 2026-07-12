"use client";

import { activityData } from "@/data/data";
import ActivityItem from "./ActivityItem";

export default function ActivitySection() {
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
        <div className="text-sm font-medium">Recent Activities</div>

        <button
          className="
            text-xs
            text-muted-foreground
            hover:text-foreground
            transition
          "
        >
          View all
        </button>
      </div>

      {/* Activity List */}
      <ul className="mt-4 space-y-3">
        {activityData.map((item) => (
          <ActivityItem key={item.title} title={item.title} time={item.time} />
        ))}
      </ul>
    </section>
  );
}
