export const NAV_LINKS = [
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
    title: 'Türkiye\'nin Otomobili Togg İçin Yeni Gelişmeler',
    category: 'EKONOMİ',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    imageHint: 'car factory',
    content: 'Türkiye\'nin yerli otomobili Togg, üretim ve teknoloji alanında önemli adımlar atmaya devam ediyor. Son yapılan açıklamada, Togg\'un yeni batarya teknolojisi ve otonom sürüş özellikleriyle ilgili detaylar paylaşıldı. Fabrikadaki üretim kapasitesinin artırılması ve uluslararası pazarlara açılma hedefleri de vurgulandı. Togg, Türkiye\'nin teknoloji ve mühendislik alanındaki yeteneklerini dünyaya göstermeyi amaçlıyor.',
    publishDate: '10 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/ekonomi/turkiyenin-otomobili-togg-icin-yeni-gelismeler-12345.html'
  },
  {
    id: '2',
    title: 'Milli Takım Avrupa Şampiyonası\'nda Çeyrek Finalde!',
    category: 'SPOR',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    imageHint: 'soccer match',
    content: 'A Milli Futbol Takımımız, Avrupa Futbol Şampiyonası\'nda gösterdiği üstün performansla çeyrek finale yükseldi. Son 16 turunda güçlü rakibini eleyen ay-yıldızlılar, taraftarlarına büyük sevinç yaşattı. Teknik direktör ve oyuncular, maç sonu yaptıkları açıklamalarda takım ruhuna ve mücadeleye vurgu yaptı. Bir sonraki rakip için hazırlıklar başladı.',
    publishDate: '9 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/spor/milli-takim-avrupa-sampiyonasinda-ceyrek-finalde-67890.html'
  },
  {
    id: '3',
    title: 'Yeni Uzay Teleskobu Evrenin Derinliklerinden İlk Görüntüleri Gönderdi',
    category: 'BİLİM TEKNOLOJİ',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    imageHint: 'galaxy telescope',
    content: 'NASA ve ESA ortaklığında geliştirilen yeni nesil uzay teleskobu, evrenin daha önce hiç görülmemiş derinliklerinden ilk renkli görüntüleri Dünya\'ya ulaştırdı. Bu görüntüler, galaksi oluşumları, yıldızların doğuşu ve kara delikler hakkında yeni bilgiler sunuyor. Bilim insanları, bu verilerin evren anlayışımızı kökten değiştirebileceğini belirtiyor.',
    publishDate: '8 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/bilim-teknoloji/yeni-uzay-teleskobu-goruntuleri-11223.html'
  },
  {
    id: '4',
    title: 'İstanbul\'da Tarihi Yarımada\'da Yeni Arkeolojik Keşifler',
    category: 'KÜLTÜR SANAT',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    imageHint: 'archaeology dig',
    content: 'İstanbul Tarihi Yarımada\'da devam eden metro çalışmaları sırasında önemli arkeolojik kalıntılara ulaşıldı. Bizans ve Osmanlı dönemlerine ait olduğu düşünülen eserler arasında seramikler, sikkeler ve yapı kalıntıları bulunuyor. Arkeologlar, bu keşiflerin İstanbul\'un tarihi katmanlarına ışık tutacağını ifade ediyor.',
    publishDate: '7 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/kultur-sanat/istanbul-arkeolojik-kesifler-33445.html'
  },
  {
    id: '5',
    title: 'Küresel İklim Değişikliği Raporu Yayınlandı: Acil Önlemler Alınmalı',
    category: 'DÜNYA',
    imageUrl: 'https://picsum.photos/600/400?random=5',
    imageHint: 'climate change',
    content: 'Birleşmiş Milletler\'e bağlı Hükümetlerarası İklim Değişikliği Paneli (IPCC) son raporunu yayınladı. Raporda, küresel sıcaklık artışının geri döndürülemez sonuçlara yol açabileceği ve acil olarak sera gazı emisyonlarının azaltılması gerektiği vurgulandı. Rapor, yenilenebilir enerjiye geçişin hızlandırılması ve sürdürülebilir politikaların benimsenmesi çağrısında bulunuyor.',
    publishDate: '6 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/dunya/iklim-degisikligi-raporu-55667.html'
  },
  {
    id: '6',
    title: 'Sağlıklı Yaşam İçin Beslenme Uzmanlarından Öneriler',
    category: 'SAĞLIK',
    imageUrl: 'https://picsum.photos/600/400?random=6',
    imageHint: 'healthy food',
    content: 'Beslenme uzmanları, sağlıklı ve dengeli bir yaşam için mevsimine uygun taze sebze ve meyve tüketiminin önemine dikkat çekiyor. İşlenmiş gıdalardan uzak durulması, yeterli su içilmesi ve düzenli fiziksel aktivite yapılması da sağlıklı yaşamın temel taşları arasında gösteriliyor. Özellikle yaz aylarında sıvı alımına özen gösterilmesi gerektiği belirtiliyor.',
    publishDate: '5 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/saglik/saglikli-yasam-onerileri-77889.html'
  },
];
