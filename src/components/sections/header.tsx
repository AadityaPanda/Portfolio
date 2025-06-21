import { Github, Linkedin, ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/aadityapanda/", 'aria-label': 'Aaditya Panda on LinkedIn' },
  { icon: Github, href: "https://github.com/AadityaPanda", 'aria-label': 'Aaditya Panda on GitHub' },
];

export function Header() {
  return (
    <header id="home" className="relative flex h-screen items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-8 text-center md:grid-cols-2 md:gap-16 md:text-left">
          
          <div className="flex flex-col items-center space-y-6 md:items-start">
            <p className="text-xl font-headline text-primary animate-in fade-in slide-in-from-top-4 duration-700 delay-200">
              Hi, I'm Aaditya Panda
            </p>
            <h1 className="text-5xl font-headline font-bold tracking-tighter text-foreground sm:text-6xl lg:text-7xl xl:text-8xl animate-in fade-in slide-in-from-top-6 duration-700 delay-300">
              <span className="animate-gradient-shimmer bg-[linear-gradient(90deg,_hsl(var(--primary))_0%,_hsl(var(--accent))_50%,_hsl(var(--primary))_100%)] bg-[length:200%_auto] bg-clip-text text-transparent">
                Full-Stack Problem Solver
              </span>
            </h1>
            <p className="text-xl text-muted-foreground animate-in fade-in slide-in-from-top-8 duration-700 delay-400 max-w-2xl">
              I transform complex business requirements into elegant, scalable web applications, from system architecture to pixel-perfect UIs.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 pt-4 md:justify-start animate-in fade-in slide-in-from-top-10 duration-700 delay-500">
              {socialLinks.map((link, index) => (
                <Button key={index} variant="outline" size="icon" asChild className="h-12 w-12 transition-all hover:bg-primary/10 hover:border-primary">
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link['aria-label']}>
                    <link.icon className="h-6 w-6" />
                  </a>
                </Button>
              ))}
               <Button size="lg" asChild className="h-12 text-base">
                <a href="/AadityaPanda_CV.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
               <Button size="lg" asChild className="h-12 text-base">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center animate-in fade-in zoom-in-50 duration-700 delay-400">
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
                <Image
                  src="https://placehold.co/600x600.png"
                  alt="Portrait of Aaditya Panda"
                  fill
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 450px"
                  className="rounded-2xl object-cover shadow-2xl shadow-primary/20"
                  data-ai-hint="professional portrait"
                  priority
                />
            </div>
          </div>

        </div>
      </div>
      
      <a href="#about" aria-label="Scroll to content" className="absolute bottom-10 left-1/2 -translate-x-1/2 group animate-in fade-in duration-1000 delay-1000 fill-mode-both hidden md:block">
        <div className="h-12 w-7 border-2 border-muted-foreground/50 rounded-full flex justify-center items-start p-1 group-hover:border-primary transition-colors">
          <ArrowDown className="h-5 w-5 text-muted-foreground/50 animate-[bounce_2s_ease-out_infinite] group-hover:text-primary transition-colors" />
        </div>
      </a>
    </header>
  );
}
