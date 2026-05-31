import { Gauge, ArrowUpRight, Zap, Activity, CheckCircle2 } from "lucide-react";
import { performanceWins, host } from "@/data/portfolio";

export function PerformanceSection() {
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <Highlight icon={<Gauge className="size-5" />} label="Google PageSpeed" value="95+" sub="across audited sites" />
        <Highlight icon={<Activity className="size-5" />} label="Core Web Vitals" value="All green" sub="LCP · CLS · INP" />
        <Highlight icon={<Zap className="size-5" />} label="Avg LCP cut" value="−58%" sub="via image & script tuning" />
        <Highlight icon={<CheckCircle2 className="size-5" />} label="Audits delivered" value="20+" sub="WordPress & React sites" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {performanceWins.map((w, i) => (
          <a
            key={w.url}
            href={w.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-border bg-card p-5 shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all animate-fade-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="relative shrink-0 size-16 rounded-full grid place-items-center border-4 border-primary/30 bg-background">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary-glow/10" />
                <span className="relative text-lg font-bold text-primary font-display">{w.score}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold group-hover:text-primary transition-colors truncate">{w.title}</h3>
                  <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground">{host(w.url)}</p>
                <p className="mt-2 text-sm text-muted-foreground">{w.summary}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function Highlight({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="flex items-center gap-2 text-primary">{icon}<span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span></div>
      <p className="mt-2 text-2xl font-bold font-display text-gradient">{value}</p>
      <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
    </div>
  );
}
