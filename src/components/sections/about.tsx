
'use client';

import { UserCircle } from "lucide-react";
import Image from "next/image";
import { ABOUT_ME_TEXT } from "@/lib/data";
import { SectionHeader } from "../section-header";
import { useIsMobile } from "@/hooks/use-mobile";
import { ReadMore } from "../read-more";
import { cn } from "@/lib/utils";
import { ScrollAnimate } from "../scroll-animate";

export default function About() {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="w-full py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="About Me">
          <UserCircle className="h-8 w-8" />
        </SectionHeader>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image Column */}
          <ScrollAnimate className="flex justify-center items-center">
            <div className={cn(
                "relative w-full max-w-sm aspect-square transition-all duration-300 ease-in-out",
                "rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 p-2"
            )}>
              <Image
                src="/media/aaditya-panda-portrait.jpg"
                alt="Aaditya Panda portrait"
                fill
                className="rounded-md object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </ScrollAnimate>
          {/* Text Column */}
          <ScrollAnimate className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center md:text-left">
            {isMobile ? (
              <ReadMore text={ABOUT_ME_TEXT} maxLength={150} />
            ) : (
              <p>{ABOUT_ME_TEXT}</p>
            )}
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
