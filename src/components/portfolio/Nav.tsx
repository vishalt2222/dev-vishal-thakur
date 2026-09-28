import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { NAV } from "./data";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all", scrolled ? "border-b bg-background/80 backdrop-blur-lg" : "bg-transparent")}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-display text-lg font-extrabold">
          VT<span className="text-primary">.</span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle theme" className="rounded-full border p-2 transition-colors hover:bg-secondary">
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="rounded-full border p-2 lg:hidden">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="animate-fade-in border-b bg-background/95 px-5 pb-4 backdrop-blur-lg lg:hidden">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => setOpen(false)} className="block border-b border-border/50 py-3 text-sm">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
