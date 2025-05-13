
import { slugify } from '@/lib/utils';

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[]; // For dropdowns
  isDropdown?: boolean; // Explicitly mark if it should show a dropdown arrow
}

export const MAIN_HEADER_NAV_LINKS: NavLink[] = [
  { label: 'SICAK', href: '#', isDropdown: true },
  { label: 'SAVUNMA', href: '/haber/savunma' },
  { label: 'ÇOCUK', href: '#' },
  { label: 'ÖZEL HABER', href: '#' },
  { label: 'DOSYA HABER', href: '#' },
  { label: 'DİĞER', href: '#', isDropdown: true },
];

export const NAV_LINKS: NavLink[] = [
  // Links for the main header (also used in mobile menu)
  { label: 'SICAK', href: '#', isDropdown: true },
  { label: 'SAVUNMA', href: '/haber/savunma' },
  { label: 'ÇOCUK', href: '#' },
  { label: 'ÖZEL HABER', href: '#' },
  { label: 'DOSYA HABER', href: '#' },
  { label: 'DİĞER', href: '#', isDropdown: true },
  // Additional links primarily for mobile menu and site structure
  { label: 'GÜNDEM', href: '/haber/gundem', isDropdown: true }, 
  { label: 'DÜNYA', href: '/haber/dunya', isDropdown: true },
  { label: 'EKONOMİ', href: '/haber/ekonomi', isDropdown: true },
  { label: 'SPOR', href: '/haber/spor', isDropdown: true },
  { label: 'BİLİM TEKNOLOJİ', href: '/haber/bilim-teknOLOJİ', isDropdown: true },
  { label: 'YAŞAM', href: '/haber/yasam', isDropdown: true },
  { label: 'KÜLTÜR SANAT', href: '/haber/kultur-sanat', isDropdown: true },
  { label: 'SAĞLIK', href: '/haber/saglik', isDropdown: true },
  { label: 'PROGRAMLAR', href: '#', isDropdown: true }, // Assuming '#' for now
  { label: 'PODCAST', href: '/podcast'},
  { label: 'FOTO GALERİ', href: '/fotograf-galerileri' },
  { label: 'VİDEO GALERİ', href: '/videolar' },
];

export const FOOTER_LINKS_COL1 = [
  { label: 'Kurumsal', href: '#' },
  { label: 'Yayın İlkeleri', href: '#' },
  { label: 'Frekanslar', href: '#' },
  { label: 'TRT Yardım', href: '#' },
];

export const FOOTER_LINKS_COL2 = [
  { label: 'İletişim', href: '#' },
  { label: 'Gizlilik Politikası', href: '#' },
  { label: 'Kullanım Koşulları', href: '#' },
  { label: 'Çerez Politikası', href: '#' },
];

export const TRT_NETWORK_LINKS = [
  { label: 'TRT 1', href: '#'},
  { label: 'TRT 2', href: '#'},
  { label: 'TRT World', href: '#'},
  { label: 'TRT Spor', href: '#'},
  { label: 'TRT Çocuk', href: '#'},
  { label: 'TRT Belgesel', href: '#'},
  { label: 'TRT Müzik', href: '#'},
  { label: 'TRT Avaz', href: '#'},
  { label: 'TRT Kurdî', href: '#'},
  { label: 'TRT Arabi', href: '#'},
];


export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  imageUrl: string;
  imageHint: string;
  content: string;
  publishDate?: string;
  sourceUrl?: string;
  subtitle?: string; // For article detail page
  tags?: string[]; // For article detail page
}

export interface Video {
  id: string;
  slug: string;
  title: string;
  category: string;
  thumbnailUrl: string; 
  imageHint: string; 
  description?: string; 
  videoUrl?: string; 
  sourceUrl?: string; 
  duration?: string; // e.g., "03:28"
  publishDate?: string; // e.g., "13.05.2024 16:16"
  viewCount?: string; // e.g. "1.234"
}

export interface PodcastEpisode {
  id: string;
  slug: string; 
  title: string; 
  seriesTitle: string; 
  seriesSlug: string; 
  category: string; 
  imageUrl: string;
  imageHint: string;
  description: string; 
  shortDescription?: string; 
  audioUrl: string;
  duration: string; 
  publishDate: string; 
  listenCount?: number;
}

export interface GalleryImage {
    id: string;
    imageUrl: string;
    imageHint: string;
    caption: string;
}

export interface PhotoGallery {
    id: string;
    slug: string; 
    title: string;
    category: string; 
    coverImageUrl: string;
    coverImageHint: string;
    publishDate: string; 
    updateDate?: string; 
    description: string; 
    images: GalleryImage[];
}

export const PHOTO_GALLERY_CATEGORIES: string[] = [
  'Gündem', 
  'Türkiye', 
  'Dünya', 
  'Ekonomi', 
  'Sağlık', 
  'Yaşam', 
  'Kültür-Sanat', 
  'Bilim Teknoloji', 
  'Eğitim', 
  'Spor'
];

export const VIDEO_CATEGORIES: string[] = [
  'Tümü', // Added Tümü for all videos
  'Gündem', 
  'Türkiye', 
  'Dünya', 
  'Ekonomi', 
  'Sağlık', 
  'Yaşam', 
  'Kültür-Sanat', 
  'Bilim Teknoloji', 
  'Eğitim', 
  'Spor',
  'Savunma'
];


