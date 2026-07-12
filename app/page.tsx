"use client";

import Dashboard from "@/components/dashboard/Dashboard";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/Navbar";
import Pipeline from "@/components/pipeline/Pipeline";
import WowSection from "@/components/wow/WowSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pipeline />
      <Dashboard />
      <WowSection />
      <Footer />
    </>
  );
}
