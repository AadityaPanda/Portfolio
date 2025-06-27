import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROFESSIONAL_PROJECTS_DATA, PERSONAL_PROJECTS_DATA } from "@/lib/data";
import { Github, ExternalLink, Rocket, FileText } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { SectionHeader } from "../section-header";

const ProjectShowcase = ({ project, reverse = false }: { project: (typeof PROFESSIONAL_PROJECTS_DATA)[0] | (typeof PERSONAL_PROJECTS_DATA)[0], reverse?: boolean }) => (
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
    {/* Image Mockup */}
    <div className={cn(
      "col-span-1 lg:col-span-3 rounded-lg overflow-hidden group",
      reverse ? "lg:order-2" : "lg:order-1"
    )}>
      <a href={project.liveLink || project.repoLink || '#'} target="_blank" rel="noopener noreferrer">
        <Image
          src={project.thumbnail}
          alt={`Thumbnail for ${project.title}`}
          width={1200}
          height={750}
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105 border rounded-lg border-border/50 shadow-lg"
          data-ai-hint="software project"
        />
      </a>
    </div>

    {/* Project Details */}
    <div className={cn(
      "col-span-1 lg:col-span-2 space-y-6",
      reverse ? "lg:order-1" : "lg:order-2"
    )}>
      <h3 className="text-3xl font-headline font-bold">{project.title}</h3>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => <Badge key={tech} variant="secondary">{tech}</Badge>)}
      </div>
      <p className="text-muted-foreground text-lg">{project.description}</p>
      
      <div className="space-y-4">
        <h4 className="text-xl font-headline font-semibold">Features & Details</h4>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          {project.details.map((detail, i) => <li key={i}>{detail}</li>)}
        </ul>
      </div>

      <div className="flex gap-2 pt-2">
        {project.repoLink && (
            <Button asChild>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2"/> View on GitHub
                </a>
            </Button>
        )}
        {project.liveLink && (
            <Button variant="outline" asChild>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    {project.liveLink.includes('ieee') ? <FileText className="mr-2"/> : <ExternalLink className="mr-2"/>}
                    {project.liveLink.includes('ieee') ? 'Read Paper' : 'View Live'}
                </a>
            </Button>
        )}
      </div>
    </div>
  </div>
);


export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader icon={Rocket} title="My Work" />
        
        <div className="mt-20 space-y-24">
          
          <div>
            <h2 className="text-4xl font-headline font-bold text-center mb-12">Professional Work</h2>
            <div className="space-y-24">
              {PROFESSIONAL_PROJECTS_DATA.map((project, index) => (
                <ProjectShowcase key={index} project={project} reverse={index % 2 !== 0} />
              ))}
            </div>
          </div>
          
          <Separator className="my-24" />

          <div>
            <h2 className="text-4xl font-headline font-bold text-center mb-12">Personal Projects</h2>
            <div className="space-y-24">
              {PERSONAL_PROJECTS_DATA.map((project, index) => (
                <ProjectShowcase key={index} project={project} reverse={index % 2 !== 0} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
