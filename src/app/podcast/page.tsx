
import Link from 'next/link';
import Image from 'next/image';
import { PLACEHOLDER_PODCASTS, type PodcastEpisode } from '@/constants';
import PodcastCard from '@/components/podcast/podcast-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, ChevronRight } from 'lucide-react';

export default function PodcastPage() {
  const podcasts = PLACEHOLDER_PODCASTS;

  const featuredEpisode = podcasts.find(p => p.id === 'hh1') || podcasts[0]; // Example: prioritize hh1 or take the first
  
  const podcastSeries: { [key: string]: PodcastEpisode[] } = {};
  podcasts.forEach(episode => {
    if (!podcastSeries[episode.seriesTitle]) {
      podcastSeries[episode.seriesTitle] = [];
    }
    // Add episode if it's not the featured one, or if we want to show it in its series list as well
    if (episode.id !== featuredEpisode?.id) {
        podcastSeries[episode.seriesTitle].push(episode);
    } else if (!podcastSeries[episode.seriesTitle].find(e => e.id === episode.id)) {
        // Ensure featured episode is also in its series list if not already added by other logic
        podcastSeries[episode.seriesTitle].push(episode);
    }
  });

  // If featured episode was taken from a series, ensure it's not duplicated too much in the series list, or limit series list size.
  // For simplicity, we'll just show up to 3-4 other episodes from the series.
  Object.keys(podcastSeries).forEach(seriesKey => {
    podcastSeries[seriesKey] = podcastSeries[seriesKey]
                                .filter(ep => ep.id !== featuredEpisode?.id) // remove featured if it's there
                                .slice(0, 4); // limit to 4 other episodes
     // If the featured episode belongs to this series and wasn't added, add it to the beginning for display in its own series section
    if (featuredEpisode && featuredEpisode.seriesTitle === seriesKey && !podcastSeries[seriesKey].find(e => e.id === featuredEpisode.id)) {
        // podcastSeries[seriesKey].unshift(featuredEpisode); // Option: add featured to its series too
    }
  });


  return (
    <div className="container mx-auto px-2 sm:px-4 py-6 md:py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-primary border-l-4 border-primary pl-3">
        PODCAST
      </h1>

      {/* Featured Episode Section */}
      {featuredEpisode && (
        <section className="mb-8 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center bg-card p-4 md:p-6 rounded-lg shadow-lg border border-border/50">
            <div className="relative aspect-[16/10] md:aspect-auto md:h-full min-h-[250px] rounded-md overflow-hidden group">
              <Link href={`/podcast/${featuredEpisode.slug}`}>
                <Image
                  src={featuredEpisode.imageUrl}
                  alt={featuredEpisode.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={featuredEpisode.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <PlayCircle size={72} className="text-white/90 group-hover:text-white transition-colors drop-shadow-xl" />
                </div>
              </Link>
            </div>
            <div className="flex flex-col justify-center">
              <Badge variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs uppercase px-1.5 py-0.5 leading-tight mb-2 self-start">
                {featuredEpisode.seriesTitle}
              </Badge>
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground leading-tight">
                <Link href={`/podcast/${featuredEpisode.slug}`} className="hover:text-primary transition-colors">
                  {featuredEpisode.title}
                </Link>
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-3 line-clamp-3 md:line-clamp-4">
                {featuredEpisode.shortDescription || featuredEpisode.description}
              </p>
              <div className="text-xs text-muted-foreground mb-4">
                <span>{featuredEpisode.publishDate}</span> &bull; <span>{featuredEpisode.duration}</span>
              </div>
              <Button asChild size="lg" className="self-start">
                <Link href={`/podcast/${featuredEpisode.slug}`}>
                  <PlayCircle className="mr-2 h-5 w-5" /> Bölümü Dinle
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Podcast Series Sections */}
      {Object.entries(podcastSeries).map(([seriesTitle, episodes]) => {
        if (episodes.length === 0 && seriesTitle !== featuredEpisode?.seriesTitle) return null; // Don't show empty series unless it's the featured one (which might be handled above)
        
        // If featured episode is the only one in its series, we might not need to repeat the series title if it was handled above.
        // However, TRT site does show the series again. So we will list.
        const displayEpisodes = episodes.filter(ep => ep.id !== featuredEpisode?.id).slice(0,4);
        if (displayEpisodes.length === 0 && seriesTitle === featuredEpisode?.seriesTitle) return null; // if only featured was in this series, and it's already displayed


        return (
          <section key={seriesTitle} className="mb-8 md:mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-foreground">{seriesTitle}</h2>
              <Button variant="link" asChild className="text-primary hover:underline">
                {/* Link to a potential series page or just show all for this series */}
                <Link href={`/podcast?series=${episodes[0]?.seriesSlug || ''}`}>
                  Tüm Bölümler <ChevronRight size={18} className="ml-1" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {displayEpisodes.map(episode => (
                <PodcastCard key={episode.id} episode={episode} />
              ))}
            </div>
          </section>
        );
      })}
      
      <div className="text-center mt-8">
        <Button size="lg" variant="outline">
          <Link href="/podcast?all=true">Tüm Podcastleri Gör</Link>
        </Button>
      </div>
    </div>
  );
}
