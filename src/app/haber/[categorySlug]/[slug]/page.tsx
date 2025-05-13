
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PLACEHOLDER_ARTICLES, type Article as ArticleType } from '@/constants';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, ChevronRight, Share2, Printer, MessageCircle, Minus, Plus, Mail, Facebook, Twitter as TwitterLucide, Linkedin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import ArticleSummaryClient from '@/app/(components)/article-summary-client';
import ArticleCard from '@/components/news/article-card';

// Using Lucide icons where possible for consistency.
// Custom SVGs can be used if specific branding is needed and Lucide doesn't have a match.

export default function ArticleDetailPage() {
  const params = useParams();
  const categorySlug = params.categorySlug as string; 
  const articleSlug = params.slug as string;
  const [article, setArticle] = useState<ArticleType | null>(null);
  const [fontSize, setFontSize] = useState(16); // Default font size in px

  useEffect(() => {
    const foundArticle = PLACEHOLDER_ARTICLES.find(
      (a) => a.slug === articleSlug && a.category.toLowerCase().replace(/[^a-z0-9]+/g, '-') === categorySlug.toLowerCase()
    );
    const fallbackArticle = PLACEHOLDER_ARTICLES.find(a => a.slug === articleSlug);
    setArticle(foundArticle || fallbackArticle || null);
  }, [articleSlug, categorySlug]);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-xl text-muted-foreground">Haber bulunamadı.</p>
        <Link href="/" className="text-primary hover:underline mt-4 inline-block">
          Ana Sayfaya Dön
        </Link>
      </div>
    );
  }
  
  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12));

  // Splitting date and time for display like TRT
  const formatDisplayDate = (dateStr?: string) => {
    if (!dateStr) return { date: '', time: '' };
    const parts = dateStr.split(' ');
    return { date: parts[0] || '', time: parts[1] || '' };
  };

  const publishDisplay = formatDisplayDate(article.publishDate);
  const updateDisplay = formatDisplayDate(article.updateDate);


  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-8"> {/* Max width set to match common article layouts */}
        <article>
          {/* Breadcrumbs */}
          <nav className="mb-3 text-xs text-muted-foreground" aria-label="breadcrumb">
            <ol className="list-none p-0 inline-flex items-center">
              <li className="flex items-center">
                <Link href="/" className="hover:text-primary">ANA SAYFA</Link>
                <ChevronRight size={14} className="mx-1 opacity-70" />
              </li>
              <li className="flex items-center">
                <Link href={`/haber/${categorySlug}`} className="hover:text-primary uppercase">{article.category}</Link>
                <ChevronRight size={14} className="mx-1 opacity-70" />
              </li>
              <li className="flex items-center">
                <span className="text-foreground line-clamp-1 uppercase" title={article.title}>{article.title.substring(0,35)}...</span>
              </li>
            </ol>
          </nav>

          <Badge variant="default" className="bg-primary text-primary-foreground text-[10px] uppercase px-2 py-0.5 rounded-sm font-bold mb-3 self-start tracking-wider">
            {article.category}
          </Badge>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 leading-tight">
            {article.title}
          </h1>
          
          {article.subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground mb-5">
              {article.subtitle}
            </p>
          )}

          {/* Meta Info: Publish Date, Update Date, Source */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center text-xs text-muted-foreground gap-x-3 gap-y-1 mb-5 border-y py-2.5">
            {article.publishDate && (
              <div className="flex items-center">
                <span className="font-semibold mr-1">YAYINLANMA:</span> {publishDisplay.date} {publishDisplay.time}
              </div>
            )}
            {article.updateDate && (
              <div className="flex items-center">
                <span className="sm:ml-2 font-semibold mr-1">GÜNCELLEME:</span> {updateDisplay.date} {updateDisplay.time}
              </div>
            )}
            {article.sourceAgency && (
              <div className="flex items-center">
                <span className="sm:ml-2 font-semibold mr-1">KAYNAK:</span> {article.sourceAgency}
              </div>
            )}
          </div>
          
          {/* Action Bar: Font Size, Print, Comments */}
          <div className="flex items-center justify-between mb-6 text-muted-foreground">
            <div className="flex items-center gap-1">
                <span className="text-xs font-semibold mr-1">YAZI TİPİ</span>
                <Button variant="outline" size="icon" onClick={decreaseFontSize} aria-label="Yazı tipini küçült" className="h-7 w-7 text-muted-foreground hover:text-primary border-border/70">
                    <Minus size={16}/>
                </Button>
                <Button variant="outline" size="icon" onClick={increaseFontSize} aria-label="Yazı tipini büyüt" className="h-7 w-7 text-muted-foreground hover:text-primary border-border/70">
                    <Plus size={16}/>
                </Button>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={() => window.print()} aria-label="Yazdır" className="h-7 w-7 text-muted-foreground hover:text-primary"><Printer size={18}/></Button>
                <Button variant="ghost" size="icon" aria-label="Yorumlar" className="h-7 w-7 text-muted-foreground hover:text-primary"><MessageCircle size={18}/></Button>
            </div>
          </div>
          
          <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden shadow-lg mb-6 md:mb-8">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px"
              className="object-cover"
              data-ai-hint={article.imageHint}
            />
          </div>
          
          {/* Social Share Bar */}
          <div className="flex items-center justify-start gap-2 mb-6 md:mb-8 py-3 border-y">
            {/* Using Lucide icons for a more consistent look if custom SVGs are not essential */}
            <Button variant="outline" size="sm" className="flex items-center gap-1.5 text-xs px-2.5 py-1 h-auto border-border/70 text-muted-foreground hover:border-primary/50 hover:text-primary">
                <Facebook size={16} /> Facebook
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1.5 text-xs px-2.5 py-1 h-auto border-border/70 text-muted-foreground hover:border-primary/50 hover:text-primary">
                <TwitterLucide size={16}/> Twitter
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1.5 text-xs px-2.5 py-1 h-auto border-border/70 text-muted-foreground hover:border-primary/50 hover:text-primary">
                <Mail size={16}/> E-posta
            </Button>
             {/* Placeholder for WhatsApp - requires specific handling or a library typically */}
            {/* <Button variant="outline" size="sm" className="flex items-center gap-1.5 text-xs px-2.5 py-1 h-auto border-border/70 text-muted-foreground hover:border-primary/50 hover:text-primary">
                <MessageSquare size={16}/> WhatsApp 
            </Button> */}
            <Button variant="outline" size="sm" className="flex items-center gap-1.5 text-xs px-2.5 py-1 h-auto border-border/70 text-muted-foreground hover:border-primary/50 hover:text-primary">
                <Share2 size={16}/> Diğer
            </Button>
          </div>

          <div
            className="prose prose-base max-w-none dark:prose-invert text-foreground article-content selection:bg-primary/20"
            style={{ fontSize: `${fontSize}px` }}
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />
          
          {/* Article Summary Client Component Integration */}
          <div className='my-8 pt-6 border-t'>
            <ArticleSummaryClient articleContent={article.content} sourceUrl={article.sourceUrl} />
          </div>


          {article.tags && article.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase">Etiketler</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <Link key={tag} href={`/haber/etiket/${slugify(tag)}`}>
                    <Badge variant="secondary" className="px-2.5 py-1 text-xs font-normal hover:bg-muted transition-colors text-foreground hover:text-primary rounded-sm"># {tag}</Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Related Articles Section */}
        <Separator className="my-10" />
        <section>
            <h2 className="text-2xl font-bold text-primary mb-6">İlgili Haberler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PLACEHOLDER_ARTICLES.filter(a => a.category === article.category && a.id !== article.id).slice(0,3).map(relatedArticle => (
                    <ArticleCard key={relatedArticle.id} article={relatedArticle} layout="default" />
                ))}
            </div>
        </section>

      </div>
      <style jsx global>{`
        .article-content p {
            line-height: 1.8;
            margin-bottom: 1.5em; /* Increased margin like TRT */
        }
        .article-content p:first-of-type {
            /* font-weight: 600; TRT bolds the first paragraph or lead sentence */
            /* color: hsl(var(--foreground)); */ /* Ensure it's not too muted */
        }
        .article-content strong {
            color: hsl(var(--foreground)); 
        }
        .article-content a {
            color: hsl(var(--primary));
            text-decoration: underline;
            text-decoration-thickness: 1px;
            text-underline-offset: 2px;
        }
        .article-content a:hover {
            color: hsl(var(--primary) / 0.8);
        }
      `}</style>
    </div>
  );
}

// Helper function to slugify tags, you might want to move this to utils or use an existing one
const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};
