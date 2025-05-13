
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card'; // Removed CardHeader as it's not used with p-0
import type { PhotoGallery } from '@/constants';
import { cn } from '@/lib/utils';

interface PhotoGalleryCardProps {
  gallery: PhotoGallery;
}

export default function PhotoGalleryCard({ gallery }: PhotoGalleryCardProps) {
  const { slug, title, coverImageUrl, coverImageHint, publishDate } = gallery;

  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col rounded-lg border group">
      <Link href={`/foto-galeri/${slug}`} className="block flex flex-col h-full">
        <div className="relative aspect-video overflow-hidden"> {/* Using aspect-video as a common default */}
          <Image
            src={coverImageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={coverImageHint || "gallery image"}
          />
        </div>
        <CardContent className="p-3 md:p-4 flex flex-col flex-grow">
          <h3 className="font-bold text-base md:text-lg leading-tight group-hover:text-primary transition-colors text-foreground mb-1 line-clamp-3 flex-grow">
            {title}
          </h3>
          {publishDate && (
            <p className="text-xs text-muted-foreground mt-auto pt-1">
              {publishDate}
            </p>
          )}
        </CardContent>
      </Link>
    </Card>
  );
}
