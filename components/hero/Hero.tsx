"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import NeuralOrb from "./NeuralOrb";
import { motion as Motion, Variants } from "framer-motion";

export default function Hero() {
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
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-10 text-center">
        {/* Badge */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUpVariants}
          className="eyebrow inline-flex items-center gap-2"
        >
          <Sparkles className="h-3 w-3 animate-spin [animation-duration:4s]" />
          <span>Intelligence Operating System</span>
        </Motion.div>

        {/* Heading */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUpVariants}
        >
          <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Raw Data
            <br />
            <span className="italic text-gradient">to AI Automation</span>
          </h1>
        </Motion.div>

        {/* Description */}
        <Motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUpVariants}
          className="mx-auto mt-6 max-w-xl text-base text-muted-foreground"
        >
          Architect enterprise-grade intelligence workflows with a workspace
          built for the next generation of autonomous business logic.
        </Motion.p>

        {/* Buttons */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUpVariants}
        >
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#dashboard"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-b from-primary to-primary/80 px-5 text-sm font-medium text-primary-foreground shadow-[0_0_0_1px_oklch(1_0_0/0.08),0_10px_30px_-10px_oklch(0.72_0.16_290/0.6)] transition hover:brightness-110"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#pipeline"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border-strong bg-surface/40 px-5 text-sm text-foreground transition hover:bg-surface"
            >
              View Documentation
            </Link>
          </div>
        </Motion.div>

        {/* 3D Hero Visualization */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUpVariants}
        >
          <NeuralOrb />
        </Motion.div>

        {/* Scroll Indicator */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUpVariants}
        >
          <div className="mt-8 flex flex-col items-center gap-2 text-xs text-muted-foreground">
            <span className="eyebrow">Scroll to Reveal Synthesis</span>
            <ChevronDown className="h-4 w-4 animate-float" />
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
