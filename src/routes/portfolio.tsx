import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Dipeeka Paste" },
      { name: "description", content: "Selected projects including the Walstar AI Image Alt Generator WordPress plugin, WooCommerce stores, and custom themes." },
      { property: "og:title", content: "Portfolio — Dipeeka Paste" },
      { property: "og:description", content: "Plugins, themes, and storefronts shipped by Dipeeka Paste." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <Section eyebrow="Portfolio" title="Things I've built" description="A growing collection of plugins, custom themes, and frontend work.">
      <ProjectsGrid />
    </Section>
  );
}
