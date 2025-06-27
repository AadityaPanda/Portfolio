import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { EDUCATION_DATA } from "@/lib/data";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "../section-header";

export function Education() {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader icon={GraduationCap} title="Education" />
        <div className="mt-12 space-y-8 relative pl-10 border-l-2 border-border">
          <div className="absolute left-[-2px] top-0 h-full w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
          {EDUCATION_DATA.map((edu, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[45.5px] top-1 h-6 w-6 rounded-full bg-background flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
              </div>
              <Card className="bg-muted/30 border-border/50 transform transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <CardTitle>{edu.degree}</CardTitle>
                  <CardDescription className="flex justify-between flex-wrap pt-1">
                    <span className="font-semibold text-foreground/80">{edu.school}</span>
                    <div className="space-x-4">
                      <span className="font-medium text-muted-foreground">{edu.grade}</span>
                      <span className="font-medium text-muted-foreground">{edu.period}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {edu.details.map((detail, i) => <li key={i}>{detail}</li>)}
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
