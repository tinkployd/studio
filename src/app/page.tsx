
import Image from 'next/image';
import Link from 'next/link';
import ArticleCard from '@/components/news/article-card';
import { PLACEHOLDER_ARTICLES, type Article as ArticleType } from '@/constants'; 
import { Button } from '@/components/ui/button';
import BreakingNewsTicker from '@/components/news/breaking-news-ticker';
import SecondaryNav from '@/components/layout/secondary-nav'; 
import HeroSlider from '@/app/(components)/hero-slider'; // Import the new HeroSlider

export default function Home() {
  const articles = PLACEHOLDER_ARTICLES;
  
  // Prepare articles for the HeroSlider (first 10)
  const heroSliderArticles = articles.slice(0, 10);
  
  // Articles for other sections (excluding those used in slider)
  // If PLACEHOLDER_ARTICLES has exactly 10, generalArticles will be empty. Adjust as needed.
  const featuredArticles = articles.slice(heroSliderArticles.length, heroSliderArticles.length + 3); 
  const generalArticles = articles.slice(heroSliderArticles.length + 3); 

  const breakingNewsItems = [
    { text: "Ankara'da motosiklet trafik levhasına çarptı: 2 kişi hayatını kaybetti", timestamp: "00:52", link: "#" },
    { text: "Yeni haftada hava nasıl olacak?", timestamp: "00:37", link: "#" },
    { text: "Fransa'da İslam düşmanlığına tepkiler büyüyor", link: "#" },
    { text: "Ekonomi paketinin detayları açıklandı", timestamp: "23:15", link: "#" },
  ];

  return (
    <div className="container mx-auto px-2 sm:px-4 py-0"> 
      {/* Secondary Navigation */}
      <SecondaryNav />

      {/* Breaking News Ticker */}
      <BreakingNewsTicker newsItems={breakingNewsItems} />
      
      {/* Hero Slider Section */}
      <HeroSlider articles={heroSliderArticles} />

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="my-8 md:my-12">
          <h2 className="text-2xl font-bold mb-4 text-primary border-l-4 border-primary pl-3">Öne Çıkanlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map(article => (
              <ArticleCard key={article.id} article={article} layout="featured" />
            ))}
          </div>
        </section>
      )}
      
      {/* General News Grid */}
      {generalArticles.length > 0 && (
        <section className="mt-8 md:mt-12">
          <h2 className="text-2xl font-bold mb-6 text-primary border-l-4 border-primary pl-3">Tüm Haberler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {generalArticles.map(article => (
              <ArticleCard key={article.id} article={article} layout="default" />
            ))}
          </div>
        </section>
      )}

      {/* Category Sections (Example) */}
      {['EKONOMİ', 'SPOR', 'BİLİM TEKNOLOJİ'].map(category => {
        // Ensure category articles are not from heroSliderArticles if they are distinct sets
        const availableArticlesForCategories = articles.slice(heroSliderArticles.length);
        const categoryArticles = availableArticlesForCategories.filter(a => a.category === category).slice(0,3);
        
        if (categoryArticles.length === 0) return null;
        return (
          <section key={category} className="mt-8 md:mt-12">
            <h2 className="text-2xl font-bold mb-6 text-primary border-l-4 border-primary pl-3">
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
