import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border bg-background py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold tracking-tighter flex items-center">
              <span className="text-primary mr-2">&gt;</span>
              M.Sufyan
            </span>
            <p className="text-muted-foreground text-sm mt-2 font-mono">
              Data Science Enthusiast & ML Engineer
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/sufyancreatives"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-muted/50 hover:bg-primary/20 hover:text-primary rounded-full transition-colors text-muted-foreground"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-sufyan-04b48b38a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-muted/50 hover:bg-primary/20 hover:text-primary rounded-full transition-colors text-muted-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sufyancreatvies@gmail.com"
              className="p-2 bg-muted/50 hover:bg-primary/20 hover:text-primary rounded-full transition-colors text-muted-foreground"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-mono">
          <p>© {currentYear} Muhammad Sufyan. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
