import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SKILLS_DATA } from "@/lib/data";
import { Wrench } from "lucide-react";

export function Skills() {
  const categories = Object.keys(SKILLS_DATA);

  return (
    <section id="skills" className="space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-500 delay-400 section-card">
      <div className="section-glow bg-accent" />
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Wrench className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-headline font-bold tracking-tight">Technical Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category} className="bg-card/50 border-border/20 transform transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-xl text-primary/90">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {(SKILLS_DATA as any)[category].map((skill: string) => (
                  <Badge key={skill} variant="secondary" className="text-sm transition-all hover:bg-primary/20 cursor-default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
