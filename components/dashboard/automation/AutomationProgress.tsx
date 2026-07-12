"use client";

interface AutomationProgressProps {
  name: string;
  percentage: number;
}

export default function AutomationProgress({
  name,
  percentage,
}: AutomationProgressProps) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <span>{name}</span>

        <span className="text-muted-foreground font-mono">{percentage}%</span>
      </div>

      <div className="mt-1.5 h-1.5 rounded-full bg-surface-2 overflow-hidden">
        <div
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-primary
            to-cyan
          "
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}
