"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Search, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Platform", href: "#pipeline" },
  { label: "Capabilities", href: "#dashboard" },
  { label: "Ecosystem", href: "#wow" },
];

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Left */}
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="font-display text-2xl italic tracking-tight"
          >
            Xai
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Search Input */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              showSearch ? "w-56 opacity-100" : "w-0 opacity-0"
            }`}
          >
            <input
              type="text"
              placeholder="Search..."
              className="h-9 w-full rounded-full border border-border bg-background px-4 text-sm outline-none"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="hidden h-9 w-9 place-items-center rounded-full border border-border/70 text-muted-foreground transition cursor-pointer hover:text-foreground sm:grid"
            aria-label="Search"
          >
            {showSearch ? (
              <X className="h-4 w-4" />
            ) : (
              <Search className="h-4 w-4" />
            )}
          </button>

          {/* Notification */}
          <button
            className="hidden h-9 w-9 place-items-center rounded-full border border-border/70 text-muted-foreground transition cursor-pointer hover:text-foreground sm:grid"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
          </button>

          {/* CTA */}
          <Link
            href="#dashboard"
            className="hidden h-9 items-center gap-2 rounded-full bg-gradient-to-b from-primary to-primary/80 px-4 text-xs font-medium text-primary-foreground shadow-[0_0_0_1px_oklch(1_0_0/0.08),0_10px_30px_-10px_oklch(0.72_0.16_290/0.6)] transition hover:brightness-110 sm:inline-flex"
          >
            Launch Workspace
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border cursor-pointer md:hidden"
          >
            {mobileMenu ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-border bg-background transition-all duration-300 md:hidden ${
          mobileMenu ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col p-4">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 transition hover:bg-muted"
              onClick={() => setMobileMenu(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Search */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="h-10 w-full rounded-full border border-border bg-background px-4 text-sm outline-none"
            />
          </div>

          <Link
            href="#dashboard"
            className="mt-4 inline-flex h-10 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground"
            onClick={() => setMobileMenu(false)}
          >
            Launch Workspace
          </Link>
        </nav>
      </div>
    </header>
  );
}
