import { Header } from '@/components/sections/header';
import { Footer } from '@/components/footer';
import { ScrollAnimate } from '@/components/scroll-animate';
import { ScrollDownButton } from '@/components/scroll-down-button';
import dynamic from 'next/dynamic';
import { FloatingNav } from '@/components/floating-nav';

const About = dynamic(() => import('@/components/sections/about'));
const Experience = dynamic(() => import('@/components/sections/experience'));
const Projects = dynamic(() => import('@/components/sections/projects'));
const Skills = dynamic(() => import('@/components/sections/skills'));
const Education = dynamic(() => import('@/components/sections/education'));
const Contact = dynamic(() => import('@/components/sections/contact'));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <FloatingNav />
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
      <ScrollDownButton />
    </div>
  );
}
