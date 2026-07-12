// types.ts
export type KPITone = "up" | "flat";

export interface KPIData {
  label: string;
  value: string;
  delta: string;
  tone: KPITone;
}
