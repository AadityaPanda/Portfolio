import { Github, Linkedin, Mail, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Mail, href: "mailto:john.doe@email.com", 'aria-label': 'Email John Doe', text: 'john.doe@email.com' },
  { icon: Github, href: "https://github.com/johndoe", 'aria-label': 'John Doe on GitHub', text: 'GitHub' },
  { icon: Linkedin, href: "https://linkedin.com/in/johndoe", 'aria-label': 'John Doe on LinkedIn', text: 'LinkedIn' },
  { icon: Smartphone, href: "tel:+1234567890", 'aria-label': 'Call John Doe', text: '+1 (234) 567-890' },
];

export function Contact() {
  return (
    <section id="contact" className="space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-800">
       <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Mail className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-headline font-bold tracking-tight">Get in Touch</h2>
      </div>

      <div className="space-y-4 max-w-2xl">
        <p className="text-lg text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          {socialLinks.map((link, index) => (
             <Button key={index} variant="outline" asChild className="h-12 justify-start text-base">
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link['aria-label']}>
                  <link.icon className="h-5 w-5 mr-3 text-primary" />
                  {link.text}
                </a>
              </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
