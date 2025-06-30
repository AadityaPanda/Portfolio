"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { useLenis } from '@studio-freight/react-lenis';
import { useIsMobile } from '@/hooks/use-mobile';

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

      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
      sections.unshift(document.getElementById('home'));

      let currentSection = 'home';
      for (const section of sections) {
        if (section && section.getBoundingClientRect().top < window.innerHeight / 2) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    lenis?.scrollTo(href);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      hasScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg border-b border-white/5" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-4">
          <a 
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className={cn(
                  "text-xl font-headline font-bold transition-opacity duration-300",
                  hasScrolled || isMobile ? "opacity-100" : "opacity-0"
              )}
          >
            Aaditya Panda
          </a>
        </div>
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
        </div>
      </div>
    </header>
  );
}
