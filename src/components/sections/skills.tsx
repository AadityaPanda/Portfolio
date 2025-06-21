import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { SKILLS_DATA } from "@/lib/data";
import { Wrench } from "lucide-react";

export function Skills() {
  const categories = Object.keys(SKILLS_DATA);

  return (
    <section id="skills" className="space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-500 delay-400">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Wrench className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-headline font-bold tracking-tight">Skills</h2>
      </div>
      <Tabs defaultValue={categories[0]} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto bg-primary/5">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary-foreground">{category}</TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="p-6">
                <div className="flex flex-wrap justify-center gap-3">
                  {(SKILLS_DATA as any)[category].map((skill: string) => (
                    <div key={skill} className="p-2 px-4 rounded-md bg-secondary text-secondary-foreground text-sm font-medium transition-all hover:bg-primary/20 hover:text-primary-foreground cursor-default">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
