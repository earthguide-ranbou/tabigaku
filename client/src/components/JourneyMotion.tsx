import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useLocation } from "wouter";
import { MotionConfig } from "framer-motion";
import "./journey-motion.css";

type Connection = EventTarget & { saveData?: boolean };
const MotionContext = createContext({ enabled: false });
export const useJourneyMotion = () => useContext(MotionContext);

/** Content is visible before effects run. Motion never controls access to content. */
export default function JourneyMotion({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [allowed, setAllowed] = useState(false);
  const [visible, setVisible] = useState(true);
  const animations = useRef(new Set<Animation>());
  const enabled = allowed && visible;

  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: Connection })
      .connection;
    const update = () =>
      setAllowed(!preference.matches && !connection?.saveData);
    const visibility = () => setVisible(document.visibilityState === "visible");
    update();
    visibility();
    preference.addEventListener("change", update);
    connection?.addEventListener("change", update);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      preference.removeEventListener("change", update);
      connection?.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.tabigakuMotion = enabled ? "on" : "off";
    if (!enabled) animations.current.forEach((animation) => animation.cancel());
    return () => {
      delete document.documentElement.dataset.tabigakuMotion;
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled || !("IntersectionObserver" in window)) return;
    const observed = new Set<Element>();
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal.unobserve(entry.target);
          // Animate from a nearly opaque, small offset: never conceal a page.
          if (typeof entry.target.animate !== "function") return;
          const animation = entry.target.animate(
            [
              { opacity: 0.76, transform: "translateY(22px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 850, easing: "cubic-bezier(.16,1,.3,1)" },
          );
          animations.current.add(animation);
          animation.finished
            .catch(() => {})
            .finally(() => animations.current.delete(animation));
        });
      },
      { threshold: 0.08 },
    );
    const discover = () => {
      document
        .querySelectorAll(
          "h2, .school-trip, .school-about__photo, .sj-card, [data-journey-reveal]",
        )
        .forEach((node) => {
          if (observed.has(node)) return;
          observed.add(node);
          reveal.observe(node);
        });
    };
    discover();
    // Audience filters can insert new journey cards without a route change.
    const changes = new MutationObserver(discover);
    changes.observe(document.getElementById("root")!, {
      childList: true,
      subtree: true,
    });
    return () => {
      reveal.disconnect();
      changes.disconnect();
      animations.current.forEach((animation) => animation.cancel());
      animations.current.clear();
    };
  }, [enabled, location]);

  return (
    <MotionContext.Provider value={{ enabled }}>
      <MotionConfig reducedMotion={enabled ? "user" : "always"}>
        {children}
      </MotionConfig>
    </MotionContext.Provider>
  );
}

export function JourneyLandscape() {
  return (
    <svg
      className="journey-landscape"
      viewBox="0 0 600 220"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="journey-sun" cx="450" cy="62" r="32" />
      <circle className="journey-sun-halo" cx="450" cy="62" r="46" />
      <path
        className="journey-ridge journey-ridge--back"
        d="M5 174 117 64 191 136 270 45 417 174 494 119 595 190"
      />
      <path
        className="journey-ridge"
        d="M2 194 120 140 223 183 307 107 457 196 595 155"
      />
      <path
        className="journey-river"
        pathLength="1"
        d="M300 151C255 180 401 177 359 193S174 191 127 216"
      />
      <g className="journey-birds">
        <path d="m373 51 10 5 10-5m-42 18 7 4 7-4" />
      </g>
    </svg>
  );
}

export function JourneyCompass() {
  return (
    <svg
      className="journey-compass"
      viewBox="0 0 110 110"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="55" cy="55" r="46" />
      <circle cx="55" cy="55" r="39" strokeDasharray="1 7" />
      <path d="M55 5v9m0 82v9M5 55h9m82 0h9" />
      <g className="journey-compass__needle">
        <path d="m55 24 8 31-8 31-8-31Z" />
        <path d="m55 24 8 31h-8Z" fill="currentColor" />
      </g>
      <circle cx="55" cy="55" r="3" fill="currentColor" />
    </svg>
  );
}
