import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { PerformanceSection } from "@/components/PerformanceSection";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { Info } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
});

function PortfolioPage() {
  useDocumentMeta({
    title: "Portfolio — Dipeeka Paste | WordPress, WooCommerce, React Projects",
    description:
      "Selected client work across WordPress, Elementor, WooCommerce, Shopify, Squarespace, and React — plus PageSpeed & Core Web Vitals case studies.",
    ogTitle: "Portfolio — Dipeeka Paste",
    ogDescription: "WordPress, WooCommerce, Shopify, React, and performance case studies.",
  });
  return (
    <>
      <Section
        eyebrow="Portfolio"
        title="Client work across stacks"
        description="Filter by technology — every project is a live, in-production site shipped for an international client."
      >
        <ProjectsGrid filterable />
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-card/60 p-4 text-sm text-muted-foreground">
          <Info className="mt-0.5 size-5 shrink-0 text-primary" />
          <p>
            I have built <strong className="text-foreground">60+ full websites from scratch</strong> in WordPress, including WooCommerce stores, for clients across the US, Europe, and Asia. Many are under NDA or proprietary agreements and cannot be displayed here.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Performance"
        title="Performance Optimization & PageSpeed Improvements"
        description="Audits and optimization passes that pushed real client sites to 95+ Google PageSpeed and green Core Web Vitals."
      >
        <PerformanceSection />
      </Section>
    </>
  );
}
