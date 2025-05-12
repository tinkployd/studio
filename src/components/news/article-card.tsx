
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Article } from '@/constants';
import ArticleSummaryClient from '@/app/(components)/article-summary-client';
import { Clock } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  layout?: 'default' | 'hero' | 'featured';
}

export default function ArticleCard({ article, layout = 'default' }: ArticleCardProps) {
  const { title, category, imageUrl, imageHint, content, publishDate, sourceUrl } = article;

  const isHero = layout === 'hero';
  const isFeatured = layout === 'featured';

  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col rounded-lg border border-border/70">
      <CardHeader className="p-0">
        <Link href={sourceUrl || "#"} target={sourceUrl ? "_blank" : "_self"} rel={sourceUrl ? "noopener noreferrer" : undefined} className="block relative group aspect-video">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={imageHint}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
        </Link>
      </CardHeader>
      <CardContent className={`p-3 md:p-4 flex-grow flex flex-col`}>
        <div className="mb-1.5 flex items-center justify-between">
          <Badge variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs uppercase px-1.5 py-0.5 leading-tight">
            {category}
          </Badge>
          {publishDate && (
            <div className="text-xs text-muted-foreground flex items-center">
              <Clock size={11} className="mr-0.5" />
              {publishDate}
            </div>
          )}
        </div>
        <CardTitle className={`leading-tight ${isHero ? 'text-xl md:text-2xl' : (isFeatured ? 'text-md md:text-lg' : 'text-base md:text-lg')} font-bold mb-1`}>
          <Link href={sourceUrl || "#"} target={sourceUrl ? "_blank" : "_self"} rel={sourceUrl ? "noopener noreferrer" : undefined} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </CardTitle>
        
        {layout === 'default' && <ArticleSummaryClient articleContent={content.substring(0,150) + "..."} sourceUrl={sourceUrl} />}
        
        {isFeatured && (
          // For featured, show a shorter summary, or let the title and image speak
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2 md:line-clamp-2 flex-grow">{content.substring(0, 100) + (content.length > 100 ? '...' : '')}</p>
        )}
         {isHero && (
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2 md:line-clamp-3 flex-grow">{content}</p>
        )}

      </CardContent>
      {(isHero || isFeatured) && (
        <CardFooter className="p-3 md:p-4 pt-0 mt-auto">
           <Link href={sourceUrl || "#"} target={sourceUrl ? "_blank" : "_self"}  rel={sourceUrl ? "noopener noreferrer" : undefined} className="text-primary hover:underline text-sm font-medium">
            Devamını Oku &rarr;
          </Link>
        </CardFooter>
      )}
       {layout === 'default' && !isHero && !isFeatured && (
         <CardFooter className="p-3 md:p-4 pt-0 mt-auto">
            {/* Placeholder for any footer content in default cards if needed */}
         </CardFooter>
       )}
    </Card>
  );
}
