import { ArrowUpRight } from "lucide-react";
import { projects, shot, host, type Project } from "@/data/portfolio";
import { useMemo, useState } from "react";

type Props = {
  filterable?: boolean;
  limit?: number;
};

export function ProjectsGrid({ filterable = false, limit }: Props) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState<string>("All");

  const visible: Project[] = useMemo(() => {
    const list = active === "All" ? projects : projects.filter((p) => p.category === active);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [active, limit]);

  return (
    <div>
      {filterable && (
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                active === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <article
            key={p.url}
            className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:shadow-glow hover:-translate-y-1 transition-all animate-fade-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="relative block aspect-[16/10] overflow-hidden bg-secondary"
              aria-label={`Open ${p.title}`}
            >
              <img
                src={shot(p.url, 1000)}
                alt={`${p.title} screenshot`}
                loading="lazy"
                width={1000}
                height={625}
                className="absolute inset-0 size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 text-[11px] px-2 py-1 rounded-full bg-background/80 backdrop-blur border border-border text-foreground font-medium">
                {p.category}
              </span>
              {p.featured && (
                <span className="absolute top-3 right-3 text-[11px] px-2 py-1 rounded-full bg-primary/90 text-primary-foreground font-medium">
                  Featured
                </span>
              )}
            </a>

            <div className="flex flex-col gap-3 p-5 flex-1">
              <div>
                <h3 className="text-base font-semibold leading-tight group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">{host(p.url)}</p>
              </div>
              <p className="text-sm text-muted-foreground flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-secondary text-muted-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all"
              >
                Visit live site <ArrowUpRight className="size-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
