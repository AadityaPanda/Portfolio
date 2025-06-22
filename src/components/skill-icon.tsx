import Image from 'next/image';

export function SkillIcon({ name, className }: { name: string; className?: string }) {
  // Creates a file-friendly name from the skill name.
  // e.g., "Next.js" -> "next-js.svg", "Tailwind CSS" -> "tailwind-css.svg"
  const iconName = name.toLowerCase().replace(/\s/g, '-').replace(/\./g, '-');
  const iconPath = `/icons/${iconName}.svg`;

  return (
    <div className={className}>
      <Image
        src={iconPath}
        alt={`${name} icon`}
        width={40}
        height={40}
        className="h-full w-full object-contain"
        // Using unoptimized is good for SVGs to ensure they remain crisp vectors.
        unoptimized
        // In a production app, you might add an onError handler here to provide a fallback
        // in case an icon file is missing, but for this portfolio, we'll assume they exist.
      />
    </div>
  );
}
