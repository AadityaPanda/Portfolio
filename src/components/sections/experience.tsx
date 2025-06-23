import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { EXPERIENCE_DATA } from "@/lib/data";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "../section-header";

export function Experience() {
  return (
    <section id="experience" className="space-y-12 section-card">
      <SectionHeader icon={Briefcase} title="Work Experience" />
      <div className="space-y-8 relative pl-10 border-l-2 border-primary/20">
        <div className="absolute left-[-2px] top-0 h-full w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
        {EXPERIENCE_DATA.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[45.5px] top-1 h-6 w-6 rounded-full bg-background flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
            </div>
            <Card className="bg-card/80 backdrop-blur-sm border-primary/10 transform transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
              <CardHeader>
                <CardTitle>{exp.role}</CardTitle>
                <CardDescription className="flex justify-between flex-wrap pt-1">
                  <span className="font-semibold text-foreground/80">{exp.company}</span>
                  <span className="font-medium text-muted-foreground">{exp.period}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {exp.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
