import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { MaskUp } from "@/components/Fx";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
  background?: "default" | "muted" | "primary" | "image";
  backgroundImage?: string;
  overlay?: boolean;
  id?: string;
  [key: string]: unknown;
}

export function Section({
  children,
  className,
  fullHeight = false,
  background = "default",
  backgroundImage,
  overlay = false,
  ...props
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const bgClasses = {
    default: "bg-background text-foreground",
    muted: "bg-muted text-foreground",
    primary: "bg-primary text-primary-foreground",
    image: "relative text-white overflow-hidden",
  };

  return (
    <section
      ref={ref}
      className={cn(
        "relative w-full py-20 md:py-32 overflow-hidden",
        fullHeight && "min-h-screen flex flex-col justify-center",
        bgClasses[background],
        className
      )}
      {...props}
    >
      {background === "image" && backgroundImage && (
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
        >
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {overlay && (
            <div className="absolute inset-0 bg-black/40 z-10" />
          )}
        </motion.div>
      )}
      <div className={cn("container relative z-20 mx-auto", background === "image" && "text-white")}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  className,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-20 max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={cn("flex items-center gap-3 mb-4", centered && "justify-center")}
        >
          <span
            className={cn(
              "block font-sans font-bold tracking-[0.22em] uppercase text-[0.65rem]",
              light ? "text-white/70" : "text-primary/80"
            )}
          >
            {subtitle}
          </span>
          <span
            className={cn(
              "block h-px flex-1 max-w-[3rem]",
              light ? "bg-white/30" : "bg-primary/30"
            )}
          />
        </motion.div>
      )}
      <h2
        className={cn(
          "text-3xl md:text-5xl lg:text-[3.5rem] font-serif font-bold leading-[1.2] tracking-wide",
          light ? "text-white" : "text-foreground"
        )}
      >
        <MaskUp delay={0.06}>{title}</MaskUp>
      </h2>
    </div>
  );
}
