
'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PLACEHOLDER_VIDEOS, VIDEO_CATEGORIES, type Video as VideoType } from '@/constants';
import VideoCard from '@/components/news/video-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, ChevronLeft, ChevronRight, CalendarDays, Clock, Eye, Share2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Define social icons locally as they are simple SVGs and used in multiple detail pages
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;


export default function VideoDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [video, setVideo] = useState<VideoType | null>(null);
  const [otherVideos, setOtherVideos] = useState<VideoType[]>([]);
  const [relatedVideos, setRelatedVideos] = useState<VideoType[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>(VIDEO_CATEGORIES[0]); // Default "Tümü"

  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const foundVideo = PLACEHOLDER_VIDEOS.find(v => v.slug === slug);
    setVideo(foundVideo || null);

    if (foundVideo) {
      // For the horizontal scroller (e.g., next 6 videos, excluding current)
      setOtherVideos(
        PLACEHOLDER_VIDEOS.filter(v => v.id !== foundVideo.id).slice(0, 6)
      );
      // For "Diğer Videolar" grid (can be all videos or filtered)
      setRelatedVideos(PLACEHOLDER_VIDEOS.filter(v => v.id !== foundVideo.id));
    }
  }, [slug]);

  const handleFilterChange = (category: string) => {
    setSelectedFilter(category);
    if (video) {
      if (category === VIDEO_CATEGORIES[0]) { // "Tümü"
        setRelatedVideos(PLACEHOLDER_VIDEOS.filter(v => v.id !== video.id));
      } else {
        setRelatedVideos(PLACEHOLDER_VIDEOS.filter(v => v.category === category && v.id !== video.id));
      }
    }
  };

  const scrollScroller = (direction: 'left' | 'right') => {
    if (scrollerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!video) {
    return (
      <div className="bg-zinc-900 min-h-screen flex items-center justify-center text-zinc-100">
        <div className="text-center">
          <p className="text-xl">Video bulunamadı.</p>
          <Link href="/videolar" className="text-red-500 hover:underline mt-4 inline-block">
            Tüm Videolara Geri Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 py-0"> {/* Full bleed background */}
      {/* Main Video Player Section */}
      <section className="relative w-full h-[50vh] md:h-[70vh] bg-black">
        <Image
          src={video.thumbnailUrl}
          alt={video.title}
          fill
          priority
          className="object-cover opacity-70"
          data-ai-hint={video.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <a href={video.videoUrl || video.sourceUrl || '#'} target="_blank" rel="noopener noreferrer">
            <PlayCircle size={80} className="text-white/80 hover:text-white transition-opacity cursor-pointer drop-shadow-xl" />
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12 ">
          <div className="container mx-auto"> {/* Added container for content width control */}
            <Badge variant="destructive" className="bg-red-600 text-white text-xs uppercase px-2 py-1 rounded-sm font-semibold mb-2 self-start tracking-wider">
              Video Galeri
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 md:mb-3 leading-tight max-w-3xl">
              {video.title}
            </h1>
            {video.description && <p className="text-sm md:text-base text-gray-300 mb-2 md:mb-3 max-w-2xl line-clamp-2 md:line-clamp-3">{video.description}</p>}
            <div className="flex flex-wrap items-center text-xs text-gray-400 gap-x-3 gap-y-1 mb-3">
              {video.publishDate && <span className="flex items-center"><CalendarDays size={14} className="mr-1" /> {video.publishDate}</span>}
              {video.duration && <span className="flex items-center"><Clock size={14} className="mr-1" /> {video.duration}</span>}
              {/* Add TRT Haber source if available */}
            </div>
            <div className="mt-4 flex items-center gap-3">
                <Button variant="ghost" size="icon" aria-label="Facebook'ta paylaş" className="bg-zinc-800 hover:bg-zinc-700 rounded-full w-9 h-9">
                  <FacebookIcon />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Twitter'da paylaş" className="bg-zinc-800 hover:bg-zinc-700 rounded-full w-9 h-9">
                  <TwitterIcon />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Daha fazla paylaşım seçeneği" className="bg-zinc-800 hover:bg-zinc-700 rounded-full w-9 h-9">
                  <Share2 size={18} className="text-white"/>
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Thumbnail Scroller "SIRADAKİ VİDEOLAR" */}
      {otherVideos.length > 0 && (
        <section className="py-6 md:py-8 bg-red-700 relative">
          <div className="container mx-auto px-0 sm:px-4">
          <h2 className="text-xl font-bold text-white mb-3 px-4 md:px-0">SIRADAKİ VİDEOLAR</h2>
            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-red-600 hidden md:flex"
                onClick={() => scrollScroller('left')}
                aria-label="Önceki videolar"
              >
                <ChevronLeft size={28}/>
              </Button>
              <ScrollArea className="w-full whitespace-nowrap">
                 <div ref={scrollerRef} className="flex space-x-3 md:space-x-4 py-2 px-4 md:px-12 overflow-x-auto no-scrollbar">
                    {otherVideos.map((item, index) => (
                    <Link key={item.id} href={`/videolar/${item.slug}`} className="flex-shrink-0 w-[200px] sm:w-[220px] md:w-[250px] group">
                        <div className="bg-red-700 hover:bg-red-800/50 transition-colors duration-200 text-white rounded-lg overflow-hidden h-full flex flex-col">
                        <div className="flex items-start p-3">
                            <span className="text-4xl font-bold text-white/70 mr-3">{index + 1}</span>
                            <div className="relative aspect-video w-full h-24 md:h-28 rounded overflow-hidden">
                            <Image
                                src={item.thumbnailUrl}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 150px, 200px"
                                data-ai-hint={item.imageHint || "video thumbnail"}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                <PlayCircle size={36} className="text-white/70 group-hover:text-white transition-all" />
                            </div>
                            </div>
                        </div>
                        <h3 className="text-xs md:text-sm font-semibold text-white mt-1 px-3 pb-3 line-clamp-2 group-hover:text-red-200 transition-colors">
                            {item.title}
                        </h3>
                        </div>
                    </Link>
                    ))}
                 </div>
                 <ScrollBar orientation="horizontal" className="bg-red-800 h-2 [&>div]:bg-red-500"/>
              </ScrollArea>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-red-600 hidden md:flex"
                onClick={() => scrollScroller('right')}
                aria-label="Sonraki videolar"
              >
                <ChevronRight size={28}/>
              </Button>
            </div>
          </div>
        </section>
      )}
      
      {/* "Diğer Videolar" Section */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
          <span className="w-2 h-5 bg-red-600 mr-2.5"></span>
          Diğer Videolar
        </h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {VIDEO_CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedFilter === category ? "destructive" : "outline"}
              onClick={() => handleFilterChange(category)}
              className={selectedFilter === category 
                ? "bg-red-600 hover:bg-red-700 text-white" 
                : "bg-zinc-800 hover:bg-zinc-700 text-gray-300 border-zinc-700 hover:border-zinc-600"}
            >
              {category}
            </Button>
          ))}
        </div>
        {relatedVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
                {relatedVideos.map((item) => (
                    <VideoCard key={item.id} video={item} layout="thumbnail-dark" />
                ))}
            </div>
        ) : (
            <p className="text-center text-gray-500 text-lg">Bu kategoride başka video bulunmamaktadır.</p>
        )}
      </section>
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; 
          scrollbar-width: none; 
        }
      `}</style>
    </div>
  );
}

