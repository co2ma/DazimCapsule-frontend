"use client";

import { motion, AnimatePresence } from "framer-motion";

interface TransitionProps {
  show: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function FadeScaleTransition({ show, children, className }: TransitionProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 1.5,
            filter: "blur(10px)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}