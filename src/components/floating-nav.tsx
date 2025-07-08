
'use client';

import { useState, useEffect } from 'react';
import { Home, UserCircle, Briefcase, Rocket, Wrench, GraduationCap, Mail, Menu } from 'lucide-react';
import { useLenis } from '@studio-freight/react-lenis';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: UserCircle },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Rocket },
  { name: 'Skills', href: '#skills', icon: Wrench },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const lenis = useLenis();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      // Show nav when scrolled past a certain point (e.g., 100px)
      setIsVisible(window.scrollY > 100);

      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean) as HTMLElement[];
      
      let currentSection = 'home';
      // Find the current active section
      for (const section of sections) {
        if (section.getBoundingClientRect().top < window.innerHeight / 2) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    lenis?.scrollTo(href, { lerp: 0.1 });
  };

  if (isMobile) {
    return (
      <div className={cn(
        "fixed bottom-4 right-4 z-50 transition-transform duration-300",
        isVisible ? 'translate-y-0' : 'translate-y-24'
      )}>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" className="h-14 w-14 rounded-full shadow-2xl">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="w-full rounded-t-2xl bg-background/95 backdrop-blur-lg p-0 h-auto">
            <SheetHeader className="sr-only">
              <SheetTitle>Main Navigation</SheetTitle>
              <SheetDescription>
                A list of links to navigate the portfolio sections.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-2 p-4">
              <nav className="flex flex-col items-start gap-1">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, link.href)}
                      className={cn(
                        "w-full flex items-center justify-start text-lg py-4 px-4 gap-4 rounded-md",
                        activeSection === link.href.substring(1) ? "text-primary bg-primary/10" : "text-muted-foreground"
                      )}
                    >
                      <link.icon className="h-5 w-5" />
                      {link.name}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-4 flex justify-center">
                  <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    )
  }

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-4 rounded-xl border border-border/20 bg-background/80 p-2 shadow-lg backdrop-blur-lg transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"
      )}
    >
      <ul className="flex items-center gap-1">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              aria-label={link.name}
              className={cn(
                "flex items-center gap-x-2 rounded-md px-3 py-1.5 text-sm transition-colors duration-300",
                activeSection === link.href.substring(1)
                  ? 'bg-primary/10 text-primary font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <link.icon className="h-5 w-5 shrink-0" />
              <span className="whitespace-nowrap">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="h-6 w-px bg-border/50" />
      <ThemeToggle />
    </nav>
  );
}
