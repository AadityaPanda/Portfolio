import { Mail, Github, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { ContactForm } from "./contact-form";
import { SectionHeader } from "../section-header";
import { cn } from "@/lib/utils";
import { ScrollAnimate } from "../scroll-animate";

const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'in/aadityapanda',
      href: 'https://www.linkedin.com/in/aadityapanda/',
      ariaLabel: 'Connect on LinkedIn',
      color: 'text-blue-500',
      hoverColor: 'group-hover:bg-blue-500/10',
      hoverBorderColor: 'hover:border-blue-500/50'
    },
    {
      icon: Github,
      name: 'GitHub',
      handle: '@AadityaPanda',
      href: 'https://github.com/AadityaPanda',
      ariaLabel: 'View GitHub Profile',
      color: 'text-foreground',
      hoverColor: 'group-hover:bg-gray-500/10',
      hoverBorderColor: 'hover:border-foreground/50'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '_aaditya_panda_',
      href: 'https://www.instagram.com/_aaditya_panda_/',
      ariaLabel: 'Follow on Instagram',
      color: 'text-pink-500',
      hoverColor: 'group-hover:bg-pink-500/10',
      hoverBorderColor: 'hover:border-pink-500/50'
    },
];

const SocialLink = ({ link, index }: { link: typeof socialLinks[0], index: number }) => (
    <ScrollAnimate delay={index * 100}>
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
          className={cn(
              "group flex items-center p-4 rounded-lg border bg-card/50 backdrop-blur-xl border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:shadow-primary/10",
              link.hoverBorderColor
          )}
        >
          <div className={cn("flex h-12 w-12 items-center justify-center rounded-lg bg-muted transition-colors", link.hoverColor)}>
            <link.icon className={cn("h-6 w-6", link.color)} />
          </div>
          <div className="flex-grow ml-4">
            <p className="font-semibold text-foreground">{link.name}</p>
            <p className="text-sm text-muted-foreground">{link.handle}</p>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
        </a>
    </ScrollAnimate>
)

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen w-full py-24 flex items-center">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="Get in Touch">
            <Mail className="h-8 w-8" />
        </SectionHeader>
        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-start">
            <ScrollAnimate className="w-full max-w-lg mx-auto lg:order-first">
                <ContactForm />
            </ScrollAnimate>

            <ScrollAnimate className="flex flex-col items-center lg:items-start text-center lg:text-left lg:order-last">
                <p className="text-lg text-muted-foreground max-w-md">
                I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out to me using the form.
                </p>
                <div className="mt-8 space-y-4 w-full max-w-md">
                {socialLinks.map((link, index) => <SocialLink key={link.name} link={link} index={index} />)}
                </div>
            </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
