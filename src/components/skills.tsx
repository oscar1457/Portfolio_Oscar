"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Code, Users, Languages, Star, GitBranch, Terminal, Database, BrainCircuit } from 'lucide-react';

const skillsData = {
  technologies: [
    { name: 'JavaScript', icon: <Code className="h-6 w-6 text-primary/80" /> },
    { name: 'Java', icon: <Code className="h-6 w-6 text-primary/80" /> },
    { name: 'VS Code', icon: <Terminal className="h-6 w-6 text-primary/80" /> },
    { name: 'Firebase', icon: <Database className="h-6 w-6 text-primary/80" /> },
    { name: 'Git & GitHub', icon: <GitBranch className="h-6 w-6 text-primary/80" /> },
  ],
  softSkills: [
    { name: 'Analytisches Denken & Problemlösung', icon: <BrainCircuit className="h-6 w-6 text-primary/80" /> },
    { name: 'Teamarbeit', icon: <Users className="h-6 w-6 text-primary/80" /> },
    { name: 'Statistik & Prozentrechnung', icon: <Star className="h-6 w-6 text-primary/80" /> },
  ],
  languages: [
    { name: 'Spanisch', level: 'Muttersprache' },
    { name: 'Deutsch', level: 'B2/C1' },
    { name: 'Englisch', level: 'B1' },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export function Skills() {
  return (
    <section id="skills" className="w-full py-24 md:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Eine Übersicht über die Technologien, Werkzeuge und Fähigkeiten, die ich mir aneigne.
          </p>
        </motion.div>
        
        <div className="grid gap-16 md:grid-cols-1 lg:grid-cols-3">
          {/* Technologies */}
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4">
              <Code className="h-8 w-8 text-primary"/>
              <h3 className="text-2xl font-bold">Technologien</h3>
            </div>
            <motion.div 
              className="flex flex-col gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skillsData.technologies.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex items-center gap-4 rounded-lg bg-background/50 p-4"
                >
                  {skill.icon}
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-primary"/>
              <h3 className="text-2xl font-bold">Interpersonelle Fähigkeiten</h3>
            </div>
            <motion.div 
              className="flex flex-col gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skillsData.softSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex items-center gap-4 rounded-lg bg-background/50 p-4"
                >
                  {skill.icon}
                  <span className="font-medium text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Languages */}
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <div className="flex items-center gap-4">
              <Languages className="h-8 w-8 text-primary"/>
              <h3 className="text-2xl font-bold">Sprachen</h3>
            </div>
            <motion.div 
              className="flex flex-col gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skillsData.languages.map((lang) => (
                <motion.div
                  key={lang.name}
                  variants={itemVariants}
                  className="flex items-center justify-between rounded-lg bg-background/50 p-4"
                >
                  <span className="font-medium">{lang.name}</span>
                  <Badge variant="secondary" className="text-sm">{lang.level}</Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
