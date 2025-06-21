import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS_DATA } from "@/lib/data";
import { Github, ExternalLink, Rocket } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-500 delay-200">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Rocket className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-headline font-bold tracking-tight">Projects</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((project, index) => (
          <Card key={index} className="flex flex-col bg-card/80 backdrop-blur-sm border-primary/10 transform transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{project.title}</CardTitle>
                <div className="flex gap-1">
                  {project.repoLink && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`}>
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <CardDescription>{project.description}</CardDescription>
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
    </section>
  );
}
