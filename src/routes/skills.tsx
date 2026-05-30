import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { SkillsGrid } from "@/components/SkillsGrid";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Dipeeka Paste" },
      { name: "description", content: "Frontend, CMS, integrations and tooling expertise — WordPress, WooCommerce, JavaScript, SEO, and more." },
      { property: "og:title", content: "Skills — Dipeeka Paste" },
      { property: "og:description", content: "Frontend, WordPress, integrations, and team-leadership skills." },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <Section eyebrow="Toolbox" title="Skills & Expertise" description="A snapshot of the technologies and platforms I use to ship polished web experiences.">
      <SkillsGrid />
    </Section>
  );
}
