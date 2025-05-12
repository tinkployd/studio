

import Image from 'next/image';
import Link from 'next/link';
import ArticleCard from '@/components/news/article-card';
import { PLACEHOLDER_ARTICLES, type Article as ArticleType } from '@/constants';
import { Button } from '@/components/ui/button';
import BreakingNewsTicker from '@/components/news/breaking-news-ticker';
import SecondaryNav from '@/components/layout/secondary-nav';
import HeroSlider from '@/app/(components)/hero-slider';
import CurrencyTicker from '@/components/news/currency-ticker';
import { Badge } from '@/components/ui/badge'; // Added Badge import

export default function Home() {
  const articles = PLACEHOLDER_ARTICLES;

  const heroSliderArticles = articles.slice(0, 10);

  // Featured articles for the new layout
  // Row 1 needs 2 featured articles
  const featuredArticlesRow1 = articles.slice(heroSliderArticles.length, heroSliderArticles.length + 2);
  // Row 2 needs 3 featured articles
  const featuredArticlesRow2 = articles.slice(heroSliderArticles.length + 2, heroSliderArticles.length + 5);

  // Gündem section articles
  const gundemArticles = articles.filter(a => a.category === 'GÜNDEM');
  const mainGundemArticle = gundemArticles[0]; // Assuming the first Gündem article is the main one
  const secondaryGundemArticle = gundemArticles[1]; // Article for the right small card
  const bottomGundemArticlesRow1 = gundemArticles.slice(2, 6); // Next 4 articles for the first bottom row
  const bottomGundemArticlesRow2 = gundemArticles.slice(6, 10); // Next 4 articles for the second bottom row
  const bottomGundemArticlesRow3 = gundemArticles.slice(10, 14); // Next 4 articles for the third bottom row

  // General articles start after all hero, all 5 featured, and all Gündem articles used above
  const usedArticleIds = new Set([
    ...heroSliderArticles.map(a => a.id),
    ...featuredArticlesRow1.map(a => a.id),
    ...featuredArticlesRow2.map(a => a.id),
    ...(mainGundemArticle ? [mainGundemArticle.id] : []),
    ...(secondaryGundemArticle ? [secondaryGundemArticle.id] : []),
    ...bottomGundemArticlesRow1.map(a => a.id),
    ...bottomGundemArticlesRow2.map(a => a.id),
    ...bottomGundemArticlesRow3.map(a => a.id),
  ]);
  const generalArticles = articles.filter(a => !usedArticleIds.has(a.id));


  const breakingNewsItems = [
    { text: "Kalp hastası bebek Ağrı'dan ambulans uçakla Ankara'ya getirildi", timestamp: "05:24", link: "#" },
    { text: "İzmir'de takla atan otomobilin sürücüsü yaralandı", timestamp: "05:19", link: "#" },
    { text: "Trump, ABD vatandaşı esirin serbest bırakılmasını iyi niyetle atılmış bir adım olarak değerlendirdi", timestamp: "04:06", link: "#" },
    { text: "Ankara’da motosiklet trafik levhasına çarptı: 2 kişi hayatını kaybetti", timestamp: "01:42", link: "#" },
    { text: "Yeni haftada hava nasıl olacak?", timestamp: "00:52", link: "#" },
    { text: "Fransa'da İslam düşmanlığına karşı gösteriler düzenlendi", timestamp: "00:37", link: "#" },
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

      {/* Featured Articles & Currency Ticker Section - New Layout */}
      <section className="my-8 md:my-12">
        {/* Row 1: 2 Featured Articles (under ÖNE ÇIKANLAR title) + 1 Currency Ticker */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left part: ÖNE ÇIKANLAR title and 2 article cards */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-primary border-l-4 border-primary pl-3">ÖNE ÇIKANLAR</h2>
            {featuredArticlesRow1.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {featuredArticlesRow1.map(article => (
                  <ArticleCard key={article.id} article={article} layout="featured" />
                ))}
              </div>
            )}
          </div>

          {/* Right part: Currency Ticker */}
          <div>
            <div className="md:mt-0">
              {/* Vertical Spacer to align top */}
               <div className="h-[3.25rem] hidden md:block"></div> {/* Approx height of h2 + margin */}
              <CurrencyTicker title="DÖVİZ BİLGİLERİ" data={currencyData} />
            </div>
          </div>
        </div>

        {/* Row 2: 3 more Featured Articles, implicitly under "ÖNE ÇIKANLAR" context */}
        {featuredArticlesRow2.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticlesRow2.map(article => (
              <ArticleCard key={article.id} article={article} layout="featured" />
            ))}
          </div>
        )}
      </section>

      {/* Gündem Section - New Layout based on image */}
      {mainGundemArticle && (
         <section className="my-8 md:my-12">
           <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center">
             <span className="w-3 h-6 bg-primary mr-3"></span> {/* Red square icon */}
             Gündem
           </h2>

           {/* Main Gündem Layout Grid */}
           <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6 items-start"> {/* Adjusted grid columns for layout */}
             {/* Left: Text content of main article */}
             <div className="lg:pr-6">
               <Badge variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs uppercase px-1.5 py-0.5 leading-tight mb-2">
                  {mainGundemArticle.category}
               </Badge>
               <h3 className="text-2xl font-bold mb-3 leading-tight">
                 <Link href={mainGundemArticle.sourceUrl || "#"} target={mainGundemArticle.sourceUrl ? "_blank" : "_self"} rel={mainGundemArticle.sourceUrl ? "noopener noreferrer" : undefined} className="hover:text-primary transition-colors">
                   {mainGundemArticle.title}
                 </Link>
               </h3>
               <p className="text-sm text-muted-foreground line-clamp-4">
                 {mainGundemArticle.content.substring(0, 180) + (mainGundemArticle.content.length > 180 ? '...' : '')}
               </p>
             </div>

             {/* Center: Large image of main article */}
             <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-md group">
               <Link href={mainGundemArticle.sourceUrl || "#"} target={mainGundemArticle.sourceUrl ? "_blank" : "_self"} rel={mainGundemArticle.sourceUrl ? "noopener noreferrer" : undefined} className="block w-full h-full">
                 <Image
                   src={mainGundemArticle.imageUrl}
                   alt={mainGundemArticle.title}
                   fill
                   sizes="(max-width: 1024px) 100vw, 50vw"
                   objectFit="cover"
                   className="group-hover:scale-105 transition-transform duration-300"
                   data-ai-hint={mainGundemArticle.imageHint}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
               </Link>
             </div>

             {/* Right: Small card for secondary article */}
             {secondaryGundemArticle && (
               <div className="lg:pl-0"> {/* No padding needed here, card has its own */}
                  <ArticleCard article={secondaryGundemArticle} layout="compact-vertical" />
               </div>
             )}
           </div>

           {/* Bottom Row 1: 4 small cards */}
           {bottomGundemArticlesRow1.length > 0 && (
             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {bottomGundemArticlesRow1.map(article => (
                 <ArticleCard key={article.id} article={article} layout="default" />
               ))}
             </div>
           )}

            {/* Bottom Row 2: Next 4 small cards */}
           {bottomGundemArticlesRow2.length > 0 && (
             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {bottomGundemArticlesRow2.map(article => (
                 <ArticleCard key={article.id} article={article} layout="default" />
               ))}
             </div>
           )}

            {/* Bottom Row 3: Final 4 small cards */}
           {bottomGundemArticlesRow3.length > 0 && (
             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {bottomGundemArticlesRow3.map(article => (
                 <ArticleCard key={article.id} article={article} layout="default" />
               ))}
             </div>
           )}
         </section>
      )}


      {/* General News Grid - Filtered to exclude used articles */}
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

      {/* Category Sections (Example) - Filtered to exclude used articles */}
      {['EKONOMİ', 'SPOR', 'BİLİM TEKNOLOJİ'].map(category => {
        // Now use the filtered generalArticles for category sections
        const categoryArticles = generalArticles.filter(a => a.category === category).slice(0,3);

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
