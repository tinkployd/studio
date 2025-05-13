
'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { PodcastEpisode } from '@/constants';
import { PlayCircle, Headphones } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface PodcastCardProps {
  episode: PodcastEpisode;
  layout?: 'default' | 'featured-secondary'; // For different styling if needed
}

export default function PodcastCard({ episode, layout = 'default' }: PodcastCardProps) {
  const { slug, title, seriesTitle, category, imageUrl, imageHint, duration, publishDate } = episode;

  return (
    <Card className={cn(
        "overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col rounded-lg border border-border/70 group",
        layout === 'featured-secondary' ? "bg-muted/30" : ""
      )}>
      <Link href={`/podcast/${slug}`} className="block">
        <CardHeader className="p-0">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
              data-ai-hint={imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-80 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
              <PlayCircle size={layout === 'featured-secondary' ? 64 : 48} className="text-white/80 group-hover:text-white transition-colors drop-shadow-lg" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-3 md:p-4 flex flex-col flex-grow">
          <Badge variant="secondary" className="mb-1.5 self-start text-xs px-1.5 py-0.5 uppercase bg-primary/10 text-primary border-primary/30">
            {seriesTitle}
          </Badge>
          <h3 className={cn(
              "font-semibold leading-tight group-hover:text-primary transition-colors",
              layout === 'featured-secondary' ? "text-lg md:text-xl" : "text-base md:text-md line-clamp-2"
            )}>
            {title}
          </h3>
          {layout === 'featured-secondary' && episode.shortDescription && (
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{episode.shortDescription}</p>
          )}
          <div className="mt-auto pt-2 text-xs text-muted-foreground flex items-center justify-between">
            <div className="flex items-center">
              <Headphones size={12} className="mr-1" />
              <span>{duration}</span>
            </div>
            <span>{publishDate}</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
