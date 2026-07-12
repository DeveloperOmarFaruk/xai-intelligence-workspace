"use client";

import { useMemo } from "react";

export default function ClusterViz() {
  // 1. Wrap in useMemo so it doesn't recalculate on every re-render
  // 2. Fix the floating point mismatch by rounding the values
  const nodes = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => {
      const angle = (i / 40) * Math.PI * 2;
      const radius = 25 + ((i * 7) % 20);

      const rawX = 50 + Math.cos(angle) * radius;
      const rawY = 50 + Math.sin(angle) * radius;

      return {
        // Rounding to 4 decimal places fixes the Server/Client mismatch
        x: Math.round(rawX * 10000) / 10000,
        y: Math.round(rawY * 10000) / 10000,
        size: 0.5 + ((i * 3) % 10) / 10,
      };
    });
  }, []);

  return (
    <>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
        {nodes.flatMap((node, i) =>
          nodes
            .slice(i + 1, i + 4)
            .map((next, j) => (
              <line
                key={`${i}-${j}`}
                x1={node.x}
                y1={node.y}
                x2={next.x}
                y2={next.y}
                stroke="#8B5CF6"
                strokeWidth={0.15}
                opacity={0.4}
              />
            )),
        )}

        {nodes.map((node, i) => (
          <circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill={i % 3 === 0 ? "#38BDF8" : "#C084FC"}
          />
        ))}
      </svg>

      <div className="absolute inset-0 grid place-items-center">
        <div className="h-40 w-40 animate-pulse-glow rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="eyebrow absolute left-5 top-5">cluster.render / v2.4</div>

      <div className="eyebrow absolute bottom-5 right-5 text-primary/90">
        40 nodes · 112 edges
      </div>
    </>
  );
}
