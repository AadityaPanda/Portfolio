import { Header } from '@/components/sections/header';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/footer';
import { Education } from '@/components/sections/education';
import { ScrollAnimate } from '@/components/scroll-animate';
import { Testimonials } from '@/components/sections/testimonials';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background animated-gradient-background">
      <Navbar />
      <main className="flex-1">
        <Header />
        <div className="container mx-auto px-4 md:px-8 py-24 space-y-32">
          <ScrollAnimate><About /></ScrollAnimate>
          <ScrollAnimate delay={100}><Experience /></ScrollAnimate>
          <ScrollAnimate delay={200}><Projects /></ScrollAnimate>
          {/* <ScrollAnimate delay={300}><Testimonials /></ScrollAnimate> */}
          <ScrollAnimate delay={400}><Skills /></ScrollAnimate>
          <ScrollAnimate delay={500}><Education /></ScrollAnimate>
          <ScrollAnimate delay={600}><Contact /></ScrollAnimate>
        </div>
      </main>
      <Footer />
    </div>
  );
}
