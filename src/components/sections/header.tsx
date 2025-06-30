'use client';

import { Github, Linkedin, FileText, Instagram, Send, Sparkles, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { CV_PATH, SKILLS_DATA, EXPERIENCE_DATA } from "@/lib/data";
import { useState, useEffect, useTransition } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { generatePitch } from "@/ai/flows/generate-pitch";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";


const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/aadityapanda/", 'aria-label': 'Aaditya Panda on LinkedIn' },
  { icon: Github, href: "https://github.com/AadityaPanda", 'aria-label': 'Aaditya Panda on GitHub' },
  { icon: Instagram, href: "https://www.instagram.com/_aaditya_panda_/", 'aria-label': 'Aaditya Panda on Instagram' },
];

const fullText = "Software Developer";

export function Header() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const lenis = useLenis();
  const { toast } = useToast();

  const [isPitchDialogOpen, setIsPitchDialogOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [generatedPitch, setGeneratedPitch] = useState('');
  const [isGenerating, startTransition] = useTransition();
  const [hasCopied, setHasCopied] = useState(false);

  const allSkills = Object.values(SKILLS_DATA).flat();
  const experienceHighlights = EXPERIENCE_DATA.flatMap(exp => exp.responsibilities.slice(0, 2)); // Take first 2 from each job
  const selectableItems = [...new Set([...allSkills, ...experienceHighlights])]; // Combine and dedupe

  const handleItemToggle = (item: string) => {
      setSelectedItems(prev => 
          prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
      );
  };

  const handleGeneratePitch = async () => {
      if (selectedItems.length === 0) {
          toast({
              title: 'Selection Required',
              description: 'Please select at least one skill or experience to generate a pitch.',
              variant: 'destructive'
          });
          return;
      }

      startTransition(async () => {
          setGeneratedPitch('');
          try {
              const result = await generatePitch({
                  name: 'Aaditya Panda',
                  items: selectedItems,
              });
              setGeneratedPitch(result.pitch);
          } catch (error) {
              toast({
                  title: 'Error Generating Pitch',
                  description: 'An unexpected error occurred. Please try again.',
                  variant: 'destructive'
              });
          }
      });
  };

  const handleCopyToClipboard = () => {
      if (!generatedPitch) return;
      navigator.clipboard.writeText(generatedPitch).then(() => {
          setHasCopied(true);
          toast({ title: 'Copied to clipboard!' });
          setTimeout(() => setHasCopied(false), 2000);
      });
  };

  useEffect(() => {
    // Console log easter egg
    const styles = [
      'color: #3b82f6', // A nice blue color
      'font-size: 16px',
      'font-weight: bold',
      'font-family: "Space Grotesk", sans-serif',
    ].join(';');

    console.log("%cPsst... Hey there, fellow developer! 👋", styles);
    console.log(
      "%cGlad to see you're checking out the portfolio. If you like what you see, let's connect!",
      "font-size: 12px; font-family: 'Inter', sans-serif;"
    );

    // A delay before the typing animation starts
    const startTypingTimeout = setTimeout(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          // Cursor blinks for a bit then disappears
          const cursorBlink = setInterval(() => setShowCursor(prev => !prev), 500);
          setTimeout(() => {
            clearInterval(cursorBlink);
            setShowCursor(false);
          }, 3000); // Let it blink for 3 seconds
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }, 500); 

    return () => clearTimeout(startTypingTimeout);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    lenis?.scrollTo(href);
  };

  return (
    <header id="home" className="relative flex h-screen items-center bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6 text-center">
          
          <p className="text-xl font-headline text-primary animate-in fade-in slide-in-from-top-4 duration-700 delay-200">
            Hi, I'm Aaditya Panda
          </p>
          <h1 className="flex items-center justify-center text-5xl font-headline font-bold tracking-tighter text-foreground sm:text-6xl lg:text-7xl xl:text-8xl animate-in fade-in slide-in-from-top-6 duration-700 delay-300 h-[1.2em]">
            <span>
              <span className="animate-gradient-shimmer bg-clip-text text-transparent bg-[length:200%_auto] bg-gradient-to-r from-primary via-accent to-primary">
                {typedText}
              </span>
              <span
                className={cn(
                  "inline-block w-px h-[0.9em] bg-primary ml-1 align-bottom transition-opacity duration-200",
                  showCursor ? 'opacity-100' : 'opacity-0'
                )}
              />
            </span>
          </h1>
          <p className="text-xl text-muted-foreground animate-in fade-in from-top-8 slide-in-from-top-8 duration-700 delay-400 max-w-2xl">
            I transform complex business requirements into elegant, scalable web applications, from system architecture to pixel-perfect UIs.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 pt-6 animate-in fade-in from-top-10 slide-in-from-top-10 duration-700 delay-500">
            {/* Social Icons Group */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <Button key={index} variant="outline" size="icon" asChild className="h-12 w-12 transition-all hover:bg-primary/10 hover:border-primary hover:text-primary hover:-translate-y-1">
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link['aria-label']}>
                    <link.icon className="h-6 w-6" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Vertical Divider */}
            <div className="h-8 w-px bg-border" />

            {/* Action Buttons Group */}
            <div className="flex items-center flex-wrap justify-center gap-4">
               <Dialog open={isPitchDialogOpen} onOpenChange={setIsPitchDialogOpen}>
                  <DialogTrigger asChild>
                      <Button size="lg" variant="outline" className="h-12 text-base transition-all bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 hover:border-primary hover:text-primary hover:-translate-y-1">
                          <Sparkles className="mr-2 h-4 w-4" /> AI Elevator Pitch
                      </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl h-[80vh] flex flex-col p-0">
                      <DialogHeader className="p-6 border-b">
                          <DialogTitle className="flex items-center gap-2">
                              <Sparkles className="h-5 w-5 text-primary" /> AI Elevator Pitch Generator
                          </DialogTitle>
                          <DialogDescription>
                              Select your key skills and experience, and let AI craft a professional pitch for you.
                          </DialogDescription>
                      </DialogHeader>
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 overflow-y-auto">
                          <div className="space-y-4">
                              <h4 className="font-semibold text-lg">Select Highlights</h4>
                              <div className="max-h-[45vh] overflow-y-auto space-y-3 pr-4 rounded-lg border p-4 bg-muted/30">
                                  {selectableItems.map((item, index) => (
                                      <div key={index} className="flex items-start space-x-2">
                                          <Checkbox 
                                              id={`item-${index}`} 
                                              onCheckedChange={() => handleItemToggle(item)}
                                              checked={selectedItems.includes(item)}
                                              className="mt-1"
                                          />
                                          <Label htmlFor={`item-${index}`} className="font-normal cursor-pointer text-sm">
                                              {item}
                                          </Label>
                                      </div>
                                  ))}
                              </div>
                              <Button onClick={handleGeneratePitch} disabled={isGenerating || selectedItems.length === 0} className="w-full">
                                  {isGenerating ? "Generating..." : "Generate Pitch"}
                                  <Sparkles className="ml-2 h-4 w-4" />
                              </Button>
                          </div>
                          <div className="flex flex-col space-y-4">
                              <h4 className="font-semibold text-lg">Your Generated Pitch</h4>
                              <div className="flex-1 rounded-lg border bg-muted/30 p-4 min-h-[200px] text-muted-foreground relative">
                                  {isGenerating && (
                                      <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10 rounded-lg">
                                          <Sparkles className="h-8 w-8 text-primary animate-pulse" />
                                      </div>
                                  )}
                                  {generatedPitch ? (
                                      <>
                                          <blockquote className="text-foreground italic border-l-2 border-primary pl-4 text-base">
                                              {generatedPitch}
                                          </blockquote>
                                          <Button
                                              size="icon"
                                              variant="ghost"
                                              className="absolute top-2 right-2 h-8 w-8"
                                              onClick={handleCopyToClipboard}
                                          >
                                              {hasCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                          </Button>
                                      </>
                                  ) : (
                                      !isGenerating && <p className="text-sm m-auto">Your pitch will appear here once generated.</p>
                                  )}
                              </div>
                          </div>
                      </div>
                  </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="h-12 text-base transition-all hover:bg-primary/10 hover:border-primary hover:text-primary hover:-translate-y-1" aria-label="View CV">
                    <FileText className="mr-2 h-4 w-4" /> View CV
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0">
                  <DialogHeader className="p-4 border-b">
                    <DialogTitle>Curriculum Vitae</DialogTitle>
                  </DialogHeader>
                  <div className="flex-1 overflow-auto">
                    <iframe
                      src={CV_PATH}
                      className="w-full h-full"
                      title="CV Preview"
                    />
                  </div>
                </DialogContent>
              </Dialog>
              <Button size="lg" asChild className="h-12 text-base transition-all hover:-translate-y-1">
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                  <Send className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
