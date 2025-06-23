'use client';

import { Github, Linkedin, ArrowDown, FileText, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CV_PATH } from "@/lib/data";
import { useState, useEffect } from "react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/aadityapanda/", 'aria-label': 'Aaditya Panda on LinkedIn' },
  { icon: Github, href: "https://github.com/AadityaPanda", 'aria-label': 'Aaditya Panda on GitHub' },
  { icon: Instagram, href: "https://www.instagram.com/_aaditya_panda_/", 'aria-label': 'Aaditya Panda on Instagram' },
];

const fullText = "Software Developer";

export function Header() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTypingTimeout = setTimeout(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          setShowCursor(false);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }, 200);

    return () => clearTimeout(startTypingTimeout);
  }, []);

  return (
    <header id="home" className="relative flex h-screen items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-8 text-center md:grid-cols-2 md:gap-16 md:text-left">
          
          <div className="flex flex-col items-center space-y-6 md:items-start">
            <p className="text-xl font-headline text-primary animate-in fade-in slide-in-from-top-4 duration-700 delay-200">
              Hi, I'm Aaditya Panda
            </p>
            <h1 className="text-5xl font-headline font-bold tracking-tighter text-foreground sm:text-6xl lg:text-7xl xl:text-8xl animate-in fade-in slide-in-from-top-6 duration-700 delay-300 min-h-[1.2em] sm:min-h-[1.2em] lg:min-h-[1.2em] xl:min-h-[1.2em]">
              <span className="animate-gradient-shimmer bg-[linear-gradient(90deg,_hsl(var(--primary))_0%,_hsl(var(--accent))_50%,_hsl(var(--primary))_100%)] bg-[length:200%_auto] bg-clip-text text-transparent">
                {typedText}
              </span>
              {showCursor && <span className="inline-block w-1 h-[0.9em] bg-current animate-pulse ml-1" />}
            </h1>
            <p className="text-xl text-muted-foreground animate-in fade-in from-top-8 slide-in-from-top-8 duration-700 delay-400 max-w-2xl">
              I transform complex business requirements into elegant, scalable web applications, from system architecture to pixel-perfect UIs.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 pt-4 md:justify-start animate-in fade-in from-top-10 slide-in-from-top-10 duration-700 delay-500">
              {socialLinks.map((link, index) => (
                <Button key={index} variant="outline" size="icon" asChild className="h-12 w-12 transition-all hover:bg-primary/10 hover:border-primary">
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link['aria-label']}>
                    <link.icon className="h-6 w-6" />
                  </a>
                </Button>
              ))}
               <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="icon" className="h-12 w-12 transition-all hover:bg-primary/10 hover:border-primary" aria-label="View CV">
                    <FileText className="h-6 w-6" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0">
                  <DialogHeader className="p-4 border-b">
                    <DialogTitle>Curriculum Vitae</DialogTitle>
                  </DialogHeader>
                  <div className="flex-1 overflow-auto">
                    <iframe
                      src={CV_PATH}
                      className="w-full h-full"
                      title="CV Preview"
                    />
                  </div>
                </DialogContent>
              </Dialog>
               <Button size="lg" asChild className="h-12 text-base">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center animate-in fade-in zoom-in-50 duration-700 delay-400">
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
                <Image
                  src="/media/aaditya-panda-portrait.jpg"
                  alt="Portrait of Aaditya Panda"
                  fill
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 450px"
                  className="rounded-2xl object-cover shadow-2xl shadow-primary/20"
                  priority
                />
            </div>
          </div>

        </div>
      </div>
      
      <a href="#about" aria-label="Scroll to content" className="absolute bottom-10 left-1/2 -translate-x-1/2 group animate-in fade-in duration-1000 delay-1000 fill-mode-both hidden md:block">
        <div className="h-12 w-7 border-2 border-muted-foreground/50 rounded-full flex justify-center items-start p-1 group-hover:border-primary transition-colors">
          <ArrowDown className="h-5 w-5 text-muted-foreground/50 animate-[bounce_2s_ease-out_infinite] group-hover:text-primary transition-colors" />
        </div>
      </a>
    </header>
  );
}
