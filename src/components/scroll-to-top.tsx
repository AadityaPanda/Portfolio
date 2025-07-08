'use client';

import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLenis } from '@studio-freight/react-lenis';

export function ScrollToTop() {
  const lenis = useLenis();

  const scrollToTop = () => {
    lenis?.scrollTo(0, { lerp: 0.1 });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className="h-10 w-10 rounded-full shrink-0"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
