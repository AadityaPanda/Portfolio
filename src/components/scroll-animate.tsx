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

export function ScrollAnimate({ children, className, delay = 0, threshold = 0.1, triggerOnce = true, ...props }: ScrollAnimateProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return (
    <div
      ref={ref}
      data-in-view={inView}
      className={cn(
        'transition-all duration-700 ease-out',
        inView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8',
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
