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
      {/* Title: "SON HABERLER" */}
      <h1 className="text-xl font-bold text-primary mb-2 uppercase">
        SON HABERLER
      </h1>

      {/* Marquee Bar */}
      <div className="bg-secondary rounded-md shadow-sm overflow-hidden h-10 border border-border/30">
        <div className="flex-grow relative overflow-hidden h-full">
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
      </div>
      
      {/* "Tümü" Link */}
      <div className="text-right mt-2">
        <Link href="#" className="text-primary hover:underline text-sm font-bold uppercase">
          Tümü
        </Link>
      </div>
    </section>
  );
}

