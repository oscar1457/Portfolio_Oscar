'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

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

const contactLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/oscar1457',
    icon: Github,
    description: 'Schau dir meine Projekte an',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/oscar-quintana-b3b49b386/',
    icon: Linkedin,
    description: 'Lass uns vernetzen',
  },
  {
    name: 'Email',
    href: 'mailto:oscarquintana2125@gmail.com',
    icon: Mail,
    description: 'Schreib mir eine E-Mail',
  },
];

export function Contact() {
  const { toast } = useToast();

  const handleCopyEmail = () => {
    const email = 'oscarquintana2125@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      toast({
        title: 'Email kopiert!',
        description: 'Die E-Mail-Adresse wurde in die Zwischenablage kopiert.',
      });
    }).catch(err => {
      console.error('Fehler beim Kopieren der E-Mail:', err);
    });
  };

  return (
    <section id="contact" className="relative w-full py-24 md:py-32 overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Kontakt</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Lass uns in Verbindung treten! Wähle deinen bevorzugten Weg.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl grid gap-6 md:grid-cols-3"
        >
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {link.name === 'Email' ? (
                <Button
                  onClick={handleCopyEmail}
                  size="lg"
                  variant="outline"
                  className="w-full h-40 flex flex-col gap-4 text-lg group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <link.icon className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
                  <div className="flex flex-col items-center">
                    <span className="font-bold transition-colors duration-300">{link.name}</span>
                    <span className="text-sm text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300">{link.description}</span>
                  </div>
                </Button>
              ) : (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full h-40 flex flex-col gap-4 text-lg group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
                    <div className="flex flex-col items-center">
                      <span className="font-bold transition-colors duration-300">{link.name}</span>
                      <span className="text-sm text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300">{link.description}</span>
                    </div>
                  </Link>
                </Button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
