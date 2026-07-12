"use client";

import ClusterViz from "./ClusterViz";
import WowFeatures from "./WowFeatures";

export default function WowSection() {
  return (
    <section id="wow" className="relative mx-auto max-w-6xl px-6 py-32">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
        {/* Left Content */}
        <WowFeatures />

        {/* Right Visualization */}
        <div
          data-threejs-scene="wow-cluster-reorganize"
          className="relative aspect-square overflow-hidden rounded-3xl soft-border lg:aspect-[4/3]"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.16_290/0.3),transparent_65%)]" />

          <ClusterViz />
        </div>
      </div>
    </section>
  );
}
