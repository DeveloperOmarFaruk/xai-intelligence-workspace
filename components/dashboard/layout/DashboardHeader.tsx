"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DashboardHeader() {
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
    <div ref={containerRef}>
      <div className="text-center" ref={textContainerRef}>
        {/* Small Label */}
        <div className="eyebrow opacity-0">System Overview</div>

        {/* Main Heading */}
        <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-5xl opacity-0">
          Mission Control{" "}
          <span className="italic text-gradient">for Intelligence</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base opacity-0">
          Monitor your AI infrastructure, automate complex workflows, and gain
          real-time insights from a unified intelligence dashboard.
        </p>
      </div>
    </div>
  );
}
