'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import type { ReactNode } from 'react';

function SmoothScroll({ children }: { children: ReactNode }) {
  // Options for a very smooth scroll effect
  const lenisOptions = {
    lerp: 0.1, // Lower values create a smoother, more "floaty" scroll
    duration: 1.5, // The duration of the scroll animation
    smoothTouch: true, // Enables smooth scrolling on touch devices
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
