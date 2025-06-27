
'use client';

import { useState, useEffect } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import { cn } from '@/lib/utils';

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
    if (!lenis) return;

    const handleScroll = (e: { scroll: number }) => {
      const scrollPosition = e.scroll;
      let currentSectionId = '';

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          // Check if the top of the section is at or above the middle of the viewport
          if (element.offsetTop <= scrollPosition + window.innerHeight / 2.5) {
            currentSectionId = section.id;
          }
        }
      }

      // A special check for the very bottom of the page to ensure "Contact" gets selected
      if (window.innerHeight + scrollPosition >= document.body.offsetHeight - 2) {
        currentSectionId = 'contact';
      }

      setActiveSection(currentSectionId || 'home');
    };

    lenis.on('scroll', handleScroll);
    
    // Initial check on load
    handleScroll({ scroll: lenis.scroll });

    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [lenis]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    lenis?.scrollTo(target);
  };

  return (
    <nav className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 animate-in fade-in duration-500">
      <ul className="flex flex-col items-start gap-4">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleScrollTo(e, `#${section.id}`)}
              aria-label={`Scroll to ${section.name}`}
              className={cn(
                'group flex items-center gap-2 text-sm font-medium transition-all duration-300',
                activeSection === section.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span className={cn(
                'h-px w-4 bg-muted-foreground transition-all duration-300 group-hover:w-8 group-hover:bg-foreground',
                activeSection === section.id && 'w-8 bg-primary'
              )} />
              <span>{section.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
