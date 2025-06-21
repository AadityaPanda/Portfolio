"use client";

import { useState, type FormEvent } from 'react';
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!name || !email || !message) {
      toast({
        title: 'Error',
        description: 'Please fill out all fields.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Simulated contact form submission:", { name, email, message });

    toast({
      title: 'Message Sent!',
      description: "Your message has been sent successfully!",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);
  }

  return (
    <section id="contact" className="space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-800 section-card">
       <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Mail className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-headline font-bold tracking-tight">Get in Touch</h2>
      </div>

      <div className="max-w-2xl">
        <p className="text-lg text-muted-foreground mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out to me using the form below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" value={message} onChange={(e) => setMessage(e.target.value)} required />
          </div>
          <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}
