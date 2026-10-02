import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./school-navigation.css";

const links = [
  { label: "旅を選ぶ", href: "/#journeys" },
  { label: "旅する学校とは", href: "/#about" },
  { label: "はじめての方へ", href: "/#first" },
];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [location]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="school-nav">
      <a
        className="school-skip"
        href={location === "/" ? "#main-content" : "#school-navigation-end"}
      >
        本文へ移動
      </a>
      <div className="school-nav__inner">
        <Link
          href="/"
          className="school-nav__brand"
          aria-label="旅する学校 ホーム"
        >
          旅する学校<span>TABIGAKU</span>
        </Link>
        <nav className="school-nav__desktop" aria-label="メインメニュー">
          {links.map(link => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="school-nav__contact" href="/#contact">
            旅の相談 <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
        <button
          ref={toggle}
          type="button"
          className="school-nav__toggle"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          aria-controls="school-mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      <nav
        className="school-nav__mobile"
        id="school-mobile-menu"
        aria-label="モバイルメニュー"
        hidden={!open}
      >
        {[
          ...links,
          { label: "旅の相談", href: "/#contact" },
          { label: "SaaiJai Village", href: "/saijai" },
          { label: "受賞歴・活動", href: "/award" },
          { label: "活動を応援する", href: "/sponsor" },
        ].map(link => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        ))}
      </nav>
      <span id="school-navigation-end" />
    </header>
  );
}
