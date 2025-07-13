'use client';

import { Eye } from 'lucide-react';

export function VisitorCounter({ count }: { count: number }) {
  if (count === 0) return null;

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Eye className="h-4 w-4" />
      <span>{count.toLocaleString()} views</span>
    </div>
  );
}
