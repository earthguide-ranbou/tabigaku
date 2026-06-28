import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

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
    muted: "bg-muted text-muted-foreground",
    primary: "bg-primary text-primary-foreground",
    image: "relative text-white overflow-hidden",
  };

  return (
    <section
      ref={ref}
      className={cn(
        "relative w-full py-16 md:py-24 px-4 md:px-8 overflow-hidden",
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
        "mb-12 md:mb-20 max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            "block text-sm md:text-base font-sans font-bold tracking-widest uppercase mb-3",
            light ? "text-white/80" : "text-primary"
          )}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          "text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </motion.h2>
    </div>
  );
}
