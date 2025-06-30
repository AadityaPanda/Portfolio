import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { EXPERIENCE_DATA } from "@/lib/data";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "../section-header";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="Work Experience">
          <Briefcase className="h-8 w-8" />
        </SectionHeader>
        <div className="mt-12 space-y-8 relative pl-6 md:pl-10 border-l-2 border-border">
          <div className="absolute left-[-2px] top-0 h-full w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={index} className="relative">
              <div className={cn(
                "absolute top-1 h-6 w-6 rounded-full bg-background flex items-center justify-center",
                "-left-[29.5px] md:-left-[45.5px]"
              )}>
                <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
              </div>
              <Card className="bg-card transform transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle>{exp.role}</CardTitle>
                  <CardDescription className="flex justify-between flex-col sm:flex-row gap-2 pt-1">
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
      </div>
    </section>
  );
}
