import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { SCHOOL_LINE, journeys } from "@/data/journeys";

// Keep each journey's already-published consultation account.
const consultationRoutes: Record<
  string,
  { href: string; topic: string; raised?: boolean }
> = {
  "/": { href: SCHOOL_LINE, topic: "旅する学校" },
  "/guide": { href: SCHOOL_LINE, topic: "旅の案内" },
  "/award": { href: SCHOOL_LINE, topic: "旅する学校" },
  "/sponsor": { href: SCHOOL_LINE, topic: "旅する学校の活動" },
  "/saijai": { href: SCHOOL_LINE, topic: "旅する学校の旅" },
  "/earth-family": { href: SCHOOL_LINE, topic: "次回の地球家族ジャーニー" },
  "/juku": {
    href: "https://lin.ee/p3CvLfQ",
    topic: "らんぼう塾",
    raised: true,
  },
  "/thai": {
    href: "https://lin.ee/p3CvLfQ",
    topic: "次回のタイ旅",
    raised: true,
  },
  ...Object.fromEntries(
    journeys
      .filter(journey => journey.line && journey.href !== "/thai-2027")
      .map(journey => [
        journey.href,
        {
          href: journey.line!,
          topic: journey.title,
          raised: ["/henro-shinsoku", "/efj"].includes(journey.href),
        },
      ])
  ),
};

export function LineConsultationLink({
  href = SCHOOL_LINE,
}: {
  href?: string;
}) {
  return (
    <a
      className="line-consult-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="公式LINE（新しいタブで開きます）"
    >
      <img src="/images/line-brand-icon.png" width="40" height="40" alt="" aria-hidden="true" />
    </a>
  );
}

export default function FloatingLineConsultation() {
  const [path] = useLocation();
  const [formVisible, setFormVisible] = useState(false);
  useEffect(() => {
    setFormVisible(false);
    if (!("IntersectionObserver" in window)) return;
    const visibleForms = new Set<Element>();
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) visibleForms.add(entry.target);
        else visibleForms.delete(entry.target);
      }
      setFormVisible(visibleForms.size > 0);
    });
    document
      .querySelectorAll('iframe[src*="/forms/"], iframe[src*="1lejend.com"]')
      .forEach(frame => observer.observe(frame));
    return () => observer.disconnect();
  }, [path]);
  const route = consultationRoutes[path.replace(/\/$/, "") || "/"];
  if (!route) return null;
  return (
    <>
      <div className="line-consult-clearance" aria-hidden="true" />
      <aside
        className={`line-consult-floating${route.raised ? " line-consult-floating--raised" : ""}`}
        aria-label={`${route.topic}の公式LINE相談`}
        hidden={formVisible}
      >
        <LineConsultationLink href={route.href} />
      </aside>
    </>
  );
}
