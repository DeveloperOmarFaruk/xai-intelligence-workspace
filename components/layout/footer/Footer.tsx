"use client";

import { footerLinks } from "@/data/data";
import FooterColumn from "./FooterColumn";
import { motion as Motion, Variants } from "framer-motion";

export default function Footer() {
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
    <footer className="mt-0 md:mt-10 border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-1">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUpVariants}
          >
            <div className="font-display text-2xl italic">Xai</div>
            <p className="text-xs text-muted-foreground">
              Intelligence Workspace
            </p>
          </Motion.div>

          <Motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUpVariants}
            className="mt-3 max-w-xs text-sm text-muted-foreground"
          >
            Defining the substrate of enterprise intelligence. Built for scale,
            security, and autonomy.
          </Motion.p>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section) => (
          <FooterColumn
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/60">
        <div className="eyebrow mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUpVariants}
          >
            <span>© 2026 Xai Intelligence · System Online</span>
          </Motion.div>

          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUpVariants}
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              All systems nominal
            </span>
          </Motion.div>
        </div>
      </div>
    </footer>
  );
}
