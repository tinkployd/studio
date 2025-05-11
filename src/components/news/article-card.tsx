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
      <CardHeader className={isHero ? "p-0" : "p-0"}>
        <div className={`relative ${isHero ? 'aspect-[2/1]' : 'aspect-video'}`}>
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className={isHero ? "rounded-t-lg" : "rounded-t-lg"} // Keep rounded top for all
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className={`p-3 md:p-4 flex-grow flex flex-col`}>
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs uppercase px-2 py-0.5">
            {category}
          </Badge>
          {publishDate && (
            <div className="text-xs text-muted-foreground flex items-center">
              <Clock size={12} className="mr-1" />
              {publishDate}
            </div>
          )}
        </div>
        <CardTitle className={`leading-tight ${isHero ? 'text-xl md:text-2xl' : 'text-base md:text-lg'} font-bold mb-1`}>
          <Link href={sourceUrl || "#"} target={sourceUrl ? "_blank" : "_self"} rel={sourceUrl ? "noopener noreferrer" : undefined} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </CardTitle>
        
        {layout === 'default' && <ArticleSummaryClient articleContent={content.substring(0,150) + "..."} sourceUrl={sourceUrl} />}
        
        {(isHero || isFeatured) && (
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
