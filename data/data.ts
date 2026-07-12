import { ActivityData } from "@/types/activityData";
import { AutomationData } from "@/types/automationData";
import { FooterLink } from "@/types/footerLink";
import { KPIData } from "@/types/kpiData";
import { PipelineStep } from "@/types/pipelineData";
import { SynthesisData } from "@/types/synthesisData";
import { WowFeature } from "@/types/wowFeatures";
import { Brain, Database, LineChart, Share2, Sparkles } from "lucide-react";

export const pipelineSteps: PipelineStep[] = [
  {
    n: "01",
    icon: Database,
    title: "Ingest Data",
    desc: "Synchronize unstructured data from 400+ enterprise silos into a high-fidelity intelligence fabric.",
  },
  {
    n: "02",
    icon: Brain,
    title: "Analyze with AI",
    desc: "Multimodal reasoning engines map semantic relationships and detect latent patterns in business logic.",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Generate Insight",
    desc: "Transform analysis into executable strategies and automated workflows tailored to your KPI targets.",
  },
];

export const kpiData: KPIData[] = [
  {
    label: "Inference Speed",
    value: "12.4ms",
    delta: "-14%",
    tone: "up" as const,
  },
  {
    label: "Model Accuracy",
    value: "99.8%",
    delta: "+0.4%",
    tone: "up" as const,
  },
  {
    label: "Active Agents",
    value: "42",
    delta: "+3",
    tone: "up" as const,
  },
  {
    label: "Data Latency",
    value: "0.02ms",
    delta: "Stable",
    tone: "flat" as const,
  },
];

export const synthesisData: SynthesisData[] = [
  {
    title: "Anomaly Detected in Cluster 7",
    body: "Predicted resource leak in reasoning sub-module. Optimization suggested.",
  },
  {
    title: "New Pattern Emerged",
    body: "Correlation found between supply-chain latency and region-4 output.",
  },
];

export const activityData: ActivityData[] = [
  {
    title: "Agent Nova indexed 24K records",
    time: "2m",
  },
  {
    title: "Pipeline #04 promoted to production",
    time: "18m",
  },
  {
    title: "Model retrained on Q3 telemetry",
    time: "1h",
  },
  {
    title: "Vector store rebalanced",
    time: "3h",
  },
];

export const automationData: AutomationData[] = [
  {
    name: "Lead Enrichment",
    percentage: 82,
  },
  {
    name: "Anomaly Watch",
    percentage: 64,
  },
  {
    name: "Forecast Refresh",
    percentage: 91,
  },
];

export const wowFeatures: WowFeature[] = [
  {
    icon: Sparkles,
    label: "Self-healing information fabrics",
  },
  {
    icon: Share2,
    label: "Recursive semantic optimization",
  },
  {
    icon: LineChart,
    label: "Predictive graph re-weighting",
  },
];

export const footerLinks: FooterLink[] = [
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
