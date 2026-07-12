"use client";

interface FooterColumnProps {
  title: string;
  items: string[];
}

export default function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <div className="eyebrow">{title}</div>

      <ul className="mt-3 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-muted-foreground transition hover:text-foreground"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
