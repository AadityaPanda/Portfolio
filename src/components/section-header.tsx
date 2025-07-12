
'use client';

import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionHeaderProps = {
  children: ReactNode;
  title: string;
};

export function SectionHeader({ children, title }: SectionHeaderProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="flex flex-col items-center gap-4 text-center">
      {/* Icon Animation: Scale and Fade in */}
      <div
        className={cn(
          'transition-all duration-500 ease-out',
          inView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        )}
      >
        <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          {children}
        </div>
      </div>

      {/* Title Animation: Slide up from bottom */}
      <div className="overflow-hidden py-1">
        <h2
          className={cn(
            'text-3xl sm:text-4xl md:text-5xl font-headline font-bold tracking-tight transition-transform duration-700 delay-150 ease-out text-gradient-primary',
            inView ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          {title}
        </h2>
      </div>

      {/* Underline Animation: Grow from center */}
      <div
        className={cn(
          'h-1 w-24 rounded-full bg-gradient-to-r from-secondary via-primary to-secondary origin-center transition-transform duration-700 delay-300 ease-out',
          inView ? 'scale-x-100' : 'scale-x-0'
        )}
      />
    </div>
  );
};
