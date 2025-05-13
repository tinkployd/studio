
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { PLACEHOLDER_ARTICLES, type Article as ArticleType } from '@/constants';
import ArticleCard from '@/components/news/article-card';
import { ChevronRight } from 'lucide-react';
import { slugify } from '@/lib/utils';

export default function NewsCategoryPage() {
  const params = useParams();
  const categorySlug = params.categorySlug as string;
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [categoryName, setCategoryName] = useState<string>('');

  useEffect(() => {
    if (categorySlug) {
      const foundArticles = PLACEHOLDER_ARTICLES.filter(
        (a) => slugify(a.category) === categorySlug.toLowerCase()
      );
      setArticles(foundArticles);
      if (foundArticles.length > 0) {
        setCategoryName(foundArticles[0].category);
      } else {
        // Attempt to derive category name from slug if no articles found (e.g. "bilim-teknoloji" -> "Bilim Teknoloji")
        const aName = categorySlug
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        setCategoryName(aName);
      }
    }
  }, [categorySlug]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-4 text-sm text-muted-foreground" aria-label="breadcrumb">
        <ol className="list-none p-0 inline-flex items-center">
          <li className="flex items-center">
            <Link href="/" className="hover:text-primary">ANA SAYFA</Link>
            <ChevronRight size={14} className="mx-1 opacity-70" />
          </li>
          <li className="flex items-center">
            <span className="text-foreground uppercase">{categoryName || categorySlug}</span>
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 border-l-4 border-primary pl-3 uppercase">
        {categoryName || categorySlug} Haberleri
      </h1>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} layout="default" />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-xl text-muted-foreground">Bu kategoride haber bulunamadı.</p>
          <Link href="/" className="text-primary hover:underline mt-4 inline-block">
            Ana Sayfaya Dön
          </Link>
        </div>
      )}

      {/* Placeholder for pagination or load more */}
      {articles.length > 10 && ( // Example condition to show load more
        <div className="mt-12 flex justify-center">
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            Daha Fazla Yükle
          </button>
        </div>
      )}
    </div>
  );
}
