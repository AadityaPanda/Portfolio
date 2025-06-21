import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Download } from "lucide-react";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project: Street Fighter Clone',
  description: 'Details about the Street Fighter game clone project built with Python and Pygame.',
};

const techStack = ["Python", "Pygame", "Numpy", "OpenCV"];
const features = [
    "Two distinct fighters: Warrior and Wizard, each with unique attacks.",
    "Classic gameplay mechanics including health bars and a scoring system.",
    "Smooth animations for idle, run, jump, attack, hit, and death actions.",
    "Dynamic background effects and immersive sound design.",
    "Responsive UI with a main menu and victory screens.",
    "Customizable controls for two-player battles."
];

export default function StreetFighterPage() {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <header className="space-y-4">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl">Street Fighter Clone</h1>
        <p className="text-xl text-muted-foreground">An engaging two-player fighting game built with Python and Pygame. This project features exciting gameplay mechanics, unique characters, and dynamic animations, perfect for retro game enthusiasts.</p>
        <div className="flex flex-wrap gap-2">
            {techStack.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
        </div>
        <div className="flex gap-2 pt-4">
            <Button asChild>
                <a href="https://github.com/AadityaPanda/Street_Fighter" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2"/> View on GitHub
                </a>
            </Button>
            <Button variant="outline" asChild>
                <a href="https://github.com/AadityaPanda/Street_Fighter/releases" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2"/> Download Release
                </a>
            </Button>
        </div>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
            <CardHeader><CardTitle>Key Features</CardTitle></CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {features.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </CardContent>
        </Card>
        <Card>
            <CardHeader><CardTitle>Installation</CardTitle></CardHeader>
            <CardContent>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                    <li>Clone the repository.</li>
                    <li>Install dependencies using pip.</li>
                    <li>Run `main.py` to start.</li>
                </ol>
            </CardContent>
        </Card>
      </div>

       <Card>
        <CardHeader><CardTitle>Gameplay & Controls</CardTitle></CardHeader>
        <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                    <h3 className="font-semibold text-foreground mb-2">Player 1 Controls</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><span className="font-mono bg-secondary px-1.5 py-0.5 rounded-md">A</span> / <span className="font-mono bg-secondary px-1.5 py-0.5 rounded-md">D</span>: Move Left/Right</li>
                        <li><span className="font-mono bg-secondary px-1.5 py-0.5 rounded-md">W</span>: Jump</li>
                        <li><span className="font-mono bg-secondary px-1.5 py-0.5 rounded-md">R</span> / <span className="font-mono bg-secondary px-1.5 py-0.5 rounded-md">T</span>: Attack</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-foreground mb-2">Player 2 Controls</h3>
                     <ul className="list-disc pl-5 space-y-1">
                        <li><span className="font-mono bg-secondary px-1.5 py-0.5 rounded-md">←</span> / <span className="font-mono bg-secondary px-1.5 py-0.5 rounded-md">→</span>: Move Left/Right</li>
                        <li><span className="font-mono bg-secondary px-1.5 py-0.5 rounded-md">↑</span>: Jump</li>
                        <li><span className="font-mono bg-secondary px-1.5 py-0.5 rounded-md">M</span> / <span className="font-mono bg-secondary px-1.5 py-0.5 rounded-md">N</span>: Attack</li>
                    </ul>
                </div>
            </div>
        </CardContent>
      </Card>

       <div className="space-y-8">
        <h2 className="text-3xl font-headline font-bold tracking-tight">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image src="https://placehold.co/800x600.png" alt="Street Fighter Gameplay" width={800} height={600} className="rounded-lg object-cover" data-ai-hint="retro fighting game" />
            <Image src="https://placehold.co/800x600.png" alt="Street Fighter Characters" width={800} height={600} className="rounded-lg object-cover" data-ai-hint="pixel art character" />
        </div>
      </div>
    </div>
  )
}