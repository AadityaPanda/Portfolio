import { UserCircle } from "lucide-react";
import { ABOUT_ME_TEXT } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="space-y-12">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <UserCircle className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-headline font-bold tracking-tight">About Me</h2>
      </div>
      <p className="text-lg text-muted-foreground leading-relaxed">
        {ABOUT_ME_TEXT}
      </p>
    </section>
  );
}
