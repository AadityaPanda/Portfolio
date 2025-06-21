"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

import { createPitch } from "@/app/actions";
import { SKILLS_DATA, EXPERIENCE_DATA } from "@/lib/data";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Lightbulb, Loader2, Wand2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const allSkills = Object.values(SKILLS_DATA).flat();
const allExperiences = EXPERIENCE_DATA.flatMap(exp => exp.responsibilities);

const formSchema = z.object({
  skills: z.array(z.string()).min(1, "Please select at least one skill."),
  experiences: z.array(z.string()).min(1, "Please select at least one experience."),
});

export function AiPitchGenerator() {
  const [pitch, setPitch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: [],
      experiences: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setPitch("");
    const result = await createPitch(values);
    setIsLoading(false);

    if (result.error) {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      });
    } else if (result.pitch) {
      setPitch(result.pitch);
    }
  };

  return (
    <section id="ai-pitch" className="space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-500 delay-500">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Lightbulb className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-headline font-bold tracking-tight">AI Elevator Pitch Generator</h2>
      </div>
      <Card className="bg-card/80 backdrop-blur-sm border-primary/10">
        <CardHeader>
          <CardTitle>Craft Your Pitch</CardTitle>
          <CardDescription>Select your key skills and experiences, and let AI generate a tailored elevator pitch for you.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CardContent className="grid md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="skills"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base font-semibold">1. Select Skills</FormLabel>
                    </div>
                    <ScrollArea className="h-60 w-full rounded-md border border-primary/20 bg-background/50 p-4">
                      {allSkills.map((skill) => (
                        <FormField
                          key={skill}
                          control={form.control}
                          name="skills"
                          render={({ field }) => (
                            <FormItem key={skill} className="flex flex-row items-start space-x-3 space-y-0 mb-4">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(skill)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, skill])
                                      : field.onChange(field.value?.filter((value) => value !== skill));
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal text-sm">{skill}</FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </ScrollArea>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experiences"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base font-semibold">2. Select Experiences</FormLabel>
                    </div>
                    <ScrollArea className="h-60 w-full rounded-md border border-primary/20 bg-background/50 p-4">
                      {allExperiences.map((experience, index) => (
                        <FormField
                          key={index}
                          control={form.control}
                          name="experiences"
                          render={({ field }) => (
                            <FormItem key={index} className="flex flex-row items-start space-x-3 space-y-0 mb-4">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(experience)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, experience])
                                      : field.onChange(field.value?.filter((value) => value !== experience));
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal text-sm">{experience}</FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </ScrollArea>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-4 items-stretch">
              <Button type="submit" disabled={isLoading} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                Generate Pitch
              </Button>
              {pitch && (
                <div className="w-full p-4 bg-accent/20 border-l-4 border-accent text-foreground/90 rounded-md mt-4 animate-in fade-in duration-500">
                  <h4 className="font-semibold mb-2 text-foreground">Your Elevator Pitch:</h4>
                  <blockquote className="text-sm leading-relaxed">{pitch}</blockquote>
                </div>
              )}
            </CardFooter>
          </form>
        </Form>
      </Card>
    </section>
  );
}
