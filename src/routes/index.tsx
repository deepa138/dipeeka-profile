import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import avatar from "@/assets/dipeeka-avatar.jpg";
import { Typewriter } from "@/components/Typewriter";
import { Stats } from "@/components/Stats";
import { Section } from "@/components/Section";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { profile } from "@/data/portfolio";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useDocumentMeta({
    title: "Dipeeka Paste — Frontend Developer & WordPress Specialist",
    description:
      "Frontend Developer & WordPress Specialist building fast, beautiful, SEO-optimized web experiences from Kolhapur, India.",
  });
  return (
    <>
      <section className="relative overflow-hidden bg-hero-glow">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-accent text-accent-foreground border border-border">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Available for projects
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Hi, I'm <span className="text-gradient">{profile.name}</span>
            </h1>
            <div className="mt-4 text-xl md:text-2xl font-semibold text-foreground min-h-[2em]">
              I'm a <Typewriter words={["WordPress Developer", "Frontend Developer", "Web Designer", "WooCommerce Expert", "Performance Engineer"]} />
            </div>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
              {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 shadow-glow transition-all hover:-translate-y-0.5"
              >
                View My Work <ArrowRight className="size-4" />
              </Link>
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                <Download className="size-4" /> Download Resume
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><MapPin className="size-4 text-primary" />{profile.location}</span>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="size-4 text-primary" />{profile.email}
              </a>
            </div>
          </div>

          <div className="relative justify-self-center md:justify-self-end animate-fade-in">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary to-primary-glow opacity-30 blur-2xl" />
            <div className="relative size-56 md:size-72 rounded-full p-1 bg-gradient-to-br from-primary to-primary-glow shadow-glow">
              <img
                src={avatar}
                alt="Dipeeka Paste"
                width={640}
                height={640}
                className="size-full rounded-full object-cover border-4 border-background"
              />
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <Section
        eyebrow="Featured Work"
        title="Selected Projects"
        description="A glimpse of WordPress, WooCommerce, Shopify and React builds I've shipped for clients worldwide."
      >
        <ProjectsGrid limit={6} />
        <div className="mt-10 text-center">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            See all projects <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
