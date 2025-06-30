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
  const [isScrolling, setIsScrolling] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lenis = useLenis();

  // Prevents the component from rendering on the server and flashing on load
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Show sidebar on scroll
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 250); // Hide after 250ms of no scrolling

      // Set active section
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
      clearTimeout(scrollTimeout);
    };
  }, [mounted]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    lenis?.scrollTo(href, { lerp: 0.1 });
  };
  
  if (!mounted) {
    return null;
  }

  const isNavVisible = activeSection !== 'home';

  return (
    <nav className={cn(
      "group fixed top-1/2 -translate-y-1/2 left-0 z-50 hidden p-0 xl:block transition-all duration-300",
      isNavVisible ? 'opacity-100' : 'opacity-0 pointer-events-none',
      isScrolling && "is-scrolling"
    )}>
      <ul className={cn(
        "flex flex-col items-start gap-3 p-0 transition-opacity duration-300",
        // The nav is only "truly" visible when hovered or scrolling
        "opacity-0 group-hover:opacity-100 group-[.is-scrolling]:opacity-100"
      )}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "group flex items-center gap-3 text-sm font-medium transition-colors",
                activeSection === link.href.substring(1)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              aria-label={`Scroll to ${link.name}`}
            >
              <span
                className={cn(
                  'block h-px bg-current transition-all duration-300 ease-in-out',
                  activeSection === link.href.substring(1)
                    ? 'w-12'
                    : 'w-6'
                )}
              />
              <span className={cn(activeSection === link.href.substring(1) ? 'font-medium' : 'font-normal')}>
                {link.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
