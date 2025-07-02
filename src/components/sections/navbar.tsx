"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { useLenis } from '@studio-freight/react-lenis';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, Code } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills'},
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const lenis = useLenis();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean) as HTMLElement[];
      const homeSection = document.getElementById('home');
      if (homeSection) {
        sections.unshift(homeSection);
      }
      
      let currentSection = 'home';
      for (const section of sections) {
        if (section && section.getBoundingClientRect().top < window.innerHeight / 2) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    lenis?.scrollTo(href, { lerp: 0.1 });
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      hasScrolled ? "bg-background/80 backdrop-blur-lg shadow-md border-b border-border/10" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <a 
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2"
        >
          <Code className="h-7 w-7 text-primary transition-transform duration-300 hover:scale-110" />
          <span className={cn(
            "text-xl font-headline font-bold transition-opacity duration-300",
            hasScrolled || isMobile ? "opacity-100" : "md:opacity-0"
           )}>
            Aaditya Panda
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button 
              key={link.href} 
              variant="ghost" 
              asChild
              className={cn(
                "transition-colors",
                activeSection === link.href.substring(1) ? "text-primary bg-primary/10" : "text-muted-foreground"
              )}
            >
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.name}</a>
            </Button>
          ))}
        </nav>

        <div className='flex items-center gap-2'>
            <ThemeToggle />
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] bg-background/95 backdrop-blur-lg">
                  <div className="flex flex-col gap-6 py-8">
                    <SheetClose asChild>
                      <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-xl font-bold font-headline px-4">
                        Aaditya Panda
                      </a>
                    </SheetClose>
                    <nav className="flex flex-col items-start gap-1 px-2">
                        {navLinks.map((link) => (
                          <SheetClose asChild key={link.href}>
                            <Button 
                                variant="ghost" 
                                asChild
                                className={cn(
                                    "w-full justify-start text-base py-6",
                                    activeSection === link.href.substring(1) ? "text-primary bg-primary/10" : "text-muted-foreground"
                                )}
                            >
                                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.name}</a>
                            </Button>
                          </SheetClose>
                        ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
