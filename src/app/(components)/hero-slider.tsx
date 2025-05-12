
'use client';

import type { Article as ArticleType } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface HeroSliderProps {
  articles: ArticleType[]; // Expecting 10 articles
}

const SLIDER_INTERVAL = 5000; // 5 seconds
const NUM_THUMBNAILS = 9;

export default function HeroSlider({ articles: initialArticles }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveringSlider, setIsHoveringSlider] = useState(false);

  // Ensure we always work with a fixed number of articles for the slider logic (e.g., first 10)
  const articles = initialArticles.slice(0, 10);

  const handleSetActiveIndex = useCallback((index: number) => {
    if (index >= 0 && index < articles.length) {
      setActiveIndex(index);
    }
  }, [articles.length]);

  useEffect(() => {
    if (isHoveringSlider || articles.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, SLIDER_INTERVAL);

    return () => clearInterval(interval);
  }, [articles, isHoveringSlider]); // articles in dep array to handle prop changes

  if (!articles || articles.length === 0) {
    return (
      <div className="my-6 md:my-8 text-center p-10 bg-card shadow-lg rounded-lg">
        No articles to display in slider.
      </div>
    );
  }

  const currentArticle = articles[activeIndex];
  // Thumbnails will represent the first NUM_THUMBNAILS articles.
  // If activeIndex is beyond NUM_THUMBNAILS-1, no specific thumbnail will be "active" visually through this mapping.
  const thumbnailDisplayArticles = articles.slice(0, NUM_THUMBNAILS);

  return (
    <section 
      className="my-6 md:my-8"
      onMouseEnter={() => setIsHoveringSlider(true)}
      onMouseLeave={() => setIsHoveringSlider(false)}
    >
      {/* Main Article Display */}
      <div className="grid lg:grid-cols-12 gap-0 bg-card shadow-lg rounded-lg overflow-hidden">
        <div className="lg:col-span-8 relative aspect-[16/10] lg:aspect-auto h-64 lg:h-full min-h-[300px] lg:min-h-[450px]">
          <Link href={currentArticle.sourceUrl || '#'} target={currentArticle.sourceUrl ? "_blank" : "_self"} rel={currentArticle.sourceUrl ? "noopener noreferrer" : undefined} className="block w-full h-full group">
            <Image
              src={currentArticle.imageUrl}
              alt={currentArticle.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 66vw"
              objectFit="cover"
              data-ai-hint={currentArticle.imageHint || 'news media'}
              priority={activeIndex === 0}
              key={currentArticle.id} // For re-render on change
              className="transition-transform duration-300 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
        <div className="lg:col-span-4 p-6 md:p-8 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground leading-tight">
            <Link href={currentArticle.sourceUrl || '#'} target={currentArticle.sourceUrl ? "_blank" : "_self"} rel={currentArticle.sourceUrl ? "noopener noreferrer" : undefined} className="hover:text-primary transition-colors">
              {currentArticle.title}
            </Link>
          </h1>
          <p className="mb-5 text-muted-foreground text-base md:text-lg line-clamp-4 md:line-clamp-5">
            <Link href={currentArticle.sourceUrl || '#'} target={currentArticle.sourceUrl ? "_blank" : "_self"} rel={currentArticle.sourceUrl ? "noopener noreferrer" : undefined} className="hover:text-primary/80 transition-colors">
              {currentArticle.content.substring(0, 220) + (currentArticle.content.length > 220 ? '...' : '')}
            </Link>
          </p>
          {/* Placeholder for potential bullet points if added to ArticleType in future */}
        </div>
      </div>

      {/* Thumbnails / Progress Bars */}
      {thumbnailDisplayArticles.length > 0 && (
        <div 
          className="mt-2 grid grid-cols-5 sm:grid-cols-9 gap-1" // 9 columns to match image
        >
          {thumbnailDisplayArticles.map((article, index) => (
            <button
              key={`thumb-${article.id}`}
              onClick={() => handleSetActiveIndex(index)}
              onMouseEnter={() => handleSetActiveIndex(index)}
              className={cn(
                "h-2 md:h-2.5 rounded-sm transition-all duration-150 ease-in-out focus:outline-none focus:ring-1 focus:ring-primary focus:ring-opacity-75",
                "bg-primary/30 hover:bg-primary/50 relative overflow-hidden" // Added relative and overflow-hidden
              )}
              aria-label={`View article: ${article.title}`}
            >
              <div 
                className={cn(
                  "absolute top-0 left-0 h-full rounded-sm bg-primary",
                )}
                style={{
                  width: '0%', // Start at 0%
                  // Apply animation only if this thumbnail corresponds to the activeIndex
                  animation: activeIndex === index ? `progress-fill ${SLIDER_INTERVAL}ms linear forwards` : 'none',
                }}
                // Key to force re-render and restart animation when this specific thumbnail becomes active
                key={`progress-${article.id}-${activeIndex === index ? 'active' : 'inactive'}-${Date.now()}`} 
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
