'use client';

import { useState, useEffect } from 'react';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="text-center p-8 mt-16 text-muted-foreground text-sm">
      <p>&copy; {year} Aaditya Panda. All rights reserved.</p>
    </footer>
  );
}
