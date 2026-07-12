"use client";

import { useEffect, useRef } from "react";
import { pipelineSteps } from "@/data/data";
import PipelineViz from "./PipelineViz";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Pipeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Header
      const children = textContainerRef.current?.children;

      if (children) {
        gsap.fromTo(
          children,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: textContainerRef.current,
              start: "top 85%",
              end: "bottom 15%",
              // play
              // restart, reverse
              toggleActions: "play reverse restart reverse",
            },
          },
        );
      }

      // Sticky Step Panels Layout Logic
      const panels = gsap.utils.toArray<HTMLElement>("[data-panel]");
      panels.forEach((panel, i) => {
        if (i === panels.length - 1) return;

        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
          scrub: true,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pipeline"
      className="relative bg-background"
      ref={containerRef}
    >
      {/* Intro Header Panel */}
      <div
        ref={textContainerRef}
        className="relative w-full pt-10 md:pt-32 pb-0 md:pb-16 flex flex-col justify-center items-center px-6 text-center z-10 bg-background"
      >
        {/* Eyebrow - initially hidden via GSAP */}
        <div className="eyebrow opacity-0">The Neural Pipeline</div>

        {/* Heading - initially hidden via GSAP */}
        <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-6xl max-w-4xl mx-auto opacity-0">
          Continuous intelligence{" "}
          <span className="italic text-gradient block sm:inline">
            from source to synthesis.
          </span>
        </h2>
      </div>

      {/* Steps Panels Container */}
      <div className="relative w-full">
        {pipelineSteps.map((step, index) => {
          const Icon = step.icon;
          const flipped = index % 2 === 1;

          return (
            <div
              key={step.n}
              data-panel
              className="sticky-panel relative min-h-screen w-full flex items-center bg-background py-12 md:py-16"
            >
              <div className="mx-auto max-w-6xl w-full px-6 grid items-center gap-8 md:grid-cols-2 md:gap-16">
                {/* Content Side */}
                <div className={`space-y-5 ${flipped ? "md:order-2" : ""}`}>
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-border-strong bg-surface">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      STEP {step.n}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl tracking-tight sm:text-5xl">
                    {step.title}
                  </h3>

                  <p className="max-w-md leading-relaxed text-muted-foreground text-lg">
                    {step.desc}
                  </p>

                  <div className="flex items-center gap-2 pt-2 text-xs font-mono text-primary/80">
                    <span className="inline-block h-px w-8 bg-primary/60" />
                    Connected to Step{" "}
                    {String(Math.min(index + 2, 3)).padStart(2, "0")}
                  </div>
                </div>

                {/* Visualization Side */}
                <div
                  data-threejs-scene={`pipeline-${step.n}`}
                  className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl soft-border bg-surface shadow-2xl ${
                    flipped ? "md:order-1" : ""
                  }`}
                >
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.16_290/0.18),transparent_65%)]" />

                  <PipelineViz index={index} />

                  <div className="absolute left-4 top-4 eyebrow">
                    {`neural.render / ${step.title
                      .toLowerCase()
                      .replace(" ", "_")}`}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
