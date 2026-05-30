import { ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";

export function ProjectsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p, i) => (
        <a
          key={p.title}
          href={p.link}
          target={p.link.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className={`group relative rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all animate-fade-up overflow-hidden ${
            p.featured ? "md:col-span-2" : ""
          }`}
          style={{ animationDelay: `${i * 80}ms` }}
        >
          {p.featured && (
            <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-primary/15 text-primary font-medium">
              Featured
            </span>
          )}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            </div>
            <ExternalLink className="size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground border border-border"
              >
                {t}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}
