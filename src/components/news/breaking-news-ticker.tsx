'use client';

import React from 'react';

interface BreakingNewsTickerProps {
  newsItems: string[];
}

export default function BreakingNewsTicker({ newsItems }: BreakingNewsTickerProps) {
  if (!newsItems || newsItems.length === 0) {
    return null;
  }

  return (
    <section className="mb-8 md:mb-12 bg-accent text-accent-foreground p-3 rounded-md shadow-md overflow-hidden">
      <div className="flex items-center">
        <span className="font-bold text-sm uppercase whitespace-nowrap mr-4 py-1 px-2 bg-primary rounded">SON DAKİKA</span>
        <div className="animate-marquee whitespace-nowrap">
          {newsItems.map((news, index) => (
            <span key={index} className="mx-4 text-sm">{news}</span>
          ))}
          {newsItems.map((news, index) => ( // Duplicate for seamless loop
            <span key={`dup-${index}`} className="mx-4 text-sm">{news}</span>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: inline-block; /* Fix for animation with flex items */
        }
      `}</style>
    </section>
  );
}
