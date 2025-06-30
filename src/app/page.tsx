import { Header } from '@/components/sections/header';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/footer';
import { ScrollAnimate } from '@/components/scroll-animate';
import { ScrollToTop } from '@/components/scroll-to-top';
import { ScrollDownButton } from '@/components/scroll-down-button';
import dynamic from 'next/dynamic';
import { SideNav } from '@/components/side-nav';

const About = dynamic(() => import('@/components/sections/about').then(mod => mod.About));
const Experience = dynamic(() => import('@/components/sections/experience').then(mod => mod.Experience));
const Projects = dynamic(() => import('@/components/sections/projects').then(mod => mod.Projects));
const Skills = dynamic(() => import('@/components/sections/skills').then(mod => mod.Skills));
const Education = dynamic(() => import('@/components/sections/education').then(mod => mod.Education));
const Contact = dynamic(() => import('@/components/sections/contact').then(mod => mod.Contact));

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
      <ScrollDownButton />
    </div>
  );
}
