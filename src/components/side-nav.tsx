'use client';

import { useState, useEffect } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills'},
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState('home');
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
      
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
    <TooltipProvider>
      <nav className="fixed top-1/2 -translate-y-1/2 left-4 z-50 hidden md:block">
        <ul className="flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group flex items-center gap-2"
                    aria-label={`Scroll to ${link.name}`}
                  >
                    <span
                      className={cn(
                        'block h-1 bg-muted-foreground/50 transition-all duration-300 ease-in-out group-hover:bg-primary',
                        activeSection === link.href.substring(1)
                          ? 'w-8 bg-primary'
                          : 'w-4'
                      )}
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{link.name}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </nav>
    </TooltipProvider>
  );
}
