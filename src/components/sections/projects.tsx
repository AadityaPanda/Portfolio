
'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROFESSIONAL_PROJECTS_DATA, PERSONAL_PROJECTS_DATA } from "@/lib/data";
import { Github, ExternalLink, Rocket, FileText, GithubIcon as GithubIconLucide } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { SectionHeader } from "../section-header";
import { ProjectMediaCarousel } from "../project-media-carousel";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const ProjectFeatures = ({ details }: { details: string[] }) => {
    const isMobile = useIsMobile();
    const [isExpanded, setIsExpanded] = useState(false);
    const detailsToShow = isMobile && !isExpanded ? details.slice(0, 2) : details;

    return (
        <div className="space-y-4">
            <h4 className="text-xl font-headline font-semibold">Features & Details</h4>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {detailsToShow.map((detail, i) => <li key={i}>{detail}</li>)}
            </ul>
            {isMobile && details.length > 2 && (
                <Button variant="link" onClick={() => setIsExpanded(!isExpanded)} className="p-0 h-auto text-sm">
                    {isExpanded ? 'Show less' : `Show ${details.length - 2} more...`}
                </Button>
            )}
        </div>
    );
};

const ProjectShowcase = ({ project, reverse = false, isProfessional = false }: { project: (typeof PROFESSIONAL_PROJECTS_DATA)[0], reverse?: boolean, isProfessional?: boolean }) => {
  const hasGallery = project.gallery && project.gallery.length > 0;
  const hasLink = project.liveLink || project.repoLink;

  const mediaElement = hasGallery ? (
    <ProjectMediaCarousel gallery={project.gallery} unstyled={isProfessional} />
  ) : hasLink ? (
    <a href={project.liveLink || project.repoLink || '#'} target="_blank" rel="noopener noreferrer" className="block aspect-video relative">
      <Image
        src={project.thumbnail}
        alt={`Thumbnail for ${project.title}`}
        fill
        className={cn(
          "object-cover object-center transition-transform duration-300 group-hover:scale-105",
          !isProfessional && "rounded-lg border border-border/50 shadow-lg"
        )}
        sizes="(max-width: 1023px) 100vw, 50vw"
        data-ai-hint="software project"
      />
    </a>
  ) : (
    <div className="block aspect-video relative">
      <Image
        src={project.thumbnail}
        alt={`Thumbnail for ${project.title}`}
        fill
        className={cn(
          "object-cover object-center",
          !isProfessional && "rounded-lg border border-border/50 shadow-lg"
        )}
        sizes="(max-width: 1023px) 100vw, 50vw"
        data-ai-hint="software project"
      />
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Image/Carousel Mockup */}
      <div className={cn(
        "group transition-all duration-300 hover:-translate-y-1",
        reverse ? "lg:order-last" : ""
      )}>
        {isProfessional ? (
           <div className="rounded-lg border border-border bg-card/50 backdrop-blur-xl shadow-lg overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:border-primary/50 transition-all duration-300">
             <div className="h-8 bg-muted/50 flex items-center px-3 border-b border-border">
               <div className="flex items-center gap-1.5">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
             </div>
             {mediaElement}
           </div>
        ) : <div className="transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10">{mediaElement}</div>}
      </div>

      {/* Project Details */}
      <div className={cn(
        "space-y-6",
        reverse ? "lg:order-first" : ""
      )}>
        <h3 className="text-3xl font-headline font-bold">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => <Badge key={tech} variant="secondary">{tech}</Badge>)}
        </div>
        <p className="text-muted-foreground text-lg">{project.description}</p>
        
        <ProjectFeatures details={project.details} />

        <div className="flex flex-wrap gap-2 pt-2">
          {project.repoLink && (
              <Button asChild variant="github">
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4"/> View on GitHub
                  </a>
              </Button>
          )}
          {project.liveLink && (
              <Button variant="outline" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      {project.liveLink.includes('ieee') ? <FileText className="mr-2 h-4 w-4"/> : <ExternalLink className="mr-2 h-4 w-4"/>}
                      {project.liveLink.includes('ieee') ? 'Read Paper' : 'View Live'}
                  </a>
              </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const PersonalProjectCard = ({ project }: { project: (typeof PERSONAL_PROJECTS_DATA)[0] }) => {
  const hasGallery = project.gallery && project.gallery.length > 0;
  
  const mediaElement = hasGallery ? (
    <ProjectMediaCarousel gallery={project.gallery} />
  ) : (
    <div className="aspect-video relative overflow-hidden rounded-t-lg">
      <Image
        src={project.thumbnail}
        alt={`Thumbnail for ${project.title}`}
        fill
        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
        data-ai-hint="software project"
      />
    </div>
  );

  return (
    <Card className="group flex flex-col h-full bg-card/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 overflow-hidden">
      {mediaElement}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-2xl font-headline font-bold">{project.title}</h3>
        <div className="flex flex-wrap gap-2 my-4">
          {project.techStack.map((tech) => <Badge key={tech} variant="secondary">{tech}</Badge>)}
        </div>
        <p className="text-muted-foreground flex-grow">{project.description}</p>
      </div>
      <div className="p-6 pt-0 flex flex-wrap gap-2">
        {project.repoLink && (
            <Button asChild variant="github">
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4"/> View on GitHub
                </a>
            </Button>
        )}
        {project.liveLink && (
            <Button variant="outline" asChild>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    {project.liveLink.includes('ieee') ? <FileText className="mr-2 h-4 w-4"/> : <ExternalLink className="mr-2 h-4 w-4"/>}
                    {project.liveLink.includes('ieee') ? 'Read Paper' : 'View Live'}
                </a>
            </Button>
        )}
      </div>
    </Card>
  );
};


export default function Projects({ children }: { children?: React.ReactNode }) {
  return (
    <section id="projects" className="w-full py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="My Work">
            <Rocket className="h-8 w-8" />
        </SectionHeader>
        
        <div className="mt-16 space-y-24">
            
            <div>
              <h3 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12 text-gradient-primary">Professional Work</h3>
              <div className="space-y-24">
                {PROFESSIONAL_PROJECTS_DATA.map((project, index) => (
                  <ProjectShowcase key={index} project={project} reverse={index % 2 !== 0} isProfessional={true} />
                ))}
              </div>
            </div>
            
            <Separator className="my-24" />

            <div>
              <h3 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12 text-gradient-primary">Personal Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PERSONAL_PROJECTS_DATA.map((project, index) => (
                  <PersonalProjectCard key={index} project={project} />
                ))}
              </div>
              {children}
            </div>

        </div>
      </div>
    </section>
  );
}
