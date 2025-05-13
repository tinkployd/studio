
'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PLACEHOLDER_PODCASTS, type PodcastEpisode } from '@/constants';
import PodcastCard from '@/components/podcast/podcast-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Play, Pause, Volume2, Maximize2, Share2, Clock, CalendarDays, Headphones, ChevronRight, ChevronLeft
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';


export default function PodcastDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [episode, setEpisode] = useState<PodcastEpisode | null>(null);
  const [otherEpisodes, setOtherEpisodes] = useState<PodcastEpisode[]>([]);
  const [recommendedPodcasts, setRecommendedPodcasts] = useState<PodcastEpisode[]>([]);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.75);


  useEffect(() => {
    const foundEpisode = PLACEHOLDER_PODCASTS.find(ep => ep.slug === slug);
    setEpisode(foundEpisode || null);

    if (foundEpisode) {
      const others = PLACEHOLDER_PODCASTS.filter(
        ep => ep.seriesSlug === foundEpisode.seriesSlug && ep.id !== foundEpisode.id
      ).slice(0, 4);
      setOtherEpisodes(others);

      const recommended = PLACEHOLDER_PODCASTS.filter(
        ep => ep.seriesSlug !== foundEpisode.seriesSlug && ep.id !== foundEpisode.id
      ).slice(0, 4); // Simple recommendation: different series
      setRecommendedPodcasts(recommended);
    }
  }, [slug]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('play', () => setIsPlaying(true));
    audio.addEventListener('pause', () => setIsPlaying(false));
    audio.addEventListener('ended', () => setIsPlaying(false));


    // Set initial volume
    audio.volume = volume;

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('play', () => setIsPlaying(true));
      audio.removeEventListener('pause', () => setIsPlaying(false));
      audio.removeEventListener('ended', () => setIsPlaying(false));

    }
  }, [episode, volume]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(error => console.error("Error playing audio:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };


  if (!episode) {
    return (
      <div className="container mx-auto px-2 sm:px-4 py-6 md:py-8 text-center">
        <p>Podcast bölümü bulunamadı.</p>
        <Link href="/podcast" className="text-primary hover:underline mt-4 inline-block">
          Tüm podcastlere geri dön
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-2 sm:px-4 py-6 md:py-8">
      {/* Breadcrumbs */}
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/podcast" className="hover:text-primary">Podcast</Link>
        <span className="mx-2">/</span>
        <Link href={`/podcast?series=${episode.seriesSlug}`} className="hover:text-primary">{episode.seriesTitle}</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{episode.title}</span>
      </nav>

      <article>
        <header className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{episode.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-4 gap-y-1">
            <span className="flex items-center"><CalendarDays size={14} className="mr-1.5" /> {episode.publishDate}</span>
            <span className="flex items-center"><Clock size={14} className="mr-1.5" /> {episode.duration} DK</span>
            {episode.listenCount && <span className="flex items-center"><Headphones size={14} className="mr-1.5" /> {episode.listenCount.toLocaleString()} Dinlenme</span>}
          </div>
        </header>

        {/* Player Section */}
        <section className="mb-6 md:mb-8 p-4 bg-card rounded-lg shadow-lg border border-border/50">
          <div className="relative aspect-[16/9] w-full max-w-3xl mx-auto rounded-md overflow-hidden mb-4 group">
            <Image
              src={episode.imageUrl}
              alt={episode.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 640px"
              objectFit="cover"
              data-ai-hint={episode.imageHint || 'podcast cover art'}
              className="transition-transform duration-300 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          </div>
          
          <audio ref={audioRef} src={episode.audioUrl} className="hidden" preload="metadata" />

          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 md:gap-4 mb-2">
              <Button onClick={togglePlayPause} variant="ghost" size="icon" className="w-12 h-12 md:w-14 md:h-14 text-primary hover:bg-primary/10">
                {isPlaying ? <Pause size={32} /> : <Play size={32} className="fill-primary" />}
              </Button>
              <div className="flex-grow">
                <Slider
                    value={[currentTime]}
                    max={duration || 0}
                    step={1}
                    onValueChange={handleSeek}
                    className="w-full h-2 group"
                    aria-label="Ses seviyesi ilerlemesi"
                />
              </div>
              <span className="text-xs md:text-sm text-muted-foreground tabular-nums w-20 text-right">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="hover:bg-muted/50">
                        <Share2 size={18} />
                        <span className="sr-only">Paylaş</span>
                    </Button>
                </div>
                <div className="flex items-center gap-2 w-32">
                    <Volume2 size={20} />
                    <Slider
                        value={[volume]}
                        max={1}
                        step={0.01}
                        onValueChange={handleVolumeChange}
                        className="w-full h-1.5"
                        aria-label="Ses seviyesi"
                    />
                </div>
            </div>
          </div>
        </section>
        
        <Separator className="my-6 md:my-8" />

        <section className="prose prose-sm sm:prose-base max-w-none text-foreground dark:prose-invert mb-6 md:mb-8">
          <h2 className="text-xl font-semibold mb-3 text-primary">Bölüm Açıklaması</h2>
          <p>{episode.description}</p>
        </section>

        {/* Social Share placeholder */}
        <div className="flex items-center gap-2 mb-6 md:mb-8">
          <span className="text-sm font-medium text-muted-foreground">Paylaş:</span>
          <Button variant="outline" size="icon" aria-label="Facebook'ta paylaş"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></Button>
          <Button variant="outline" size="icon" aria-label="Twitter'da paylaş"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></Button>
          <Button variant="outline" size="icon" aria-label="LinkedIn'de paylaş"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></Button>
        </div>

      </article>

      {/* Other Episodes from the same series */}
      {otherEpisodes.length > 0 && (
        <section className="mt-8 md:mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            {episode.seriesTitle} Serisinden Diğer Bölümler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {otherEpisodes.map(ep => (
              <PodcastCard key={ep.id} episode={ep} />
            ))}
          </div>
        </section>
      )}

      {/* Recommended Podcasts */}
      {recommendedPodcasts.length > 0 && (
        <section className="mt-8 md:mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Önerilen Podcastler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {recommendedPodcasts.map(ep => (
              <PodcastCard key={ep.id} episode={ep} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
