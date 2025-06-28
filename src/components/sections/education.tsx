import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EDUCATION_DATA } from "@/lib/data";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "../section-header";

export function Education() {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="Education">
          <GraduationCap className="h-8 w-8" />
        </SectionHeader>
        <div className="mt-12 relative border-l-2 border-border pl-10">
          <div className="absolute left-[-2px] top-0 h-full w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
          <Accordion type="single" collapsible defaultValue="edu-0" className="w-full space-y-8">
            {EDUCATION_DATA.map((edu, index) => (
              <div key={index} className="relative">
                 <div className="absolute -left-[45.5px] top-3 h-6 w-6 rounded-full bg-background flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                 </div>
                 <AccordionItem value={`edu-${index}`} className="border-none">
                    <div className="border rounded-lg bg-muted/30 border-border/50 transition-all duration-300 data-[state=open]:border-primary/30 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/10">
                      <AccordionTrigger className="p-6 text-left hover:no-underline">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg text-foreground/90">{edu.degree}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{edu.school}</p>
                        </div>
                        <div className="text-right text-sm text-muted-foreground ml-4 shrink-0">
                          <p>{edu.period}</p>
                          <p className="font-medium text-foreground/80">{edu.grade}</p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          {edu.details.map((detail, i) => <li key={i}>{detail}</li>)}
                        </ul>
                      </AccordionContent>
                    </div>
                 </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
