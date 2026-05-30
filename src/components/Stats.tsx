import { Counter } from "./Counter";
import { stats } from "@/data/portfolio";

export function Stats() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-border bg-card p-8 shadow-card">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient font-display">
              <Counter end={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
