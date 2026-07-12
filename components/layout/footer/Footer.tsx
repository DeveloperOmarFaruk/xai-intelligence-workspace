"use client";

import FooterColumn from "./FooterColumn";

const footerLinks = [
  {
    title: "Product",
    items: ["Workspace", "API", "Connectors"],
  },
  {
    title: "Company",
    items: ["About", "Ethics", "Careers"],
  },
  {
    title: "Legal",
    items: ["Privacy", "Security", "Terms"],
  },
];

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="font-display text-2xl italic">Xai</div>
          <p className="text-xs text-muted-foreground">
            Intelligence Workspace
          </p>

          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Defining the substrate of enterprise intelligence. Built for scale,
            security, and autonomy.
          </p>
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
          <span>© 2026 Xai Intelligence · System Online</span>

          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            All systems nominal
          </span>
        </div>
      </div>
    </footer>
  );
}
