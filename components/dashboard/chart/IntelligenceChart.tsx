"use client";

export default function IntelligenceChart() {
  const width = 600;
  const height = 220;

  // Actual performance line
  const actualPoints = Array.from({ length: 24 })
    .map((_, i) => {
      const x = (i / 23) * width;
      const y = height - (30 + Math.sin(i / 3) * 30 + i * 5);

      return `${x},${y}`;
    })
    .join(" ");

  // Predicted performance line
  const predictedPoints = Array.from({ length: 24 })
    .map((_, i) => {
      const x = (i / 23) * width;

      const y = height - (20 + Math.cos(i / 4) * 20 + i * 6.5);

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="rounded-2xl border border-border/70 bg-surface/60 p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-medium">Intelligence Growth Curve</div>

          <div className="text-xs text-muted-foreground">Last 30 days</div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-cyan" />
            Predicted
          </span>

          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Actual
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-5">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-56 w-full">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="oklch(0.72 0.16 290)"
                stopOpacity="0.35"
              />

              <stop
                offset="100%"
                stopColor="oklch(0.72 0.16 290)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          {/* Grid Lines */}
          {[0.25, 0.5, 0.75].map((line) => (
            <line
              key={line}
              x1="0"
              y1={height * line}
              x2={width}
              y2={height * line}
              stroke="oklch(1 0 0 / 0.05)"
            />
          ))}

          {/* Gradient Area */}
          <polyline
            points={`0,${height} ${predictedPoints} ${width},${height}`}
            fill="url(#chartFill)"
          />

          {/* Actual Line */}
          <polyline
            points={predictedPoints}
            fill="none"
            stroke="oklch(0.72 0.16 290)"
            strokeWidth="2"
          />

          {/* Predicted Line */}
          <polyline
            points={actualPoints}
            fill="none"
            stroke="oklch(0.82 0.14 200)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>
      </div>
    </div>
  );
}
