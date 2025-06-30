
'use client';

import { Github, Linkedin, FileText, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CV_PATH } from "@/lib/data";
import { useState, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";


const socialLinks = [
  { name: 'linkedin', icon: Linkedin, href: "https://www.linkedin.com/in/aadityapanda/", 'aria-label': 'Aaditya Panda on LinkedIn' },
  { name: 'github', icon: Github, href: "https://github.com/AadityaPanda", 'aria-label': 'Aaditya Panda on GitHub' },
  { name: 'instagram', icon: Instagram, href: "https://www.instagram.com/_aaditya_panda_/", 'aria-label': 'Aaditya Panda on Instagram' },
];

const phrases = ["Software Developer", "Full-Stack Architect", "Creative Problem-Solver"];

export function Header() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const lenis = useLenis();
  const isMobile = useIsMobile();

  useEffect(() => {
    const styles = [
      'color: #3b82f6',
      'font-size: 16px',
      'font-weight: bold',
      'font-family: "Space Grotesk", sans-serif',
    ].join(';');

    console.log("%cPsst... Hey there, fellow developer! 👋", styles);
    console.log(
      "%cGlad to see you're checking out the portfolio. If you like what you see, let's connect!",
      "font-size: 12px; font-family: 'Inter', sans-serif;"
    );
  }, []);

  useEffect(() => {
    if (isMobile) {
        // On mobile, set the static text and do nothing else.
        setTypedText(phrases[0]);
        return;
    }

    const currentPhrase = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && typedText.length < currentPhrase.length) {
      setIsPaused(false);
      timeout = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }, 120);
    }
    else if (!isDeleting && typedText.length === currentPhrase.length) {
      setIsPaused(true);
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); 
    }
    else if (isDeleting && typedText.length > 0) {
      setIsPaused(false);
      timeout = setTimeout(() => {
        setTypedText(typedText.slice(0, -1));
      }, 60);
    }
    else if (isDeleting && typedText.length === 0) {
      setIsPaused(true);
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 500); 
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex, isMobile]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    lenis?.scrollTo(href);
  };

  return (
    <header id="home" className="relative flex h-screen items-center overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start space-y-6 text-left">
          
          <p className="text-xl font-headline text-primary animate-in fade-in slide-in-from-top-4 duration-700 delay-200">
            Hi, I'm Aaditya Panda
          </p>
          <h1 className="flex items-center justify-start text-5xl font-headline font-bold tracking-tighter text-foreground sm:text-6xl lg:text-7xl xl:text-8xl h-32 animate-in fade-in slide-in-from-top-6 duration-700 delay-300">
            {isMobile ? (
              <span className="animate-gradient-shimmer bg-clip-text text-transparent bg-[length:200%_auto] bg-gradient-to-r from-primary via-accent to-primary">
                Software Developer
              </span>
            ) : (
              <span className="inline-flex items-center">
                <span className="animate-gradient-shimmer bg-clip-text text-transparent bg-[length:200%_auto] bg-gradient-to-r from-primary via-accent to-primary">
                  {typedText}
                </span>
                <span
                  className={cn(
                    "inline-block w-px h-[0.9em] bg-primary ml-2 align-bottom",
                    isPaused && "animate-cursor-blink"
                  )}
                />
              </span>
            )}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground animate-in fade-in from-top-8 slide-in-from-top-8 duration-700 delay-400 max-w-2xl">
            I transform complex business requirements into elegant, scalable web applications, from system architecture to pixel-perfect UIs.
          </p>
          <div className="flex flex-wrap justify-start items-center gap-x-6 gap-y-4 pt-6 animate-in fade-in from-top-10 slide-in-from-top-10 duration-700 delay-500">
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => {
                const gradientClasses = {
                  linkedin: 'bg-gradient-to-br from-sky-500 to-blue-600 hover:shadow-blue-500/30',
                  github: 'bg-gradient-to-br from-gray-700 to-gray-900 hover:shadow-gray-600/30',
                  instagram: 'bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 hover:shadow-pink-500/30',
                }[link.name] || '';

                return (
                    <a 
                      key={index} 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={link['aria-label']}
                      className={cn(
                        "h-12 w-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl bg-[length:200%_auto] hover:bg-right",
                        gradientClasses
                      )}
                    >
                      <link.icon className="h-6 w-6" />
                    </a>
                )
              })}
            </div>

            <div className="h-8 w-px bg-border" />

            <div className="flex items-center flex-wrap justify-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 text-base bg-background/20 backdrop-blur-sm border-foreground/20 hover:border-foreground/50 hover:bg-background/30"
                  >
                    <FileText className="mr-2 h-4 w-4" /> View CV
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
              <Button size="lg" asChild>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                  <Send className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