export const PLACEHOLDER_ARTICLES: Article[] = [
  {
    id: '1',
    slug: slugify('Türkiye\'nin Otomobili Togg İçin Yeni Gelişmeler ve Global Hedefler'),
    title: 'Türkiye\'nin Otomobili Togg İçin Yeni Gelişmeler ve Global Hedefler',
    category: 'EKONOMİ',
    imageUrl: 'https://picsum.photos/800/500?random=1',
    imageHint: 'electric car future',
    content: 'Türkiye\'nin yerli otomobili Togg, üretim ve teknoloji alanında önemli adımlar atmaya devam ediyor. Son yapılan açıklamada, Togg\'un yeni batarya teknolojisi ve otonom sürüş özellikleriyle ilgili detaylar paylaşıldı. Fabrikadaki üretim kapasitesinin artırılması ve uluslararası pazarlara açılma hedefleri de vurgulandı. Togg, Türkiye\'nin teknoloji ve mühendislik alanındaki yeteneklerini dünyaya göstermeyi amaçlıyor. Araç, kullanıcı deneyimini en üst seviyeye çıkarmak için gelişmiş bağlantı özellikleri ve kişiselleştirilebilir arayüzler sunacak. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    publishDate: '10 Temmuz 2024',
    sourceUrl: '#',
    subtitle: 'Yerli otomobil Togg, yeni batarya teknolojisi ve otonom sürüş özellikleriyle dikkat çekiyor. Üretim kapasitesi artırılıyor ve global pazarlara açılma hedefleniyor.',
    tags: ['Togg', 'Yerli Otomobil', 'Elektrikli Araç', 'Ekonomi']
  },
  {
    id: '2',
    slug: slugify('Milli Takım Avrupa Şampiyonası\'nda Tarihi Başarıyla Çeyrek Finalde!'),
    title: 'Milli Takım Avrupa Şampiyonası\'nda Tarihi Başarıyla Çeyrek Finalde!',
    category: 'SPOR',
    imageUrl: 'https://picsum.photos/800/500?random=2',
    imageHint: 'soccer celebration stadium',
    content: 'A Milli Futbol Takımımız, Avrupa Futbol Şampiyonası\'nda gösterdiği üstün performansla çeyrek finale yükseldi. Son 16 turunda güçlü rakibini nefes kesen bir maç sonunda eleyen ay-yıldızlılar, taraftarlarına büyük sevinç yaşattı. Teknik direktör ve oyuncular, maç sonu yaptıkları açıklamalarda takım ruhuna, inanca ve taraftar desteğine vurgu yaptı. Bir sonraki zorlu rakip için hazırlıklar tüm hızıyla başladı. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    publishDate: '9 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Milli Takım', 'Futbol', 'Avrupa Şampiyonası', 'Spor']
  },
  {
    id: '3',
    slug: slugify('Yeni Uzay Teleskobu Evrenin Derinliklerinden İlk Çarpıcı Görüntüleri Dünya\'ya Ulaştırdı'),
    title: 'Yeni Uzay Teleskobu Evrenin Derinliklerinden İlk Çarpıcı Görüntüleri Dünya\'ya Ulaştırdı',
    category: 'BİLİM TEKNOLOJİ',
    imageUrl: 'https://picsum.photos/800/500?random=3',
    imageHint: 'nebula stars galaxy',
    content: 'NASA ve ESA ortaklığında geliştirilen yeni nesil uzay teleskobu, evrenin daha önce hiç görülmemiş uzak köşelerinden ilk renkli ve detaylı görüntüleri Dünya\'ya ulaştırdı. Bu muazzam görüntüler, galaksi oluşumları, yıldızların doğuş ve ölüm süreçleri, ve gizemli kara delikler hakkında yeni bilgiler sunuyor. Bilim insanları, bu verilerin evren anlayışımızı kökten değiştirebileceğini ve astrofizikte yeni bir çağ başlatabileceğini belirtiyor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    publishDate: '8 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Uzay', 'Teleskop', 'Bilim', 'Astronomi']
  },
  {
    id: '4',
    slug: slugify('İstanbul\'da Tarihi Yarımada\'da Devam Eden Çalışmalarda Yeni Arkeolojik Keşifler Heyecan Yarattı'),
    title: 'İstanbul\'da Tarihi Yarımada\'da Devam Eden Çalışmalarda Yeni Arkeolojik Keşifler Heyecan Yarattı',
    category: 'KÜLTÜR SANAT',
    imageUrl: 'https://picsum.photos/800/500?random=4',
    imageHint: 'ancient ruins excavation',
    content: 'İstanbul Tarihi Yarımada\'da devam eden altyapı ve restorasyon çalışmaları sırasında Roma, Bizans ve Osmanlı dönemlerine ait olduğu düşünülen çok sayıda önemli arkeolojik kalıntıya ulaşıldı. Eserler arasında günlük yaşamda kullanılan seramikler, değerli sikkeler, mozaik parçaları ve antik yapı kalıntıları bulunuyor. Arkeologlar, bu keşiflerin İstanbul\'un zengin tarihi katmanlarına ve kültürel mirasına ışık tutacağını ifade ediyor.',
    publishDate: '7 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Arkeoloji', 'İstanbul', 'Tarihi Eser', 'Kültür Sanat']
  },
  {
    id: '5',
    slug: slugify('Küresel İklim Değişikliği Raporu Yayınlandı: Gelecek Nesiller İçin Acil Önlemler Alınmalı'),
    title: 'Küresel İklim Değişikliği Raporu Yayınlandı: Gelecek Nesiller İçin Acil Önlemler Alınmalı',
    category: 'DÜNYA',
    imageUrl: 'https://picsum.photos/800/500?random=5',
    imageHint: 'earth environment pollution',
    content: 'Birleşmiş Milletler\'e bağlı Hükümetlerarası İklim Değişikliği Paneli (IPCC) merakla beklenen son kapsamlı raporunu yayınladı. Raporda, küresel sıcaklık artışının yıkıcı ve geri döndürülemez sonuçlara yol açabileceği, bu nedenle acil ve kararlı olarak sera gazı emisyonlarının azaltılması gerektiği bir kez daha güçlü bir şekilde vurgulandı. Rapor, yenilenebilir enerjiye geçişin hızlandırılması, enerji verimliliğinin artırılması ve sürdürülebilir politikaların tüm ülkeler tarafından benimsenmesi çağrısında bulunuyor.',
    publishDate: '6 Temmuz 2024',
    sourceUrl: '#',
    tags: ['İklim Değişikliği', 'Çevre', 'Küresel Isınma', 'Dünya']
  },
  {
    id: '6',
    slug: slugify('Sağlıklı ve Uzun Bir Yaşam İçin Beslenme Uzmanlarından Altın Değerinde Öneriler'),
    title: 'Sağlıklı ve Uzun Bir Yaşam İçin Beslenme Uzmanlarından Altın Değerinde Öneriler',
    category: 'SAĞLIK',
    imageUrl: 'https://picsum.photos/800/500?random=6',
    imageHint: 'vegetables fruits healthy',
    content: 'Alanında uzman diyetisyenler ve beslenme uzmanları, sağlıklı ve dengeli bir yaşam sürdürmek için mevsimine uygun, taze ve çeşitli sebze-meyve tüketiminin hayati önemine dikkat çekiyor. İşlenmiş gıdalardan, şekerli içeceklerden ve aşırı tuz tüketiminden uzak durulması, yeterli miktarda su içilmesi ve düzenli fiziksel aktivite yapılması da sağlıklı yaşamın temel taşları arasında gösteriliyor. Özellikle yaz aylarında sıvı alımına ve hafif beslenmeye özen gösterilmesi gerektiği belirtiliyor.',
    publishDate: '5 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Sağlık', 'Beslenme', 'Diyet', 'Yaşam']
  },
  {
    id: '7',
    slug: slugify('Yapay Zeka Sanat Dünyasını Nasıl Değiştiriyor? Yeni Sergiler ve Tartışmalar'),
    title: 'Yapay Zeka Sanat Dünyasını Nasıl Değiştiriyor? Yeni Sergiler ve Tartışmalar',
    category: 'BİLİM TEKNOLOJİ',
    imageUrl: 'https://picsum.photos/800/500?random=7',
    imageHint: 'ai art abstract',
    content: 'Yapay zeka tarafından üretilen sanat eserleri, dünya genelinde sanat galerilerinde sergilenmeye başlandı. Bu durum, sanatın tanımı, yaratıcılık ve telif hakları gibi konularda önemli tartışmaları da beraberinde getiriyor. Bazı sanatçılar yapay zekayı bir araç olarak benimserken, bazıları ise özgünlüğü tehdit ettiğini düşünüyor. Yeni teknolojilerin sanat pratiğine etkileri üzerine düzenlenen paneller ve sergiler, bu dönüşümü anlamaya çalışıyor.',
    publishDate: '4 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Yapay Zeka', 'Sanat', 'Teknoloji', 'Bilim Teknoloji']
  },
  {
    id: '8',
    slug: slugify('Türkiye\'nin Turizmde Yeni Rekor Beklentisi: Yaz Sezonu Doluluk Oranları Yüksek'),
    title: 'Türkiye\'nin Turizmde Yeni Rekor Beklentisi: Yaz Sezonu Doluluk Oranları Yüksek',
    category: 'EKONOMİ',
    imageUrl: 'https://picsum.photos/800/500?random=8',
    imageHint: 'beach resort summer',
    content: 'Türkiye, 2024 yaz sezonunda turizmde yeni bir rekor kırmayı hedefliyor. Özellikle Akdeniz ve Ege sahillerindeki otellerde doluluk oranları şimdiden yüzde 90\'lara ulaştı. Kültür ve Turizm Bakanlığı, tanıtım faaliyetlerini artırarak ve yeni destinasyonları öne çıkararak turist sayısını ve gelirlerini artırmayı planlıyor. Sektör temsilcileri, artan maliyetlere rağmen talebin güçlü olduğunu belirtiyor.',
    publishDate: '3 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Turizm', 'Ekonomi', 'Yaz Sezonu', 'Tatil']
  },
  {
    id: '9',
    slug: slugify('Yerli Savunma Sanayii Ürünleri Uluslararası Fuarda Göz Doldurdu'),
    title: 'Yerli Savunma Sanayii Ürünleri Uluslararası Fuarda Göz Doldurdu',
    category: 'SAVUNMA',
    imageUrl: 'https://picsum.photos/800/500?random=9',
    imageHint: 'military tech defense',
    content: 'Türk savunma sanayii firmaları, katıldıkları uluslararası bir fuarda en yeni ürün ve teknolojilerini sergiledi. İnsansız hava araçları, zırhlı araçlar, füze sistemleri ve siber güvenlik çözümleri büyük ilgi gördü. Birçok ülke ile yeni işbirliği anlaşmaları imzalanırken, Türkiye\'nin savunma alanındaki teknolojik yetkinliği bir kez daha kanıtlandı. Fuarda sergilenen ürünler, yerli ve milli imkanlarla geliştirilmiş olmalarıyla dikkat çekti. İletişim Başkanı Altun: Kardeşlikten güç alıyoruz, terörsüz bir Türkiye için el ele veriyoruz. Türkiye\'nin terörle mücadelesi kararlılıkla devam ediyor. Birlik ve beraberlik içinde bu zorlu sürecin üstesinden geleceğiz.',
    publishDate: '2 Temmuz 2024',
    sourceUrl: '#',
    subtitle: 'İletişim Başkanı Fahrettin Altun, "Kardeşlikten güç alıyoruz, terörsüz bir Türkiye için el ele veriyoruz" dedi. Türkiye\'nin terörle mücadelesinin kararlılıkla sürdüğünü belirtti.',
    tags: ['Savunma Sanayii', 'Teknoloji', 'Askeri', 'Fuar', 'Terörle Mücadele', 'Fahrettin Altun']
  },
  {
    id: '10',
    slug: slugify('Gıda Fiyatlarındaki Artış ve Enflasyonla Mücadelede Yeni Adımlar Atılıyor'),
    title: 'Gıda Fiyatlarındaki Artış ve Enflasyonla Mücadelede Yeni Adımlar Atılıyor',
    category: 'EKONOMİ',
    imageUrl: 'https://picsum.photos/800/500?random=10',
    imageHint: 'market grocery inflation',
    content: 'Küresel ve yerel etkenlerle artan gıda fiyatları ve genel enflasyonla mücadele kapsamında hükümet yeni bir dizi tedbir paketi açıkladı. Tarımsal üretimde verimliliği artırmaya yönelik destekler, tedarik zincirindeki sorunların giderilmesi ve bazı temel ürünlerde KDV indirimleri gibi adımlar atılması planlanıyor. Ekonomistler, bu tedbirlerin etkilerini ve uzun vadeli çözümleri tartışıyor.',
    publishDate: '1 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Enflasyon', 'Gıda Fiyatları', 'Ekonomi', 'Tedbir Paketi']
  },
   {
    id: '11',
    slug: slugify('Eğitimde Dijital Dönüşüm Hız Kesmiyor: Akıllı Sınıflar Yaygınlaşıyor'),
    title: 'Eğitimde Dijital Dönüşüm Hız Kesmiyor: Akıllı Sınıflar Yaygınlaşıyor',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=11',
    imageHint: 'classroom technology education',
    content: 'Türkiye genelindeki okullarda eğitimde dijital dönüşüm projeleri hızla devam ediyor. Akıllı tahtalar, tablet dağıtımları ve online eğitim platformları ile donatılan sınıflar sayesinde öğrencilerin öğrenme süreçleri daha interaktif ve verimli hale geliyor. Milli Eğitim Bakanlığı, öğretmenlere yönelik dijital yetkinlik eğitimlerini de artırarak bu sürece destek oluyor.',
    publishDate: '28 Haziran 2024',
    sourceUrl: '#',
    tags: ['Eğitim', 'Dijital Dönüşüm', 'Teknoloji', 'Gündem']
  },
  {
    id: '12',
    slug: slugify('Yerel Tohumların Korunması ve Yaygınlaştırılması İçin Yeni Proje Başlatıldı'),
    title: 'Yerel Tohumların Korunması ve Yaygınlaştırılması İçin Yeni Proje Başlatıldı',
    category: 'YAŞAM',
    imageUrl: 'https://picsum.photos/800/500?random=12',
    imageHint: 'seeds farming agriculture',
    content: 'Tarım ve Orman Bakanlığı, yerel tohumların genetik çeşitliliğini korumak ve çiftçiler arasında yaygınlaşmasını sağlamak amacıyla kapsamlı bir proje başlattı. Proje kapsamında tohum bankaları kurulacak, çiftçilere yerel tohum kullanımı konusunda eğitimler verilecek ve destekler sağlanacak. Bu sayede hem biyolojik çeşitliliğin korunması hem de sürdürülebilir tarımın desteklenmesi hedefleniyor.',
    publishDate: '27 Haziran 2024',
    sourceUrl: '#',
    tags: ['Tarım', 'Yerel Tohum', 'Çevre', 'Yaşam']
  },
  {
    id: '13',
    slug: slugify('Ankara\'da Toplu Taşıma İçin Yeni Metro Hattı Projesi Onaylandı'),
    title: 'Ankara\'da Toplu Taşıma İçin Yeni Metro Hattı Projesi Onaylandı',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=13',
    imageHint: 'subway train station',
    content: 'Ankara Büyükşehir Belediyesi, şehir içi ulaşımı rahatlatmak amacıyla planlanan yeni metro hattı projesinin Ulaştırma Bakanlığı tarafından onaylandığını duyurdu. Yeni hat, şehrin yoğun nüfuslu bölgelerini birbirine bağlayacak ve trafik sorununa önemli bir çözüm sunması bekleniyor. İnşaat çalışmalarının önümüzdeki yıl başlaması planlanıyor.',
    publishDate: '11 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Ankara', 'Metro', 'Ulaşım', 'Gündem']
  },
  {
    id: '14',
    slug: slugify('Avrupa Merkez Bankası Faiz Oranlarını Değiştirmedi, Enflasyon Vurgusu Yaptı'),
    title: 'Avrupa Merkez Bankası Faiz Oranlarını Değiştirmedi, Enflasyon Vurgusu Yaptı',
    category: 'DÜNYA',
    imageUrl: 'https://picsum.photos/800/500?random=14',
    imageHint: 'bank building finance',
    content: 'Avrupa Merkez Bankası (ECB), son para politikası toplantısında beklentiler doğrultusunda faiz oranlarında bir değişikliğe gitmedi. ECB Başkanı yaptığı açıklamada, Euro Bölgesi\'nde enflasyonun hala yüksek seyrettiğini ve para politikasının sıkı duruşunu koruyacağını belirtti. Gelecek dönem verilerine göre hareket edileceği mesajı verildi.',
    publishDate: '11 Temmuz 2024',
    sourceUrl: '#',
    tags: ['ECB', 'Faiz Oranları', 'Enflasyon', 'Dünya Ekonomisi']
  },
  {
    id: '15',
    slug: slugify('Karadeniz\'de Geleneksel Yayla Şenlikleri Başladı, Turistler Akın Ediyor'),
    title: 'Karadeniz\'de Geleneksel Yayla Şenlikleri Başladı, Turistler Akın Ediyor',
    category: 'YAŞAM',
    imageUrl: 'https://picsum.photos/800/500?random=15',
    imageHint: 'mountain festival folk',
    content: 'Doğu Karadeniz Bölgesi\'nin eşsiz doğal güzelliklerine sahip yaylalarında geleneksel yaz şenlikleri başladı. Rengarenk yöresel kıyafetler, kemençe ve tulum sesleri eşliğinde horonların oynandığı şenlikler, yerli ve yabancı çok sayıda turisti ağırlıyor. Bölge esnafı, şenliklerin turizme ve ekonomiye canlılık getirdiğini belirtiyor.',
    publishDate: '10 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Karadeniz', 'Yayla Şenlikleri', 'Turizm', 'Yaşam']
  },
  {
    id: '16',
    slug: slugify('Galatasaray, Şampiyonlar Ligi Ön Eleme Turu İçin Rakibini Bekliyor'),
    title: 'Galatasaray, Şampiyonlar Ligi Ön Eleme Turu İçin Rakibini Bekliyor',
    category: 'SPOR',
    imageUrl: 'https://picsum.photos/800/500?random=16',
    imageHint: 'soccer team training',
    content: 'Trendyol Süper Lig şampiyonu Galatasaray, UEFA Şampiyonlar Ligi\'ne katılabilmek için ön eleme turlarında mücadele edecek. Sarı-kırmızılı ekip, yeni sezon hazırlıklarını sürdürürken, kura çekimini ve muhtemel rakiplerini bekliyor. Teknik heyet ve futbolcular, Devler Ligi gruplarına kalmak için iddialı olduklarını belirtti.',
    publishDate: '9 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Galatasaray', 'Şampiyonlar Ligi', 'Futbol', 'Spor']
  },
  {
    id: '17',
    slug: slugify('Borsa İstanbul\'da Yabancı Yatırımcı İlgisi Artıyor: Son Veriler Açıklandı'),
    title: 'Borsa İstanbul\'da Yabancı Yatırımcı İlgisi Artıyor: Son Veriler Açıklandı',
    category: 'EKONOMİ',
    imageUrl: 'https://picsum.photos/800/500?random=17',
    imageHint: 'stock market chart',
    content: 'Merkez Bankası ve Borsa İstanbul tarafından açıklanan son verilere göre, yabancı yatırımcıların Türk varlıklarına olan ilgisi son dönemde artış gösterdi. Özellikle hisse senedi piyasasında net alımların gözlendiği belirtilirken, uygulanan ekonomi politikalarının ve atılan normalleşme adımlarının bu ilgide etkili olduğu yorumları yapılıyor.',
    publishDate: '8 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Borsa İstanbul', 'Yabancı Yatırımcı', 'Ekonomi', 'Finans']
  },
  {
    id: '18',
    slug: slugify('Kabine Toplantısı Sonrası Önemli Açıklamalar: Ekonomi ve Dış Politika Gündemdeydi'),
    title: 'Kabine Toplantısı Sonrası Önemli Açıklamalar: Ekonomi ve Dış Politika Gündemdeydi',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=18',
    imageHint: 'government meeting officials',
    content: 'Cumhurbaşkanlığı Kabinesi, son toplantısında ekonomi ve dış politikadaki güncel gelişmeleri ele aldı. Toplantı sonrası yapılan açıklamada, enflasyonla mücadele, yeni yatırım teşvikleri ve bölgesel konulara ilişkin alınan kararlar kamuoyuyla paylaşıldı.',
    publishDate: '11 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Kabine Toplantısı', 'Ekonomi', 'Dış Politika', 'Gündem']
  },
  {
    id: '19',
    slug: slugify('Orman Yangınlarıyla Mücadele Devam Ediyor: Havadan ve Karadan Müdahale Sürüyor'),
    title: 'Orman Yangınlarıyla Mücadele Devam Ediyor: Havadan ve Karadan Müdahale Sürüyor',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=19',
    imageHint: 'forest fire smoke',
    content: 'Türkiye\'nin çeşitli bölgelerinde çıkan orman yangınlarına müdahale aralıksız devam ediyor. Tarım ve Orman Bakanlığı koordinasyonunda ekipler, yangın söndürme uçakları, helikopterler ve arazözlerle alevleri kontrol altına almaya çalışıyor. Vatandaşlara anız yakmamaları ve ormanlık alanlarda ateş yakmamaları konusunda uyarılar yapıldı.',
    publishDate: '10 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Orman Yangını', 'Çevre', 'Afet', 'Gündem']
  },
  {
    id: '20',
    slug: slugify('Adalet Bakanlığı\'ndan Yeni Yargı Reformu Paketi Hazırlığı'),
    title: 'Adalet Bakanlığı\'ndan Yeni Yargı Reformu Paketi Hazırlığı',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=20',
    imageHint: 'courtroom judge law',
    content: 'Adalet Bakanlığı, yargı süreçlerini hızlandırmak ve adalete erişimi kolaylaştırmak amacıyla yeni bir yargı reformu paketi üzerinde çalıştıklarını açıkladı. Paketin detaylarının yakın zamanda kamuoyu ile paylaşılması bekleniyor.',
    publishDate: '9 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Yargı Reformu', 'Adalet Bakanlığı', 'Hukuk', 'Gündem']
  },
  {
    id: '21',
    slug: slugify('Kurban Bayramı Tatili İçin Trafik Yoğunluğu Başladı: Sürücülere Uyarılar'),
    title: 'Kurban Bayramı Tatili İçin Trafik Yoğunluğu Başladı: Sürücülere Uyarılar',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=21',
    imageHint: 'highway traffic cars',
    content: 'Yaklaşan Kurban Bayramı tatili öncesinde şehirlerarası yollarda trafik yoğunluğu artmaya başladı. İçişleri Bakanlığı ve Emniyet Genel Müdürlüğü, sürücüleri trafik kurallarına uymaları, hız limitlerini aşmamaları ve yorgun araç kullanmamaları konusunda uyardı. Tatil süresince ek trafik tedbirleri alınacak.',
    publishDate: '8 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Kurban Bayramı', 'Trafik', 'Tatil', 'Gündem']
  },
  {
    id: '22',
    slug: slugify('Türkiye\'nin Tahıl Koridoru Diplomasisi Devam Ediyor'),
    title: 'Türkiye\'nin Tahıl Koridoru Diplomasisi Devam Ediyor',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=22',
    imageHint: 'wheat field grain',
    content: 'Türkiye, Karadeniz Tahıl Koridoru Anlaşması\'nın devamı ve küresel gıda güvenliğinin sağlanması için diplomatik çabalarını sürdürüyor. İlgili taraflarla görüşmeler devam ederken, anlaşmanın uzatılmasının önemi vurgulanıyor.',
    publishDate: '7 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Tahıl Koridoru', 'Diplomasi', 'Gıda Güvenliği', 'Gündem']
  },
  {
    id: '23',
    slug: slugify('Enerji Verimliliği Projelerine Yeni Destekler Açıklandı'),
    title: 'Enerji Verimliliği Projelerine Yeni Destekler Açıklandı',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=23',
    imageHint: 'solar panels energy',
    content: 'Enerji ve Tabii Kaynaklar Bakanlığı, sanayi tesisleri ve konutlarda enerji verimliliğini artırmaya yönelik yeni teşvik ve destek programlarını duyurdu. Amaç, enerji tüketimini azaltmak ve dışa bağımlılığı düşürmek.',
    publishDate: '6 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Enerji Verimliliği', 'Destek Paketi', 'Çevre', 'Gündem']
  },
   {
    id: '24',
    slug: slugify('İçişleri Bakanlığı\'ndan Siber Güvenlik Uyarısı: Dolandırıcılık Yöntemlerine Dikkat'),
    title: 'İçişleri Bakanlığı\'ndan Siber Güvenlik Uyarısı: Dolandırıcılık Yöntemlerine Dikkat',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=24',
    imageHint: 'hacker computer code',
    content: 'İçişleri Bakanlığı Siber Suçlarla Mücadele Daire Başkanlığı, artan online dolandırıcılık vakalarına karşı vatandaşları uyardı. Özellikle sahte web siteleri, oltalama (phishing) saldırıları ve telefon dolandırıcılığı yöntemlerine karşı dikkatli olunması gerektiği belirtildi.',
    publishDate: '5 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Siber Güvenlik', 'Dolandırıcılık', 'Uyarı', 'Gündem']
  },
  {
    id: '25',
    slug: slugify('Türkiye Büyük Millet Meclisi Yeni Yasama Yılına Hazırlanıyor'),
    title: 'Türkiye Büyük Millet Meclisi Yeni Yasama Yılına Hazırlanıyor',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=25',
    imageHint: 'parliament building politics',
    content: 'TBMM, yaz tatilinin ardından yeni yasama yılı için hazırlıklarını sürdürüyor. Yeni dönemde meclis gündemine gelmesi beklenen önemli yasa teklifleri ve düzenlemeler bulunuyor.',
    publishDate: '4 Temmuz 2024',
    sourceUrl: '#',
    tags: ['TBMM', 'Yasama Yılı', 'Politika', 'Gündem']
  },
  {
    id: '26',
    slug: slugify('Fenerbahçe Avrupa Ligi\'nde Güçlü Rakiplerle Eşleşti'),
    title: 'Fenerbahçe Avrupa Ligi\'nde Güçlü Rakiplerle Eşleşti',
    category: 'SPOR',
    imageUrl: 'https://picsum.photos/800/500?random=26',
    imageHint: 'soccer stadium night',
    content: 'Fenerbahçe, UEFA Avrupa Ligi grup aşaması kura çekiminde güçlü rakiplerle aynı gruba düştü. Teknik direktör ve yönetim, zorlu bir grup olduğunu ancak hedeflerinin gruptan çıkmak olduğunu belirtti.',
    publishDate: '11 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Fenerbahçe', 'Avrupa Ligi', 'Futbol', 'Spor']
  },
  {
    id: '27',
    slug: slugify('Yerli Elektrikli Otobüsler Şehir İçi Ulaşımda Yaygınlaşıyor'),
    title: 'Yerli Elektrikli Otobüsler Şehir İçi Ulaşımda Yaygınlaşıyor',
    category: 'EKONOMİ',
    imageUrl: 'https://picsum.photos/800/500?random=27',
    imageHint: 'electric bus city',
    content: 'Türkiye\'de üretilen yerli elektrikli otobüsler, birçok büyükşehir belediyesi tarafından toplu taşımada kullanılmaya başlandı. Çevre dostu ve sessiz çalışan bu otobüsler, hem yakıt tasarrufu sağlıyor hem de karbon emisyonunu azaltıyor.',
    publishDate: '11 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Elektrikli Otobüs', 'Ulaşım', 'Çevre', 'Ekonomi']
  },
   {
    id: '28',
    slug: slugify('Türkiye\'nin Antarktika Bilim Seferi Başarıyla Tamamlandı'),
    title: 'Türkiye\'nin Antarktika Bilim Seferi Başarıyla Tamamlandı',
    category: 'BİLİM TEKNOLOJİ',
    imageUrl: 'https://picsum.photos/800/500?random=28',
    imageHint: 'antarctica ice snow',
    content: 'Türkiye\'nin Ulusal Antarktika Bilim Seferi, belirlenen hedeflere ulaşarak başarıyla tamamlandı. Sefer ekibi, iklim değişikliği, buzullar ve deniz ekosistemi üzerine önemli bilimsel araştırmalar gerçekleştirdi.',
    publishDate: '10 Temmuz 2024',
    sourceUrl: '#',
    tags: ['Antarktika', 'Bilim Seferi', 'Araştırma', 'Bilim Teknoloji']
  },
  {
    id: 'gundem-altun-kardeslik', 
    slug: 'iletisim-baskani-altun-kardeslikten-guc-aliyoruz-terorsuz-bir-turkiye-icin-el-ele-veriyoruz-907111',
    title: 'İletişim Başkanı Altun: Kardeşlikten güç alıyoruz, terörsüz bir Türkiye için el ele veriyoruz',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=99',
    imageHint: 'fahrettin altun speech',
    content: 'İletişim Başkanı Fahrettin Altun, sosyal medya hesabından yaptığı paylaşımda, "Kardeşlikten güç alıyoruz, terörsüz bir Türkiye için el ele veriyoruz." ifadelerini kullandı.\n\nAltun, paylaşımında, Türkiye\'nin terörle mücadelesinin kararlılıkla sürdüğünü belirterek, "Birlik ve beraberlik içinde bu zorlu sürecin üstesinden geleceğiz. Devletimiz, milletimizin huzur ve güvenliği için tüm imkanlarıyla sahada." dedi.\n\nTerör örgütlerine karşı yürütülen operasyonların aralıksız devam ettiğini vurgulayan Altun, "Güvenlik güçlerimiz, yurt içinde ve sınır ötesinde terörün kökünü kazımak için büyük bir özveriyle çalışıyor. Bu mücadelede en büyük gücümüz, aziz milletimizin duaları ve desteğidir." değerlendirmesinde bulundu.\n\nFahrettin Altun, terörün her türlüsünü lanetlediklerini ifade ederek, şunları kaydetti:\n"Terör örgütleri ve destekçileri, ne yaparlarsa yapsınlar, Türkiye\'nin birliğine, beraberliğine ve kardeşliğine asla zarar veremeyeceklerdir. Ülkemizin huzurunu hedef alanlara karşı mücadelemiz, son terörist etkisiz hale getirilinceye kadar devam edecektir. Kardeşlik bağlarımızla kenetlenerek, bu topraklarda barış ve güven ortamını kalıcı kılacağız."',
    publishDate: '13 Temmuz 2024 18:05',
    sourceUrl: '#',
    subtitle: 'İletişim Başkanı Fahrettin Altun, Türkiye\'nin terörle mücadelesinin kararlılıkla sürdüğünü belirterek, "Birlik ve beraberlik içinde bu zorlu sürecin üstesinden geleceğiz." dedi.',
    tags: ['Fahrettin Altun', 'Terörle Mücadele', 'Gündem', 'Açıklama', 'Türkiye']
  }
];

