
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Article } from '@/constants';
import ArticleSummaryClient from '@/app/(components)/article-summary-client';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  article: Article;
  layout?: 'default' | 'hero' | 'featured' | 'compact-vertical'; // Added compact-vertical layout
}

export default function ArticleCard({ article, layout = 'default' }: ArticleCardProps) {
  const { title, category, imageUrl, imageHint, content, publishDate, sourceUrl } = article;

  const isHero = layout === 'hero';
  const isFeatured = layout === 'featured';
  const isCompactVertical = layout === 'compact-vertical';

  // Conditional classes based on layout
  const cardClasses = cn(
    "overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col rounded-lg border border-border/70",
    isCompactVertical && "shadow-sm hover:shadow-md" // Less shadow for compact card
  );

  const contentClasses = cn(
    "p-3 md:p-4 flex-grow flex flex-col",
    isCompactVertical && "p-2 md:p-3" // Less padding for compact card
  );

  const titleClasses = cn(
    "leading-tight font-bold mb-1",
    isHero ? 'text-xl md:text-2xl' :
    isFeatured ? 'text-md md:text-lg' :
    isCompactVertical ? 'text-sm md:text-base' : // Smaller title for compact
    'text-base md:text-lg' // Default layout title size
  );

  const imageAspectClass = cn(
     "block relative group",
     isCompactVertical ? "aspect-[16/10]" : "aspect-video" // Adjust aspect ratio if needed
  );


  return (
    <Card className={cardClasses}>
      <CardHeader className="p-0">
        <Link href={sourceUrl || "#"} target={sourceUrl ? "_blank" : "_self"} rel={sourceUrl ? "noopener noreferrer" : undefined} className={imageAspectClass}>
          <Image
            src={imageUrl}
            alt={title}
            fill // Use fill instead of layout="fill"
            sizes={
                isCompactVertical ? "(max-width: 768px) 50vw, 33vw" :
                layout === 'default' ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw" : // Adjusted for 4 columns in default
                "(max-width: 768px) 100vw, 50vw"
            } // Adjust sizes for different layouts
            objectFit="cover"
            className="rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={imageHint}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
        </Link>
      </CardHeader>
      <CardContent className={contentClasses}>
        <div className={cn("mb-1.5 flex items-center", isCompactVertical || layout === 'default' ? "justify-start" : "justify-between")}> {/* Align badge left for compact and default */}
          <Badge variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs uppercase px-1.5 py-0.5 leading-tight">
            {category}
          </Badge>
          {/* Hide date in compact vertical AND default layout as per request */}
          {publishDate && !isCompactVertical && layout !== 'default' && (
            <div className="text-xs text-muted-foreground flex items-center">
              <Clock size={11} className="mr-0.5" />
              {publishDate}
            </div>
          )}
        </div>
        <CardTitle className={titleClasses}>
          <Link href={sourceUrl || "#"} target={sourceUrl ? "_blank" : "_self"} rel={sourceUrl ? "noopener noreferrer" : undefined} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </CardTitle>

        {/* Content/Summary based on layout - Removed for 'default' */}
        {/* {layout === 'default' && (
           // Removed ArticleSummaryClient for default layout
        )} */}
        {isFeatured && (
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2 md:line-clamp-2 flex-grow">{content.substring(0, 100) + (content.length > 100 ? '...' : '')}</p>
        )}
         {isHero && (
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2 md:line-clamp-3 flex-grow">{content}</p>
        )}
         {(isCompactVertical || layout === 'default') && (
           // No description/summary for compact vertical or default layout
           <div className="flex-grow"></div> // Ensure it takes remaining space
         )}


      </CardContent>
      {/* CardFooter is kept for structure but might be empty */}
      <CardFooter className={cn("pt-0 mt-auto", contentClasses /* Use same padding as content for consistency */)}>
        {/* Footer content can be added here if needed per layout */}
      </CardFooter>
    </Card>
  );
}
