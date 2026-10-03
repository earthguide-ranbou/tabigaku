import { type CSSProperties, type ReactNode } from "react";

// All content is visible before JavaScript. JourneyMotion adds a one-time reveal.
export function MaskUp({
  children,
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
    <span
      data-journey-reveal
      className={`journey-fx-reveal ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}

export function Curtain({
  children,
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
    <div
      data-journey-reveal
      className={`journey-fx-curtain ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
