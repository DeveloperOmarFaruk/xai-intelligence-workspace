// "use client";

// import ActivitySection from "./activity/ActivitySection";
// import AISynthesis from "./ai/AISynthesis";
// import AutomationStatus from "./automation/AutomationStatus";
// import IntelligenceChart from "./chart/IntelligenceChart";
// import KPISection from "./kpi/KPISection";
// import DashboardHeader from "./layout/DashboardHeader";
// import Sidebar from "./layout/Sidebar";
// import Topbar from "./layout/Topbar";

// export default function Dashboard() {
//   return (
//     <section
//       id="dashboard"
//       className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
//     >
//       <DashboardHeader />

//       {/* 1. Changed fixed height to h-screen (or max-h-[800px]) and added overflow-hidden */}
//       <div className="mt-32 h-[calc(100vh-200px)] min-h-[600px] rounded-3xl soft-border overflow-hidden bg-background">
//         <div className="grid h-full lg:grid-cols-[240px_1fr]">
//           {/* Sidebar will be locked in place here */}
//           <Sidebar />

//           {/* 2. Added h-full and overflow-y-auto to create an independent scrollable container */}
//           <div className="flex flex-col h-full overflow-hidden">
//             {/* Topbar stays at the top of this flex container */}
//             <div className="p-6 pt-4 pb-4 border-b border-border/70">
//               <Topbar />
//             </div>

//             {/* Content area that actually scrolls */}
//             <div className="flex-1 overflow-y-auto custom-scroll space-y-6 p-6 pr-3 lg:p-8">
//               <KPISection />

//               <div className="grid lg:grid-cols-[2fr_1fr] gap-4">
//                 <IntelligenceChart />
//                 <AISynthesis />
//               </div>

//               <div className="grid lg:grid-cols-2 gap-4">
//                 <ActivitySection />
//                 <AutomationStatus />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import ActivitySection from "./activity/ActivitySection";
// import AISynthesis from "./ai/AISynthesis";
// import AutomationStatus from "./automation/AutomationStatus";
// import IntelligenceChart from "./chart/IntelligenceChart";
// import KPISection from "./kpi/KPISection";
// import DashboardHeader from "./layout/DashboardHeader";
// import Sidebar from "./layout/Sidebar";
// import Topbar from "./layout/Topbar";

// export default function Dashboard() {
//   return (
//     <section
//       id="dashboard"
//       className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
//     >
//       <DashboardHeader />

//       {/* Mobile view-te fixed height bad diye auto hobe jate scroll kora jay, desktop-e h-screen hobe */}
//       <div className="mt-32 h-auto lg:h-[calc(100vh-200px)] lg:min-h-[600px] rounded-3xl soft-border overflow-hidden bg-background">
//         {/* CRITICAL FIX: Mobile view-te flex-col jate ekta niche arekta thake, desktop-e flex-row jate pashapashi thake */}
//         <div className="flex flex-col lg:flex-row h-full w-full">
//           {/* Sidebar Area */}
//           <Sidebar />

//           {/* Main Content Wrapper */}
//           <div className="flex flex-col flex-1 h-full min-w-0 overflow-hidden lg:border-l lg:border-border/70">
//             {/* Topbar Wrapper */}
//             <div className="p-6 pt-4 pb-4 border-b border-border/70 w-full">
//               <Topbar />
//             </div>

//             {/* Content area that actually scrolls */}
//             <div className="flex-1 overflow-y-auto custom-scroll space-y-6 p-6 pr-3 lg:p-8">
//               <KPISection />

//               <div className="grid lg:grid-cols-[2fr_1fr] gap-4">
//                 <IntelligenceChart />
//                 <AISynthesis />
//               </div>

//               <div className="grid lg:grid-cols-2 gap-4">
//                 <ActivitySection />
//                 <AutomationStatus />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import ActivitySection from "./activity/ActivitySection";
import AISynthesis from "./ai/AISynthesis";
import AutomationStatus from "./automation/AutomationStatus";
import IntelligenceChart from "./chart/IntelligenceChart";
import KPISection from "./kpi/KPISection";
import DashboardHeader from "./layout/DashboardHeader";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";
import { motion as Motion, Variants } from "framer-motion";

export default function Dashboard() {
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
    <section
      id="dashboard"
      className="relative mx-auto max-w-6xl px-4  sm:px-6 py-4 md:py-28"
    >
      <DashboardHeader />

      {/* FIXED: Mobile content scroll anar jonno height keno h-screen fixed kora dorkar */}
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeInUpVariants}
      >
        <div className="mt-32 h-[calc(100vh-150px)] min-h-[550px] lg:h-[calc(100vh-200px)] lg:min-h-[600px] rounded-3xl soft-border overflow-hidden bg-background">
          {/* Container - Mobile-e flex-col ar Desktop-e flex-row */}
          <div className="flex flex-col lg:flex-row h-full w-full overflow-hidden">
            {/* Sidebar Area */}
            <Sidebar />

            {/* Main Content Wrapper - Added max-h-full to restrict container sizing on mobile */}
            <div className="flex flex-col flex-1 h-full max-h-full min-w-0 overflow-hidden lg:border-l lg:border-border/70">
              {/* Topbar Wrapper */}
              <div className="p-6 pt-4 pb-4 border-b border-border/70 w-full">
                <Topbar />
              </div>

              {/* Content area that actually scrolls (Now working perfectly on mobile too) */}
              <div className="flex-1 overflow-y-auto custom-scroll space-y-6 p-6 pr-3 lg:p-8">
                <KPISection />

                <div className="grid lg:grid-cols-[2fr_1fr] gap-4">
                  <IntelligenceChart />
                  <AISynthesis />
                </div>

                <div className="grid lg:grid-cols-2 gap-4">
                  <ActivitySection />
                  <AutomationStatus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Motion.div>
    </section>
  );
}
