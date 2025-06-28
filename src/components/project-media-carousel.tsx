'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type GalleryItem = {
    type: 'image' | 'video';
    src: string;
    alt: string;
    hint: string;
};

interface ProjectMediaCarouselProps {
  gallery: GalleryItem[];
  unstyled?: boolean;
}

export function ProjectMediaCarousel({ gallery, unstyled = false }: ProjectMediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay functionality, paused on hover
  useEffect(() => {
    if (isHovered || gallery.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, gallery.length]);

  if (!gallery || gallery.length === 0) {
    return null;
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      className={cn(
        "relative w-full aspect-video group bg-black",
        !unstyled && "rounded-lg overflow-hidden border border-border/50 shadow-lg"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Container */}
      <div
        className="h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(-${currentIndex * 100}%)` }}
      >
        {gallery.map((media) => (
          <div key={media.src} className="relative w-full h-full flex-shrink-0">
            {media.type === 'image' ? (
              <Image
                src={media.src}
                alt={media.alt}
                fill
                className="w-full h-full object-contain object-center"
                data-ai-hint={media.hint}
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
            ) : (
              <video
                src={media.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain object-center"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {gallery.length > 1 && (
        <>
          {/* Up/Down Arrows */}
          <button
            onClick={goToPrevious}
            aria-label="Previous slide"
            className="absolute top-4 left-1/2 -translate-x-1/2 z-10 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            aria-label="Next slide"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
          >
            <ChevronDown className="h-6 w-6" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col justify-center gap-3 z-10">
            {gallery.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                aria-label={`Go to slide ${slideIndex + 1}`}
                className={cn(
                  'h-2 w-2 rounded-full cursor-pointer transition-all duration-300',
                  currentIndex === slideIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white'
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
