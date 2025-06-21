import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const socialLinks = [
  { icon: Mail, href: "mailto:john.doe@email.com", 'aria-label': 'Email John Doe' },
  { icon: Github, href: "https://github.com/johndoe", 'aria-label': 'John Doe on GitHub' },
  { icon: Linkedin, href: "https://linkedin.com/in/johndoe", 'aria-label': 'John Doe on LinkedIn' },
];

export function Header() {
  return (
    <header id="hero" className="bg-secondary pt-12 pb-32 md:pt-20 md:pb-40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 space-y-4 text-center md:text-left">
            <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Hi, I'm John Doe
            </h1>
            <p className="text-xl font-headline text-primary">
              Software Engineer & AI Enthusiast
            </p>
            <p className="text-base text-muted-foreground max-w-xl mx-auto md:mx-0">
              I specialize in building exceptional digital experiences. With a passion for clean code and user-centric design, I transform complex problems into elegant, efficient solutions. Currently exploring the intersection of web development and artificial intelligence.
            </p>
            <div className="flex items-center gap-2 pt-4 justify-center md:justify-start">
              {socialLinks.map((link, index) => (
                <Button key={index} variant="outline" size="icon" asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link['aria-label']}>
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <div className="relative h-64 w-64 md:h-80 md:w-80 justify-self-center">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Portrait of John Doe"
              fill
              className="rounded-full object-cover border-8 border-background shadow-lg"
              data-ai-hint="professional portrait"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
