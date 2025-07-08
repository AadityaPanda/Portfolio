
'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useLenis } from '@studio-freight/react-lenis';

export function ScrollDownButton() {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();
  const SCROLL_OFFSET = -80; // Matches the new navbar offset

  // Effect to manage visibility based on scroll position
  useEffect(() => {
    const checkScroll = () => {
      // Button is visible only when near the top of the page
      setIsVisible(window.scrollY < 50); 
    };

    checkScroll(); // Initial check
    window.addEventListener('scroll', checkScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    lenis?.scrollTo('#about', { lerp: 0.1, offset: SCROLL_OFFSET });
  };

  return (
    <button
      onClick={handleScrollDown}
      className={cn(
        'fixed bottom-8 left-1/2 -translate-x-1/2 z-30 transition-all duration-300',
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
      )}
      aria-label="Scroll to next section"
    >
      <div className="w-7 h-12 rounded-full border-2 border-foreground/50 flex items-start justify-center pt-2">
        <div className="w-1 h-3 rounded-full bg-foreground/50 animate-scroll-indicator" />
      </div>
    </button>
  );
}
