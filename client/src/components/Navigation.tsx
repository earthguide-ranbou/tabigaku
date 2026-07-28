import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "あーすガイド公式HP", href: "https://earthguide.tabigaku.party/", external: true },
  { label: "ホーム", href: "/" },
  { label: "旅する学校とは", href: "/#about" },
  { label: "Journey", href: "/#journeys" },
  { label: "神山ガイド", href: "https://kamiyamag.tabigaku.party", external: true },
  { label: "ガイド紹介", href: "https://kamiyamag.tabigaku.party/guide", external: true },
  { label: "ブログ", href: "https://note.com/shiftdaigaku", external: true },
  { label: "受賞歴", href: "/award" },
  { label: "スポンサーになる", href: "/sponsor#sponsor-content" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-[0_1px_0_0_var(--border)] py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={cn(
              "text-lg font-serif font-black tracking-widest transition-colors duration-300",
              scrolled ? "text-foreground" : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
            )}
          >
            旅する学校
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isLast = link.label === "スポンサーになる";
            const baseClass = cn(
              "relative text-xs font-medium tracking-wide transition-all duration-200 px-3 py-2 rounded-sm",
              isLast
                ? cn(
                    "ml-4 px-4 py-2 rounded-full border font-bold text-xs tracking-widest transition-all duration-200",
                    scrolled || !isHome
                      ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      : "border-white/80 text-white hover:bg-white/15"
                  )
                : cn(
                    "hover:text-primary",
                    scrolled || !isHome
                      ? "text-foreground/80 hover:text-foreground"
                      : "text-white/85 hover:text-white"
                  )
            );
            if (link.external) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={baseClass}
                >
                  {link.label}
                </a>
              );
            }
            if (link.href.includes("#")) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={baseClass}
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link key={link.label} href={link.href} className={baseClass}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-md transition-colors",
            scrolled || !isHome ? "text-foreground" : "text-white"
          )}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border">
          <nav className="container mx-auto py-6 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isLast = link.label === "スポンサーになる";
              const cls = cn(
                "text-sm font-medium py-3 px-2 transition-colors border-b border-border/40 last:border-0",
                isLast
                  ? "text-primary font-bold"
                  : "text-foreground/80 hover:text-foreground"
              );
              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cls}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              }
              if (link.href.includes("#")) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={cls}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cls}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
