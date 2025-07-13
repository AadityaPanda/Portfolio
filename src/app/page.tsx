
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/footer';
import { ScrollAnimate } from '@/components/scroll-animate';
import { ScrollDownButton } from '@/components/scroll-down-button';
import dynamic from 'next/dynamic';
import { FloatingNav } from '@/components/floating-nav';
import { GithubProjects } from '@/components/sections/github-projects';
import { incrementVisitorCount } from '@/services/visitor-service';

const About = dynamic(() => import('@/components/sections/about'));
const Experience = dynamic(() => import('@/components/sections/experience'));
const Projects = dynamic(() => import('@/components/sections/projects'));
const Skills = dynamic(() => import('@/components/sections/skills'));
const Education = dynamic(() => import('@/components/sections/education'));
const Contact = dynamic(() => import('@/components/sections/contact'));

export default async function Home() {
  const count = await incrementVisitorCount();
  return (
    <div className="flex flex-col min-h-screen">
      <FloatingNav />
      <main className="flex-1">
        <Header />
        <ScrollAnimate><About /></ScrollAnimate>
        <ScrollAnimate><Experience /></ScrollAnimate>
        <ScrollAnimate>
          <Projects>
            <GithubProjects />
          </Projects>
        </ScrollAnimate>
        <ScrollAnimate><Skills /></ScrollAnimate>
        <ScrollAnimate><Education /></ScrollAnimate>
        <ScrollAnimate><Contact /></ScrollAnimate>
      </main>
      <Footer visitorCount={count} />
      <ScrollDownButton />
    </div>
  );
}
