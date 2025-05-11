import ArticleCard from '@/components/news/article-card';
import { PLACEHOLDER_ARTICLES, type Article } from '@/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import BreakingNewsTicker from '@/components/news/breaking-news-ticker';

export default function Home() {
  const articles = PLACEHOLDER_ARTICLES;
  const heroArticle = articles[0];
  const featuredArticles = articles.slice(1, 4);
  const generalArticles = articles.slice(4);

  const breakingNewsItems = [
    "Son Dakika: Ekonomi paketinin detayları açıklandı, piyasalarda hareketlilik sürüyor.",
    "Meteoroloji'den kritik uyarı: Hafta sonu yurt genelinde sağanak yağış bekleniyor.",
    "Yeni eğitim-öğretim yılı için hazırlıklar tamamlandı, okullar Pazartesi açılıyor.",
  ];

  return (
    <div className="container mx-auto px-2 sm:px-4 py-6 md:py-8">
      {/* Hero Section */}
      {heroArticle && (
        <section className="mb-8 md:mb-12">
          <ArticleCard article={heroArticle} layout="hero" />
        </section>
      )}

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary border-l-4 border-accent pl-3">Öne Çıkanlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map(article => (
              <ArticleCard key={article.id} article={article} layout="featured" />
            ))}
          </div>
        </section>
      )}
      
      {/* Breaking News Ticker */}
      <BreakingNewsTicker newsItems={breakingNewsItems} />

      {/* General News Grid */}
      {generalArticles.length > 0 && (
        <section className="mt-8 md:mt-12">
          <h2 className="text-2xl font-bold mb-6 text-primary border-l-4 border-accent pl-3">Tüm Haberler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {generalArticles.map(article => (
              <ArticleCard key={article.id} article={article} layout="default" />
            ))}
          </div>
        </section>
      )}

      {/* Category Sections (Example) */}
      {['EKONOMİ', 'SPOR', 'BİLİM TEKNOLOJİ'].map(category => {
        const categoryArticles = articles.filter(a => a.category === category).slice(0,3);
        if (categoryArticles.length === 0) return null;
        return (
          <section key={category} className="mt-8 md:mt-12">
            <h2 className="text-2xl font-bold mb-6 text-primary border-l-4 border-accent pl-3">
              <Link href="#" className="hover:underline">{category}</Link>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryArticles.map(article => (
                <ArticleCard key={article.id} article={article} layout="default" />
              ))}
            </div>
            <div className="text-right mt-4">
              <Button variant="outline" asChild>
                <Link href="#">Tüm {category} Haberleri &rarr;</Link>
              </Button>
            </div>
          </section>
        );
      })}
    </div>
  );
}
