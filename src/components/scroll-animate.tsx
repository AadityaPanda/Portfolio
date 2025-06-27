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
    rootMargin: '0px 0px -150px 0px', // Trigger animation 150px before it enters the viewport
  });

  return (
    <div
      ref={ref}
      data-in-view={inView}
      className={cn(
        'group transition-all duration-500 ease-in-out', // Faster and smoother animation
        inView
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-95', // Add a subtle scale and adjust translate
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
