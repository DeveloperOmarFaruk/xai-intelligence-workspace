"use client";

import { motion as Motion, Variants } from "framer-motion";

interface FooterColumnProps {
  title: string;
  items: string[];
}

export default function FooterColumn({ title, items }: FooterColumnProps) {
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
    <div>
      <div className="eyebrow">{title}</div>

      <ul className="mt-3 space-y-2 text-sm">
        {items.map((item) => (
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInUpVariants}
            key={item}
          >
            <li>
              <a
                href="#"
                className="text-muted-foreground transition hover:text-foreground"
              >
                {item}
              </a>
            </li>
          </Motion.div>
        ))}
      </ul>
    </div>
  );
}
