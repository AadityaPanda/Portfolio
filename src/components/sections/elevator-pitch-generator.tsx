'use client';

import { useState } from 'react';
import { Wand2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateElevatorPitch } from '@/ai/flows/generate-elevator-pitch';
import { useToast } from '@/hooks/use-toast';

const pitchTopics = ["Full-Stack", "Problem Solving", "System Architecture", "IoT"];

export function ElevatorPitchGenerator() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [pitch, setPitch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleTopicClick = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    );
  };

  const handleGenerateClick = async () => {
    if (selectedTopics.length === 0) {
      toast({
        title: 'Select a Topic',
        description: 'Please select at least one topic to generate a pitch.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setPitch('');
    try {
      const result = await generateElevatorPitch({ topics: selectedTopics });
      setPitch(result.pitch);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Failed to generate pitch. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 mt-8 rounded-2xl border border-primary/20 bg-primary/5 animate-in fade-in slide-in-from-top-12 duration-700 delay-600 w-full">
      <div className="flex items-center gap-3">
         <Wand2 className="h-6 w-6 text-primary" />
        <h3 className="text-xl font-headline font-semibold">AI Elevator Pitch Generator</h3>
      </div>
      <p className="mt-2 text-muted-foreground">
        Select a few topics and let AI craft a custom pitch for you.
      </p>
      <div className="flex flex-wrap gap-2 my-4">
        {pitchTopics.map(topic => (
            <Button 
                key={topic} 
                variant={selectedTopics.includes(topic) ? "default" : "outline"}
                onClick={() => handleTopicClick(topic)}
                size="sm"
            >
                {topic}
            </Button>
        ))}
      </div>
      <Button onClick={handleGenerateClick} disabled={isLoading || selectedTopics.length === 0}>
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
        Generate Pitch
      </Button>

      {pitch && (
        <div className="mt-6 p-4 rounded-lg bg-background/50 border border-border/50 animate-in fade-in duration-500">
            <blockquote className="border-l-2 border-primary pl-4">
              <p className="font-medium text-lg text-foreground/90 italic">&ldquo;{pitch}&rdquo;</p>
            </blockquote>
        </div>
      )}
    </div>
  );
}
