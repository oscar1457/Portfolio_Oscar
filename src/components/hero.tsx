"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

const name = "Oscar Quintana";
const role = "Entwickler & Designer";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
    }
  },
};

const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.8 } }
}

const AnimatedBackground = () => (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <motion.div 
            className="absolute top-[-10%] left-[20%] w-96 h-96 bg-primary/30 rounded-full filter blur-3xl"
            style={{ willChange: 'transform' }}
            animate={{ 
                x: [0, -300, 150, 0],
                y: [0, 150, -150, 0],
                scale: [1, 1.4, 0.8, 1],
            }}
            transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut'
            }}
        />
        <motion.div 
            className="absolute bottom-[-10%] right-[20%] w-96 h-96 bg-accent/30 rounded-full filter blur-3xl"
            style={{ willChange: 'transform' }}
            animate={{ 
                x: [0, 300, -150, 0],
                y: [0, -150, 150, 0],
                scale: [1, 1.1, 1.2, 1],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut'
            }}
        />
    </div>
);


export function Hero() {
  return (
    <section id="home" className="relative flex h-screen min-h-[700px] w-full flex-col items-center justify-center text-center overflow-hidden">
      <AnimatedBackground />
      <div className="container px-4 md:px-6 relative z-10">
        <motion.h1
          className="font-headline text-5xl font-bold tracking-tighter text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {name.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
            className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
        >
          {role}
        </motion.p>
        <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1.8, duration: 0.5 } }}
        >
            <Button asChild size="lg">
                <Link href="#projects">Meine Arbeit ansehen</Link>
            </Button>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
      >
        <Link href="#about" aria-label="Zum „Über mich“-Abschnitt scrollen">
            <motion.div whileHover={{ y: 5 }}>
                <ArrowDown className="h-8 w-8 animate-bounce text-foreground" />
            </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
