
'use client';

import { EXPERIENCE_DATA } from "@/lib/data";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "../section-header";

const ExperienceItem = ({ exp }: { exp: typeof EXPERIENCE_DATA[0] }) => {
    return (
        <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* Dot on the timeline */}
            <div className="flex items-center absolute -left-4 top-12 transform -translate-y-1/2">
                <div className="h-8 w-8 rounded-full bg-background border-2 border-border flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-primary transition-all duration-300 group-hover:scale-125" />
                </div>
            </div>

            <div className="transform transition-all duration-300 group-hover:-translate-y-1">
                <div className="border rounded-lg bg-card/70 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                         <div className="flex-1 text-left w-full">
                            <h4 className="font-headline font-semibold text-lg text-foreground/90">{exp.role}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{exp.company}</p>
                        </div>
                        <div className="text-left md:text-right text-sm text-muted-foreground mt-2 sm:mt-0 sm:ml-4 shrink-0">
                            <p>{exp.period}</p>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            {exp.responsibilities.map((detail, i) => <li key={i}>{detail}</li>)}
                        </ul>
                    </div>
                </div>
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
            <div className="relative mt-16 max-w-3xl mx-auto">
                {/* Vertical timeline bar */}
                <div className="absolute left-0 w-1 h-full bg-border -translate-x-1/2" />
                
                {EXPERIENCE_DATA.map((exp, index) => (
                    <ExperienceItem key={index} exp={exp} />
                ))}
            </div>
        </div>
    </section>
  );
}
