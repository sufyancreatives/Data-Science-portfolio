import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const NAV_ITEMS = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Résumé", href: "resume" },
  { label: "Contact", href: "contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection(["hero", ...NAV_ITEMS.map((n) => n.href)]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, "hero")}
          className="text-xl font-bold tracking-tighter text-foreground group"
        >
          <span className="text-primary group-hover:text-primary/80 transition-colors">&gt; </span>
          M.Sufyan
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative py-1",
                    activeSection === item.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-foreground"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <Button 
              className="rounded-full font-mono text-xs" 
              onClick={(e) => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ping Me
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-muted-foreground"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-muted-foreground"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg py-4 px-4 flex flex-col space-y-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "text-lg font-medium px-4 py-2 rounded-md transition-colors",
                activeSection === item.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
