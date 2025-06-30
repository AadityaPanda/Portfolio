import { UserCircle } from "lucide-react";
import { ABOUT_ME_TEXT } from "@/lib/data";
import { SectionHeader } from "../section-header";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="About Me">
          <UserCircle className="h-8 w-8" />
        </SectionHeader>
        <div className="mt-12 grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative flex justify-center items-center animate-in fade-in zoom-in-75 duration-700">
                <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl opacity-50 animate-[spin_20s_linear_infinite]" />
                    <Image
                      src="/media/aaditya-panda-portrait.jpg"
                      alt="Portrait of Aaditya Panda"
                      fill
                      priority
                      sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 450px"
                      className="rounded-full object-cover shadow-2xl shadow-primary/20 border-4 border-background/50"
                    />
                </div>
            </div>
            <div className="space-y-6 text-center lg:text-left">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {ABOUT_ME_TEXT}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
