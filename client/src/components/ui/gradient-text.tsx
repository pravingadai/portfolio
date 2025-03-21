import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  from?: string;
  to?: string;
  direction?: 'to-r' | 'to-l';
}

export function GradientText({
  children,
  className,
  from = 'from-primary',
  to = 'to-secondary',
  direction = 'to-r',
}: GradientTextProps) {
  return (
    <span
      className={cn(
        `bg-gradient-${direction} ${from} ${to} bg-clip-text text-transparent`,
        className
      )}
    >
      {children}
    </span>
  );
}