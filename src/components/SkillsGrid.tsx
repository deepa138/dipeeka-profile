import { skills } from "@/data/portfolio";

export function SkillsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {skills.map((group, gi) => (
        <div
          key={group.category}
          className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-glow transition-shadow animate-fade-up"
          style={{ animationDelay: `${gi * 80}ms` }}
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary" />
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary hover:text-primary transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
