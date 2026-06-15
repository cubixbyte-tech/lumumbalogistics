import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, text, centered = false }: { eyebrow: string; title: string; text?: string; centered?: boolean }) {
  return <div className={cn("mb-10 max-w-2xl", centered && "mx-auto text-center")}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="mt-4 text-muted">{text}</p>}</div>;
}
