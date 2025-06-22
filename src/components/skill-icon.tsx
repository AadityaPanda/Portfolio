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
  SiTypescript as SiTs
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
};

export type SkillName = keyof typeof ICONS;

export function SkillIcon({ name, className }: { name: SkillName | string; className?: string }) {
  // Look up the icon component by name
  const IconComponent = ICONS[name];

  if (IconComponent) {
    return <IconComponent className={cn(className)} />;
  }

  // Fallback to a generic code icon if a specific one isn't found.
  console.warn(`Skill icon not found for: ${name}. Using fallback.`);
  return <Code className={cn(className)} />;
}