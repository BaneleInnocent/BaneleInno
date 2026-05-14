import { useEffect, useState } from "react";
import { Moon, Sun, Shield } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#cv", label: "CV" },
  { href: "#certs", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm font-bold">
          <Shield className="h-5 w-5 text-primary" />
          <span className="text-foreground">banele<span className="text-primary">.sec</span></span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark((v) => !v)}
            aria-label="Toggle theme"
            className="rounded-md border border-border p-2 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="rounded-md border border-border p-2 font-mono text-xs md:hidden"
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 font-mono text-sm text-muted-foreground hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
