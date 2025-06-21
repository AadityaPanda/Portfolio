import { Header } from '@/components/sections/header';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { AiPitchGenerator } from '@/components/sections/ai-pitch-generator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-card rounded-2xl shadow-lg p-6 md:p-12 space-y-16 -mt-24 md:-mt-32 relative z-10">
            <Experience />
            <Projects />
            <Skills />
            <AiPitchGenerator />
          </div>
        </div>
      </main>
      <footer className="text-center p-6 mt-16 text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}
