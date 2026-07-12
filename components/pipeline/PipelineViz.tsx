"use client";

interface PipelineVizProps {
  index: number;
}

export default function PipelineViz({ index }: PipelineVizProps) {
  // STEP 1 - Ingest Data
  if (index === 0) {
    return (
      <div className="absolute inset-0 grid grid-cols-8 gap-1 p-8">
        {Array.from({ length: 64 }).map((_, i) => (
          <div
            key={i}
            className="h-1.5 rounded-full bg-primary/60"
            style={{
              opacity: 0.15 + ((i * 37) % 80) / 100,
              transform: `translateX(${((i * 13) % 20) - 10}px)`,
            }}
          />
        ))}

        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary/30 to-transparent" />
      </div>
    );
  }

  // STEP 2 - Analyze with AI
  if (index === 1) {
    const points = Array.from({ length: 10 }).map((_, i) => ({
      x: 15 + ((i * 53) % 70),
      y: 15 + ((i * 31) % 70),
    }));

    return (
      <div className="absolute inset-0">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {points.map((point, i) =>
            points
              .slice(i + 1)
              .map((target, j) => (
                <line
                  key={`${i}-${j}`}
                  x1={point.x}
                  y1={point.y}
                  x2={target.x}
                  y2={target.y}
                  stroke="oklch(0.72 0.16 290)"
                  strokeWidth="0.15"
                  opacity="0.35"
                />
              )),
          )}

          {points.map((point, i) => (
            <circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="1.2"
              fill="oklch(0.82 0.14 200)"
            />
          ))}
        </svg>
      </div>
    );
  }

  // STEP 3 - Generate Insight
  return (
    <div className="absolute inset-0 flex items-end justify-around gap-2 p-8">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="w-4 rounded-t bg-gradient-to-t from-primary/80 to-cyan/60"
          style={{
            height: `${20 + ((i * 17) % 70)}%`,
          }}
        />
      ))}
    </div>
  );
}
