"use client";

import ActivityItem from "./ActivityItem";

const activityData = [
  {
    title: "Agent Nova indexed 24K records",
    time: "2m",
  },
  {
    title: "Pipeline #04 promoted to production",
    time: "18m",
  },
  {
    title: "Model retrained on Q3 telemetry",
    time: "1h",
  },
  {
    title: "Vector store rebalanced",
    time: "3h",
  },
];

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
