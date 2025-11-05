
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"

type Project = {
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    image?: {
        id: string;
        description: string;
        imageUrl: string;
        imageHint: string;
    };
    link: string;
};

const projectsData: Project[] = [
  {
    title: 'CODE REPUBLIC',
    description: 'Eine Lernplattform, die es jedem ermöglicht, mit den heutigen Werkzeugen eine neue Programmiersprache zu erlernen.',
    longDescription: 'Code Repuclic ist ein Projekt, das ich mit meinem kürzlich begonnenen Selbststudium im Bereich Web- und Anwendungsentwicklung gestartet habe. Auf der Suche nach den Anforderungen und dem Grund für die Entwicklung einer App wurde mir klar, dass es genau darum geht, sie zu entwickeln. Mit den heutigen Tools kann man sagen, dass jeder mit einer neuen Sprache programmieren könnte.',
    tags: ['KI', 'Programmiersprache', 'Bildung'],
    image: PlaceHolderImages.find(p => p.id === 'project1'),
    link: '#',
  },
  {
    title: 'Harvard CS50x Kurs',
    description: 'Einführung in die Informatik, die grundlegende Konzepte und Problemlösungen behandelt.',
    longDescription: 'Der Harvard-Kurs CS50x „Einführung in die Informatik“ ist ein Kurs, der vom Verständnis der Binärsprache bis zur Erstellung einer eigenen Website oder App reicht. Durch diesen Kurs erhalte ich die notwendigen Grundlagen, um meine Karriere unter dem Namen dieser großartigen Institution zu beginnen.',
    tags: ['CS50', 'Harvard', 'Data Science'],
    image: PlaceHolderImages.find(p => p.id === 'project2'),
    link: '#',
  },
  {
    title: 'Web-Entwicklung mit KI',
    description: 'Schaffung moderner und personalisierter Web-Erlebnisse durch die Verbindung von High-End-Design mit der Kraft der KI.',
    longDescription: 'Durch meine ersten Forschungen als Entwickler habe ich natürlich die Vorteile der KI nicht nur für Junior- oder Profi-Entwickler entdeckt, sondern auch für Unternehmen, die damit Frontend- und Backend-Prozesse in jeder App und Website mit Agenten und weiteren Geheimnissen beschleunigen können, die die Entwicklung in einem Unternehmen funktional und professionell machen.',
    tags: ['Next.js', 'KI', 'Webdesign'],
    image: PlaceHolderImages.find(p => p.id === 'project3'),
    link: '#',
  }
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8, delay: i * 0.1 }
  })
};

const AnimatedProjectsBackground = () => (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
            className="absolute top-[10%] left-[5%] w-[30rem] h-[30rem] bg-primary/20 rounded-full filter blur-3xl opacity-70"
            style={{ willChange: 'transform' }}
            animate={{ 
                x: [0, 100, -50, 0],
                y: [0, 50, -100, 0],
            }}
            transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut'
            }}
        />
        <motion.div 
            className="absolute bottom-[10%] right-[5%] w-[30rem] h-[30rem] bg-accent/20 rounded-full filter blur-3xl opacity-70"
            style={{ willChange: 'transform' }}
            animate={{ 
                x: [0, -100, 50, 0],
                y: [0, -50, 100, 0],
            }}
            transition={{
                duration: 35,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut'
            }}
        />
    </div>
);


export function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenDialog = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  }

  return (
    <section id="projects" className="relative w-full py-24 md:py-32 overflow-hidden">
      <AnimatedProjectsBackground />
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
        >
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meine Arbeit</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Eine Auswahl von Projekten, auf die ich stolz bin.
            </p>
        </motion.div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: '1000px' }}>
            {projectsData.map((project, index) => (
                <motion.div
                key={project.title}
                custom={index}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10, rotateX: 2, rotateY: project.title.length % 2 === 0 ? -2 : 2, boxShadow: '0px 20px 30px -10px hsla(var(--primary)/0.2)' }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full"
                >
                <Card className="flex h-full flex-col overflow-hidden border-2 border-transparent transition-all group-hover:border-primary/50 bg-background/50 backdrop-blur-sm">
                    {project.image && (
                    <div className="relative aspect-video w-full overflow-hidden">
                        <Image
                        src={project.image.imageUrl}
                        alt={project.image.description}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={project.image.imageHint}
                        />
                    </div>
                    )}
                    <CardContent className="flex flex-1 flex-col p-6">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="mt-2 flex-1 text-muted-foreground">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                    <div className="mt-6 flex justify-start">
                        <Button variant="link" className="p-0 h-auto" onClick={() => handleOpenDialog(project)}>
                            Projekt ansehen <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                    </CardContent>
                </Card>
                </motion.div>
            ))}
            </div>
        </div>
      </div>
      {selectedProject && (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                    {selectedProject.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                {selectedProject.image && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-md">
                        <Image
                            src={selectedProject.image.imageUrl}
                            alt={selectedProject.image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={selectedProject.image.imageHint}
                        />
                    </div>
                )}
                <DialogDescription>
                    {selectedProject.longDescription}
                </DialogDescription>
                </div>
            </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
