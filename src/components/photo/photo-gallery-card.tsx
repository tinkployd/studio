
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { PhotoGallery } from '@/constants';
import { Images } from 'lucide-react'; // Icon for gallery
import { cn } from '@/lib/utils';

interface PhotoGalleryCardProps {
  gallery: PhotoGallery;
}

export default function PhotoGalleryCard({ gallery }: PhotoGalleryCardProps) {
  const { slug, title, category, coverImageUrl, coverImageHint } = gallery;

  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col rounded-lg border border-border/70 group">
      <Link href={`/foto-galeri/${slug}`} className="block flex flex-col h-full">
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={coverImageUrl}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
              data-ai-hint={coverImageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-80 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
               {/* Optional: Overlay Icon */}
               <Images size={48} className="text-white/60 group-hover:text-white transition-colors drop-shadow-lg" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-3 md:p-4 flex flex-col flex-grow">
          <Badge variant="secondary" className="mb-1.5 self-start text-xs px-1.5 py-0.5 uppercase bg-primary/10 text-primary border-primary/30">
            {category}
          </Badge>
          <h3 className="font-semibold leading-tight group-hover:text-primary transition-colors text-base md:text-lg line-clamp-3 flex-grow">
            {title}
          </h3>
           {/* Optional: Add image count or other info */}
           <div className="mt-2 text-xs text-muted-foreground flex items-center justify-end">
             <span>Galeriye Git &rarr;</span>
           </div>
        </CardContent>
      </Link>
    </Card>
  );
}
