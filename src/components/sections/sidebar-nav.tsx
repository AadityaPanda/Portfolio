'use client';

import { useState, useEffect } from 'react';
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';
import { useLenis } from '@studio-freight/react-lenis';
import {
  UserCircle,
  Briefcase,
  Rocket,
  Wrench,
  GraduationCap,
  Mail,
  Code,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'About', href: '#about', icon: UserCircle },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Rocket },
  { name: 'Skills', href: '#skills', icon: Wrench },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export function SidebarNav() {
  const lenis = useLenis();
  const { open } = useSidebar();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
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

    // Attach listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call handler once to set initial state
    handleScroll(); 

    // Cleanup listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    lenis?.scrollTo(href, { duration: 1.5 });
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarRail />
      <SidebarHeader>
        <Button
          variant="ghost"
          className="font-bold text-lg p-0 h-auto hover:bg-transparent flex items-center justify-start w-full"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleNavClick(e, '#home')}
        >
          <Code className="h-6 w-6 mr-2 text-primary flex-shrink-0" />
          <span
            className={cn('transition-opacity duration-200 whitespace-nowrap', open ? 'opacity-100' : 'opacity-0')}
          >
            Aaditya Panda
          </span>
        </Button>
      </SidebarHeader>
      <SidebarMenu className="flex-1">
        {navLinks.map((link) => (
          <SidebarMenuItem key={link.href}>
            <SidebarMenuButton
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleNavClick(e, link.href)}
              tooltip={{ children: link.name }}
              isActive={activeSection === link.href.substring(1)}
            >
              <link.icon className="h-5 w-5" />
              <span>{link.name}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </Sidebar>
  );
}
