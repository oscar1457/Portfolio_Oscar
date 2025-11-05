"use client";

import { motion } from 'framer-motion';

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const shape1Variant = {
    animate: {
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
        borderRadius: ["20%", "50%", "20%"],
        transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.2
        }
    }
}

const shape2Variant = {
    animate: {
        scale: [1, 0.8, 1],
        rotate: [0, -180, -360],
        borderRadius: ["50%", "20%", "50%"],
        transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.2
        }
    }
}

export function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="relative flex h-32 w-32 items-center justify-center">
        <motion.div
            className="absolute h-16 w-16 bg-primary opacity-80"
            variants={shape1Variant}
            animate="animate"
        />
        <motion.div
            className="absolute h-16 w-16 bg-accent opacity-80"
            variants={shape2Variant}
            animate="animate"
        />
      </div>
    </motion.div>
  );
}
