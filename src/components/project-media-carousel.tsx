'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type GalleryItem = {
    type: 'image' | 'video';
    src: string;
    alt: string;
    hint: string;
};

interface ProjectMediaCarouselProps {
  gallery: GalleryItem[];
}

export function ProjectMediaCarousel({ gallery }: ProjectMediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (gallery.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [gallery.length]);

  if (!gallery || gallery.length === 0) {
    return null;
  }
  
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border/50 shadow-lg">
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
                className="object-cover object-center"
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
                className="w-full h-full object-cover object-center"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
