
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PLACEHOLDER_VIDEOS, VIDEO_CATEGORIES, type Video as VideoType } from '@/constants';
import VideoCard from '@/components/news/video-card'; // Assuming VideoCard can be used or adapted
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function VideoGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>(VIDEO_CATEGORIES[0]); // Default to "Tümü"

  const filteredVideos = selectedCategory === VIDEO_CATEGORIES[0]
    ? PLACEHOLDER_VIDEOS
    : PLACEHOLDER_VIDEOS.filter(video => video.category === selectedCategory);

  return (
    <div className="bg-gray-900 min-h-screen py-8 text-white">
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Video Galeri</h1>
          <p className="text-lg text-gray-400">En son ve en popüler videoları keşfedin.</p>
        </header>

        {/* Category Filter */}
        <div className="mb-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <span className="text-lg font-semibold">Kategori:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="min-w-[200px] justify-between bg-gray-800 hover:bg-gray-700 border-gray-700 text-white">
                {selectedCategory}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px] bg-gray-800 border-gray-700 text-white">
              <DropdownMenuLabel className="text-gray-400">Kategori Seçin</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-700"/>
              <DropdownMenuRadioGroup value={selectedCategory} onValueChange={setSelectedCategory}>
                {VIDEO_CATEGORIES.map((category) => (
                  <DropdownMenuRadioItem key={category} value={category} className="hover:bg-gray-700 focus:bg-gray-700">
                    {category}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Video Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} layout="thumbnail" />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-500">Bu kategoride video bulunamadı.</p>
          </div>
        )}

        {/* Pagination Placeholder */}
        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="bg-gray-800 hover:bg-gray-700 border-gray-700">Daha Fazla Yükle</Button>
        </div>
      </div>
    </div>
  );
}
