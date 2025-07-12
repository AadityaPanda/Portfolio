
'use client';

import { UserCircle } from "lucide-react";
import Image from "next/image";
import { ABOUT_ME_TEXT } from "@/lib/data";
import { SectionHeader } from "../section-header";
import { useIsMobile } from "@/hooks/use-mobile";
import { ReadMore } from "../read-more";

export default function About() {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="min-h-screen w-full py-24 flex flex-col items-center justify-center">
      <SectionHeader title="About Me">
        <UserCircle className="h-8 w-8" />
      </SectionHeader>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center w-full max-w-6xl mx-auto px-4 md:px-8">
        {/* Image Column */}
        <div className="flex justify-center items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/media/aaditya-panda-portrait.jpg"
              alt="Aaditya Panda portrait"
              fill
              className="rounded-full object-cover border-4 border-card shadow-lg"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
        {/* Text Column */}
        <div className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center md:text-left">
          {isMobile ? (
            <ReadMore text={ABOUT_ME_TEXT} maxLength={150} />
          ) : (
            <p>{ABOUT_ME_TEXT}</p>
          )}
        </div>
      </div>
    </section>
  );
}
