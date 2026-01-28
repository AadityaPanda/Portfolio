
import React from 'react';
import { cn } from '@/lib/utils';
import { Code, Server, Database, KeyRound, Cable } from 'lucide-react';

import {
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiReact,
  SiExpress,
  SiGit,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiCplusplus,
  SiArduino,
  SiEspressif,
  SiNginx,
} from 'react-icons/si';

const ICONS: Record<string, React.ElementType<any>> = {
  'JavaScript': SiJavascript,
  'Python': SiPython,
  'Node.js': SiNodedotjs,
  'HTML5': SiHtml5,
  'CSS3': SiCss3,
  'React': SiReact,
  'Express.js': SiExpress,
  'Git': SiGit,
  'Firebase': SiFirebase,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'Nginx': SiNginx,
  'C++': SiCplusplus,
  'Arduino IDE': SiArduino,
  'Arduino Uno': SiArduino,
  'ESP32': SiEspressif,
  'REST APIs': Server,
  'SAML SSO': KeyRound,
  'WebSockets': Cable,
};

const ICON_COLORS: Record<string, string> = {
  'JavaScript': 'text-yellow-400',
  'Python': 'text-yellow-400',
  'HTML5': 'text-orange-500',
  'CSS3': 'text-blue-500',
  'MySQL': 'text-blue-600',
  'PostgreSQL': 'text-sky-600',
  'React': 'text-sky-400',
  'Express.js': 'text-foreground',
  'Git': 'text-orange-600',
  'Firebase': 'text-amber-500',
  'Nginx': 'text-green-500',
  'Node.js': 'text-green-600',
  'C++': 'text-blue-600',
  'Arduino IDE': 'text-teal-500',
  'Arduino Uno': 'text-teal-500',
  'ESP32': 'text-red-600',
  'REST APIs': 'text-orange-500',
  'SAML SSO': 'text-purple-500',
  'WebSockets': 'text-yellow-500',
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
