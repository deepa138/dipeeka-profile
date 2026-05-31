import { Github, Linkedin, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dipeeka Paste. Crafted with care in Kolhapur.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/dipeeka-paste-151638227/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="https://profiles.wordpress.org/dipeeka138/"
            target="_blank"
            rel="noreferrer"
            aria-label="WordPress"
            className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
          >
            <Globe className="size-4" />
          </a>
          <a
            href="https://github.com/deepa138"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
          >
            <Github className="size-4" />
          </a>
          <a
            href="mailto:pastdeepika56@gmail.com"
            aria-label="Email"
            className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
