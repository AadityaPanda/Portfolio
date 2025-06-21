import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { SKILLS_DATA } from "@/lib/data";
import { Wrench } from "lucide-react";

export function Skills() {
  const categories = Object.keys(SKILLS_DATA);

  return (
    <section id="skills" className="space-y-8">
      <div className="flex items-center gap-4">
        <Wrench className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-headline font-bold tracking-tight">Skills</h2>
      </div>
      <Tabs defaultValue={categories[0]} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3">
                  {(SKILLS_DATA as any)[category].map((skill: string) => (
                    <div key={skill} className="p-2 px-4 rounded-md bg-secondary text-secondary-foreground text-sm font-medium">
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
