import React from 'react';
import { cn } from '@/lib/utils';
import { Code } from 'lucide-react';

const ICONS: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  JavaScript: (props) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0V0h0z" fill="none"/>
      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
    </svg>
  ),
  TypeScript: (props) => (
     <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0V0h0z" fill="none"/>
      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.29 14.29L12 15l1.29 1.29L14.59 15l-1.29-1.29L14.59 12l-1.29-1.29L12 12l-1.29-1.29L9.41 12l1.29 1.29L9.41 15l1.3 1.29z"/>
    </svg>
  ),
  Python: (props) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M14.5 14.25h-5v-1.5h5v1.5zm2.5-2.5h-10v-1.5h10v1.5zm0-2.5h-10v-1.5h10v1.5zm-10 7.5h7.5v-1.5H7v1.5zm10-12.5H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-11c0-1.1-.9-2-2-2z"/>
    </svg>
  ),
  'Node.js': (props) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M20.3 12.04l-7.28 4.22V7.82l7.28 4.22M12 2L4 6.96v10.08L12 22l8-4.96V6.96L12 2z"/>
    </svg>
  ),
  HTML5: (props) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M12 2L3 4.22v15.56L12 22l9-2.22V4.22L12 2zm-1.5 13.5h-3L7 9h3.5l-.25 2.5H11L10.5 15.5zm5-6.5H12v3h3.25L15 15.5H12v3l4.5-2.5.5-5.5z"/>
    </svg>
  ),
  CSS3: (props) => (
     <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M12 2L3 4.22v15.56L12 22l9-2.22V4.22L12 2zm-1 14.5l-3-1.5 1.5-2.5 1.5.75-.75 1.5zm4-2l-3 1.5V12h3v4.5z"/>
    </svg>
  ),
  SQL: (props) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M15 21h-2v-2h2v2zm-4 0h-2v-2h2v2zm8-4h-2v-2h2v2zm-4 0h-2v-2h2v2zm-4 0H7v-2h2v2zm-4 0H3v-2h2v2zm16-4h-2v-2h2v2zm-4 0h-2v-2h2v2zM7 9h2V7H7v2zm4 0h2V7h-2v2zm4 0h2V7h-2v2zM3 5v14h18V5H3zm16 12H5V7h14v10z"/>
    </svg>
  ),
  React: (props) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <g>
        <ellipse rx="11" ry="4.2" cx="12" cy="12" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
        <ellipse rx="11" ry="4.2" cx="12" cy="12" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)"/>
        <ellipse rx="11" ry="4.2" cx="12" cy="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </g>
    </svg>
  ),
  'Next.js': (props) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M12 2L2 7v10l10 5 10-5V7L12 2zm5 14.06L12 18.5v-5l5-2.5v6.06zm-7-1.41V11l-5 2.5v-5L10 7v6.65z"/>
    </svg>
  ),
  'Express.js': (props) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M2.5 12l5-4.33v8.66l-5-4.33zm19 0l-5-4.33v8.66l5-4.33zM12 2l-5 4.33v11.34L12 22l5-4.33V6.33L12 2z"/>
    </svg>
  ),
  'Tailwind CSS': (props) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-2.707 9.293a1 1 0 011.414 0L12 12.586l1.293-1.293a1 1 0 111.414 1.414L13.414 14l1.293 1.293a1 1 0 11-1.414 1.414L12 15.414l-1.293 1.293a1 1 0 11-1.414-1.414L10.586 14l-1.293-1.293a1 1 0 010-1.414zm5.414-4a1 1 0 00-1.414 0L12 8.586l-1.293-1.293a1 1 0 10-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 101.414-1.414L13.414 10l1.293-1.293a1 1 0 000-1.414z"/>
    </svg>
  ),
  Docker: (props) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M21.93 9.49c-.27-1.5-.78-2.92-1.5-4.22a9.988 9.988 0 00-4.07-4.07C14.92.48 13.5.03 12 .03c-1.85 0-3.6.43-5.14 1.21l.1.06c.43.25.84.55 1.22.9l.23.2c.41.36.8.75 1.15 1.17l.15.19c.31.42.59.86.84 1.33l.06.13c.24.49.44 1 .6 1.52h5.79c.9 0 1.7.45 2.22 1.17.52.72.74 1.66.58 2.59zM12.01 4.53H6.42c-.2.43-.37.88-.49 1.35h6.08zm-.01 2.7h-6.2c-.11.46-.17.93-.17 1.41h6.37zm0 2.76h-6.55c0 .48.06.95.17 1.41h6.38zm0 2.76h-6.38c.11.46.26.9.48 1.32h5.9zM5.04 17.7c.36.26.75.48 1.16.65h6.63c.41-.17.8-.39 1.16-.65H5.04zM22 12.03c0-.3-.02-.6-.05-.89h-5.22c-.9 0-1.7-.45-2.22-1.17-.52-.72-.74-1.66-.58-2.59l-.06-.13c-.2-.48-.44-.94-.74-1.38a6.38 6.38 0 00-1.09-1.1l-.23-.2c-.4-.36-.83-.68-1.29-.95C8.92 2.7 7.23 2.03 5.48 2.03c-1.4 0-2.73.35-3.92.98C.45 3.63 0 4.78 0 6.03c0 1.23.45 2.38 1.55 3.01.27.15.56.28.87.39v.02c.03.01.06.02.1.03.22.06.44.1.67.14h.02c.1.02.18.03.28.04l.32.05c.1.01.2.02.3.03l.34.03c.11.01.22.01.33.01h.02c.11 0 .22-.01.32-.01l.3-.03c.1-.01.2-.02.29-.03l.32-.04c.1-.01.19-.03.28-.04l.26-.04c.09-.01.18-.03.27-.04.09-.02.18-.03.27-.05l.2-.04c.09-.02.18-.04.26-.06.08-.02.17-.04.25-.06.08-.02.16-.05.24-.07.07-.02.15-.05.22-.07.03-.01.07-.02.1-.04.4-.13.79-.3 1.13-.51l.04-.02c.28-.18.54-.39.77-.63l.03-.03c.22-.24.42-.5.59-.79l.01-.03c.16-.28.3-.58.4-.9l.01-.03c.04-.15.08-.3.1-.46v-.01c.02-.15.03-.3.03-.46 0-.3-.02-.6-.05-.89H2.03c-.03.3-.05.6-.05.91 0 .3.02.6.05.89h3.33v-1.8H2.08c.03-.3.05-.6.05-.89s-.02-.6-.05-.89h4.2v-1.8H2.08c.03-.3.05-.6.05-.89s-.02-.6-.05-.89h5.08v-1.8H2.22c.4-.69.94-1.29 1.6-1.75C4.7 3.5 5.58 3.53 6.43 3.53h5.57v1.4h.02v.02c0 .9-.45 1.7-1.17 2.22-.72.52-1.66.74-2.59.58-.93-.16-1.64-.87-1.8-1.8H2.23c.33-.74.8-1.39 1.39-1.92.59-.53 1.28-.94 2.03-1.21.75-.28 1.55-.42 2.36-.42s1.61.14 2.36.42c.75.27 1.44.68 2.03 1.21.59.53 1.06 1.18 1.39 1.92h-4.24c-.16.93-.87 1.64-1.8 1.8-.93.16-1.87-.06-2.59-.58-.72-.52-1.17-1.32-1.17-2.22v-.02h-.01V3.53h.97c-.2.43-.37.88-.49 1.35h1.9v1.8h-2.07c-.11.46-.17.93-.17 1.41h2.24v1.8H4.63c0 .48.06.95.17 1.41h2.57v1.8H4.97c.22.42.48.81.79 1.16.31.35.66.66 1.04.91.38.25.79.46 1.22.61v.01c.45.16.92.28 1.41.35l.02.01c.16.02.32.04.48.05.6.04 1.2.04 1.8 0 .16-.01.32-.03.48-.05l.02-.01c.49-.07.96-.19 1.41-.35v-.01c.43-.15.84-.36 1.22-.61.38-.25.73-.56.02-1.16.32-.35.59-.74.79-1.16h-2.5v-1.8h2.74c.11-.46.17-.93.17-1.41H8.8v-1.8h2.41c0-.48-.06-.95-.17-1.41H8.97V6.88h2.09c-.12-.47-.29-.92-.49-1.35h.94v1.4h.01c0 .9.45 1.7 1.17 2.22.72.52 1.66.74 2.59.58.93-.16 1.64-.87 1.8-1.8H17.7c.33-.74.8-1.39 1.39-1.92.59-.53 1.28-.94 2.03-1.21.75-.28 1.55-.42 2.36-.42.81 0 1.61.14 2.36.42.75.27 1.44.68 2.03 1.21.59.53 1.06 1.18 1.39 1.92h-4.24c-.16.93-.87 1.64-1.8 1.8-.93.16-1.87-.06-2.59-.58-.72-.52-1.17-1.32-1.17-2.22V5.55h5.57c.85 0 1.65.03 2.36.49.67.46 1.21 1.06 1.6 1.75h-4.2v1.8h5.08c-.03.3-.05.6-.05.89s.02.6.05.89h-4.2v1.8h4.25c-.03.3-.05.6-.05.89s.02.6.05.89h-3.33v1.8H22z"/>
    </svg>
  ),
  Git: (props) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 12.36l-3.28-3.28v7.56h-2.72v-7.56l-3.28 3.28-1.92-1.92L12 3.8l6.56 6.64-1.92 1.92z"/>
    </svg>
  ),
  Firebase: (props) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M12 2L3 6v12l9 4 9-4V6L12 2zm0 2.24L17.5 7 12 9.76 6.5 7 12 4.24zM5 16.82V8.18l7 3.11v7.42l-7-3.79zm9 2.94v-7.42l7-3.11v8.64l-7 1.89z"/>
    </svg>
  ),
};

export function SkillIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = ICONS[name];

  if (IconComponent) {
    return <IconComponent className={cn(className)} />;
  }

  // Fallback to a generic code icon if a specific one isn't found.
  return <Code className={cn(className)} />;
}
