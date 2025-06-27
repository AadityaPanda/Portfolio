import React from 'react';
import { cn } from '@/lib/utils';
import { Code } from 'lucide-react';

import {
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiGit,
  SiFirebase,
  SiTypescript as SiTs,
  SiNginx,
  SiMysql,
} from 'react-icons/si';

const ICONS: Record<string, React.ElementType<any>> = {
  'JavaScript': SiJavascript,
  'TypeScript': SiTs,
  'Python': SiPython,
  'Node.js': SiNodedotjs,
  'HTML5': SiHtml5,
  'CSS3': SiCss3,
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Express.js': SiExpress,
  'Tailwind CSS': SiTailwindcss,
  'Git': SiGit,
  'Firebase': SiFirebase,
  'SQL': SiMysql,
  'Nginx': SiNginx,
};

const ICON_COLORS: Record<string, string> = {
  'JavaScript': 'text-yellow-400',
  'TypeScript': 'text-blue-500',
  'Python': 'text-yellow-400',
  'HTML5': 'text-orange-500',
  'CSS3': 'text-blue-500',
  'SQL': 'text-blue-600',
  'React': 'text-sky-400',
  'Next.js': 'text-foreground',
  'Express.js': 'text-foreground',
  'Tailwind CSS': 'text-sky-500',
  'Git': 'text-orange-600',
  'Firebase': 'text-amber-500',
  'Nginx': 'text-green-500',
  'Node.js': 'text-green-600',
};

export type SkillName = keyof typeof ICONS;

export function SkillIcon({ name, className }: { name: SkillName | string; className?: string }) {
  // Look up the icon component by name
  const IconComponent = ICONS[name];
  const colorClass = ICON_COLORS[name] || 'text-foreground';

  if (IconComponent) {
    return <IconComponent className={cn(colorClass, className)} />;
  }

  // Fallback to a generic code icon if a specific one isn't found.
  console.warn(`Skill icon not found for: ${name}. Using fallback.`);
  return <Code className={cn(className)} />;
}
