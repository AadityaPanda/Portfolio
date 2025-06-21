import { Github, Linkedin, Mail, Phone, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  { icon: Mail, value: "john.doe@email.com", href: "mailto:john.doe@email.com" },
  { icon: Phone, value: "+1 (123) 456-7890", href: "tel:+11234567890" },
  { icon: Linkedin, value: "linkedin.com/in/johndoe", href: "https://linkedin.com/in/johndoe", 'data-ai-hint': 'social media' },
  { icon: Github, value: "github.com/johndoe", href: "https://github.com/johndoe", 'data-ai-hint': 'code repository' },
  { icon: HomeIcon, value: "johndoe.com", href: "https://johndoe.com", 'data-ai-hint': 'portfolio website' },
];

export function Header() {
  return (
    <header id="header" className="text-center space-y-4 py-8">
      <h1 className="text-5xl font-headline font-bold tracking-tight sm:text-6xl lg:text-7xl">John Doe</h1>
      <p className="text-xl text-muted-foreground">Software Engineer & AI Enthusiast</p>
      <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2 pt-4">
        {contactInfo.map((item, index) => (
          <Button key={index} variant="link" asChild className="text-muted-foreground hover:text-primary p-0 h-auto">
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <item.icon className="mr-2 h-4 w-4" />
              {item.value}
            </a>
          </Button>
        ))}
      </div>
    </header>
  );
}
