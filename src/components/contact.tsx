
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { collection } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { addDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein.'),
  email: z.string().email('Ungültige E-Mail-Adresse.'),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein.'),
});

type ContactFormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: ContactFormValues) {
    if (!firestore) return;
    setIsSubmitting(true);

    try {
      const messagesCollection = collection(firestore, 'messages');
      // Usar la función no bloqueante para mayor robustez
      await addDocumentNonBlocking(messagesCollection, {
        ...data,
        createdAt: new Date(),
      });

      toast({
        title: 'Nachricht gesendet!',
        description: "Danke für deine Nachricht. Ich melde mich bald bei dir.",
      });
      form.reset();
    } catch (error) {
      console.error('Fehler beim Senden der Nachricht:', error);
      toast({
        variant: 'destructive',
        title: 'Oh nein! Etwas ist schiefgelaufen.',
        description: 'Beim Senden deiner Nachricht ist ein Problem aufgetreten. Bitte versuche es erneut.',
      });
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="w-full py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Kontakt</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Hast du eine Frage oder möchtest du mit mir arbeiten? Hinterlasse eine Nachricht.
          </p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto max-w-xl space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Dein Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="deine.email@beispiel.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nachricht</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Erzähl mir, was du auf dem Herzen hast..." className="min-h-[150px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}