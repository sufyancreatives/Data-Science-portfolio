import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export const Reveal = ({
  children,
  width = "100%",
  delay = 0,
  className,
  direction = "up",
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.5, delay, ease: "easeOut" as const },
    },
  };

  return (
    <div ref={ref} style={{ width }} className={cn("relative overflow-hidden", className)}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  );
};
