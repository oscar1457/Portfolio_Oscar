
'use client';

import { Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold">DevFolio</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Oscar Quintana. Copyright.
        </p>
      </div>
    </footer>
  );
}
