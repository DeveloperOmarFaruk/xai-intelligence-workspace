"use client";

import { Activity } from "lucide-react";

interface ActivityItemProps {
  title: string;
  time: string;
}

export default function ActivityItem({ title, time }: ActivityItemProps) {
  return (
    <li className="flex items-center gap-3">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-surface-2 border border-border/60">
        <Activity className="h-3.5 w-3.5 text-primary" />
      </span>

      <div className="min-w-0 flex-1 truncate text-sm">{title}</div>

      <span className="text-xs text-muted-foreground shrink-0">{time}</span>
    </li>
  );
}
