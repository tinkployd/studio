import Image from 'next/image';
import Link from 'next/link';
import ArticleCard from '@/components/news/article-card';
import { PLACEHOLDER_ARTICLES, type Article as ArticleType } from '@/constants'; // Renamed Article to ArticleType to avoid conflict
import { Button } from '@/components/ui/button';
import BreakingNewsTicker from '@/components/news/breaking-news-ticker';
import SecondaryNav from '@/components/layout/secondary-nav'; // New component

// Specific data for the hero section based on the image
const heroData = {
  title: "Barış masası yeniden Türkiye'de kuruluyor",
  imageUrl: "https://picsum.photos/1200/800?image=1074", // Placeholder, ideally a specific image
  imageHint: "diplomacy peace negotiation",
  description: "Türkiye, Rusya-Ukrayna arasındaki krizin sona ermesi için diplomatik çabasını sürdürüyor. Savaş devam ederken müzakere için barış masası 15 Mayıs Perşembe günü İstanbul'da kurulacak.",
  bulletPoints: [
    "Cumhurbaşkanı Erdoğan: Türkiye ev sahipliği yapmaya hazır",
    "Barış masası dünya gündeminde"
  ]
};

const RedDashIcon = () => <div className="w-3 h-0.5 bg-primary mr-2.5 flex-shrink-0"></div>;


export default function Home() {
  const articles = PLACEHOLDER_ARTICLES;
  // heroArticle is now custom, not from PLACEHOLDER_ARTICLES directly for this layout
  const featuredArticles = articles.slice(0, 3); // Using first 3 for featured
  const generalArticles = articles.slice(3); // Rest for general

  const breakingNewsItems = [
    { text: "Ankara'da motosiklet trafik levhasına çarptı: 2 kişi hayatını kaybetti", timestamp: "00:52", link: "#" },
    { text: "Yeni haftada hava nasıl olacak?", timestamp: "00:37", link: "#" },
    { text: "Fransa'da İslam düşmanlığına tepkiler büyüyor", link: "#" },
    { text: "Ekonomi paketinin detayları açıklandı", timestamp: "23:15", link: "#" },
  ];

  return (
    <div className="container mx-auto px-2 sm:px-4 py-0"> 
      {/* Breaking News Ticker - Moved up to be below header immediately */}
      <BreakingNewsTicker newsItems={breakingNewsItems} />
      
      {/* Secondary Navigation */}
      <SecondaryNav />

      {/* Hero Section */}
      <section className="my-6 md:my-8">
        <div className="grid lg:grid-cols-12 gap-0 bg-card shadow-lg rounded-lg overflow-hidden">
          <div className="lg:col-span-8 relative aspect-[16/10] lg:aspect-auto h-64 lg:h-full min-h-[300px] lg:min-h-[450px]">
            <Image
              src={heroData.imageUrl}
              alt={heroData.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={heroData.imageHint}
              priority
            />
          </div>
          <div className="lg:col-span-4 p-6 md:p-8 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground leading-tight">
              {heroData.title}
            </h1>
            <p className="mb-5 text-muted-foreground text-base md:text-lg">
              {heroData.description}
            </p>
            <ul className="space-y-2.5">
              {heroData.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-center text-sm md:text-base text-foreground">
                  <RedDashIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="mb-8 md:mb-12">
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
        const categoryArticles = articles.filter(a => a.category === category).slice(0,3);
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
