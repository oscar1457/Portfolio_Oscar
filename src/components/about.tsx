"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const avatarImage = PlaceHolderImages.find(p => p.id === 'avatar');

export function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section id="about" ref={containerRef} className="w-full overflow-hidden py-24 md:py-32 bg-secondary">
      <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div className="relative mx-auto flex h-[400px] w-full max-w-sm items-center justify-center">
            {avatarImage && (
                <motion.div
                    className="absolute h-full w-full"
                    style={{ y }}
                >
                    <Image
                        src={avatarImage.imageUrl}
                        alt={avatarImage.description}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="rounded-full object-cover shadow-lg"
                        data-ai-hint={avatarImage.imageHint}
                    />
                </motion.div>
            )}
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Über mich</h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Schon als Kind hatte ich eine große Leidenschaft dafür, Dinge zu verstehen, manchmal vielleicht sogar zu sehr, haha. Das war nicht immer nützlich, und ja, ich habe sicher auch den einen oder anderen Prozessor kaputt gemacht, was meiner Mutter natürlich überhaupt nicht gefiel.
            </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5, delay: 0.2 }}
          >
             <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Aber diese Neugier begleitet mich bis heute. In der Technik wie auch in der Wissenschaft sehe ich ein unendliches Feld zum Lernen. Es gibt so viel zu entdecken, dass ein Leben nicht ausreicht, um alles zu verstehen. Ich werde mich also sicher nie langweilen!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
