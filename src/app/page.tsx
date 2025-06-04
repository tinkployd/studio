import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ArticleCard from '@/components/news/article-card';
import { PLACEHOLDER_ARTICLES, PLACEHOLDER_VIDEOS, type Article as ArticleType, type Video as VideoType } from '@/constants';
import { Button } from '@/components/ui/button';
import BreakingNewsTicker from '@/components/news/breaking-news-ticker';
import SecondaryNav from '@/components/layout/secondary-nav';
import CurrencyTicker from '@/components/news/currency-ticker';
import { Badge } from '@/components/ui/badge'; 
import VideoSection from '@/components/news/video-section'; 
import { slugify } from '@/lib/utils';

// Dynamically import HeroSlider with SSR disabled to prevent hydration mismatch
const HeroSlider = dynamic(
  () => import('@/app/(components)/hero-slider'),
  { ssr: false }
);

export default function Home() {
  const articles = PLACEHOLDER_ARTICLES;
  const videos = PLACEHOLDER_VIDEOS;

  const heroSliderArticles = articles.slice(0, 10);

  const featuredArticlesRow1 = articles.slice(heroSliderArticles.length, heroSliderArticles.length + 2);
  const featuredArticlesRow2 = articles.slice(heroSliderArticles.length + 2, heroSliderArticles.length + 5);

  const gundemArticles = articles.filter(a => slugify(a.category) === 'gundem');
  const mainGundemArticle = gundemArticles[0]; 
  const secondaryGundemArticle = gundemArticles[1]; 
  const bottomGundemArticlesRow1 = gundemArticles.slice(2, 6); 
  const bottomGundemArticlesRow2 = gundemArticles.slice(6, 10); 
  const bottomGundemArticlesRow3 = gundemArticles.slice(10, 14); 

  const mainVideo = videos[0];
  const thumbnailVideos = videos.slice(1, 5); 

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
    { text: "Ankara'da motosiklet trafik levhasına çarptı: 2 kişi hayatını kaybetti", timestamp: "01:42", link: "#" },
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

      <section className="my-8 md:my-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          <div>
            <div className="md:mt-0">
               <div className="h-[3.25rem] hidden md:block"></div> 
              <CurrencyTicker title="DÖVİZ BİLGİLERİ" data={currencyData} />
            </div>
          </div>
        </div>

        {featuredArticlesRow2.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticlesRow2.map(article => (
              <ArticleCard key={article.id} article={article} layout="featured" />
            ))}
          </div>
        )}
      </section>

      {mainGundemArticle && (
         <section className="my-8 md:my-12">
           <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center">
             <span className="w-3 h-6 bg-primary mr-3"></span>
             Gündem
           </h2>
           <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6 items-start">
             <div className="lg:pr-6">
               <Badge variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs uppercase px-1.5 py-0.5 leading-tight mb-2">
                  {mainGundemArticle.category}
               </Badge>
               <h3 className="text-2xl font-bold mb-3 leading-tight">
                 <Link href={`/haber/${slugify(mainGundemArticle.category)}/${mainGundemArticle.slug}`} className="hover:text-primary transition-colors">
                   {mainGundemArticle.title}
                 </Link>
               </h3>
             </div>
             <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-md group">
               <Link href={`/haber/${slugify(mainGundemArticle.category)}/${mainGundemArticle.slug}`} className="block w-full h-full">
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
             {secondaryGundemArticle && (
               <div className="lg:pl-0"> 
                  <ArticleCard article={secondaryGundemArticle} layout="compact-vertical" />
               </div>
             )}
           </div>

           {bottomGundemArticlesRow1.length > 0 && (
             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {bottomGundemArticlesRow1.map(article => (
                 <ArticleCard key={article.id} article={article} layout="default" />
               ))}
             </div>
           )}
           {bottomGundemArticlesRow2.length > 0 && (
             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {bottomGundemArticlesRow2.map(article => (
                 <ArticleCard key={article.id} article={article} layout="default" />
               ))}
             </div>
           )}
           {bottomGundemArticlesRow3.length > 0 && (
             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {bottomGundemArticlesRow3.map(article => (
                 <ArticleCard key={article.id} article={article} layout="default" />
               ))}
             </div>
           )}
         </section>
      )}

      {mainVideo && thumbnailVideos.length > 0 && (
        <VideoSection mainVideo={mainVideo} thumbnailVideos={thumbnailVideos} />
      )}

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

      {['EKONOMİ', 'SPOR', 'BİLİM TEKNOLOJİ'].map(category => {
        const categoryArticles = generalArticles.filter(a => a.category === category).slice(0,3);
        const categoryPageSlug = slugify(category);

        if (categoryArticles.length === 0) return null;
        return (
          <section key={category} className="mt-8 md:mt-12">
            <h2 className="text-2xl font-bold mb-6 text-primary border-l-4 border-primary pl-3">
              <Link href={`/haber/${categoryPageSlug}`} className="hover:underline">{category}</Link>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryArticles.map(article => (
                <ArticleCard key={article.id} article={article} layout="default" />
              ))}
            </div>
            <div className="text-right mt-4">
              <Button variant="outline" asChild>
                <Link href={`/haber/${categoryPageSlug}`}>Tüm {category} Haberleri &rarr;</Link>
              </Button>
            </div>
          </section>
        );
      })}
    </div>
  );
}