
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PLACEHOLDER_GALLERIES, PHOTO_GALLERY_CATEGORIES, type PhotoGallery } from '@/constants';
import { Button } from '@/components/ui/button';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function FotografGalerileriPage() {
  const allGalleries = PLACEHOLDER_GALLERIES;
  const [featuredGallery, setFeaturedGallery] = useState<PhotoGallery | null>(null);
  const [otherGalleries, setOtherGalleries] = useState<PhotoGallery[]>([]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (allGalleries.length > 0) {
      // For demo, pick the first gallery as featured. In a real app, this could be dynamic.
      const firstGallery = allGalleries.find(g => g.id === 'pg1') || allGalleries[0];
      setFeaturedGallery(firstGallery);
      setOtherGalleries(allGalleries.filter(g => g.id !== firstGallery.id).slice(0, 10)); // Show up to 10 other galleries
    }
  }, [allGalleries]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!featuredGallery) {
    return (
      <div className="container mx-auto px-2 sm:px-4 py-6 md:py-8 text-center bg-gray-900 text-white min-h-screen">
        <p>Foto galeriler yükleniyor veya bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <Image
          src={featuredGallery.coverImageUrl}
          alt={featuredGallery.title}
          fill
          priority
          className="object-cover"
          data-ai-hint={featuredGallery.coverImageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 lg:p-12">
          <div className="container mx-auto px-0 sm:px-4">
            <div className="mb-4 md:mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center mb-2">
                <span className="w-2.5 h-5 bg-primary mr-2.5"></span> {/* Red square icon */}
                Foto Fokus
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 md:mb-3 leading-tight max-w-3xl">
                <Link href={`/foto-galeri/${featuredGallery.slug}`} className="hover:underline">
                  {featuredGallery.title}
                </Link>
              </h1>
              <p className="text-sm md:text-base text-gray-300 mb-2 md:mb-3 max-w-2xl line-clamp-2 md:line-clamp-3">
                {featuredGallery.description}
              </p>
              <div className="text-xs text-gray-400">
                <span>{featuredGallery.publishDate}</span>
                {featuredGallery.updateDate && <span className="ml-2">Güncelleme: {featuredGallery.updateDate}</span>}
                <span className="ml-2">&bull; {featuredGallery.category}</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full w-12 h-12 md:w-14 md:h-14 shadow-lg"
              asChild
            >
              <Link href={`/foto-galeri/${featuredGallery.slug}`}>
                <Camera size={24} />
                <span className="sr-only">Galeriye Git</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Thumbnail Scroller Section */}
      {otherGalleries.length > 0 && (
        <section className="py-6 md:py-8 bg-gray-800/50 relative">
          <div className="container mx-auto px-0 sm:px-4">
            <div className="relative">
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-700/80 hover:bg-gray-600 text-white border-gray-600 hidden md:flex"
                onClick={() => scroll('left')}
                aria-label="Önceki galeriler"
              >
                <ChevronLeft />
              </Button>
              <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-3 md:space-x-4 py-2 px-2 md:px-12 no-scrollbar">
                {otherGalleries.map((gallery, index) => (
                  <Link key={gallery.id} href={`/foto-galeri/${gallery.slug}`} className="flex-shrink-0 w-[200px] md:w-[240px] group">
                    <div className="bg-yellow-300 p-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                      <div className="flex items-start mb-1.5">
                        <span className="text-3xl md:text-4xl font-bold text-gray-800 mr-2">{index + 2}</span>
                        <div className="relative aspect-video w-full h-24 md:h-28 rounded overflow-hidden">
                          <Image
                            src={gallery.coverImageUrl}
                            alt={gallery.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 150px, 200px"
                            data-ai-hint={gallery.coverImageHint}
                          />
                        </div>
                      </div>
                      <h3 className="text-xs md:text-sm font-semibold text-gray-800 mt-1 line-clamp-2 group-hover:text-primary-dark transition-colors">
                        {gallery.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-700/80 hover:bg-gray-600 text-white border-gray-600 hidden md:flex"
                onClick={() => scroll('right')}
                aria-label="Sonraki galeriler"
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* "Diğer Galeriler" Category Buttons Section */}
      <section className="container mx-auto px-2 sm:px-4 py-8 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
          <span className="w-2.5 h-5 bg-primary mr-2.5"></span>
          Diğer Galeriler
        </h2>
        <div className="flex flex-wrap gap-3 md:gap-4">
          {PHOTO_GALLERY_CATEGORIES.map((category) => (
            <Button
              key={category}
              variant="default" // Uses primary color from globals.css
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium px-4 py-2 rounded-md"
              asChild
            >
              {/* Update href to actual category links if available */}
              <Link href={`/fotograf-galerileri?kategori=${category.toLowerCase()}`}>{category}</Link>
            </Button>
          ))}
        </div>
      </section>

      {/* Gallery Grid (Placeholder for future or if needed) */}
      {/* 
      <div className="container mx-auto px-2 sm:px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allGalleries.map((gallery) => (
            <PhotoGalleryCard key={gallery.id} gallery={gallery} />
          ))}
        </div>
      </div>
      */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; 
          scrollbar-width: none; 
        }
      `}</style>
    </div>
  );
}
