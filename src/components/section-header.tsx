import type { LucideProps } from 'lucide-react';
import type { FC } from 'react';

type SectionHeaderProps = {
  icon: React.FC<LucideProps>;
  title: string;
};

export const SectionHeader: FC<SectionHeaderProps> = ({ icon: Icon, title }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h2 className="inline-block text-3xl font-headline font-bold tracking-tight">
        {title}
        <span className="mt-1 block h-1 max-w-full origin-left scale-x-0 transform bg-primary transition-transform duration-500 ease-out group-data-[in-view=true]:scale-x-100"></span>
      </h2>
    </div>
  );
};
