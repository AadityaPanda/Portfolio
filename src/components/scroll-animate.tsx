'use client';

import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import type { ReactNode, HTMLAttributes } from 'react';

type ScrollAnimateProps = {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export function ScrollAnimate({ children, className, delay = 0, threshold = 0, triggerOnce = true, ...props }: ScrollAnimateProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return (
    <div
      ref={ref}
      data-in-view={inView}
      className={cn(
        'transition-all duration-500 ease-out', // Use ease-out for a more responsive feel
        inView
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-6 scale-98', // Make the animation more subtle
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
