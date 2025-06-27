import type { LucideProps } from 'lucide-react';
import type { FC } from 'react';

type SectionHeaderProps = {
  icon: React.FC<LucideProps>;
  title: string;
};

export const SectionHeader: FC<SectionHeaderProps> = ({ icon: Icon, title }) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-8 w-8" />
      </div>
      <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
        {title}
      </h2>
      <div className="h-1 w-24 bg-primary rounded-full" />
    </div>
  );
};
