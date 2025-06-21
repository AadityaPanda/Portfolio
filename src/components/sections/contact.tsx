import { Github, Linkedin, Mail, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Mail, href: "mailto:aadityapanda23@gmail.com", 'aria-label': 'Email Aaditya Panda', text: 'aadityapanda23@gmail.com' },
  { icon: Github, href: "https://github.com/AadityaPanda", 'aria-label': 'Aaditya Panda on GitHub', text: 'GitHub' },
  { icon: Smartphone, href: "tel:+919871722747", 'aria-label': 'Call Aaditya Panda', text: '+91 98717 22747' },
];

export function Contact() {
  return (
    <section id="contact" className="space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-800 section-card">
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
             <Button key={index} variant="outline" asChild className="h-12 justify-start text-base transition-all hover:bg-primary/10 hover:border-primary">
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
