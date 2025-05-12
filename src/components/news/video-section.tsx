
import type { Video } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import VideoCard from './video-card';
import { PlayCircle } from 'lucide-react';

interface VideoSectionProps {
  mainVideo: Video;
  thumbnailVideos: Video[];
}

export default function VideoSection({ mainVideo, thumbnailVideos }: VideoSectionProps) {
  const url = mainVideo.videoUrl || mainVideo.sourceUrl || '#';

  return (
    <section className="my-8 md:my-12">
      <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center">
        <span className="w-3 h-6 bg-primary mr-3"></span> {/* Red square icon */}
        Videolar
      </h2>

      {/* Main Video Layout - Updated */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-6 bg-primary rounded-lg overflow-hidden shadow-lg">
        {/* Left: Video Details (Red Background) */}
        <div className="order-2 lg:order-1 flex flex-col justify-center"> {/* Added flex utilities */}
           <VideoCard video={mainVideo} layout="main-featured" />
        </div>

        {/* Right: Main Video Thumbnail */}
        <div className="relative aspect-video order-1 lg:order-2 group">
           <Link href={url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
             <Image
               src={mainVideo.thumbnailUrl}
               alt={mainVideo.title}
               fill
               sizes="(max-width: 1024px) 100vw, 50vw"
               objectFit="cover"
               className="group-hover:opacity-90 transition-opacity duration-300"
               data-ai-hint={mainVideo.imageHint}
             />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
             {/* Play Icon Overlay */}
             <div className="absolute inset-0 flex items-center justify-center">
               <PlayCircle size={64} className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
             </div>
           </Link>
         </div>
      </div>

      {/* Thumbnail Videos */}
      {thumbnailVideos.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {thumbnailVideos.map(video => (
            <VideoCard key={video.id} video={video} layout="thumbnail" />
          ))}
        </div>
      )}

       {/* "Tüm Videolar" Link */}
       <div className="text-right mt-6">
          <Link href="#" className="text-primary hover:underline text-sm font-medium">
             Tüm Videolar &rarr;
          </Link>
       </div>
    </section>
  );
}

