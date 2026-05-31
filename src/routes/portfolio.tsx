import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
});

function PortfolioPage() {
  useDocumentMeta({
    title: "Portfolio — Dipeeka Paste",
    description:
      "Selected projects including the Walstar AI Image Alt Generator WordPress plugin, WooCommerce stores, and custom themes.",
    ogTitle: "Portfolio — Dipeeka Paste",
    ogDescription: "Plugins, themes, and storefronts shipped by Dipeeka Paste.",
  });
  return (
    <Section eyebrow="Portfolio" title="Things I've built" description="A growing collection of plugins, custom themes, and frontend work.">
      <ProjectsGrid />
    </Section>
  );
}
