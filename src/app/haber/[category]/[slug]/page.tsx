
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PLACEHOLDER_ARTICLES, type Article as ArticleType } from '@/constants';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, ChevronRight, Share2, Printer, MessageCircle, Minus, Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import ArticleSummaryClient from '@/app/(components)/article-summary-client';

// Placeholder social icons, replace with actual or lucide if available and styled
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;


export default function ArticleDetailPage() {
  const params = useParams();
  const categorySlug = params.category as string;
  const articleSlug = params.slug as string;
  const [article, setArticle] = useState<ArticleType | null>(null);
  const [fontSize, setFontSize] = useState(16); // Default font size in px

  useEffect(() => {
    // In a real app, you'd fetch the article by slug from an API
    const foundArticle = PLACEHOLDER_ARTICLES.find(
      (a) => a.slug === articleSlug && a.category.toLowerCase() === categorySlug.toLowerCase()
    );
     // Fallback: if category doesn't match but slug does (e.g. if category in URL is slightly different)
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

  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-8"> {/* Centered content */}
        <article>
          {/* Breadcrumbs */}
          <nav className="mb-4 text-sm text-muted-foreground" aria-label="breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
                <ChevronRight size={16} className="mx-1" />
              </li>
              <li className="flex items-center">
                <Link href={`/haber/${article.category.toLowerCase()}`} className="hover:text-primary">{article.category}</Link>
                <ChevronRight size={16} className="mx-1" />
              </li>
              <li className="flex items-center">
                <span className="text-foreground line-clamp-1" title={article.title}>{article.title.substring(0,50)}...</span>
              </li>
            </ol>
          </nav>

          <Badge variant="default" className="bg-primary text-primary-foreground text-xs uppercase px-2 py-1 rounded-sm font-semibold mb-3 self-start tracking-wider">
            {article.category}
          </Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight">
            {article.title}
          </h1>
          
          {article.subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              {article.subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-between text-sm text-muted-foreground gap-x-4 gap-y-2 mb-6">
            <div className="flex items-center gap-x-4">
                {article.publishDate && <span className="flex items-center"><CalendarDays size={15} className="mr-1.5" /> Yayın: {article.publishDate}</span>}
                {/* Add update date if available */}
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={decreaseFontSize} aria-label="Yazı tipini küçült" className="text-muted-foreground hover:text-primary"><Minus size={18}/></Button>
                <Button variant="ghost" size="icon" onClick={increaseFontSize} aria-label="Yazı tipini büyüt" className="text-muted-foreground hover:text-primary"><Plus size={18}/></Button>
                <Button variant="ghost" size="icon" onClick={() => window.print()} aria-label="Yazdır" className="text-muted-foreground hover:text-primary"><Printer size={18}/></Button>
                <Button variant="ghost" size="icon" aria-label="Yorumlar" className="text-muted-foreground hover:text-primary"><MessageCircle size={18}/></Button>
            </div>
          </div>
          
          <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg mb-8">
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
          <div className="flex items-center justify-center gap-3 mb-8 py-3 border-y">
            <Button variant="outline" size="sm" className="flex items-center gap-1.5 text-sm"><FacebookIcon /> Facebook</Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1.5 text-sm"><TwitterIcon/> Twitter</Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1.5 text-sm"><LinkedinIcon/> LinkedIn</Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1.5 text-sm"><MailIcon/> E-posta</Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1.5 text-sm"><Share2 size={16}/> Diğer</Button>
          </div>

          <div
            className="prose prose-lg max-w-none dark:prose-invert text-foreground article-content"
            style={{ fontSize: `${fontSize}px` }}
            dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }} // Basic rendering, consider markdown parser for richer content
          />
          
          {/* Article Summary Client Component Integration */}
          <div className='my-6'>
            <h3 className='text-xl font-semibold mb-2 text-primary'>Haber Özeti</h3>
            <ArticleSummaryClient articleContent={article.content} sourceUrl={article.sourceUrl} />
          </div>


          {article.tags && article.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-lg font-semibold text-foreground mb-3">Etiketler</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <Link key={tag} href={`/haber/etiket/${tag.toLowerCase()}`}>
                    <Badge variant="secondary" className="hover:bg-muted transition-colors">{tag}</Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Related Articles Section (Placeholder) */}
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
            line-height: 1.8; /* Adjust line height for readability */
            margin-bottom: 1.25em;
        }
        .article-content strong {
            color: hsl(var(--foreground)); /* Ensure strong text is readable */
        }
        /* Add more specific styles for article content if needed */
      `}</style>
    </div>
  );
}
