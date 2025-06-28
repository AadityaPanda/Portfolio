import { Mail, Github, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { ContactForm } from "./contact-form";
import { SectionHeader } from "../section-header";

const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'in/aadityapanda',
      href: 'https://www.linkedin.com/in/aadityapanda/',
      ariaLabel: 'Connect on LinkedIn',
    },
    {
      icon: Github,
      name: 'GitHub',
      handle: '@AadityaPanda',
      href: 'https://github.com/AadityaPanda',
      ariaLabel: 'View GitHub Profile',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '_aaditya_panda_',
      href: 'https://www.instagram.com/_aaditya_panda_/',
      ariaLabel: 'Follow on Instagram',
    },
];


export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="Get in Touch">
          <Mail className="h-8 w-8" />
        </SectionHeader>
        <div className="mt-12 grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
              <p className="text-lg text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out to me using the form below.
              </p>
              <ContactForm />
          </div>
          <div className="hidden lg:flex flex-col items-center space-y-8 pt-4">
            <h3 className="text-2xl font-headline font-semibold text-center text-foreground/90">
                Or connect with me directly
            </h3>
            <div className="space-y-4 w-full max-w-md">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="group flex items-center p-4 rounded-lg border bg-card border-border/50 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-primary group-hover:bg-primary/10 transition-colors">
                    <link.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-grow ml-4">
                    <p className="font-semibold text-foreground">{link.name}</p>
                    <p className="text-sm text-muted-foreground">{link.handle}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
