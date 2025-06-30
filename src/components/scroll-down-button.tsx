'use client';

import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ScrollDownButtonProps {
  sections: string[];
}

export function ScrollDownButton({ sections }: ScrollDownButtonProps) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      let activeIndex = 0;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition + window.innerHeight / 2) {
          activeIndex = i;
          break;
        }
      }
      setCurrentSectionIndex(activeIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleScrollDown = () => {
    const nextSectionIndex = currentSectionIndex + 1;
    if (nextSectionIndex < sections.length) {
      const nextSectionId = sections[nextSectionIndex];
      const targetElement = document.getElementById(nextSectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  const isVisible = currentSectionIndex === 0;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleScrollDown}
      className={cn(
        'fixed bottom-8 left-1/2 -translate-x-1/2 z-50 h-12 w-12 rounded-full transition-all duration-300 animate-pulse',
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
      )}
      aria-label="Scroll to next section"
    >
      <ArrowDown className="h-6 w-6" />
    </Button>
  );
}
