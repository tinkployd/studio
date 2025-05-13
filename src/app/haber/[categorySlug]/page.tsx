
'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { PLACEHOLDER_ARTICLES, type Article as ArticleType, NAV_LINKS } from '@/constants';
import ArticleCard from '@/components/news/article-card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function CategoryNewsPage() {
  const params = useParams();
  const categorySlug = params.categorySlug as string;

  const navLink = NAV_LINKS.find(link => link.href === `/haber/${categorySlug}`);
  const categoryName = navLink ? navLink.label : categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);
  
  const articles = PLACEHOLDER_ARTICLES.filter(
    article => article.category.toLowerCase() === categoryName.toLowerCase() || 
               article.category.toLowerCase() === categorySlug.toLowerCase() // Fallback to slug if name doesn't match
  );

  const mainArticle = articles.length > 0 ? articles[0] : null;
  const otherArticles = articles.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-4 text-sm text-muted-foreground" aria-label="breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <ChevronRight size={16} className="mx-1" />
          </li>
          <li className="flex items-center">
            <span className="text-foreground">{categoryName} Haberleri</span>
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
        {categoryName} HABERLERİ
      </h1>
      <Separator className="mb-8" />

      {mainArticle && (
        <section className="mb-12">
          <ArticleCard article={mainArticle} layout="hero" />
        </section>
      )}

      {otherArticles.length > 0 ? (
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Diğer {categoryName} Haberleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map((article) => (
              <ArticleCard key={article.id} article={article} layout="default" />
            ))}
          </div>
        </section>
      ) : !mainArticle ? (
        <div className="text-center py-10">
          <p className="text-xl text-muted-foreground">Bu kategoride haber bulunamadı.</p>
          <Button asChild className="mt-4">
            <Link href="/">Ana Sayfaya Dön</Link>
          </Button>
        </div>
      ) : null}

      {/* Pagination Placeholder */}
      {articles.length > 10 && ( // Show pagination if more than 10 articles for example
        <div className="mt-12 flex justify-center">
          <Button variant="outline">Daha Fazla Yükle</Button>
        </div>
      )}
    </div>
  );
}
