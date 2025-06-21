import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const socialLinks = [
  { icon: Mail, href: "mailto:john.doe@email.com", 'aria-label': 'Email John Doe' },
  { icon: Github, href: "https://github.com/johndoe", 'aria-label': 'John Doe on GitHub' },
  { icon: Linkedin, href: "https://linkedin.com/in/johndoe", 'aria-label': 'John Doe on LinkedIn' },
];

export function Header() {
  return (
    <header id="home" className="relative flex h-screen flex-col items-center justify-center text-center">
      <div className="absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="relative h-40 w-40 md:h-48 md:w-48 animate-in fade-in zoom-in-50 duration-700">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Portrait of John Doe"
              fill
              className="rounded-full object-cover border-4 border-primary/50 shadow-lg"
              data-ai-hint="professional portrait"
              priority
            />
             <div className="absolute inset-0 rounded-full border-4 border-primary/50 shadow-lg animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
          </div>
          <div className="space-y-4 max-w-2xl">
            <p className="text-xl font-headline text-primary animate-in fade-in slide-in-from-top-4 duration-700 delay-200">
              Hi, I'm John Doe
            </p>
            <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-in fade-in slide-in-from-top-6 duration-700 delay-300">
              Full-Stack Developer
            </h1>
            <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-top-8 duration-700 delay-400">
              I build and deploy robust web applications from scratch, specializing in React, Node.js, and creating custom, high-security solutions.
            </p>
          </div>
          <div className="flex items-center gap-2 pt-4 animate-in fade-in slide-in-from-top-10 duration-700 delay-500">
            {socialLinks.map((link, index) => (
              <Button key={index} variant="outline" size="icon" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link['aria-label']}>
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      <a href="#about" aria-label="Scroll to content" className="absolute bottom-10 left-1/2 -translate-x-1/2 group animate-in fade-in duration-1000 delay-1000 fill-mode-both">
        <div className="h-12 w-7 border-2 border-muted-foreground/50 rounded-full flex justify-center items-start p-1 group-hover:border-primary transition-colors">
          <ArrowDown className="h-5 w-5 text-muted-foreground/50 animate-[bounce_2s_ease-out_infinite] group-hover:text-primary transition-colors" />
        </div>
      </a>
    </header>
  );
}
