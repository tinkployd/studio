
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
import { Card, CardContent } from '@/components/ui/card';

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
      <div className="container mx-auto px-2 sm:px-4 py-6 md:py-8 text-center">
        <p>Foto galeri bulunamadı.</p>
        <Link href="/fotograf-galerileri" className="text-primary hover:underline mt-4 inline-block">
          Tüm galerilere geri dön
        </Link>
      </div>
    );
  }

  const totalImages = gallery.images.length;

  return (
    <div className="container mx-auto px-2 sm:px-4 py-6 md:py-8">
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/fotograf-galerileri" className="hover:text-primary">Foto Galeri</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{gallery.title}</span>
      </nav>

      <article>
        <header className="mb-6 md:mb-8">
           <Badge variant="secondary" className="mb-2 self-start text-xs px-2 py-1 uppercase bg-primary/10 text-primary border-primary/30 rounded-sm font-semibold">
            {gallery.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{gallery.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-4 gap-y-1 mb-4">
            <span className="flex items-center"><CalendarDays size={14} className="mr-1.5" /> Yayınlanma: {gallery.publishDate}</span>
            {gallery.updateDate && <span className="flex items-center"><Clock size={14} className="mr-1.5" /> Güncelleme: {gallery.updateDate}</span>}
          </div>
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">Paylaş:</span>
                <Button variant="outline" size="icon" aria-label="Facebook'ta paylaş" className="w-8 h-8"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></Button>
                <Button variant="outline" size="icon" aria-label="Twitter'da paylaş" className="w-8 h-8"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></Button>
                <Button variant="outline" size="icon" aria-label="E-posta ile paylaş" className="w-8 h-8"><Share2 size={16}/></Button>
            </div>
        </header>

        <Separator className="my-4 md:my-6" />

        <section className="prose prose-sm sm:prose-base max-w-none text-foreground dark:prose-invert mb-6 md:mb-8">
          <p>{gallery.description}</p>
        </section>

        <section className="space-y-8">
          {gallery.images.map((image, index) => (
            <div key={image.id} className="flex flex-col items-center">
               <div className="text-center font-semibold text-lg md:text-xl text-foreground mb-3">
                 {index + 1} <span className="text-muted-foreground">/</span> {totalImages}
               </div>
              <Card className="w-full max-w-4xl overflow-hidden shadow-lg border-border/50 rounded-md">
                 <div className="relative aspect-[4/3] w-full bg-muted">
                    <Image
                        src={image.imageUrl}
                        alt={image.caption || `${gallery.title} - Resim ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1024px"
                        objectFit="contain"
                        className="rounded-t-md"
                        data-ai-hint={image.imageHint || "gallery content"}
                        priority={index < 3} 
                    />
                 </div>
                 {image.caption && (
                    <CardContent className="p-3 md:p-4 bg-card border-t">
                        <p className="text-sm text-center text-card-foreground">{image.caption}</p>
                    </CardContent>
                 )}
              </Card>
            </div>
          ))}
        </section>

         <Separator className="my-6 md:my-8" />
         <div className="flex justify-between items-center">
             <Button variant="outline" asChild>
                <Link href="/fotograf-galerileri" className="text-primary hover:text-primary/90">
                    <ChevronLeft size={18} className="mr-1.5" /> Tüm Foto Galeriler
                </Link>
             </Button>
            {/* Optional: Repeat Share buttons if desired */}
         </div>
      </article>
    </div>
  );
}
