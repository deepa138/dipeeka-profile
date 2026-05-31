import { createFileRoute } from "@tanstack/react-router";
import { Download, GraduationCap } from "lucide-react";
import { Section } from "@/components/Section";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { profile } from "@/data/portfolio";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export const Route = createFileRoute("/resume")({
  component: ResumePage,
});

function ResumePage() {
  useDocumentMeta({
    title: "Resume — Dipeeka Paste",
    description:
      "Career timeline and education for Dipeeka Paste — Frontend Developer & WordPress Specialist.",
    ogTitle: "Resume — Dipeeka Paste",
    ogDescription: "Career timeline and education.",
  });
  return (
    <Section eyebrow="Resume" title="Experience & Education">
      <div className="flex justify-end mb-8 -mt-4">
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 shadow-glow transition-all"
        >
          <Download className="size-4" /> Download CV
        </a>
      </div>

      <div className="grid md:grid-cols-[1fr_300px] gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-6">Career Timeline</h3>
          <ExperienceTimeline />
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="flex items-center gap-2 text-primary mb-3">
              <GraduationCap className="size-5" />
              <h3 className="font-semibold text-foreground">Education</h3>
            </div>
            <p className="text-sm font-medium">BE Computer Engineering</p>
            <p className="text-sm text-muted-foreground mt-1">Shivaji University, Kolhapur</p>
            <p className="text-xs text-muted-foreground mt-1">Graduated 2022</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-semibold mb-3">Languages</h3>
            <ul className="space-y-2 text-sm">
              {profile.languages.map((l) => (
                <li key={l} className="flex items-center justify-between">
                  <span>{l}</span>
                  <span className="text-xs text-muted-foreground">Fluent</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
