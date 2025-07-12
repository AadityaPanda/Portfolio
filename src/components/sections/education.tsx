
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EDUCATION_DATA } from "@/lib/data";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "../section-header";

const EducationItem = ({ edu, index }: { edu: typeof EDUCATION_DATA[0], index: number }) => {
    return (
        <div className="relative pl-8 sm:pl-12 py-6 group">
            {/* Dot on the timeline */}
            <div className="flex items-center absolute left-0 top-8 transform -translate-y-1/2">
                <div className="h-8 w-8 rounded-full bg-background border-2 border-border flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-primary transition-all duration-300 group-hover:scale-125" />
                </div>
            </div>

            <div className="transform transition-all duration-300 group-hover:-translate-y-1">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`edu-${index}`} className="border-none">
                        <div className="border rounded-lg bg-card/70 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 data-[state=open]:shadow-xl data-[state=open]:shadow-primary/10 data-[state=open]:border-primary/50">
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
    <section id="education" className="w-full py-24">
        <div className="container mx-auto px-4 md:px-8">
            <SectionHeader title="Education">
            <GraduationCap className="h-8 w-8" />
            </SectionHeader>
            <div className="relative mt-16 max-w-4xl mx-auto">
                {/* Vertical timeline bar */}
                <div className="absolute left-4 top-0 w-1 h-full bg-border -translate-x-1/2" />
                
                {EDUCATION_DATA.map((edu, index) => (
                    <EducationItem key={index} edu={edu} index={index} />
                ))}
            </div>
        </div>
    </section>
  );
}
