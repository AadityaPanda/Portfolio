'use client';

import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLenis } from '@studio-freight/react-lenis';

export function ScrollDownButton() {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    // This state should only be evaluated on the client to prevent hydration errors.
    const checkScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleScrollDown = () => {
    lenis?.scrollTo('#about', { lerp: 0.1 });
  };

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
