
'use client';

import { Github, Linkedin, FileText, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CV_PATH } from "@/lib/data";
import { useState, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/aadityapanda/", 'aria-label': 'Aaditya Panda on LinkedIn' },
  { icon: Github, href: "https://github.com/AadityaPanda", 'aria-label': 'Aaditya Panda on GitHub' },
  { icon: Instagram, href: "https://www.instagram.com/_aaditya_panda_/", 'aria-label': 'Aaditya Panda on Instagram' },
];

const fullText = "Software Developer";

export function Header() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const lenis = useLenis();

  useEffect(() => {
    // A delay before the typing animation starts, giving other animations time to settle.
    const startTypingTimeout = setTimeout(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          // Blinking cursor stops after typing is complete
          const cursorBlink = setInterval(() => setShowCursor(prev => !prev), 500);
          setTimeout(() => {
            clearInterval(cursorBlink);
            setShowCursor(false);
          }, 2000);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }, 500); // Start typing after 500ms

    return () => clearTimeout(startTypingTimeout);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    lenis?.scrollTo(target);
  };

  return (
    <header id="home" className="relative flex h-screen items-center bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-8 text-center md:grid-cols-2 md:gap-16 md:text-left">
          
          <div className="flex flex-col items-center space-y-6 md:items-start">
            <p className="text-xl font-headline text-primary animate-in fade-in slide-in-from-top-4 duration-700 delay-200">
              Hi, I'm Aaditya Panda
            </p>
            <h1 className="text-5xl font-headline font-bold tracking-tighter text-foreground sm:text-6xl lg:text-7xl xl:text-8xl animate-in fade-in slide-in-from-top-6 duration-700 delay-300 min-h-[1.2em] sm:min-h-[1.2em] lg:min-h-[1.2em] xl:min-h-[1.2em]">
              <span className="bg-[linear-gradient(90deg,_hsl(var(--primary))_0%,_hsl(var(--accent))_50%,_hsl(var(--primary))_100%)] bg-clip-text text-transparent">
                {typedText}
              </span>
              {showCursor && <span className="inline-block w-1 h-[0.9em] bg-primary animate-pulse ml-1" />}
            </h1>
            <p className="text-xl text-muted-foreground animate-in fade-in from-top-8 slide-in-from-top-8 duration-700 delay-400 max-w-2xl">
              I transform complex business requirements into elegant, scalable web applications, from system architecture to pixel-perfect UIs.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 pt-4 md:justify-start animate-in fade-in from-top-10 slide-in-from-top-10 duration-700 delay-500">
              {socialLinks.map((link, index) => (
                <Button key={index} variant="outline" size="icon" asChild className="h-12 w-12 transition-all hover:bg-primary/10 hover:border-primary hover:-translate-y-1">
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link['aria-label']}>
                    <link.icon className="h-6 w-6" />
                  </a>
                </Button>
              ))}
               <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="icon" className="h-12 w-12 transition-all hover:bg-primary/10 hover:border-primary hover:-translate-y-1" aria-label="View CV">
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
               <Button size="lg" asChild className="h-12 text-base transition-all hover:-translate-y-1">
                <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')}>Get in Touch</a>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center items-center animate-in fade-in zoom-in-75 duration-700 delay-600">
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
                {/* Decorative background blob */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl animate-[spin_20s_linear_infinite]" />
                <Image
                  src="/media/aaditya-panda-portrait.jpg"
                  alt="Portrait of Aaditya Panda"
                  fill
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 450px"
                  className="rounded-full object-cover shadow-2xl shadow-primary/20 border-4 border-background/50"
                  priority
                />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
