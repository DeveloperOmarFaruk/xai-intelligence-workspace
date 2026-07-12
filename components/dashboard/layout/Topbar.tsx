"use client";

import { Bell, Search, Sparkles } from "lucide-react";

export default function Topbar() {
  return (
    <>
      {/* Top Navigation */}
      <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap">
        {/* Search */}
        <div className="relative flex-1 sm:max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <input
            type="text"
            placeholder="Search workspace..."
            className="h-11 w-full rounded-xl border border-border/70 bg-surface/60 pl-10 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
          />
        </div>

        {/* Right Actions */}
        <div className="ml-auto flex items-center gap-3">
          {/* Notification */}
          <button className="grid h-11 w-11 place-items-center rounded-xl border border-border/70 bg-surface/60 transition hover:bg-surface">
            <Bell className="h-4 w-4 text-muted-foreground" />
          </button>

          {/* Create Button */}
          <button className="inline-flex h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-glow px-4 text-sm font-medium text-primary-foreground shadow-lg transition  hover:scale-[1.02]">
            <Sparkles className="h-4 w-4" />

            <span className="hidden sm:block">New Project</span>
          </button>

          {/* Profile */}
          <button className="md:flex items-center gap-3 rounded-xl border border-border/70 bg-surface/60 px-2 py-1.5 transition hidden hover:bg-surface">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-cyan" />

            <div className="hidden text-left sm:block">
              <p className="text-sm font-medium">Omar Faruk</p>

              <p className="text-xs text-muted-foreground">Administrator</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
