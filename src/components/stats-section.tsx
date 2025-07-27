
'use client';

import { Briefcase, FolderGit2, Award } from "lucide-react";
import { SectionCard } from "./section-card";

const stats = [
    {
        icon: Briefcase,
        value: "2+",
        label: "Years Experience"
    },
    {
        icon: FolderGit2,
        value: "10+",
        label: "Projects Completed"
    },
    {
        icon: Award,
        value: "1",
        label: "Expert Certification"
    }
]

export function StatsSection() {
    return (
        <SectionCard>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                        <stat.icon className="h-10 w-10 text-primary" />
                        <p className="text-4xl font-headline font-bold text-foreground/90">{stat.value}</p>
                        <p className="text-muted-foreground">{stat.label}</p>
                    </div>
                ))}
            </div>
        </SectionCard>
    )
}
