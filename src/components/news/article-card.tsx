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
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className={isHero ? "p-0" : "p-4 pb-0"}>
        <div className={`relative ${isHero ? 'aspect-[16/9]' : 'aspect-video'}`}>
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className={`p-4 flex-grow ${isHero ? 'md:p-6' : 'p-4'}`}>
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs uppercase">
            {category}
          </Badge>
          {publishDate && (
            <div className="text-xs text-muted-foreground flex items-center">
              <Clock size={14} className="mr-1" />
              {publishDate}
            </div>
          )}
        </div>
        <CardTitle className={`leading-tight ${isHero ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'} font-bold`}>
          <Link href={sourceUrl || "#"} target={sourceUrl ? "_blank" : "_self"} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </CardTitle>
        {/* Render ArticleSummaryClient only if not hero/featured to save space, or based on specific logic */}
        {layout === 'default' && <ArticleSummaryClient articleContent={content} sourceUrl={sourceUrl} />}
        {/* For hero/featured, content is usually shorter or not shown directly */}
        {(isHero || isFeatured) && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{content}</p>
        )}
      </CardContent>
      {(isHero || isFeatured) && (
        <CardFooter className="p-4 pt-0">
           <Link href={sourceUrl || "#"} target={sourceUrl ? "_blank" : "_self"} className="text-primary hover:underline text-sm font-medium">
            Devamını Oku
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
