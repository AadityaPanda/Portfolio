'use client';

import { Github, Linkedin, FileText, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    // Console log easter egg
    const styles = [
      'color: #3b82f6', // A nice blue color
      'font-size: 16px',
      'font-weight: bold',
      'font-family: "Space Grotesk", sans-serif',
    ].join(';');

    console.log("%cPsst... Hey there, fellow developer! 👋", styles);
    console.log(
      "%cGlad to see you're checking out the code. If you like what you see, let's connect!",
      "font-size: 12px; font-family: 'Inter', sans-serif;"
    );

    // A delay before the typing animation starts
    const startTypingTimeout = setTimeout(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          // Cursor blinks for a bit then disappears
          const cursorBlink = setInterval(() => setShowCursor(prev => !prev), 500);
          setTimeout(() => {
            clearInterval(cursorBlink);
            setShowCursor(false);
          }, 3000); // Let it blink for 3 seconds
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }, 500); 

    return () => clearTimeout(startTypingTimeout);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    lenis?.scrollTo(target);
  };

  return (
    <header id="home" className="relative flex h-screen items-center bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6 text-center">
          
          <p className="text-xl font-headline text-primary animate-in fade-in slide-in-from-top-4 duration-700 delay-200">
            Hi, I'm Aaditya Panda
          </p>
          <h1 className="text-5xl font-headline font-bold tracking-tighter text-foreground sm:text-6xl lg:text-7xl xl:text-8xl animate-in fade-in slide-in-from-top-6 duration-700 delay-300 min-h-[1.2em] sm:min-h-[1.2em] lg:min-h-[1.2em] xl:min-h-[1.2em]">
            <span className="animate-gradient-shimmer bg-clip-text text-transparent bg-[length:200%_auto] bg-gradient-to-r from-primary via-accent to-primary">
              {typedText}
            </span>
            {showCursor && <span className="inline-block w-1 h-[0.9em] bg-primary animate-pulse ml-1" />}
          </h1>
          <p className="text-xl text-muted-foreground animate-in fade-in from-top-8 slide-in-from-top-8 duration-700 delay-400 max-w-2xl">
            I transform complex business requirements into elegant, scalable web applications, from system architecture to pixel-perfect UIs.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 pt-6 animate-in fade-in from-top-10 slide-in-from-top-10 duration-700 delay-500">
            {/* Social Icons Group */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <Button key={index} variant="outline" size="icon" asChild className="h-12 w-12 transition-all hover:bg-primary/10 hover:border-primary hover:text-primary hover:-translate-y-1">
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link['aria-label']}>
                    <link.icon className="h-6 w-6" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Vertical Divider */}
            <div className="h-8 w-px bg-border" />

            {/* Action Buttons Group */}
            <div className="flex items-center flex-wrap justify-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="h-12 text-base transition-all hover:bg-primary/10 hover:border-primary hover:text-primary hover:-translate-y-1" aria-label="View CV">
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
              <Button size="lg" asChild className="h-12 text-base transition-all hover:-translate-y-1">
                <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')}>
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
