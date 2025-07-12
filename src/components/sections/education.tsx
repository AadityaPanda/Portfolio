
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EDUCATION_DATA } from "@/lib/data";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "../section-header";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const EducationItem = ({ edu, index }: { edu: typeof EDUCATION_DATA[0], index: number }) => {
    const isMobile = useIsMobile();
    const isEven = index % 2 === 0;

    const desktopClasses = isEven ? "md:text-right md:pr-8" : "md:text-left md:pl-8 md:col-start-2";
    const contentClasses = isMobile ? "pl-12" : "w-full";

    return (
        <div className={cn("w-full", isMobile ? "" : "md:grid md:grid-cols-2 md:gap-x-8")}>
             <div className={cn(contentClasses, desktopClasses)}>
                <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`edu-${index}`} className="border-none">
                    <div className="border rounded-lg bg-card/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 data-[state=open]:border-primary/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 data-[state=open]:shadow-xl data-[state=open]:shadow-primary/10">
                    <AccordionTrigger className="p-6 text-left hover:no-underline flex-col sm:flex-row items-start sm:items-center">
                        <div className="flex-1 text-left w-full">
                        <h4 className="font-headline font-semibold text-lg text-foreground/90">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{edu.school}</p>
                        </div>
                        <div className="text-left md:text-right text-sm text-muted-foreground mt-2 sm:mt-0 sm:ml-4 shrink-0">
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
    );
};


export default function Education() {
  return (
    <section id="education" className="min-h-screen w-full py-24 flex flex-col items-center justify-center">
        <SectionHeader title="Education">
          <GraduationCap className="h-8 w-8" />
        </SectionHeader>
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mt-24">
            <div className="relative space-y-12">
            {/* Vertical timeline bar */}
            <div className="absolute top-0 left-4 w-0.5 h-full bg-border -translate-x-1/2 md:left-1/2" />
            
            {EDUCATION_DATA.map((edu, index) => (
                <div key={index} className="relative">
                    {/* Dot on the timeline */}
                    <div className="absolute top-1 h-6 w-6 rounded-full bg-background flex items-center justify-center left-4 -translate-x-1/2 md:left-1/2">
                        <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                    </div>
                    <EducationItem edu={edu} index={index} />
                </div>
            ))}
            </div>
        </div>
    </section>
  );
}
