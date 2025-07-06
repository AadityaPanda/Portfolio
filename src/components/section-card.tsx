import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

export function SectionCard({ children, className }: SectionCardProps) {
  return (
    <div className={cn(
      "rounded-xl border border-border/20 bg-card/50 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10",
      className
    )}>
      {children}
    </div>
  );
}
