"use client";

import ClusterViz from "./ClusterViz";
import WowFeatures from "./WowFeatures";
import { motion as Motion, Variants } from "framer-motion";

export default function WowSection() {
  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const viewportConfig = { once: false, amount: 0.3 };

  return (
    <section id="wow" className="relative mx-auto max-w-6xl px-6 py-32">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
        {/* Left Content */}
        <WowFeatures />

        {/* Right Visualization */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUpVariants}
        >
          <div
            data-threejs-scene="wow-cluster-reorganize"
            className="relative aspect-square overflow-hidden rounded-3xl soft-border lg:aspect-[4/3]"
          >
            <div className="absolute inset-0 grid-bg opacity-40" />

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.16_290/0.3),transparent_65%)]" />
            <ClusterViz />
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
