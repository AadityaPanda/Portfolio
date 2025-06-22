import { UserCircle } from "lucide-react";
import { ABOUT_ME_TEXT } from "@/lib/data";
import { SectionHeader } from "../section-header";

export function About() {
  return (
    <section id="about" className="space-y-12">
      <SectionHeader icon={UserCircle} title="About Me" />
      <p className="text-lg text-muted-foreground leading-relaxed">
        {ABOUT_ME_TEXT}
      </p>
    </section>
  );
}