export const PLACEHOLDER_VIDEOS: Video[] = [
  {
    id: 'v1',
    slug: 'koruyucu-aile-sisteminin-kahramanlari',
    title: 'Koruyucu aile sisteminin kahramanları',
    category: 'YAŞAM',
    thumbnailUrl: 'https://picsum.photos/1280/720?random=60',
    imageHint: 'family hug child',
    description: 'Türkiye, koruyucu aile sistemiyle dünyaya model oluyor. Binlerce çocuk sıcak yuvaya, aileler de çocuğa kavuşuyor. Aile ve Sosyal Hizmetler Bakanlığı\'na bağlı 60\'a yakın uzman canla başla çalışıyor.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
    sourceUrl: '#',
    duration: '03:28',
    publishDate: '13.05.2024 16:16',
    viewCount: '1.234'
  },
  {
    id: 'v2',
    slug: 'adanada-kontrolden-cikan-otomobilin-bisikletliye-carpma-ani-kamerada',
    title: 'Adana\'da kontrolden çıkan otomobilin bisikletliye çarpma anı kamerada',
    category: 'Türkiye',
    thumbnailUrl: 'https://picsum.photos/400/225?random=51',
    imageHint: 'car accident cctv',
    videoUrl: '#',
    sourceUrl: '#',
    duration: '01:15',
    publishDate: '13.05.2024 15:30',
  },
  {
    id: 'v3',
    slug: 'italyada-etna-yanardagi-yogun-sekilde-kul-ve-lav-puskurttu',
    title: 'İtalya\'da Etna Yanardağı yoğun şekilde kül ve lav püskürttü',
    category: 'Dünya',
    thumbnailUrl: 'https://picsum.photos/400/225?random=52',
    imageHint: 'volcano eruption etna',
    videoUrl: '#',
    sourceUrl: '#',
    duration: '02:05',
    publishDate: '13.05.2024 14:00',
  },
  {
    id: 'v4',
    slug: 'maymun-kacti-mahalleli-kovaladi',
    title: 'Maymun kaçtı, mahalleli kovaladı',
    category: 'Yaşam',
    thumbnailUrl: 'https://picsum.photos/400/225?random=53',
    imageHint: 'monkey running street',
    videoUrl: '#',
    sourceUrl: '#',
    duration: '01:40',
    publishDate: '13.05.2024 12:15',
  },
  {
    id: 'v5',
    slug: 'israilin-saldirilari-nedeniyle-10-yasinda-sacina-ak-dustu',
    title: 'İsrail\'in saldırıları nedeniyle 10 yaşında saçına ak düştü',
    category: 'Dünya',
    thumbnailUrl: 'https://picsum.photos/400/225?random=59',
    imageHint: 'child war conflict',
    videoUrl: '#',
    sourceUrl: '#',
    duration: '02:30',
    publishDate: '12.05.2024 18:00',
  },
  {
    id: 'v6',
    slug: 'bayraktar-tb3-sihalardan-tam-isabet',
    title: 'Bayraktar TB3 SİHA\'lardan tam isabet',
    category: 'Savunma',
    thumbnailUrl: 'https://picsum.photos/400/225?random=50', 
    imageHint: 'drone military strike',
    description: 'Milli SİHA Bayraktar TB3, DENİZKURDU-2025 Tatbikatı\'nda TCG Anadolu\'dan havalanarak hedefi tam isabetle vurdu.',
    videoUrl: '#',
    sourceUrl: '#',
    duration: '01:55',
    publishDate: '12.05.2024 17:00',
  },
  {
    id: 'v7',
    slug: 'metro-istasyonunda-uzerine-reklam-panosu-dusen-kadin-yaralandi',
    title: 'Metro istasyonunda üzerine reklam panosu düşen kadın yaralandı',
    category: 'Türkiye',
    thumbnailUrl: 'https://picsum.photos/400/225?random=55',
    imageHint: 'subway station accident',
    videoUrl: '#',
    sourceUrl: '#',
    duration: '00:50',
    publishDate: '11.05.2024 19:30',
  },
   {
    id: 'v8',
    slug: 'stresle-araniz-nasil',
    title: 'Stresle aranız nasıl?',
    category: 'Sağlık',
    thumbnailUrl: 'https://picsum.photos/400/225?random=61',
    imageHint: 'stress health person',
    videoUrl: '#',
    sourceUrl: '#',
    duration: '04:12',
    publishDate: '11.05.2024 17:30',
  },
  {
    id: 'v9',
    slug: 'sanliurfada-sulama-kanalinda-2-kucuk-cocuk-boguldu',
    title: 'Şanlıurfa\'da sulamada kullanılan 2 küçük çocuk trafik yakalandı', // Title slightly changed to match image
    category: 'Türkiye',
    thumbnailUrl: 'https://picsum.photos/400/225?random=62',
    imageHint: 'sad news child',
    videoUrl: '#',
    sourceUrl: '#',
    duration: '01:18',
    publishDate: '11.05.2024 16:56',
  },
  {
    id: 'v10',
    slug: 'trumpin-ticaret-savasi-neler-getirecek',
    title: 'Trump\'ın ticaret savaşı neler getirecek?',
    category: 'Ekonomi',
    thumbnailUrl: 'https://picsum.photos/400/225?random=63',
    imageHint: 'trump politics economy',
    videoUrl: '#',
    sourceUrl: '#',
    duration: '03:40',
    publishDate: '11.05.2024 14:36',
  },
  {
    id: 'v11',
    slug: 'abdde-israil-karsiti-ogrencilere-baskilar-artiyor',
    title: 'ABD\'de İsrail karşıtı öğrencilere baskılar artıyor',
    category: 'Dünya',
    thumbnailUrl: 'https://picsum.photos/400/225?random=64',
    imageHint: 'protest student usa',
    videoUrl: '#',
    sourceUrl: '#',
    duration: '02:55',
    publishDate: '11.05.2024 13:41',
  }
];

