
'use client';

import { Code2, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Footer() {
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
      toast({
        variant: 'destructive',
        title: 'Fehler',
        description: 'Die E-Mail konnte nicht kopiert werden.',
      });
    });
  };

  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:px-6">
        <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold">DevFolio</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Oscar Quintana. Alle Rechte vorbehalten.
        </p>
        <div className="flex items-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button onClick={handleCopyEmail} aria-label="E-Mail kopieren" className="text-muted-foreground transition-colors hover:text-primary focus:outline-none">
                  <Mail className="h-6 w-6" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>E-Mail kopieren</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <Link href="https://github.com/oscar1457" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="https://www.linkedin.com/in/oscar-quintana-b3b49b386/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
