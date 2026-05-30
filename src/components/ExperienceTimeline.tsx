import { experience } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <div className="relative pl-6 md:pl-8">
      <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />
      <div className="space-y-10">
        {experience.map((job, i) => (
          <div
            key={job.role}
            className="relative animate-fade-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="absolute -left-[27px] md:-left-[35px] top-1 size-3 rounded-full bg-primary ring-4 ring-background shadow-glow" />
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{job.role}</h3>
                <span className="text-sm text-muted-foreground">{job.period}</span>
              </div>
              <p className="text-primary text-sm font-medium mt-1">{job.company}</p>
              <ul className="mt-4 space-y-2">
                {job.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
