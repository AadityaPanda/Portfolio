import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROFESSIONAL_PROJECTS_DATA, PERSONAL_PROJECTS_DATA } from "@/lib/data";
import { Github, ExternalLink, Rocket, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const ProjectCard = ({ project }: { project: (typeof PROFESSIONAL_PROJECTS_DATA)[0] | (typeof PERSONAL_PROJECTS_DATA)[0] }) => (
    <Dialog>
        <DialogTrigger asChild>
            <Card className="group flex flex-col bg-card/80 backdrop-blur-sm border-border/10 transform transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer overflow-hidden">
              <div className="border-b border-border/20">
                <div className="flex h-8 items-center gap-1.5 px-3 bg-muted/30">
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-500"></div>
                </div>
                <div className="relative h-48 w-full overflow-hidden bg-muted/50">
                    <Image
                      src={project.thumbnail}
                      alt={`Thumbnail for ${project.title}`}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint="software project"
                    />
                </div>
              </div>
              <div className="flex flex-col flex-grow p-6">
                <CardHeader className="p-0">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="pt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 flex-grow pt-4" />
                <CardFooter className="p-0 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                  </div>
                </CardFooter>
              </div>
            </Card>
        </DialogTrigger>
        <DialogContent className="sm:max-w-4xl p-0">
            <ScrollArea className="max-h-[90vh]">
                <div className="p-8 space-y-6">
                    <DialogHeader>
                        <DialogTitle className="text-3xl font-headline">{project.title}</DialogTitle>
                        <DialogDescription className="pt-1">{project.description}</DialogDescription>
                    </DialogHeader>
                    
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => <Badge key={tech} variant="secondary">{tech}</Badge>)}
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

                    <Separator />

                    <div className="space-y-4">
                        <h3 className="text-xl font-headline font-semibold">Features & Details</h3>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            {project.details.map((detail, i) => <li key={i}>{detail}</li>)}
                        </ul>
                    </div>

                    {project.gallery && project.gallery.length > 0 && (
                        <div className="space-y-4">
                             <Separator />
                            <h3 className="text-xl font-headline font-semibold">Gallery</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.gallery.map((media, i) => (
                                    <div key={i} className="rounded-lg overflow-hidden border">
                                        {media.type === 'image' ? (
                                            <Image src={media.src} alt={media.alt} width={800} height={600} className="w-full h-full object-cover" data-ai-hint={media.hint} />
                                        ) : (
                                            <video src={media.src} controls autoPlay muted loop className="w-full h-full object-cover" data-ai-hint={media.hint}></video>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </ScrollArea>
        </DialogContent>
    </Dialog>
);

export function Projects() {
  return (
    <section id="projects" className="space-y-16">
      <div className="space-y-12 section-card">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Rocket className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-headline font-bold tracking-tight">Professional Work</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {PROFESSIONAL_PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
      
      <div className="space-y-12 section-card">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Rocket className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-headline font-bold tracking-tight">Personal Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {PERSONAL_PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
