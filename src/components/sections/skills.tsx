import { SKILLS_DATA } from "@/lib/data";
import { Wrench } from "lucide-react";
import { SkillIcon } from "@/components/skill-icon";
import { SectionHeader } from "../section-header";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimate } from "../scroll-animate";

export default function Skills() {
  const categories = Object.keys(SKILLS_DATA);

  return (
    <section id="skills" className="min-h-screen w-full py-24 flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollAnimate>
            <SectionHeader title="Technical Skills">
                <Wrench className="h-8 w-8" />
            </SectionHeader>
        </ScrollAnimate>
        <div className="mt-12 space-y-12">
            {categories.map((category, index) => (
            <ScrollAnimate key={category} delay={index * 150}>
                <h3 className="text-2xl font-headline font-semibold mb-6 text-center">{category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {(SKILLS_DATA as any)[category].map((skill: string) => (
                    <Card key={skill} className="bg-card/70 backdrop-blur-sm p-4 transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                      <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
                        <SkillIcon name={skill} className="h-10 w-10" />
                        <span className="text-base font-medium text-center text-foreground/90">{skill}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
            </ScrollAnimate>
            ))}
        </div>
      </div>
    </section>
  );
}