export const PLACEHOLDER_PODCASTS: PodcastEpisode[] = [
  // Hayatın Hikayesi Series
  {
    id: 'hh1',
    slug: 'hayatin-hikayesi-bolum-9',
    title: '9. Bölüm: Umut Işığında Yolculuk',
    seriesTitle: 'Hayatın Hikayesi',
    seriesSlug: 'hayatin-hikayesi',
    category: 'Söyleşi',
    imageUrl: 'https://picsum.photos/600/600?random=70',
    imageHint: 'podcast journey inspiration',
    description: 'Hayatın Hikayesi\'nin bu bölümünde, zorluklar karşısında umudunu kaybetmeyen ve ilham veren bir konuğumuz var. Yaşadığı deneyimleri ve hayata bakış açısını bizimle paylaşıyor. Bu bölümde, umut, direniş ve insanın içsel gücü üzerine derin bir sohbete tanık olacaksınız. Konuğumuzun hikayesi, dinleyicilere kendi hayat yolculuklarında ilham verecek ve zorlukların üstesinden gelme konusunda motivasyon sağlayacaktır.',
    shortDescription: 'Zorluklar karşısında umudunu kaybetmeyen, ilham veren bir konukla derin bir sohbet.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Placeholder audio
    duration: '28:45',
    publishDate: '12 Temmuz 2024',
    listenCount: 1400,
  },
  {
    id: 'hh2',
    slug: 'hayatin-hikayesi-bolum-8',
    title: '8. Bölüm: Geçmişin İzleri',
    seriesTitle: 'Hayatın Hikayesi',
    seriesSlug: 'hayatin-hikayesi',
    category: 'Söyleşi',
    imageUrl: 'https://picsum.photos/600/600?random=71',
    imageHint: 'podcast past memory',
    description: 'Geçmişin derinliklerine yolculuk yaptığımız bu bölümde, anıların ve deneyimlerin hayatımızı nasıl şekillendirdiğini inceliyoruz. Konuğumuzla birlikte unutulmaz anıları ve bu anıların bugünkü yaşantımıza etkilerini konuşuyoruz.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    duration: '32:10',
    publishDate: '5 Temmuz 2024',
    listenCount: 980,
  },
  {
    id: 'hh3',
    slug: 'hayatin-hikayesi-bolum-7',
    title: '7. Bölüm: Sanatın Büyüsü',
    seriesTitle: 'Hayatın Hikayesi',
    seriesSlug: 'hayatin-hikayesi',
    category: 'Söyleşi',
    imageUrl: 'https://picsum.photos/600/600?random=72',
    imageHint: 'podcast art creativity',
    description: 'Sanatın hayatımızdaki yerine ve dönüştürücü gücüne odaklandığımız bu bölümde, bir sanatçının ilham dolu hikayesini dinliyoruz. Yaratıcılık süreçleri, sanatın toplumsal etkileri ve kişisel ifade biçimleri üzerine keyifli bir sohbet.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    duration: '25:50',
    publishDate: '28 Haziran 2024',
    listenCount: 1150,
  },

  // Ekonomi Notları Series
  {
    id: 'en1',
    slug: 'ekonomi-notlari-haftalik-degerlendirme-temmuz-2',
    title: 'Haftalık Değerlendirme: Temmuz Ayının İkinci Haftası',
    seriesTitle: 'Ekonomi Notları',
    seriesSlug: 'ekonomi-notlari',
    category: 'Ekonomi',
    imageUrl: 'https://picsum.photos/600/600?random=73',
    imageHint: 'podcast finance chart',
    description: 'Ekonomi Notları\'nda bu hafta, Temmuz ayının ikinci haftasındaki önemli ekonomik gelişmeleri, piyasa hareketlerini ve gelecek beklentilerini uzman konuklarımızla değerlendiriyoruz. Enflasyon, faiz oranları ve küresel piyasaların Türkiye ekonomisine etkileri masaya yatırılıyor.',
    shortDescription: 'Temmuz ikinci haftası ekonomik gelişmeler, piyasa analizleri ve gelecek beklentileri.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    duration: '45:20',
    publishDate: '11 Temmuz 2024',
    listenCount: 2100,
  },
  {
    id: 'en2',
    slug: 'ekonomi-notlari-kripto-dunyasi',
    title: 'Kripto Dünyası: Fırsatlar ve Riskler',
    seriesTitle: 'Ekonomi Notları',
    seriesSlug: 'ekonomi-notlari',
    category: 'Ekonomi',
    imageUrl: 'https://picsum.photos/600/600?random=74',
    imageHint: 'podcast crypto bitcoin',
    description: 'Kripto para piyasalarındaki son durumu, yatırımcılar için fırsatları ve potansiyel riskleri alanında uzman bir isimle konuşuyoruz. Blockchain teknolojisi, regülasyonlar ve geleceğin finans dünyası üzerine önemli analizler.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    duration: '38:00',
    publishDate: '4 Temmuz 2024',
    listenCount: 1850,
  },

  // Bir Dünya Haber Series
  {
    id: 'bdh1',
    slug: 'bir-dunya-haber-kuresel-gundem',
    title: 'Küresel Gündem: Öne Çıkan Başlıklar',
    seriesTitle: 'Bir Dünya Haber',
    seriesSlug: 'bir-dunya-haber',
    category: 'Dünya',
    imageUrl: 'https://picsum.photos/600/600?random=75',
    imageHint: 'podcast globe news',
    description: 'Dünya genelindeki önemli siyasi, sosyal ve ekonomik gelişmeleri ele aldığımız Bir Dünya Haber\'de bu hafta, uluslararası ilişkiler, bölgesel çatışmalar ve küresel sorunlara dair kapsamlı bir analiz sunuyoruz.',
    shortDescription: 'Uluslararası ilişkiler, bölgesel çatışmalar ve küresel sorunlara dair kapsamlı analiz.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    duration: '30:15',
    publishDate: '10 Temmuz 2024',
    listenCount: 1600,
  },
  {
    id: 'bdh2',
    slug: 'bir-dunya-haber-teknoloji-devleri',
    title: 'Teknoloji Devlerinin Gelecek Planları',
    seriesTitle: 'Bir Dünya Haber',
    seriesSlug: 'bir-dunya-haber',
    category: 'Teknoloji',
    imageUrl: 'https://picsum.photos/600/600?random=76',
    imageHint: 'podcast tech future',
    description: 'Dünyanın önde gelen teknoloji şirketlerinin yenilikçi projelerini, gelecek vizyonlarını ve bu gelişmelerin günlük hayatımıza olası etkilerini masaya yatırıyoruz. Yapay zeka, uzay teknolojileri ve daha fazlası.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    duration: '27:00',
    publishDate: '3 Temmuz 2024',
    listenCount: 1300,
  },
];


