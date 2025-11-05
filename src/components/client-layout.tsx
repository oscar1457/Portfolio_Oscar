"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Preloader } from '@/components/preloader';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (typeof window !== 'undefined') {
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }
    }, 2000); // Preloader duration

    if (typeof window !== 'undefined') {
        document.body.style.cursor = 'wait';
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? <Preloader /> : <>{children}</>}
    </AnimatePresence>
  );
}
