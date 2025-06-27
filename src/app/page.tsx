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
import { ScrollToTop } from '@/components/scroll-to-top';
import { ScrollDownButton } from '@/components/scroll-down-button';
import { SideNav } from '@/components/side-nav';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SideNav />
      <main className="flex-1">
        <Header />
        <ScrollAnimate><About /></ScrollAnimate>
        <ScrollAnimate><Experience /></ScrollAnimate>
        <ScrollAnimate><Projects /></ScrollAnimate>
        <ScrollAnimate><Skills /></ScrollAnimate>
        <ScrollAnimate><Education /></ScrollAnimate>
        <ScrollAnimate><Contact /></ScrollAnimate>
      </main>
      <Footer />
      <ScrollToTop />
      <ScrollDownButton sections={['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact']} />
    </div>
  );
}
