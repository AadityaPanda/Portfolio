import { Mail, Github, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { ContactForm } from "./contact-form";
import { SectionHeader } from "../section-header";
import { cn } from "@/lib/utils";
import { SectionCard } from "../section-card";

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

const getSocialHoverClasses = (name: string) => {
  switch (name) {
    case 'LinkedIn':
      return {
        card: 'hover:border-[#0077B5]/30 hover:shadow-[#0077B5]/10',
        iconContainer: 'group-hover:bg-[#0077B5]/10',
        icon: 'text-[#0077B5]',
        arrow: 'group-hover:text-[#0077B5]',
      };
    case 'GitHub':
      return {
        card: 'hover:border-foreground/30 hover:shadow-foreground/10',
        iconContainer: 'group-hover:bg-foreground/10',
        icon: 'text-foreground',
        arrow: 'group-hover:text-foreground',
      };
    case 'Instagram':
      return {
        card: 'hover:border-pink-500/30 hover:shadow-pink-500/10',
        iconContainer: 'group-hover:bg-pink-500/10',
        icon: 'text-pink-500',
        arrow: 'group-hover:text-pink-500',
      };
    default:
      return {
        card: 'hover:border-primary/30 hover:shadow-primary/10',
        iconContainer: 'group-hover:bg-primary/10',
        icon: 'text-primary',
        arrow: 'group-hover:text-primary',
      };
  }
};

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4 md:px-8">
        <SectionCard>
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
            <div className="flex flex-col items-center space-y-8 pt-4">
              <h3 className="text-2xl font-headline font-semibold text-center text-foreground/90">
                  Or connect with me directly
              </h3>
              <div className="space-y-4 w-full max-w-md">
                {socialLinks.map((link) => {
                  const classes = getSocialHoverClasses(link.name);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.ariaLabel}
                      className={cn(
                        "group flex items-center p-4 rounded-lg border bg-card/70 backdrop-blur-sm border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                        classes.card
                      )}
                    >
                      <div className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-lg bg-muted transition-colors",
                        classes.iconContainer
                      )}>
                        <link.icon className={cn("h-6 w-6", classes.icon)} />
                      </div>
                      <div className="flex-grow ml-4">
                        <p className="font-semibold text-foreground">{link.name}</p>
                        <p className="text-sm text-muted-foreground">{link.handle}</p>
                      </div>
                      <ArrowRight className={cn(
                        "h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1",
                        classes.arrow
                      )} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </section>
  );
}
