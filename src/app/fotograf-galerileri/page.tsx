
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PLACEHOLDER_GALLERIES, PHOTO_GALLERY_CATEGORIES, type PhotoGallery } from '@/constants';
import { Button } from '@/components/ui/button';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import PhotoGalleryCard from '@/components/photo/photo-gallery-card';

export default function FotografGalerileriPage() {
  const allGalleries = PLACEHOLDER_GALLERIES;
  const [featuredGallery, setFeaturedGallery] = useState<PhotoGallery | null>(null);
  const [otherGalleriesForScroller, setOtherGalleriesForScroller] = useState<PhotoGallery[]>([]);
  const [galleriesForGrid, setGalleriesForGrid] = useState<PhotoGallery[]>([]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (allGalleries.length > 0) {
      const firstGallery = allGalleries.find(g => g.id === 'pg1') || allGalleries[0];
      setFeaturedGallery(firstGallery);
      
      const remainingGalleries = allGalleries.filter(g => g.id !== firstGallery.id);
      setOtherGalleriesForScroller(remainingGalleries.slice(0, 9)); // Next 9 for scroller
      setGalleriesForGrid(allGalleries); // All galleries for the main grid, can be filtered later
    }
  }, [allGalleries]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250; // Adjusted scroll amount
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
    <>
      <div className="bg-gray-900 text-white pt-1"> {/* Main dark background wrapper */}
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
          <Image
            src={featuredGallery.coverImageUrl}
            alt={featuredGallery.title}
            fill
            priority
            className="object-cover"
            data-ai-hint={featuredGallery.coverImageHint || "news event"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 lg:p-12">
            <div className="container mx-auto px-0 sm:px-4">
              <div className="mb-4 md:mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center mb-2">
                  <span className="w-2.5 h-5 bg-primary mr-2.5"></span>
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
        {otherGalleriesForScroller.length > 0 && (
          <section className="py-6 md:py-8 bg-gray-900 relative"> {/* Ensure dark bg */}
            <div className="container mx-auto px-0 sm:px-4">
              <div className="relative">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-700/80 hover:bg-gray-600 text-white border-gray-600 hidden md:flex"
                  onClick={() => scroll('left')}
                  aria-label="Önceki galeriler"
                >
                  <ChevronLeft />
                </Button>
                <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-3 md:space-x-4 py-2 px-2 md:px-12 no-scrollbar">
                  {otherGalleriesForScroller.map((gallery, index) => (
                    <Link key={gallery.id} href={`/foto-galeri/${gallery.slug}`} className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[240px] group">
                      <div className="bg-yellow-300 p-2.5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                        <div className="flex items-start mb-1.5">
                          <span className="text-3xl md:text-4xl font-bold text-gray-800 mr-2">{index + 2}</span>
                          <div className="relative aspect-video w-full h-24 md:h-28 rounded overflow-hidden">
                            <Image
                              src={gallery.coverImageUrl}
                              alt={gallery.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 150px, 200px"
                              data-ai-hint={gallery.coverImageHint || "gallery thumbnail"}
                            />
                          </div>
                        </div>
                        <h3 className="text-xs md:text-sm font-semibold text-gray-800 mt-1 line-clamp-2 group-hover:text-black transition-colors">
                          {gallery.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-700/80 hover:bg-gray-600 text-white border-gray-600 hidden md:flex"
                  onClick={() => scroll('right')}
                  aria-label="Sonraki galeriler"
                >
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* "Diğer Galeriler" Category Buttons Section - Still on dark background */}
        <section className="container mx-auto px-2 sm:px-4 py-8 md:py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
            <span className="w-2.5 h-5 bg-primary mr-2.5"></span>
            Diğer Galeriler
          </h2>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {PHOTO_GALLERY_CATEGORIES.map((category) => (
              <Button
                key={category}
                variant="default" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium px-4 py-2 rounded-md"
                asChild
              >
                <Link href={`/fotograf-galerileri?kategori=${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{category}</Link>
              </Button>
            ))}
          </div>
        </section>
      </div>

      {/* Gallery Grid - On standard light background */}
      <div className="bg-background text-foreground"> {/* Standard page background */}
        <div className="container mx-auto px-2 sm:px-4 py-6 md:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleriesForGrid.map((gallery) => (
              <PhotoGalleryCard key={gallery.id} gallery={gallery} />
            ))}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; 
          scrollbar-width: none; 
        }
      `}</style>
    </>
  );
}
