import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

function useShown() {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // 既に画面内なら即表示
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

/** 西山製麺風: テキストがマスクの下からスッと立ち上がる（一度出たら保持） */
export function MaskUp({
  children,
  delay = 0,
  duration = 0.9,
  className = "",
  style = {},
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const { ref, shown } = useShown();
  return (
    <span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={className}
      style={{ display: "block", overflow: "hidden", ...style }}
    >
      <span
        style={{
          display: "block",
          transform: shown ? "translateY(0%)" : "translateY(115%)",
          transition: `transform ${duration}s ${EASE} ${delay}s`,
          willChange: "transform",
        }}
      >
        {children}
      </span>
    </span>
  );
}

/** 西山製麺風: 写真がカーテン状に開く（一度開いたら保持） */
export function Curtain({
  children,
  delay = 0,
  cover = "#12312a",
  className = "",
  style = {},
}: {
  children: ReactNode;
  delay?: number;
  cover?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const { ref, shown } = useShown();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{ position: "relative", overflow: "hidden", height: "100%", ...style }}
    >
      <div
        style={{
          height: "100%",
          transform: shown ? "scale(1)" : "scale(1.14)",
          opacity: shown ? 1 : 0.5,
          transition: `transform 1.1s ${EASE} ${delay + 0.3}s, opacity 1.1s ${EASE} ${delay + 0.3}s`,
          willChange: "transform, opacity",
        }}
      >
        {children}
      </div>
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, background: cover,
          transform: shown ? "scaleX(0)" : "scaleX(1)",
          transformOrigin: "right center",
          transition: `transform 0.85s ${EASE} ${delay}s`,
          zIndex: 3, pointerEvents: "none",
          willChange: "transform",
        }}
      />
    </div>
  );
}
