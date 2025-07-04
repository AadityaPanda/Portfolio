import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROFESSIONAL_PROJECTS_DATA, PERSONAL_PROJECTS_DATA } from "@/lib/data";
import { Github, ExternalLink, Rocket, FileText } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { SectionHeader } from "../section-header";
import { ProjectMediaCarousel } from "../project-media-carousel";

const ProjectShowcase = ({ project, reverse = false, isProfessional = false }: { project: (typeof PROFESSIONAL_PROJECTS_DATA)[0] | (typeof PERSONAL_PROJECTS_DATA)[0], reverse?: boolean, isProfessional?: boolean }) => {
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
        "group transition-all duration-300 hover:-translate-y-2",
        reverse ? "lg:order-last" : ""
      )}>
        {isProfessional ? (
           <div className="rounded-lg border border-border bg-card shadow-lg overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:border-primary/50 transition-all duration-300">
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
        
        <div className="space-y-4">
          <h4 className="text-xl font-headline font-semibold">Features & Details</h4>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            {project.details.map((detail, i) => <li key={i}>{detail}</li>)}
          </ul>
        </div>

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

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="My Work">
          <Rocket className="h-8 w-8" />
        </SectionHeader>
        
        <div className="mt-20 space-y-24">
          
          <div>
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12">Professional Work</h2>
            <div className="space-y-24">
              {PROFESSIONAL_PROJECTS_DATA.map((project, index) => (
                <ProjectShowcase key={index} project={project} reverse={index % 2 !== 0} isProfessional={true} />
              ))}
            </div>
          </div>
          
          <Separator className="my-24" />

          <div>
            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12">Personal Projects</h2>
            <div className="space-y-24">
              {PERSONAL_PROJECTS_DATA.map((project, index) => (
                <ProjectShowcase key={index} project={project} reverse={index % 2 === 0} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
