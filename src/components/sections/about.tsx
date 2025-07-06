import { UserCircle } from "lucide-react";
import { ABOUT_ME_TEXT } from "@/lib/data";
import { SectionHeader } from "../section-header";
import { SectionCard } from "../section-card";

export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-4 md:px-8">
        <SectionCard>
          <SectionHeader title="About Me">
            <UserCircle className="h-8 w-8" />
          </SectionHeader>
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {ABOUT_ME_TEXT}
            </p>
          </div>
        </SectionCard>
      </div>
    </section>
  );
}