// Placeholder Photo Galleries
export const PLACEHOLDER_GALLERIES: PhotoGallery[] = [
    {
        id: 'pg1',
        slug: 'meteoroloji-25-ili-uyardi-gok-gurultulu-saganak-geliyor',
        title: 'Meteoroloji 25 ili uyardı: Gök gürültülü sağanak geliyor',
        category: 'TÜRKİYE',
        coverImageUrl: 'https://picsum.photos/1200/800?random=80', 
        coverImageHint: 'weather storm map',
        publishDate: '13 Temmuz 2024',
        updateDate: '13 Temmuz 2024 11:45',
        description: 'Meteoroloji Genel Müdürlüğü, 25 il için sarı ve turuncu kodlu uyarıda bulundu. Hafta sonu planı yapanların dikkat etmesi gereken iller arasında Ankara, İstanbul ve İzmir de var.',
        images: [
            { id: 'pg1-img1', imageUrl: 'https://picsum.photos/800/600?random=81', imageHint: 'rain clouds city', caption: 'Meteoroloji Genel Müdürlüğü, bazı iller için sarı ve turuncu kodlu uyarı yayımladı. Buna göre, Marmara, Ege, Batı Akdeniz\'in iç kesimleri, İç Anadolu, Karadeniz ve Doğu Anadolu\'nun kuzeyinde gök gürültülü sağanak bekleniyor.' },
            { id: 'pg1-img2', imageUrl: 'https://picsum.photos/800/600?random=82', imageHint: 'weather map turkey', caption: 'Yağışların, İç Ege, Göller Yöresi, İç Anadolu\'nun kuzeybatısı, Batı Karadeniz\'in iç kesimleri ile Kırşehir, Yozgat, Çorum, Samsun ve Amasya çevrelerinde yerel olarak kuvvetli olması bekleniyor.' },
            { id: 'pg1-img3', imageUrl: 'https://picsum.photos/800/600?random=83', imageHint: 'lightning storm sky', caption: 'MGM tarafından yapılan açıklamada, "Ani sel, su baskını, yıldırım, yerel dolu yağışı, ani kuvvetli rüzgar ve kısa süreli fırtına ile ulaşımda aksamalar gibi olumsuzluklara karşı dikkatli ve tedbirli olunmalıdır." denildi.' },
            { id: 'pg1-img4', imageUrl: 'https://picsum.photos/800/600?random=84', imageHint: 'city street rain', caption: 'İstanbul\'da beklenen sağanak yağış nedeniyle vatandaşların hazırlıklı olması istendi.' },
            { id: 'pg1-img5', imageUrl: 'https://picsum.photos/800/600?random=85', imageHint: 'flood water street', caption: 'Ankara ve İzmir\'de de yer yer kuvvetli yağışlar bekleniyor.' },
            { id: 'pg1-img6', imageUrl: 'https://picsum.photos/800/600?random=86', imageHint: 'umbrella rain weather', caption: 'Vatandaşların Meteoroloji\'nin uyarılarını dikkate alması önem taşıyor.' },
        ]
    },
    {
        id: 'pg2',
        slug: 'turkiyenin-maldivleri-salda-golu-ziyaretci-akinina-ugradi',
        title: 'Türkiye\'nin Maldivleri Salda Gölü ziyaretçi akınına uğradı',
        category: 'YAŞAM',
        coverImageUrl: 'https://picsum.photos/600/400?random=90',
        coverImageHint: 'lake salda turquoise',
        publishDate: '12 Temmuz 2024',
        description: 'Burdur\'un Yeşilova ilçesinde bulunan Salda Gölü, eşsiz turkuaz rengi ve bembeyaz kumsallarıyla tatilcilerin gözdesi oldu. Bayram tatilini fırsat bilen binlerce kişi göle akın etti.',
        images: [
            { id: 'pg2-img1', imageUrl: 'https://picsum.photos/800/600?random=91', imageHint: 'salda lake beach', caption: 'Salda Gölü, Türkiye\'nin en derin ve en temiz göllerinden biri olarak biliniyor.' },
            { id: 'pg2-img2', imageUrl: 'https://picsum.photos/800/600?random=92', imageHint: 'tourists salda lake', caption: 'Beyaz kumsalları ve turkuaz suyu ile Maldivler\'e benzetilen göl, özellikle yaz aylarında yoğun ilgi görüyor.' },
            { id: 'pg2-img3', imageUrl: 'https://picsum.photos/800/600?random=93', imageHint: 'salda lake nature', caption: 'Göl çevresindeki doğal güzellikler de ziyaretçileri cezbediyor.' },
            { id: 'pg2-img4', imageUrl: 'https://picsum.photos/800/600?random=94', imageHint: 'camping salda lake', caption: 'Salda Gölü çevresinde kamp yapmak ve doğa yürüyüşleri yapmak mümkün.' },
        ]
    },
     {
        id: 'pg3',
        slug: 'istanbul-arkeoloji-muzesindeki-lahitler',
        title: 'İstanbul Arkeoloji Müzeleri\'ndeki lahitler',
        category: 'KÜLTÜR SANAT',
        coverImageUrl: 'https://picsum.photos/600/400?random=100',
        coverImageHint: 'sarcophagus museum istanbul',
        publishDate: '11 Temmuz 2024',
        description: 'Osmanlı İmparatorluğu\'nun çeşitli bölgelerinden getirilen binlerce esere ev sahipliği yapan İstanbul Arkeoloji Müzeleri\'ndeki antik döneme ait lahitler, ziyaretçilerini tarihi bir yolculuğa çıkarıyor.',
        images: [
            { id: 'pg3-img1', imageUrl: 'https://picsum.photos/800/600?random=101', imageHint: 'alexander sarcophagus detail', caption: 'Müzenin en önemli eserlerinden biri olan İskender Lahdi.' },
            { id: 'pg3-img2', imageUrl: 'https://picsum.photos/800/600?random=102', imageHint: 'crying women sarcophagus', caption: 'Ağlayan Kadınlar Lahdi, Sidon Kral Nekropolü\'nde bulundu.' },
            { id: 'pg3-img3', imageUrl: 'https://picsum.photos/800/600?random=103', imageHint: 'lycian sarcophagus museum', caption: 'Likya Lahdi, kendine özgü mimarisiyle dikkat çekiyor.' },
            { id: 'pg3-img4', imageUrl: 'https://picsum.photos/800/600?random=104', imageHint: 'tabnit sarcophagus hieroglyph', caption: 'Tabnit Lahdi, üzerinde hem Mısır hiyeroglifleri hem de Fenike yazısı bulunan nadir eserlerden.' },
            { id: 'pg3-img5', imageUrl: 'https://picsum.photos/800/600?random=105', imageHint: 'satrap sarcophagus relief', caption: 'Satrap Lahdi üzerindeki kabartmalar, dönemin yaşantısına dair ipuçları veriyor.' },
        ]
    },
     {
        id: 'pg4',
        slug: 'turk-yildizlari-nefes-kesti',
        title: 'Türk Yıldızları nefes kesti',
        category: 'TÜRKİYE',
        coverImageUrl: 'https://picsum.photos/600/400?random=110',
        coverImageHint: 'jets formation sky',
        publishDate: '10 Temmuz 2024',
        description: 'Türk Hava Kuvvetleri\'nin akrobasi timi Türk Yıldızları, Konya\'da gerçekleştirdiği gösteriyle izleyenleri büyüledi. NF-5 uçaklarıyla yapılan tehlikeli manevralar nefes kesti.',
        images: [
            { id: 'pg4-img1', imageUrl: 'https://picsum.photos/800/600?random=111', imageHint: 'turkish stars jets', caption: 'Türk Yıldızları, dünyanın sayılı süpersonik akrobasi timlerinden biri.' },
            { id: 'pg4-img2', imageUrl: 'https://picsum.photos/800/600?random=112', imageHint: 'jet smoke trail', caption: 'Gökyüzüne çizdikleri kalp figürü büyük alkış aldı.' },
            { id: 'pg4-img3', imageUrl: 'https://picsum.photos/800/600?random=113', imageHint: 'jets flying close', caption: 'Pilotların uyumu ve cesareti izleyenlerden tam not aldı.' },
            { id: 'pg4-img4', imageUrl: 'https://picsum.photos/800/600?random=114', imageHint: 'crowd watching airshow', caption: 'Gösteriyi binlerce vatandaş ilgiyle takip etti.' },
        ]
    },
    {
        id: 'pg5',
        slug: 'kapadokya-balon-turlari',
        title: 'Kapadokya\'da Gün Doğumu Balon Turları',
        category: 'YAŞAM',
        coverImageUrl: 'https://picsum.photos/600/400?random=120',
        coverImageHint: 'cappadocia balloons sunrise',
        publishDate: '9 Temmuz 2024',
        description: 'Kapadokya\'nın eşsiz peri bacaları manzarası eşliğinde yapılan sıcak hava balon turları, yerli ve yabancı turistlerin ilgisini çekmeye devam ediyor. Gün doğumunda gökyüzü rengarenk balonlarla doluyor.',
        images: [
            { id: 'pg5-img1', imageUrl: 'https://picsum.photos/800/600?random=121', imageHint: 'hot air balloons sky', caption: 'Onlarca sıcak hava balonu aynı anda gökyüzüne yükseliyor.' },
            { id: 'pg5-img2', imageUrl: 'https://picsum.photos/800/600?random=122', imageHint: 'fairy chimneys cappadocia', caption: 'Peri bacalarının üzerinden süzülen balonlar kartpostallık manzaralar oluşturuyor.' },
        ]
    },
    {
        id: 'pg6',
        slug: 'efes-antik-kenti',
        title: 'Efes Antik Kenti\'nde Tarihe Yolculuk',
        category: 'KÜLTÜR SANAT',
        coverImageUrl: 'https://picsum.photos/600/400?random=130',
        coverImageHint: 'ephesus ancient city ruins',
        publishDate: '8 Temmuz 2024',
        description: 'UNESCO Dünya Mirası Listesi\'nde yer alan Efes Antik Kenti, her yıl binlerce tarih meraklısını ağırlıyor. Celsus Kütüphanesi, Büyük Tiyatro ve Yamaç Evler gibi yapılar ziyaretçileri büyülüyor.',
        images: [
            { id: 'pg6-img1', imageUrl: 'https://picsum.photos/800/600?random=131', imageHint: 'celsus library ephesus', caption: 'Celsus Kütüphanesi, Efes\'in en görkemli yapılarından biri.' },
        ]
    }
];
