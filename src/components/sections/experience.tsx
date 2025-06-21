import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { EXPERIENCE_DATA } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="space-y-8">
      <div className="flex items-center gap-4">
        <Briefcase className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-headline font-bold tracking-tight">Work Experience</h2>
      </div>
      <div className="space-y-6 relative pl-8 border-l-2 border-border">
        {EXPERIENCE_DATA.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[39.5px] top-1 h-6 w-6 rounded-full bg-primary border-4 border-background" />
            <Card className="transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
              <CardHeader>
                <CardTitle>{exp.role}</CardTitle>
                <CardDescription className="flex justify-between flex-wrap pt-1">
                  <span>{exp.company}</span>
                  <span className="font-medium">{exp.period}</span>
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
