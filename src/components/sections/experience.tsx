
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EXPERIENCE_DATA } from "@/lib/data";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "../section-header";

const ExperienceItem = ({ exp, index }: { exp: typeof EXPERIENCE_DATA[0], index: number }) => {
    return (
        <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* Dot on the timeline */}
            <div className="flex items-center absolute -left-4 top-1/2 -translate-y-1/2 transform">
                <div className="h-8 w-8 rounded-full bg-background border-2 border-border flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-primary transition-all duration-300 group-hover:scale-125" />
                </div>
            </div>

            <div className="transform transition-all duration-300 group-hover:-translate-y-1">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`exp-${index}`} className="border-none">
                        <div className="border rounded-lg bg-card/70 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 data-[state=open]:shadow-xl data-[state=open]:shadow-primary/10 data-[state=open]:border-primary/50">
                            <AccordionTrigger className="p-6 text-left hover:no-underline flex-col sm:flex-row items-start sm:items-center">
                                <div className="flex-1 text-left w-full">
                                    <h4 className="font-headline font-semibold text-lg text-foreground/90">{exp.role}</h4>
                                    <p className="text-sm text-muted-foreground mt-1">{exp.company}</p>
                                </div>
                                <div className="text-left md:text-right text-sm text-muted-foreground mt-2 sm:mt-0 sm:ml-4 shrink-0">
                                    <p>{exp.period}</p>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6 text-left">
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    {exp.responsibilities.map((detail, i) => <li key={i}>{detail}</li>)}
                                </ul>
                            </AccordionContent>
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};


export default function Experience() {
  return (
    <section id="experience" className="w-full min-h-screen py-24 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 md:px-8">
            <SectionHeader title="Work Experience">
                <Briefcase className="h-8 w-8" />
            </SectionHeader>
            <div className="relative mt-12">
                {/* Vertical timeline bar */}
                <div className="absolute left-0 w-1 h-full bg-border -translate-x-1/2" />
                
                {EXPERIENCE_DATA.map((exp, index) => (
                    <ExperienceItem key={index} exp={exp} index={index} />
                ))}
            </div>
        </div>
    </section>
  );
}
