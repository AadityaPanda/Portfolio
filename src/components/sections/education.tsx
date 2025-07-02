import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EDUCATION_DATA } from "@/lib/data";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "../section-header";
import { cn } from "@/lib/utils";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="Education">
          <GraduationCap className="h-8 w-8" />
        </SectionHeader>
        <div className="mt-16 relative">
          {/* Vertical timeline bar (centered on desktop, left on mobile) */}
          <div className="absolute top-0 left-4 md:left-1/2 w-0.5 h-full bg-border -translate-x-1/2" />
          
          <div className="space-y-12">
            {EDUCATION_DATA.map((edu, index) => (
              <div 
                key={index}
                className="relative"
              >
                <div className={cn(
                  "flex items-center",
                  "md:grid md:grid-cols-2 md:gap-x-8"
                )}>
                  {/* Dot on the timeline */}
                  <div className="hidden md:block absolute left-1/2 top-4 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                  <div className="md:hidden absolute left-4 top-5 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                  
                  {/* Content Card */}
                  <div className={cn(
                    "pl-8 md:pl-0 w-full",
                    index % 2 === 0 ? "md:col-start-1 md:text-right" : "md:col-start-2"
                  )}>
                    <div className={cn(
                        "w-full",
                        index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    )}>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value={`edu-${index}`} className="border-none">
                            <div className="border rounded-lg bg-card transition-all duration-300 hover:-translate-y-2 data-[state=open]:border-primary/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 data-[state=open]:shadow-2xl data-[state=open]:shadow-primary/10">
                              <AccordionTrigger className="p-6 text-left hover:no-underline">
                                <div className="flex-1">
                                  <h4 className="font-semibold text-lg text-foreground/90">{edu.degree}</h4>
                                  <p className="text-sm text-muted-foreground mt-1">{edu.school}</p>
                                </div>
                                <div className="text-right text-sm text-muted-foreground ml-4 shrink-0">
                                  <p>{edu.period}</p>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="px-6 pb-6 text-left">
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                  {edu.details.map((detail, i) => <li key={i}>{detail}</li>)}
                                </ul>
                              </AccordionContent>
                            </div>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
