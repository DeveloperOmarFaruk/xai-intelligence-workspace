// "use client";

// import {
//   BarChart3,
//   LayoutDashboard,
//   Layers,
//   Library,
//   Sparkles,
//   Zap,
// } from "lucide-react";

// const menuItems = [
//   {
//     icon: LayoutDashboard,
//     label: "Dashboard",
//     active: true,
//   },
//   {
//     icon: Sparkles,
//     label: "Intelligence",
//   },
//   {
//     icon: BarChart3,
//     label: "Analytics",
//   },
//   {
//     icon: Zap,
//     label: "Automations",
//   },
//   {
//     icon: Library,
//     label: "Library",
//   },
// ];

// // Inside Sidebar.tsx, update the root element classes:
// export default function Sidebar() {
//   return (
//     <aside className="h-full border-b border-border/70 bg-background/40 p-5 lg:border-b-0 lg:border-r flex flex-col justify-between overflow-y-auto">
//       <div>
//         {/* Logo */}
//         <div className="flex items-center gap-3 border-b border-border/60 pb-6">
//           <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow">
//             <Layers className="h-5 w-5 text-primary-foreground" />
//           </div>
//           <div className="flex-1">
//             <h3 className="text-sm font-semibold">Xai</h3>
//             <p className="text-xs text-muted-foreground">
//               Intelligence Workspace
//             </p>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="mt-6 space-y-2">
//           {menuItems.map((item) => {
//             const Icon = item.icon;
//             return (
//               <button
//                 key={item.label}
//                 className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-all ${
//                   item.active
//                     ? "border border-primary/30 bg-primary/10 text-foreground"
//                     : "text-muted-foreground hover:bg-surface hover:text-foreground"
//                 }`}
//               >
//                 <Icon className="h-4 w-4" />
//                 <span>{item.label}</span>
//               </button>
//             );
//           })}
//         </nav>
//       </div>

//       {/* Workspace Card moved outside the top container block but inside aside */}
//       <div className="mt-10 rounded-2xl border border-border/60 bg-surface/60 p-4">
//         <div className="flex items-center gap-3">
//           <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan to-primary" />
//           <div>
//             <p className="text-sm font-medium">Enterprise</p>
//             <p className="text-xs text-muted-foreground">Professional Plan</p>
//           </div>
//         </div>
//         <div className="mt-4 h-2 overflow-hidden rounded-full bg-border">
//           <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-primary to-cyan" />
//         </div>
//         <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
//           <span>Storage</span>
//           <span>72%</span>
//         </div>
//       </div>
//     </aside>
//   );
// }

"use client";

import { useState } from "react";
import {
  BarChart3,
  LayoutDashboard,
  Layers,
  Library,
  Sparkles,
  Zap,
  Menu, // Added for mobile open trigger
  X, // Added for mobile close trigger
} from "lucide-react";

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
  },
  {
    icon: Sparkles,
    label: "Intelligence",
  },
  {
    icon: BarChart3,
    label: "Analytics",
  },
  {
    icon: Zap,
    label: "Automations",
  },
  {
    icon: Library,
    label: "Library",
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* --- Mobile Top Header --- */}
      {/* This bar only shows on mobile/tablet (hidden on lg screens) */}
      <div className="flex items-center justify-between border-b border-border/70 bg-background/80 backdrop-blur-md p-4 lg:hidden sticky top-0 z-40 w-full">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary-glow">
            <Layers className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold">Xai</span>
        </div>

        <button
          onClick={toggleSidebar}
          className="p-2 rounded-xl hover:bg-surface text-foreground transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* --- Mobile Backdrop Overlay --- */}
      {/* Darkens the background when sidebar is open on mobile; clicking it closes the sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* --- Sidebar Component --- */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-72 flex-col justify-between overflow-y-auto bg-background p-5 border-r border-border/70 transition-transform duration-300 ease-in-out
          lg:static lg:flex lg:h-full lg:w-64 lg:translate-x-0 lg:bg-background/40 lg:border-r lg:border-b-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div>
          {/* Logo & Close Button for Mobile */}
          <div className="flex items-center justify-between border-b border-border/60 pb-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow">
                <Layers className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold">Xai</h3>
                <p className="text-xs text-muted-foreground">
                  Intelligence Workspace
                </p>
              </div>
            </div>

            {/* Close button inside sidebar (visible only on mobile when open) */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-xl hover:bg-surface text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="mt-6 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    // Optional: Close sidebar automatically on mobile after clicking an item
                    if (window.innerWidth < 1024) setIsOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-all ${
                    item.active
                      ? "border border-primary/30 bg-primary/10 text-foreground"
                      : "text-muted-foreground hover:bg-surface hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Workspace Card */}
        <div className="mt-10 rounded-2xl border border-border/60 bg-surface/60 p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan to-primary" />
            <div>
              <p className="text-sm font-medium">Enterprise</p>
              <p className="text-xs text-muted-foreground">Professional Plan</p>
            </div>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-border">
            <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-primary to-cyan" />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>Storage</span>
            <span>72%</span>
          </div>
        </div>
      </aside>
    </>
  );
}
