"use client";

import { motion } from "motion/react";
import { usePreloader } from ".";

export default function Loader() {
  const { loadingPercent } = usePreloader();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background pointer-events-none select-none"
    >
      <div className="flex flex-col items-center gap-3">
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="text-5xl sm:text-7xl font-extrabold font-display tracking-tight text-foreground"
        >
          {Math.min(100, Math.round(loadingPercent))}%
        </motion.p>
        <div className="w-36 sm:w-48 h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full transition-all duration-150 ease-out"
            style={{ width: `${Math.min(100, Math.round(loadingPercent))}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
