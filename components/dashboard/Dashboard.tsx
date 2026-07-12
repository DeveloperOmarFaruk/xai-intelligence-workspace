"use client";

import ActivitySection from "./activity/ActivitySection";
import AISynthesis from "./ai/AISynthesis";
import AutomationStatus from "./automation/AutomationStatus";
import IntelligenceChart from "./chart/IntelligenceChart";
import KPISection from "./kpi/KPISection";
import DashboardHeader from "./layout/DashboardHeader";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";

export default function Dashboard() {
  return (
    <section
      id="dashboard"
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
    >
      <DashboardHeader />

      {/* 1. Changed fixed height to h-screen (or max-h-[800px]) and added overflow-hidden */}
      <div className="mt-32 h-[calc(100vh-200px)] min-h-[600px] rounded-3xl soft-border overflow-hidden bg-background">
        <div className="grid h-full lg:grid-cols-[240px_1fr]">
          {/* Sidebar will be locked in place here */}
          <Sidebar />

          {/* 2. Added h-full and overflow-y-auto to create an independent scrollable container */}
          <div className="flex flex-col h-full overflow-hidden">
            {/* Topbar stays at the top of this flex container */}
            <div className="">
              <Topbar />
            </div>

            {/* Content area that actually scrolls */}
            <div className="flex-1 overflow-y-auto custom-scroll space-y-6 p-6 lg:p-8">
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
    </section>
  );
}
