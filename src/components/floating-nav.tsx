
'use client';

import { useState, useEffect } from 'react';
import { Home, UserCircle, Briefcase, Rocket, Wrench, GraduationCap, Mail, Menu, Code, X } from 'lucide-react';
import { useLenis } from '@studio-freight/react-lenis';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';

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
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();
  const SCROLL_OFFSET = -80;

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean) as HTMLElement[];
      
      let currentSection = 'home';
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
    lenis?.scrollTo(href, { lerp: 0.1, offset: SCROLL_OFFSET });
    setIsMobileMenuOpen(false);
  };
  
  const handleLogoClick = (e: React.MouseEvent) => {
      e.preventDefault();
      lenis?.scrollTo('#home', { lerp: 0.1 });
      setIsMobileMenuOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        hasScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/20 shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 md:px-8 flex items-center justify-between h-20 relative">
        {/* Logo / Brand */}
        <a href="#home" onClick={handleLogoClick} className="text-xl font-headline font-bold flex items-center gap-2 transition-colors hover:text-primary z-10">
          <Code className="h-6 w-6 text-primary" />
          Aaditya Panda
        </a>
        
        {/* Centered Desktop Navigation */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center gap-1">
                {navLinks.filter(l => l.name !== 'Home').map((link) => (
                <li key={link.href}>
                    <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-label={link.name}
                    className={cn(
                        "flex items-center gap-x-2 rounded-md px-3 py-1.5 text-sm transition-colors duration-200 font-medium",
                        activeSection === link.href.substring(1)
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                    >
                    {link.name}
                    </a>
                </li>
                ))}
            </ul>
        </div>

        {/* Right side content */}
        <div className="flex items-center">
            {/* Desktop Theme Toggle */}
            <div className="hidden md:block">
                <ThemeToggle />
            </div>

            {/* Mobile Navigation Trigger */}
            <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                <Button size="icon" variant="ghost">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[85vw] max-w-sm bg-card/95 backdrop-blur-lg p-0">
                <SheetHeader className="p-4 border-b">
                    <SheetTitle>Navigation</SheetTitle>
                    <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
                </SheetHeader>
                <div className="p-4">
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
                    <div className="mt-8 flex justify-center">
                        <ThemeToggle />
                    </div>
                </div>
                </SheetContent>
            </Sheet>
            </div>
        </div>
      </nav>
    </header>
  );
}
