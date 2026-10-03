import { useEffect, useRef } from "react";
import { useJourneyMotion } from "@/components/JourneyMotion";

/** Decorative motion only: all photos and text remain visible without JavaScript. */
export function useJukuScenes() {
  const root = useRef<HTMLDivElement>(null);
  const revealed = useRef(new WeakSet<Element>());
  const { enabled } = useJourneyMotion();

  useEffect(() => {
    const page = root.current;
    if (!page || !enabled || !("IntersectionObserver" in window)) return;
    const scenes = Array.from(page.querySelectorAll<HTMLElement>("[data-rj-scene]"));
    const visible = new Set<HTMLElement>();
    const animations = new Set<Animation>();
    let frame = 0;

    const paint = () => {
      frame = 0;
      const height = window.innerHeight;
      // Read layout first; write only transforms and decorative custom properties.
      const positions = Array.from(visible).map(scene => {
        const rect = scene.getBoundingClientRect();
        const shift = Math.max(-10, Math.min(10, (height / 2 - rect.top - rect.height / 2) * .025));
        return { scene, shift };
      });
      const distance = Math.max(1, document.documentElement.scrollHeight - height);
      page.style.setProperty("--rj-progress", String(Math.max(0, Math.min(1, window.scrollY / distance))));
      positions.forEach(({ scene, shift }) => scene.style.setProperty("--rj-parallax", `${shift.toFixed(2)}px`));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const scene = entry.target as HTMLElement;
        scene.dataset.rjVisible = String(entry.isIntersecting);
        if (!entry.isIntersecting) { visible.delete(scene); return; }
        visible.add(scene);
        scene.querySelectorAll<HTMLElement>("[data-rj-reveal]").forEach((element, index) => {
          if (revealed.current.has(element) || typeof element.animate !== "function") return;
          revealed.current.add(element);
          const isLine = element.dataset.rjReveal === "line";
          const animation = element.animate(isLine ? [
            { transform: "translateY(105%) rotate(2deg)", opacity: .7 },
            { transform: "translateY(0) rotate(0)", opacity: 1 },
          ] : [
            { clipPath: "inset(9% 6% 9% 6% round 36px)", opacity: .6 },
            { clipPath: "inset(0 0 0 0 round 3px)", opacity: 1 },
          ], { duration: isLine ? 1100 : 1400, delay: Math.min(index * 110, 330), easing: "cubic-bezier(.16,1,.3,1)" });
          animations.add(animation);
          animation.finished.catch(() => {}).finally(() => animations.delete(animation));
        });
      });
      schedule();
    }, { threshold: .08 });
    scenes.forEach(scene => observer.observe(scene));
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    schedule();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
      animations.forEach(animation => animation.cancel());
      page.style.removeProperty("--rj-progress");
      scenes.forEach(scene => {
        scene.style.removeProperty("--rj-parallax");
        delete scene.dataset.rjVisible;
      });
    };
  }, [enabled]);

  return root;
}
