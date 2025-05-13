
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PLACEHOLDER_GALLERIES, type PhotoGallery } from '@/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, Share2, ChevronLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card'; // Card might be used for image containers if styling requires it

// Placeholder for social icons if not using lucide for all
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;


export default function PhotoGalleryDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [gallery, setGallery] = useState<PhotoGallery | null>(null);

  useEffect(() => {
    const foundGallery = PLACEHOLDER_GALLERIES.find(g => g.slug === slug);
    setGallery(foundGallery || null);
  }, [slug]);

  if (!gallery) {
    return (
      <div className="bg-zinc-900 min-h-screen flex items-center justify-center text-zinc-100">
        <div className="text-center">
          <p className="text-xl">Foto galeri bulunamadı.</p>
          <Link href="/fotograf-galerileri" className="text-red-500 hover:underline mt-4 inline-block">
            Tüm galerilere geri dön
          </Link>
        </div>
      </div>
    );
  }

  const totalImages = gallery.images.length;

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 py-8">
      <div className="container mx-auto px-4">
        <article>
          {/* Gallery Header Section */}
          <header className="mb-6 md:mb-8">
            <Badge variant="destructive" className="bg-red-600 text-white text-xs uppercase px-2.5 py-1 rounded-sm font-bold mb-3 self-start tracking-wider">
              {gallery.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">{gallery.title}</h1>
            <p className="text-zinc-300 mb-4 text-base md:text-lg max-w-3xl">{gallery.description}</p>
            <div className="flex flex-wrap items-center text-sm text-zinc-400 gap-x-4 gap-y-2 mb-5">
              <span className="flex items-center"><CalendarDays size={15} className="mr-1.5" /> Yayınlanma: {gallery.publishDate}</span>
              {gallery.updateDate && <span className="flex items-center"><Clock size={15} className="mr-1.5" /> Güncelleme: {gallery.updateDate}</span>}
            </div>
            <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" aria-label="Facebook'ta paylaş" className="bg-zinc-800 hover:bg-zinc-700 rounded-full w-9 h-9">
                  <FacebookIcon />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Twitter'da paylaş" className="bg-zinc-800 hover:bg-zinc-700 rounded-full w-9 h-9">
                  <TwitterIcon />
                </Button>
                <Button variant="ghost" size="icon" aria-label="E-posta ile paylaş" className="bg-zinc-800 hover:bg-zinc-700 rounded-full w-9 h-9">
                  <Share2 size={18} className="text-white"/>
                </Button>
            </div>
          </header>

          <Separator className="border-zinc-700 my-8 md:my-10" />

          {/* Images List Section */}
          <section className="space-y-12">
            {gallery.images.map((image, index) => (
              <div key={image.id}>
                <div className="mb-4">
                  <span className="bg-yellow-400 text-black font-bold text-3xl px-5 py-2 rounded-sm inline-block">
                    {index + 1}
                  </span>
                </div>
                <div className="relative aspect-[16/10] w-full bg-zinc-800 rounded-lg overflow-hidden shadow-2xl">
                    <Image
                        src={image.imageUrl}
                        alt={image.caption || `${gallery.title} - Resim ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1024px"
                        className="object-cover"
                        data-ai-hint={image.imageHint || "gallery image"}
                        priority={index < 2} // Prioritize loading first few images
                    />
                 </div>
                 {image.caption && (
                    <p className="mt-4 text-center text-zinc-300 text-base md:text-lg max-w-2xl mx-auto">{image.caption}</p>
                 )}
              </div>
            ))}
          </section>
        </article>
      </div>
    </div>
  );
}
