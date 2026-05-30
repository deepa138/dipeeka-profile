import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Linkedin, Globe, Github, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/Section";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dipeeka Paste" },
      { name: "description", content: "Get in touch with Dipeeka Paste for Frontend, WordPress, or WooCommerce projects." },
      { property: "og:title", content: "Contact — Dipeeka Paste" },
      { property: "og:description", content: "Let's build something great together." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    // Open mail client with prefilled body
    const body = encodeURIComponent(`Hi Dipeeka,\n\n${data.message}\n\n— ${data.name} (${data.email})`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Project inquiry from " + data.name)}&body=${body}`;
    setSent(true);
    form.reset();
  };

  return (
    <Section eyebrow="Contact" title="Let's build something great" description="Have a project in mind, or want to chat about WordPress and frontend? Drop me a message.">
      <div className="grid md:grid-cols-[1fr_360px] gap-8">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card animate-fade-up"
        >
          {sent && (
            <div className="mb-6 flex items-start gap-3 rounded-lg bg-primary/10 border border-primary/30 px-4 py-3 text-sm">
              <CheckCircle2 className="size-4 text-primary mt-0.5" />
              <span>Your mail client should open shortly. Thanks for reaching out!</span>
            </div>
          )}
          <Field label="Your name" name="name" error={errors.name}>
            <input
              name="name"
              maxLength={100}
              className="w-full px-4 py-3 rounded-lg bg-input/40 border border-border focus:border-primary focus:outline-none text-sm"
              placeholder="Jane Doe"
            />
          </Field>
          <Field label="Email" name="email" error={errors.email}>
            <input
              name="email"
              type="email"
              maxLength={255}
              className="w-full px-4 py-3 rounded-lg bg-input/40 border border-border focus:border-primary focus:outline-none text-sm"
              placeholder="jane@example.com"
            />
          </Field>
          <Field label="Message" name="message" error={errors.message}>
            <textarea
              name="message"
              rows={5}
              maxLength={1000}
              className="w-full px-4 py-3 rounded-lg bg-input/40 border border-border focus:border-primary focus:outline-none text-sm resize-none"
              placeholder="Tell me about your project..."
            />
          </Field>
          <button
            type="submit"
            className="mt-2 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 shadow-glow transition-all hover:-translate-y-0.5"
          >
            Send Message <Send className="size-4" />
          </button>
        </form>

        <aside className="space-y-4 animate-fade-up" style={{ animationDelay: "100ms" }}>
          <ContactItem icon={<Mail className="size-4" />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactItem icon={<Phone className="size-4" />} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
          <ContactItem icon={<MapPin className="size-4" />} label="Location" value={profile.location} />

          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Social</p>
            <div className="flex gap-2">
              <Social href={profile.links.linkedin} icon={<Linkedin className="size-4" />} />
              <Social href={profile.links.wordpress} icon={<Globe className="size-4" />} />
              <Social href={profile.links.github} icon={<Github className="size-4" />} />
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function Field({ label, name, error, children }: { label: string; name: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="rounded-2xl border border-border bg-card p-5 hover:border-primary/50 transition-colors">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
        <span className="text-primary">{icon}</span>{label}
      </div>
      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Social({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="p-2.5 rounded-lg border border-border bg-background hover:border-primary hover:text-primary transition-colors"
    >
      {icon}
    </a>
  );
}
