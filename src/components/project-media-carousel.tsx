'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';

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
  // State for the small, autoplaying carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // State for the lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Autoplay functionality for the small carousel
  useEffect(() => {
    if (isHovered || gallery.length <= 1 || lightboxOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, gallery.length, lightboxOpen]);

  if (!gallery || gallery.length === 0) {
    return null;
  }

  // --- Handlers for the small carousel ---
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // --- Handlers for the lightbox ---
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextLightboxItem = () => {
    setLightboxIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevLightboxItem = () => {
    setLightboxIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  return (
    <>
      {/* Small Autoplaying Carousel (The Trigger) */}
      <div
        className={cn(
          "relative w-full aspect-video group bg-black cursor-pointer",
          !unstyled && "rounded-lg overflow-hidden border border-border/50 shadow-lg"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => openLightbox(currentIndex)}
        role="button"
        aria-label="Open image gallery"
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

        {/* Navigation Controls for small carousel */}
        {gallery.length > 1 && (
          <>
            {/* Up/Down Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              aria-label="Previous slide"
              className="absolute top-4 left-1/2 -translate-x-1/2 z-10 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
            >
              <ChevronUp className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
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
                  onClick={(e) => { e.stopPropagation(); goToSlide(slideIndex); }}
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

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-screen-xl w-[95%] h-[90vh] bg-black/80 border-none p-0 flex items-center justify-center backdrop-blur-md">
          {/* Close button */}
          <DialogClose asChild>
            <button
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
              aria-label="Close gallery"
            >
              <X className="h-6 w-6" />
            </button>
          </DialogClose>
          
          {/* Lightbox Navigation */}
          {gallery.length > 1 && (
            <>
              <button
                onClick={prevLightboxItem}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={nextLightboxItem}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </>
          )}

          {/* Lightbox Media Display */}
          <div className="relative w-full h-full flex items-center justify-center">
            {gallery.map((media, index) => (
              <div
                key={media.src + '-lightbox'}
                className={cn(
                  "absolute w-full h-full transition-opacity duration-300 ease-in-out",
                  lightboxIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                )}
              >
                {media.type === 'image' ? (
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    className="w-full h-full object-contain object-center"
                    data-ai-hint={media.hint}
                    sizes="90vw"
                  />
                ) : (
                  <video
                    src={media.src}
                    controls
                    autoPlay
                    loop
                    playsInline
                    className="max-w-full max-h-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
