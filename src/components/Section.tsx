import { type ReactNode } from "react";

export function Section({
  title,
  eyebrow,
  description,
  children,
  className = "",
}: {
  title?: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-6 py-16 md:py-24 ${className}`}>
      {(eyebrow || title || description) && (
        <div className="mb-12 animate-fade-up">
          {eyebrow && (
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-muted-foreground max-w-2xl">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
