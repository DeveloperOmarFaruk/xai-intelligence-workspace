"use client";

interface SynthCardProps {
  title: string;
  body: string;
}

export default function SynthCard({ title, body }: SynthCardProps) {
  return (
    <div className="rounded-xl border border-border/70 bg-background/50 p-3">
      <div className="text-sm font-medium">{title}</div>

      <div className="mt-1 text-xs text-muted-foreground leading-relaxed">
        {body}
      </div>
    </div>
  );
}
