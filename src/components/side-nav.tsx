'use client';

import { useState, useEffect } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const sections = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'experience', name: 'Experience' },
  { id: 'projects', name: 'Projects' },
  { id: 'skills', name: 'Skills' },
  { id: 'education', name: 'Education' },
  { id: 'contact', name: 'Contact' },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState('home');
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let currentSection = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition + window.innerHeight / 2) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (target: string) => {
    lenis?.scrollTo(target);
  };

  return (
    <div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 animate-in fade-in duration-500">
        <TooltipProvider>
            <nav>
                <ul className="flex flex-col items-center gap-4">
                    {sections.map((section) => (
                    <li key={section.id}>
                        <Tooltip>
                        <TooltipTrigger asChild>
                            <button
                                onClick={() => handleScrollTo(`#${section.id}`)}
                                aria-label={`Scroll to ${section.name}`}
                                className={cn(
                                    'h-3 w-3 rounded-full bg-muted-foreground/50 transition-all duration-300 hover:scale-125 hover:bg-primary',
                                    activeSection === section.id && 'scale-150 bg-primary'
                                )}
                            />
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>{section.name}</p>
                        </TooltipContent>
                        </Tooltip>
                    </li>
                    ))}
                </ul>
            </nav>
        </TooltipProvider>
    </div>
  );
}
