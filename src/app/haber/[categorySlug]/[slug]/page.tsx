
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
import { slugify } from '@/lib/utils';


export default function ArticleDetailPage() {
  const params = useParams();
  const categorySlug = params.categorySlug as string; 
  const articleSlug = params.slug as string;
  const [article, setArticle] = useState<ArticleType | null>(null);
  const [fontSize, setFontSize] = useState(16); // Default font size in px

  const trtSampleArticle: ArticleType = {
    id: 'gundem-altun-kardeslik', 
    slug: 'iletisim-baskani-altun-kardeslikten-guc-aliyoruz-terorsuz-bir-turkiye-icin-el-ele-veriyoruz',
    title: 'İletişim Başkanı Altun: Kardeşlikten güç alıyoruz, terörsüz bir Türkiye için el ele veriyoruz',
    category: 'GÜNDEM', // Ensure category matches what slugify(category) would produce for 'gundem'
    imageUrl: 'https://picsum.photos/1200/675?random=99', // Placeholder for actual image on TRT
    imageHint: 'Fahrettin Altun konuşma yapıyor',
    content: `
      <p><strong>Cumhurbaşkanlığı İletişim Başkanı Fahrettin Altun, Şırnak’ta Cudi Dağı eteklerinde düzenlenen "Kardeşlik Sınırı Teröre Geçit Yok" etkinliğinde yaptığı konuşmada, Türkiye\'nin terörle mücadeledeki kararlılığını ve bölgede tesis edilen huzur ortamını vurguladı.</strong></p>
      <p>Altun, "Bir zamanlar terörle anılan bu topraklarda bugün huzurun, kardeşliğin sesini yükseltiyoruz. Bu, devletimizin kararlı duruşu ve milletimizin birlikteliği sayesinde mümkün olmuştur." dedi.</p>
      <p>Terör örgütlerinin bölge halkı üzerindeki baskısının son bulduğunu ifade eden Altun, "Vatandaşlarımız artık korkusuzca yaylalarına çıkıyor, topraklarını ekiyor, hasatlarını topluyor. Bu tablo, terörle mücadelemizin en somut neticesidir." diye konuştu.</p>
      <p>Bölgedeki gelişmelerin ve yatırımların devam edeceğini belirten Altun, şunları kaydetti:</p>
      <blockquote>"Biz kardeşlikten güç alıyoruz. Bin yıldır bu topraklarda birlikte yoğrulmuş, aynı değerleri paylaşan büyük bir aileyiz. Terör örgütleri bu kardeşliğimize kastetmeye çalışsa da başarılı olamayacaklar. Devletimiz tüm kurumlarıyla vatandaşımızın yanında olmaya devam edecektir. Terörsüz bir Türkiye hedefimize ulaşana kadar durmayacağız, yorulmayacağız. El ele vererek bu badireyi de atlatacağız."</blockquote>
      <p>Altun, ayrıca sosyal medya hesabından yaptığı paylaşımda da "Kardeşlikten güç alıyoruz, terörsüz bir Türkiye için el ele veriyoruz." ifadelerini kullandı.</p>
      <p>Etkinlik, bölge halkının yoğun katılımıyla gerçekleşti. Vatandaşlar, terörle mücadeledeki başarılardan dolayı güvenlik güçlerine ve devlete minnettarlıklarını ifade ettiler.</p>
    `,
    publishDate: '13.07.2024 18:05', // From TRT page
    updateDate: '13.07.2024 18:08', // From TRT page
    sourceAgency: 'TRT HABER', // From TRT page
    sourceUrl: 'https://www.trthaber.com/haber/gundem/iletisim-baskani-altun-kardeslikten-guc-aliyoruz-terorsuz-bir-turkiye-icin-el-ele-veriyoruz-907111.html',
    subtitle: 'Cumhurbaşkanlığı İletişim Başkanı Fahrettin Altun, Şırnak\'ta katıldığı "Kardeşlik Sınırı, Teröre Geçit Yok" etkinliğinde yaptığı konuşmada, Türkiye\'nin terörle mücadeledeki kararlılığına vurgu yaptı.',
    tags: ['Fahrettin Altun', 'Terörle Mücadele', 'Şırnak', 'Gündem', 'İletişim Başkanlığı'],
  };
  
  useEffect(() => {
    let foundArticle: ArticleType | undefined | null = null;
    if (articleSlug === trtSampleArticle.slug && categorySlug.toLowerCase() === slugify(trtSampleArticle.category)) {
        foundArticle = trtSampleArticle;
    } else {
        foundArticle = PLACEHOLDER_ARTICLES.find(
          (a) => a.slug === articleSlug && slugify(a.category) === categorySlug.toLowerCase()
        );
        // Fallback if category doesn't match but slug does (less ideal)
        if (!foundArticle) {
            foundArticle = PLACEHOLDER_ARTICLES.find(a => a.slug === articleSlug);
        }
    }
    setArticle(foundArticle || null);
  }, [articleSlug, categorySlug, trtSampleArticle.slug, trtSampleArticle.category]);


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
  
  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24)); // Max 24px
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12)); // Min 12px

  const formatDisplayDate = (dateStr?: string) => {
    if (!dateStr) return { date: '', time: '' };
    const parts = dateStr.split(' ');
    return { date: parts[0] || '', time: parts[1] || '' };
  };

  const publishDisplay = formatDisplayDate(article.publishDate);
  const updateDisplay = formatDisplayDate(article.updateDate);

  const relatedArticles = PLACEHOLDER_ARTICLES.filter(a => slugify(a.category) === categorySlug && a.id !== article.id).slice(0,3);


  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <article>
          {/* Breadcrumbs */}
          <nav className="mb-3 text-xs text-muted-foreground" aria-label="breadcrumb">
            <ol className="list-none p-0 inline-flex items-center">
              <li className="flex items-center">
                <Link href="/" className="hover:text-primary">ANA SAYFA</Link>
                <ChevronRight size={14} className="mx-1 opacity-70" />
              </li>
              <li className="flex items-center">
                <Link href={`/haber/${slugify(article.category)}`} className="hover:text-primary uppercase">{article.category}</Link>
                <ChevronRight size={14} className="mx-1 opacity-70" />
              </li>
              <li className="flex items-center">
                <span className="text-foreground line-clamp-1 uppercase" title={article.title}>{article.title.substring(0,35)}...</span>
              </li>
            </ol>
          </nav>

          <Badge variant="secondary" className="bg-primary text-primary-foreground text-[10px] uppercase px-2 py-0.5 rounded-sm font-bold mb-3 self-start tracking-wider">
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

          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center text-xs text-muted-foreground gap-x-3 gap-y-1 mb-5 border-y border-border/70 py-2.5">
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
          
          <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden shadow-md mb-6 md:mb-8">
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
          
          <div className="flex items-center justify-start gap-2 mb-6 md:mb-8 py-3 border-y border-border/70">
            <Button variant="outline" size="sm" className="flex items-center gap-1.5 text-xs px-2.5 py-1 h-auto border-border/70 text-muted-foreground hover:border-primary/50 hover:text-primary">
                <Facebook size={16} /> Facebook
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1.5 text-xs px-2.5 py-1 h-auto border-border/70 text-muted-foreground hover:border-primary/50 hover:text-primary">
                <TwitterLucide size={16}/> Twitter
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1.5 text-xs px-2.5 py-1 h-auto border-border/70 text-muted-foreground hover:border-primary/50 hover:text-primary">
                <Mail size={16}/> E-posta
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1.5 text-xs px-2.5 py-1 h-auto border-border/70 text-muted-foreground hover:border-primary/50 hover:text-primary">
                <Share2 size={16}/> Diğer
            </Button>
          </div>

          <div
            className="prose prose-base max-w-none text-foreground article-content selection:bg-primary/20"
            style={{ fontSize: `${fontSize}px` }}
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />
          
          <div className='my-8 pt-6 border-t border-border/70'>
            <ArticleSummaryClient articleContent={article.content} sourceUrl={article.sourceUrl} />
          </div>


          {article.tags && article.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-border/70">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase">Etiketler</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <Link key={tag} href={`/etiket/${slugify(tag)}`}>
                    <Badge variant="secondary" className="px-2.5 py-1 text-xs font-normal hover:bg-muted transition-colors text-foreground hover:text-primary rounded-sm"># {tag}</Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {relatedArticles.length > 0 && (
            <>
            <Separator className="my-10" />
            <section>
                <h2 className="text-2xl font-bold text-primary mb-6">İlgili Haberler</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedArticles.map(relatedArt => (
                        <ArticleCard key={relatedArt.id} article={relatedArt} layout="default" />
                    ))}
                </div>
            </section>
            </>
        )}

      </div>
      <style jsx global>{`
        .article-content p {
            line-height: 1.8;
            margin-bottom: 1.5em; /* Increased margin like TRT */
        }
        .article-content p:first-of-type {
            /* TRT often bolds the first paragraph or lead sentence, which is handled if content has <strong> */
        }
        .article-content strong, .article-content b { /* Ensure bold tags are standard foreground color */
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
            text-decoration-color: hsl(var(--primary) / 0.8);
        }
        .article-content blockquote {
          margin-left: 0;
          margin-right: 0;
          padding-left: 1.5em;
          border-left: 4px solid hsl(var(--primary));
          font-style: italic;
          color: hsl(var(--muted-foreground));
          margin-bottom: 1.5em;
        }
        .article-content blockquote p { /* Reset paragraph margins inside blockquote if needed */
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
}
