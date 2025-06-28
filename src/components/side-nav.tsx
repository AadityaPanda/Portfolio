'use client';

import { useEffect, useState } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import { cn } from '@/lib/utils';

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
    <nav className="fixed top-1/2 -translate-y-1/2 left-0 z-50 hidden 3xl:block">
      <ul className="flex flex-col items-start gap-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "group flex items-center gap-3 text-sm transition-colors",
                activeSection === link.href.substring(1)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              aria-label={`Scroll to ${link.name}`}
            >
              <span
                className={cn(
                  'block h-1 bg-current transition-all duration-300 ease-in-out',
                  activeSection === link.href.substring(1)
                    ? 'w-8'
                    : 'w-4'
                )}
              />
              <span className="font-medium">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
