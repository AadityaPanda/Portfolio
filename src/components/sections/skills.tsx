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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <Card key={category} className="bg-card/50 border-border/20">
            <CardHeader>
              <CardTitle className="text-xl text-primary/90">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {(SKILLS_DATA as any)[category].map((skill: string) => (
                  <div key={skill} className="flex items-center gap-3 rounded-lg bg-background/50 py-2 px-3">
                    <SkillIcon name={skill} className="h-8 w-8" />
                    <span className="text-base font-medium text-foreground/90">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
