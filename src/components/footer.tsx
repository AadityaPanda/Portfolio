'use client';

import { Github, Linkedin, Code, Instagram } from 'lucide-react';
import { useLenis } from '@studio-freight/react-lenis';
import { cn } from '@/lib/utils';

const socialLinks = [
  { icon: Github, href: "https://github.com/AadityaPanda", 'aria-label': 'GitHub' },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aadityapanda/", 'aria-label': 'LinkedIn' },
  { icon: Instagram, href: "https://www.instagram.com/_aaditya_panda_/", 'aria-label': 'Instagram' },
];

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills'},
    { name: 'Contact', href: '#contact' },
];

export function Footer() {
  const year = new Date().getFullYear();
  const lenis = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    lenis?.scrollTo(href);
  };

  return (
    <footer className={cn(
      "border-t border-border/20 bg-background/50 backdrop-blur-sm relative transition-colors duration-500 ease-in-out"
    )}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
          {/* Column 1: Branding */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-xl font-headline font-bold flex items-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                Aaditya Panda
            </a>
            <p className="text-muted-foreground max-w-xs">
              A software developer building elegant and robust digital experiences.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold tracking-wider uppercase text-foreground/90">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="space-y-4">
            <h4 className="font-semibold tracking-wider uppercase text-foreground/90">Connect</h4>
            <div className="flex justify-center sm:justify-start gap-4">
              {socialLinks.map((link, index) => (
                <a 
                    key={index}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={link['aria-label']} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                    <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground">
          <p>&copy; {year} Aaditya Panda. All rights reserved. Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
