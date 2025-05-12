'use client';

import React from 'react';
import Link from 'next/link';

interface NewsItem {
  text: string;
  timestamp?: string;
  link?: string;
}

interface BreakingNewsTickerProps {
  newsItems: NewsItem[];
}

export default function BreakingNewsTicker({ newsItems }: BreakingNewsTickerProps) {
  if (!newsItems || newsItems.length === 0) {
    return null;
  }

  // Duplicate items for seamless marquee effect if there are few items
  const displayItems = newsItems.length < 5 ? [...newsItems, ...newsItems, ...newsItems] : newsItems;


  return (
    <section className="container mx-auto px-2 sm:px-4 my-4 md:my-6">
      <div className="bg-secondary flex items-stretch rounded-md shadow overflow-hidden h-10">
        <div className="bg-primary text-primary-foreground font-bold text-sm uppercase px-3 sm:px-4 flex items-center whitespace-nowrap">
          SON HABERLER
        </div>
        <div className="flex-grow relative overflow-hidden">
          <div className="animate-marquee-medium flex items-center h-full">
            {displayItems.map((item, index) => (
              <Link href={item.link || '#'} key={index} className="flex items-center whitespace-nowrap px-3 sm:px-4 h-full hover:bg-muted transition-colors">
                {item.timestamp && (
                  <span className="text-primary font-semibold text-xs mr-1.5">{item.timestamp}</span>
                )}
                <span className="text-foreground text-sm">{item.text}</span>
              </Link>
            ))}
            {/* Duplicate for seamless loop, ensure key is unique for React */}
             {displayItems.map((item, index) => (
              <Link href={item.link || '#'} key={`dup-${index}`} aria-hidden="true" className="flex items-center whitespace-nowrap px-3 sm:px-4 h-full hover:bg-muted transition-colors">
                {item.timestamp && (
                  <span className="text-primary font-semibold text-xs mr-1.5">{item.timestamp}</span>
                )}
                <span className="text-foreground text-sm">{item.text}</span>
              </Link>
            ))}
          </div>
        </div>
        <Link href="#" className="bg-muted hover:bg-muted/80 text-primary font-semibold text-xs sm:text-sm uppercase px-3 sm:px-4 flex items-center whitespace-nowrap transition-colors">
          Tümü
        </Link>
      </div>
      {/* Removed styled-jsx block as Tailwind handles the animation */}
    </section>
  );
}
