
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import type { Video } from '@/constants';
import { PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoCardProps {
  video: Video;
  layout?: 'main-featured' | 'thumbnail';
}

export default function VideoCard({ video, layout = 'thumbnail' }: VideoCardProps) {
  const { title, category, thumbnailUrl, imageHint, description, videoUrl, sourceUrl } = video;

  const isMainFeatured = layout === 'main-featured';
  const url = videoUrl || sourceUrl || '#';

  if (isMainFeatured) {
    return (
      <div className="p-6 md:p-8 text-primary-foreground">
        <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 text-xs uppercase px-1.5 py-0.5 leading-tight mb-2">
          {category}
        </Badge>
        <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
          <Link href={url} target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
            {title}
          </Link>
        </h3>
        {description && (
          <p className="text-sm text-primary-foreground/80 line-clamp-4">
            {description}
          </p>
        )}
      </div>
    );
  }

  // Thumbnail layout
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative aspect-video">
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" // Adjust sizes as needed
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
          {/* Play Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle size={48} className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-md" />
          </div>
        </div>
        <div className="p-3 bg-card text-card-foreground">
           <Badge variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs uppercase px-1.5 py-0.5 leading-tight mb-1.5">
            {category}
          </Badge>
          <h4 className="text-sm font-semibold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h4>
        </div>
      </Link>
    </div>
  );
}
