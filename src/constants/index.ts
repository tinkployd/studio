export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[]; // For dropdowns
}

export const NAV_LINKS: NavLink[] = [
  { label: 'SICAK', href: '#' }, // In image this looks like a category that might have a dropdown
  { label: 'SAVUNMA', href: '#' },
  { label: 'ÇOCUK', href: '#' },
  { label: 'ÖZEL HABER', href: '#' },
  { label: 'DOSYA HABER', href: '#' },
  { label: 'DİĞER', href: '#' }, // In image this looks like a category that might have a dropdown
  // Additional links from current app, can be kept or removed based on final design
  { label: 'GÜNDEM', href: '#' },
  { label: 'DÜNYA', href: '#' },
  { label: 'EKONOMİ', href: '#' },
  { label: 'SPOR', href: '#' },
  { label: 'BİLİM TEKNOLOJİ', href: '#' },
  { label: 'YAŞAM', href: '#' },
  { label: 'KÜLTÜR SANAT', href: '#' },
  { label: 'SAĞLIK', href: '#' },
  { label: 'PROGRAMLAR', href: '#' },
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
  title: string;
  category: string;
  imageUrl: string;
  imageHint: string;
  content: string;
  publishDate?: string;
  sourceUrl?: string;
}

export const PLACEHOLDER_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Türkiye\'nin Otomobili Togg İçin Yeni Gelişmeler ve Global Hedefler',
    category: 'EKONOMİ',
    imageUrl: 'https://picsum.photos/800/500?random=1',
    imageHint: 'electric car future',
    content: 'Türkiye\'nin yerli otomobili Togg, üretim ve teknoloji alanında önemli adımlar atmaya devam ediyor. Son yapılan açıklamada, Togg\'un yeni batarya teknolojisi ve otonom sürüş özellikleriyle ilgili detaylar paylaşıldı. Fabrikadaki üretim kapasitesinin artırılması ve uluslararası pazarlara açılma hedefleri de vurgulandı. Togg, Türkiye\'nin teknoloji ve mühendislik alanındaki yeteneklerini dünyaya göstermeyi amaçlıyor. Araç, kullanıcı deneyimini en üst seviyeye çıkarmak için gelişmiş bağlantı özellikleri ve kişiselleştirilebilir arayüzler sunacak.',
    publishDate: '10 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/ekonomi/turkiyenin-otomobili-togg-icin-yeni-gelismeler-12345.html'
  },
  {
    id: '2',
    title: 'Milli Takım Avrupa Şampiyonası\'nda Tarihi Başarıyla Çeyrek Finalde!',
    category: 'SPOR',
    imageUrl: 'https://picsum.photos/800/500?random=2',
    imageHint: 'soccer celebration stadium',
    content: 'A Milli Futbol Takımımız, Avrupa Futbol Şampiyonası\'nda gösterdiği üstün performansla çeyrek finale yükseldi. Son 16 turunda güçlü rakibini nefes kesen bir maç sonunda eleyen ay-yıldızlılar, taraftarlarına büyük sevinç yaşattı. Teknik direktör ve oyuncular, maç sonu yaptıkları açıklamalarda takım ruhuna, inanca ve taraftar desteğine vurgu yaptı. Bir sonraki zorlu rakip için hazırlıklar tüm hızıyla başladı.',
    publishDate: '9 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/spor/milli-takim-avrupa-sampiyonasinda-ceyrek-finalde-67890.html'
  },
  {
    id: '3',
    title: 'Yeni Uzay Teleskobu Evrenin Derinliklerinden İlk Çarpıcı Görüntüleri Dünya\'ya Ulaştırdı',
    category: 'BİLİM TEKNOLOJİ',
    imageUrl: 'https://picsum.photos/800/500?random=3',
    imageHint: 'nebula stars galaxy',
    content: 'NASA ve ESA ortaklığında geliştirilen yeni nesil uzay teleskobu, evrenin daha önce hiç görülmemiş uzak köşelerinden ilk renkli ve detaylı görüntüleri Dünya\'ya ulaştırdı. Bu muazzam görüntüler, galaksi oluşumları, yıldızların doğuş ve ölüm süreçleri, ve gizemli kara delikler hakkında yeni bilgiler sunuyor. Bilim insanları, bu verilerin evren anlayışımızı kökten değiştirebileceğini ve astrofizikte yeni bir çağ başlatabileceğini belirtiyor.',
    publishDate: '8 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/bilim-teknoloji/yeni-uzay-teleskobu-goruntuleri-11223.html'
  },
  {
    id: '4',
    title: 'İstanbul\'da Tarihi Yarımada\'da Devam Eden Çalışmalarda Yeni Arkeolojik Keşifler Heyecan Yarattı',
    category: 'KÜLTÜR SANAT',
    imageUrl: 'https://picsum.photos/800/500?random=4',
    imageHint: 'ancient ruins excavation',
    content: 'İstanbul Tarihi Yarımada\'da devam eden altyapı ve restorasyon çalışmaları sırasında Roma, Bizans ve Osmanlı dönemlerine ait olduğu düşünülen çok sayıda önemli arkeolojik kalıntıya ulaşıldı. Eserler arasında günlük yaşamda kullanılan seramikler, değerli sikkeler, mozaik parçaları ve antik yapı kalıntıları bulunuyor. Arkeologlar, bu keşiflerin İstanbul\'un zengin tarihi katmanlarına ve kültürel mirasına ışık tutacağını ifade ediyor.',
    publishDate: '7 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/kultur-sanat/istanbul-arkeolojik-kesifler-33445.html'
  },
  {
    id: '5',
    title: 'Küresel İklim Değişikliği Raporu Yayınlandı: Gelecek Nesiller İçin Acil Önlemler Alınmalı',
    category: 'DÜNYA',
    imageUrl: 'https://picsum.photos/800/500?random=5',
    imageHint: 'earth environment pollution',
    content: 'Birleşmiş Milletler\'e bağlı Hükümetlerarası İklim Değişikliği Paneli (IPCC) merakla beklenen son kapsamlı raporunu yayınladı. Raporda, küresel sıcaklık artışının yıkıcı ve geri döndürülemez sonuçlara yol açabileceği, bu nedenle acil ve kararlı olarak sera gazı emisyonlarının azaltılması gerektiği bir kez daha güçlü bir şekilde vurgulandı. Rapor, yenilenebilir enerjiye geçişin hızlandırılması, enerji verimliliğinin artırılması ve sürdürülebilir politikaların tüm ülkeler tarafından benimsenmesi çağrısında bulunuyor.',
    publishDate: '6 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/dunya/iklim-degisikligi-raporu-55667.html'
  },
  {
    id: '6',
    title: 'Sağlıklı ve Uzun Bir Yaşam İçin Beslenme Uzmanlarından Altın Değerinde Öneriler',
    category: 'SAĞLIK',
    imageUrl: 'https://picsum.photos/800/500?random=6',
    imageHint: 'vegetables fruits healthy',
    content: 'Alanında uzman diyetisyenler ve beslenme uzmanları, sağlıklı ve dengeli bir yaşam sürdürmek için mevsimine uygun, taze ve çeşitli sebze-meyve tüketiminin hayati önemine dikkat çekiyor. İşlenmiş gıdalardan, şekerli içeceklerden ve aşırı tuz tüketiminden uzak durulması, yeterli miktarda su içilmesi ve düzenli fiziksel aktivite yapılması da sağlıklı yaşamın temel taşları arasında gösteriliyor. Özellikle yaz aylarında sıvı alımına ve hafif beslenmeye özen gösterilmesi gerektiği belirtiliyor.',
    publishDate: '5 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/saglik/saglikli-yasam-onerileri-77889.html'
  },
];

