import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

/** 西山製麺風: テキストがマスクの下からスッと立ち上がる */
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
  return (
    <span className={className} style={{ display: "block", overflow: "hidden", ...style }}>
      <motion.span
        style={{ display: "block", willChange: "transform" }}
        initial={{ y: "115%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** 西山製麺風: 写真がカーテン状に開く */
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
  return (
    <div className={className} style={{ position: "relative", overflow: "hidden", height: "100%", ...style }}>
      <motion.div
        style={{ height: "100%", willChange: "transform" }}
        initial={{ scale: 1.14, opacity: 0.5 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 1.1, delay: delay + 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden
        style={{
          position: "absolute", inset: 0, background: cover,
          transformOrigin: "right center", zIndex: 3, pointerEvents: "none",
          willChange: "transform",
        }}
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
