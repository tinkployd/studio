
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import type { Video } from '@/constants';
import { PlayCircle, Clock, CalendarDays } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoCardProps {
  video: Video;
  layout?: 'main-featured' | 'thumbnail' | 'thumbnail-dark'; // Added thumbnail-dark
}

export default function VideoCard({ video, layout = 'thumbnail' }: VideoCardProps) {
  const { title, category, thumbnailUrl, imageHint, description, videoUrl, sourceUrl, duration, publishDate } = video;

  const isMainFeatured = layout === 'main-featured';
  const isThumbnailDark = layout === 'thumbnail-dark'; // For video gallery detail page grid
  const urlToLink = video.slug ? `/videolar/${video.slug}` : (videoUrl || sourceUrl || '#');
  const target = (videoUrl || sourceUrl) && !video.slug ? "_blank" : "_self";


  if (isMainFeatured) {
    // Main Featured Layout (Text content on Red Background for Video Detail Page Header)
    // This specific styling is typically for the video detail page header, not a generic card
    return (
      <div className="p-6 md:p-8 text-primary-foreground">
        <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 text-xs uppercase px-1.5 py-0.5 leading-tight mb-2">
          {category}
        </Badge>
        <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
          <Link href={urlToLink} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className="hover:opacity-90 transition-opacity">
            {title}
          </Link>
        </h3>
        {description && (
          <p className="text-base text-primary-foreground/80">
            {description}
          </p>
        )}
      </div>
    );
  }

  // Thumbnail layout (default or dark variant)
  return (
    <div className={cn(
        "group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col",
        isThumbnailDark ? "bg-zinc-800 border border-zinc-700" : "bg-card border border-border"
      )}>
      <Link href={urlToLink} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className="block flex flex-col h-full">
        <div className="relative aspect-video">
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={imageHint}
          />
          <div className={cn(
              "absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300",
              isThumbnailDark ? "from-black/60" : "from-black/50"
            )}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle size={48} className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-md" />
          </div>
        </div>
        <div className={cn("p-3 flex flex-col flex-grow", isThumbnailDark ? "text-zinc-200" : "text-card-foreground")}>
           <Badge 
            variant={isThumbnailDark ? "destructive" : "default"} 
            className={cn(
                "text-xs uppercase px-1.5 py-0.5 leading-tight mb-1.5 self-start",
                isThumbnailDark ? "bg-red-600 text-white" : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
           >
            {category}
          </Badge>
          <h4 className={cn(
              "text-sm font-semibold leading-tight line-clamp-2 group-hover:text-primary transition-colors flex-grow",
               isThumbnailDark && "group-hover:text-red-400"
            )}>
            {title}
          </h4>
          <div className={cn("mt-auto pt-1.5 text-xs flex items-center justify-between", isThumbnailDark ? "text-zinc-400" : "text-muted-foreground")}>
            {duration && (
              <div className="flex items-center">
                <Clock size={12} className="mr-1" />
                <span>{duration}</span>
              </div>
            )}
            {publishDate && (
              <div className="flex items-center">
                <CalendarDays size={12} className="mr-1" />
                <span>{publishDate.split(' ')[0]}</span> {/* Show only date part */}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
