import { PipelineStep } from "@/types/pipelineData";
import { Brain, Database, Sparkles } from "lucide-react";

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
