import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROFESSIONAL_PROJECTS_DATA, PERSONAL_PROJECTS_DATA } from "@/lib/data";
import { Github, ExternalLink, Rocket, FileText } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="space-y-16 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
      <div className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Rocket className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-headline font-bold tracking-tight">Professional Work</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {PROFESSIONAL_PROJECTS_DATA.map((project, index) => (
            <Card key={index} className="flex flex-col bg-card/80 backdrop-blur-sm border-border/10 transform transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="pt-1">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                 <p className="text-sm text-muted-foreground">{project.details}</p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Rocket className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-headline font-bold tracking-tight">Personal Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {PERSONAL_PROJECTS_DATA.map((project, index) => (
            <Card key={index} className="flex flex-col bg-card/80 backdrop-blur-sm border-border/10 transform transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <Link href={`/projects/${project.slug}`} className="cursor-pointer">
                    <CardTitle className="hover:underline hover:text-primary">{project.title}</CardTitle>
                  </Link>
                  <div className="flex gap-1 flex-shrink-0">
                    {project.repoLink && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`}>
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {project.liveLink && (
                       <Button variant="ghost" size="icon" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live link`}>
                          {project.liveLink.includes('ieee') ? <FileText className="h-5 w-5" /> : <ExternalLink className="h-5 w-5" />}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <CardDescription className="pt-1">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow" />
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}