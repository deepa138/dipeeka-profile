import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Globe, Github, GraduationCap, Languages } from "lucide-react";
import { Section } from "@/components/Section";
import { profile } from "@/data/portfolio";
import avatar from "@/assets/dipeeka-avatar.jpg";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  useDocumentMeta({
    title: "About — Dipeeka Paste",
    description:
      "Frontend Developer & WordPress Specialist with 4+ years of experience, currently leading a team at Walstar Technology.",
    ogTitle: "About — Dipeeka Paste",
    ogDescription:
      "Get to know Dipeeka — her journey, experience, and skills as a Frontend Developer & WordPress Specialist.",
  });
  return (
    <Section eyebrow="About me" title="A passionate developer & team leader from Kolhapur">
      <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
        <div className="animate-fade-up">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary to-primary-glow opacity-30 blur-xl" />
            <img
              src={avatar}
              alt="Dipeeka Paste"
              width={640}
              height={640}
              loading="lazy"
              className="relative w-full aspect-square rounded-2xl object-cover border border-border shadow-card"
            />
          </div>
        </div>

        <div className="space-y-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
          <p className="text-lg text-muted-foreground leading-relaxed">{profile.bio}</p>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">What I focus on</p>
            <div className="flex flex-wrap gap-2">
              {profile.focus.map((f) => (
                <span key={f} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/30 font-medium">
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <InfoCard icon={<GraduationCap className="size-4" />} label="Education" value={profile.education} />
            <InfoCard icon={<Languages className="size-4" />} label="Languages" value={profile.languages.join(", ")} />
            <InfoCard icon={<MapPin className="size-4" />} label="Location" value={profile.location} />
            <InfoCard icon={<Phone className="size-4" />} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
          </div>

          <div className="pt-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">Find me on</p>
            <div className="flex flex-wrap gap-3">
              <SocialLink href={`mailto:${profile.email}`} icon={<Mail className="size-4" />} label="Email" />
              <SocialLink href={profile.links.linkedin} icon={<Linkedin className="size-4" />} label="LinkedIn" />
              <SocialLink href={profile.links.wordpress} icon={<Globe className="size-4" />} label="WordPress.org" />
              <SocialLink href={profile.links.github} icon={<Github className="size-4" />} label="GitHub" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function InfoCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition-colors">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
        <span className="text-primary">{icon}</span>{label}
      </div>
      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm font-medium hover:border-primary hover:text-primary transition-colors"
    >
      {icon}{label}
    </a>
  );
}
