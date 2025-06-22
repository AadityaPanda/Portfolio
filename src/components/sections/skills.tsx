import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SKILLS_DATA } from "@/lib/data";
import { Wrench } from "lucide-react";
import { SkillIcon } from "@/components/skill-icon";
import { SectionHeader } from "../section-header";

export function Skills() {
  const categories = Object.keys(SKILLS_DATA);

  return (
    <section id="skills" className="space-y-12 section-card">
      <SectionHeader icon={Wrench} title="Technical Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category} className="bg-card/50 border-border/20 flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-primary/90">{category}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {(SKILLS_DATA as any)[category].map((skill: string) => (
                  <li key={skill} className="flex items-center gap-3">
                    <SkillIcon name={skill} className="h-6 w-6 text-primary" />
                    <span className="text-base font-medium text-foreground/90">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
