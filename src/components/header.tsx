"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Code2, Menu, X, Download } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const navLinks = [
  { name: 'Startseite', href: '#home' },
  { name: 'Über mich', href: '#about' },
  { name: 'Projekte', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Kontakt', href: '#contact' },
];

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });
  
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          isScrolled || mobileMenuOpen ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="#home" className="flex items-center gap-2 text-2xl font-bold text-foreground">
            <Code2 className="h-8 w-8 text-primary" />
            <span>DevFolio</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.name}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-primary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </Link>
            ))}
             <Button asChild>
                <a href="/CV-Oscar-Quintana.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  CV herunterladen
                </a>
            </Button>
          </nav>
          <div className="md:hidden">
            <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Menü umschalten</span>
            </Button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-background/95 pt-20 md:hidden"
          >
            <nav className="flex flex-col items-center gap-8 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-medium text-foreground"
                  onClick={toggleMobileMenu}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild size="lg">
                <a href="/CV-Oscar-Quintana.pdf" download onClick={toggleMobileMenu}>
                  <Download className="mr-2 h-4 w-4" />
                  CV herunterladen
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
