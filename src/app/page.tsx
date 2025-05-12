
import Image from 'next/image';
import Link from 'next/link';
import ArticleCard from '@/components/news/article-card';
import { PLACEHOLDER_ARTICLES, type Article as ArticleType } from '@/constants'; 
import { Button } from '@/components/ui/button';
import BreakingNewsTicker from '@/components/news/breaking-news-ticker';
import SecondaryNav from '@/components/layout/secondary-nav'; 
import HeroSlider from '@/app/(components)/hero-slider';
import CurrencyTicker from '@/components/news/currency-ticker';

export default function Home() {
  const articles = PLACEHOLDER_ARTICLES;
  
  const heroSliderArticles = articles.slice(0, 10);
  
  const featuredArticles = articles.slice(heroSliderArticles.length, heroSliderArticles.length + 4); // Show 4 featured articles
  const generalArticles = articles.slice(heroSliderArticles.length + 4); 

  const breakingNewsItems = [
    { text: "Ankara'da motosiklet trafik levhasına çarptı: 2 kişi hayatını kaybetti", timestamp: "00:52", link: "#" },
    { text: "Yeni haftada hava nasıl olacak?", timestamp: "00:37", link: "#" },
    { text: "Fransa'da İslam düşmanlığına tepkiler büyüyor", link: "#" },
    { text: "Ekonomi paketinin detayları açıklandı", timestamp: "23:15", link: "#" },
  ];

  const currencyData = [
    { name: 'DOLAR', value: '32,8567', change: '+0.15%', trend: 'up', symbol: '$' },
    { name: 'EURO', value: '35,1823', change: '-0.08%', trend: 'down', symbol: '€' },
    { name: 'STERLİN', value: '41,6050', change: '+0.22%', trend: 'up', symbol: '£' },
    { name: 'ALTIN (GR)', value: '2.455,50', change: '+0.75%', trend: 'up', symbol: 'Au' },
    { name: 'BIST 100', value: '10.480,25', change: '-1.10%', trend: 'down', symbol: '' },
  ];

  return (
    <div className="container mx-auto px-2 sm:px-4 py-0"> 
      <SecondaryNav />
      <BreakingNewsTicker newsItems={breakingNewsItems} />
      <HeroSlider articles={heroSliderArticles} />

      {/* Featured Articles & Currency Ticker Row */}
      <section className="my-8 md:my-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Articles - Takes up 8 columns on lg screens */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold mb-4 text-primary border-l-4 border-primary pl-3">ÖNE ÇIKANLAR</h2>
            {featuredArticles.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredArticles.map(article => (
                  <ArticleCard key={article.id} article={article} layout="featured" />
                ))}
              </div>
            )}
          </div>

          {/* Currency Ticker - Takes up 4 columns on lg screens */}
          <div className="lg:col-span-4">
            <CurrencyTicker title="DÖVİZ BİLGİLERİ" data={currencyData} />
          </div>
        </div>
      </section>
      
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
