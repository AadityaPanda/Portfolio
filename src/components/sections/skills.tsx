import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SKILLS_DATA } from "@/lib/data";
import { Wrench } from "lucide-react";
import { SkillIcon } from "@/components/skill-icon";

export function Skills() {
  const categories = Object.keys(SKILLS_DATA);

  return (
    <section id="skills" className="space-y-12 section-card">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Wrench className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-headline font-bold tracking-tight">Technical Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category} className="bg-card/50 border-border/20">
            <CardHeader>
              <CardTitle className="text-xl text-primary/90">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-6 text-center">
                {(SKILLS_DATA as any)[category].map((skill: string) => (
                  <div key={skill} className="group flex flex-col items-center gap-2">
                    <div className="p-3 rounded-lg bg-background/50 group-hover:bg-primary/10 transition-colors duration-300">
                      <SkillIcon name={skill} className="h-12 w-12 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">{skill}</span>
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
