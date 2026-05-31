import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { SkillsGrid } from "@/components/SkillsGrid";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
});

function SkillsPage() {
  useDocumentMeta({
    title: "Skills — Dipeeka Paste",
    description:
      "Frontend, CMS, integrations and tooling expertise — WordPress, WooCommerce, JavaScript, SEO, and more.",
    ogTitle: "Skills — Dipeeka Paste",
    ogDescription: "Frontend, WordPress, integrations, and team-leadership skills.",
  });
  return (
    <Section eyebrow="Toolbox" title="Skills & Expertise" description="A snapshot of the technologies and platforms I use to ship polished web experiences.">
      <SkillsGrid />
    </Section>
  );
}
