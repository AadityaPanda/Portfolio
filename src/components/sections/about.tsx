import { UserCircle } from "lucide-react";
import { ABOUT_ME_TEXT } from "@/lib/data";
import { SectionHeader } from "../section-header";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center space-y-12">
        <SectionHeader icon={UserCircle} title="About Me" />
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {ABOUT_ME_TEXT}
        </p>
      </div>
    </section>
  );
}
