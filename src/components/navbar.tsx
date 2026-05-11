import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo / name */}
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight hover:text-foreground/80 transition-colors"
        >
          KJ
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          {/* Easter egg: cyberpunk alt-portfolio served as a static HTML file from /public */}
          <a
            href="/neon.html"
            target="_blank"
            rel="noopener noreferrer"
            title="Cyberpunk mode (alt portfolio)"
            className="font-mono text-[10px] uppercase tracking-[0.2em] px-2 py-1 border border-border/60 rounded hover:border-foreground hover:text-foreground text-muted-foreground transition-colors"
          >
            ◆ v2077
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          {/* Easter egg lives at the bottom of the mobile menu too */}
          <a
            href="/neon.html"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground hover:bg-accent transition-colors border-t border-border"
          >
            ◆ v2077 — cyberpunk mode
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
