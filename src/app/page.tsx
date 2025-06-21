import { Header } from '@/components/sections/header';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { AiPitchGenerator } from '@/components/sections/ai-pitch-generator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 container mx-auto p-4 md:p-8 space-y-16">
        <Header />
        <Experience />
        <Projects />
        <Skills />
        <AiPitchGenerator />
      </main>
      <footer className="text-center p-4 text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}
