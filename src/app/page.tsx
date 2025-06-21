import { Header } from '@/components/sections/header';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background animated-gradient-background">
      <Navbar />
      <main className="flex-1">
        <Header />
        <div className="container mx-auto px-4 md:px-8 py-24 space-y-32">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
