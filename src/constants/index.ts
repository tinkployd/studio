
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[]; // For dropdowns
  isDropdown?: boolean; // Explicitly mark if it should show a dropdown arrow
}

export const MAIN_HEADER_NAV_LINKS: NavLink[] = [
  { label: 'SICAK', href: '#', isDropdown: true },
  { label: 'SAVUNMA', href: '#' },
  { label: 'ÇOCUK', href: '#' },
  { label: 'ÖZEL HABER', href: '#' },
  { label: 'DOSYA HABER', href: '#' },
  { label: 'DİĞER', href: '#', isDropdown: true },
];

export const NAV_LINKS: NavLink[] = [
  // Links for the main header (also used in mobile menu)
  { label: 'SICAK', href: '#', isDropdown: true },
  { label: 'SAVUNMA', href: '#' },
  { label: 'ÇOCUK', href: '#' },
  { label: 'ÖZEL HABER', href: '#' },
  { label: 'DOSYA HABER', href: '#' },
  { label: 'DİĞER', href: '#', isDropdown: true },
  // Additional links primarily for mobile menu and site structure
  { label: 'GÜNDEM', href: '#', isDropdown: true },
  { label: 'DÜNYA', href: '#', isDropdown: true },
  { label: 'EKONOMİ', href: '#', isDropdown: true },
  { label: 'SPOR', href: '#', isDropdown: true },
  { label: 'BİLİM TEKNOLOJİ', href: '#', isDropdown: true },
  { label: 'YAŞAM', href: '#', isDropdown: true },
  { label: 'KÜLTÜR SANAT', href: '#', isDropdown: true },
  { label: 'SAĞLIK', href: '#', isDropdown: true },
  { label: 'PROGRAMLAR', href: '#', isDropdown: true },
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

// Add more articles, especially in GÜNDEM category to fill the new slots
export const PLACEHOLDER_ARTICLES: Article[] = [
  // --- Existing Articles (0-17) ---
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
  {
    id: '7',
    title: 'Yapay Zeka Sanat Dünyasını Nasıl Değiştiriyor? Yeni Sergiler ve Tartışmalar',
    category: 'BİLİM TEKNOLOJİ',
    imageUrl: 'https://picsum.photos/800/500?random=7',
    imageHint: 'ai art abstract',
    content: 'Yapay zeka tarafından üretilen sanat eserleri, dünya genelinde sanat galerilerinde sergilenmeye başlandı. Bu durum, sanatın tanımı, yaratıcılık ve telif hakları gibi konularda önemli tartışmaları da beraberinde getiriyor. Bazı sanatçılar yapay zekayı bir araç olarak benimserken, bazıları ise özgünlüğü tehdit ettiğini düşünüyor. Yeni teknolojilerin sanat pratiğine etkileri üzerine düzenlenen paneller ve sergiler, bu dönüşümü anlamaya çalışıyor.',
    publishDate: '4 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/bilim-teknoloji/yapay-zeka-sanat-dunyasini-degistiriyor-88990.html'
  },
  {
    id: '8',
    title: 'Türkiye\'nin Turizmde Yeni Rekor Beklentisi: Yaz Sezonu Doluluk Oranları Yüksek',
    category: 'EKONOMİ',
    imageUrl: 'https://picsum.photos/800/500?random=8',
    imageHint: 'beach resort summer',
    content: 'Türkiye, 2024 yaz sezonunda turizmde yeni bir rekor kırmayı hedefliyor. Özellikle Akdeniz ve Ege sahillerindeki otellerde doluluk oranları şimdiden yüzde 90\'lara ulaştı. Kültür ve Turizm Bakanlığı, tanıtım faaliyetlerini artırarak ve yeni destinasyonları öne çıkararak turist sayısını ve gelirlerini artırmayı planlıyor. Sektör temsilcileri, artan maliyetlere rağmen talebin güçlü olduğunu belirtiyor.',
    publishDate: '3 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/ekonomi/turizmde-yeni-rekor-beklentisi-12121.html'
  },
  {
    id: '9',
    title: 'Yerli Savunma Sanayii Ürünleri Uluslararası Fuarda Göz Doldurdu',
    category: 'SAVUNMA',
    imageUrl: 'https://picsum.photos/800/500?random=9',
    imageHint: 'military tech defense',
    content: 'Türk savunma sanayii firmaları, katıldıkları uluslararası bir fuarda en yeni ürün ve teknolojilerini sergiledi. İnsansız hava araçları, zırhlı araçlar, füze sistemleri ve siber güvenlik çözümleri büyük ilgi gördü. Birçok ülke ile yeni işbirliği anlaşmaları imzalanırken, Türkiye\'nin savunma alanındaki teknolojik yetkinliği bir kez daha kanıtlandı. Fuarda sergilenen ürünler, yerli ve milli imkanlarla geliştirilmiş olmalarıyla dikkat çekti.',
    publishDate: '2 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/savunma/yerli-savunma-sanayii-fuarda-34343.html'
  },
  {
    id: '10',
    title: 'Gıda Fiyatlarındaki Artış ve Enflasyonla Mücadelede Yeni Adımlar Atılıyor',
    category: 'EKONOMİ',
    imageUrl: 'https://picsum.photos/800/500?random=10',
    imageHint: 'market grocery inflation',
    content: 'Küresel ve yerel etkenlerle artan gıda fiyatları ve genel enflasyonla mücadele kapsamında hükümet yeni bir dizi tedbir paketi açıkladı. Tarımsal üretimde verimliliği artırmaya yönelik destekler, tedarik zincirindeki sorunların giderilmesi ve bazı temel ürünlerde KDV indirimleri gibi adımlar atılması planlanıyor. Ekonomistler, bu tedbirlerin etkilerini ve uzun vadeli çözümleri tartışıyor.',
    publishDate: '1 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/ekonomi/gida-fiyatlari-enflasyon-mucadele-56565.html'
  },
   {
    id: '11',
    title: 'Eğitimde Dijital Dönüşüm Hız Kesmiyor: Akıllı Sınıflar Yaygınlaşıyor',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=11',
    imageHint: 'classroom technology education',
    content: 'Türkiye genelindeki okullarda eğitimde dijital dönüşüm projeleri hızla devam ediyor. Akıllı tahtalar, tablet dağıtımları ve online eğitim platformları ile donatılan sınıflar sayesinde öğrencilerin öğrenme süreçleri daha interaktif ve verimli hale geliyor. Milli Eğitim Bakanlığı, öğretmenlere yönelik dijital yetkinlik eğitimlerini de artırarak bu sürece destek oluyor.',
    publishDate: '28 Haziran 2024',
    sourceUrl: 'https://www.trthaber.com/haber/gundem/egitimde-dijital-donusum-78787.html'
  },
  {
    id: '12',
    title: 'Yerel Tohumların Korunması ve Yaygınlaştırılması İçin Yeni Proje Başlatıldı',
    category: 'YAŞAM',
    imageUrl: 'https://picsum.photos/800/500?random=12',
    imageHint: 'seeds farming agriculture',
    content: 'Tarım ve Orman Bakanlığı, yerel tohumların genetik çeşitliliğini korumak ve çiftçiler arasında yaygınlaşmasını sağlamak amacıyla kapsamlı bir proje başlattı. Proje kapsamında tohum bankaları kurulacak, çiftçilere yerel tohum kullanımı konusunda eğitimler verilecek ve destekler sağlanacak. Bu sayede hem biyolojik çeşitliliğin korunması hem de sürdürülebilir tarımın desteklenmesi hedefleniyor.',
    publishDate: '27 Haziran 2024',
    sourceUrl: 'https://www.trthaber.com/haber/yasam/yerel-tohumlarin-korunmasi-projesi-90909.html'
  },
  {
    id: '13',
    title: 'Ankara\'da Toplu Taşıma İçin Yeni Metro Hattı Projesi Onaylandı',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=13',
    imageHint: 'subway train station',
    content: 'Ankara Büyükşehir Belediyesi, şehir içi ulaşımı rahatlatmak amacıyla planlanan yeni metro hattı projesinin Ulaştırma Bakanlığı tarafından onaylandığını duyurdu. Yeni hat, şehrin yoğun nüfuslu bölgelerini birbirine bağlayacak ve trafik sorununa önemli bir çözüm sunması bekleniyor. İnşaat çalışmalarının önümüzdeki yıl başlaması planlanıyor.',
    publishDate: '11 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/gundem/ankara-yeni-metro-hatti-onaylandi-13131.html'
  },
  {
    id: '14',
    title: 'Avrupa Merkez Bankası Faiz Oranlarını Değiştirmedi, Enflasyon Vurgusu Yaptı',
    category: 'DÜNYA',
    imageUrl: 'https://picsum.photos/800/500?random=14',
    imageHint: 'bank building finance',
    content: 'Avrupa Merkez Bankası (ECB), son para politikası toplantısında beklentiler doğrultusunda faiz oranlarında bir değişikliğe gitmedi. ECB Başkanı yaptığı açıklamada, Euro Bölgesi\'nde enflasyonun hala yüksek seyrettiğini ve para politikasının sıkı duruşunu koruyacağını belirtti. Gelecek dönem verilerine göre hareket edileceği mesajı verildi.',
    publishDate: '11 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/dunya/ecb-faiz-karari-temmuz-2024-14141.html'
  },
  {
    id: '15',
    title: 'Karadeniz\'de Geleneksel Yayla Şenlikleri Başladı, Turistler Akın Ediyor',
    category: 'YAŞAM',
    imageUrl: 'https://picsum.photos/800/500?random=15',
    imageHint: 'mountain festival folk',
    content: 'Doğu Karadeniz Bölgesi\'nin eşsiz doğal güzelliklerine sahip yaylalarında geleneksel yaz şenlikleri başladı. Rengarenk yöresel kıyafetler, kemençe ve tulum sesleri eşliğinde horonların oynandığı şenlikler, yerli ve yabancı çok sayıda turisti ağırlıyor. Bölge esnafı, şenliklerin turizme ve ekonomiye canlılık getirdiğini belirtiyor.',
    publishDate: '10 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/yasam/karadeniz-yayla-senlikleri-basladi-15151.html'
  },
  {
    id: '16',
    title: 'Galatasaray, Şampiyonlar Ligi Ön Eleme Turu İçin Rakibini Bekliyor',
    category: 'SPOR',
    imageUrl: 'https://picsum.photos/800/500?random=16',
    imageHint: 'soccer team training',
    content: 'Trendyol Süper Lig şampiyonu Galatasaray, UEFA Şampiyonlar Ligi\'ne katılabilmek için ön eleme turlarında mücadele edecek. Sarı-kırmızılı ekip, yeni sezon hazırlıklarını sürdürürken, kura çekimini ve muhtemel rakiplerini bekliyor. Teknik heyet ve futbolcular, Devler Ligi gruplarına kalmak için iddialı olduklarını belirtti.',
    publishDate: '9 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/spor/galatasaray-sampiyonlar-ligi-rakip-16161.html'
  },
  {
    id: '17',
    title: 'Borsa İstanbul\'da Yabancı Yatırımcı İlgisi Artıyor: Son Veriler Açıklandı',
    category: 'EKONOMİ',
    imageUrl: 'https://picsum.photos/800/500?random=17',
    imageHint: 'stock market chart',
    content: 'Merkez Bankası ve Borsa İstanbul tarafından açıklanan son verilere göre, yabancı yatırımcıların Türk varlıklarına olan ilgisi son dönemde artış gösterdi. Özellikle hisse senedi piyasasında net alımların gözlendiği belirtilirken, uygulanan ekonomi politikalarının ve atılan normalleşme adımlarının bu ilgide etkili olduğu yorumları yapılıyor.',
    publishDate: '8 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/ekonomi/borsa-istanbul-yabanci-yatirimci-17171.html'
  },

  // --- Additional GÜNDEM Articles (18-25) ---
  {
    id: '18',
    title: 'Kabine Toplantısı Sonrası Önemli Açıklamalar: Ekonomi ve Dış Politika Gündemdeydi',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=18',
    imageHint: 'government meeting officials',
    content: 'Cumhurbaşkanlığı Kabinesi, son toplantısında ekonomi ve dış politikadaki güncel gelişmeleri ele aldı. Toplantı sonrası yapılan açıklamada, enflasyonla mücadele, yeni yatırım teşvikleri ve bölgesel konulara ilişkin alınan kararlar kamuoyuyla paylaşıldı.',
    publishDate: '11 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/gundem/kabine-toplantisi-aciklamalari-18181.html'
  },
  {
    id: '19',
    title: 'Orman Yangınlarıyla Mücadele Devam Ediyor: Havadan ve Karadan Müdahale Sürüyor',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=19',
    imageHint: 'forest fire smoke',
    content: 'Türkiye\'nin çeşitli bölgelerinde çıkan orman yangınlarına müdahale aralıksız devam ediyor. Tarım ve Orman Bakanlığı koordinasyonunda ekipler, yangın söndürme uçakları, helikopterler ve arazözlerle alevleri kontrol altına almaya çalışıyor. Vatandaşlara anız yakmamaları ve ormanlık alanlarda ateş yakmamaları konusunda uyarılar yapıldı.',
    publishDate: '10 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/gundem/orman-yanginlari-mudahale-19191.html'
  },
  {
    id: '20',
    title: 'Adalet Bakanlığı\'ndan Yeni Yargı Reformu Paketi Hazırlığı',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=20',
    imageHint: 'courtroom judge law',
    content: 'Adalet Bakanlığı, yargı süreçlerini hızlandırmak ve adalete erişimi kolaylaştırmak amacıyla yeni bir yargı reformu paketi üzerinde çalıştıklarını açıkladı. Paketin detaylarının yakın zamanda kamuoyu ile paylaşılması bekleniyor.',
    publishDate: '9 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/gundem/yeni-yargi-reformu-paketi-20202.html'
  },
  {
    id: '21',
    title: 'Kurban Bayramı Tatili İçin Trafik Yoğunluğu Başladı: Sürücülere Uyarılar',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=21',
    imageHint: 'highway traffic cars',
    content: 'Yaklaşan Kurban Bayramı tatili öncesinde şehirlerarası yollarda trafik yoğunluğu artmaya başladı. İçişleri Bakanlığı ve Emniyet Genel Müdürlüğü, sürücüleri trafik kurallarına uymaları, hız limitlerini aşmamaları ve yorgun araç kullanmamaları konusunda uyardı. Tatil süresince ek trafik tedbirleri alınacak.',
    publishDate: '8 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/gundem/bayram-tatili-trafik-uyarilari-21212.html'
  },
  {
    id: '22',
    title: 'Türkiye\'nin Tahıl Koridoru Diplomasisi Devam Ediyor',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=22',
    imageHint: 'wheat field grain',
    content: 'Türkiye, Karadeniz Tahıl Koridoru Anlaşması\'nın devamı ve küresel gıda güvenliğinin sağlanması için diplomatik çabalarını sürdürüyor. İlgili taraflarla görüşmeler devam ederken, anlaşmanın uzatılmasının önemi vurgulanıyor.',
    publishDate: '7 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/gundem/tahil-koridoru-diplomasisi-22222.html'
  },
  {
    id: '23',
    title: 'Enerji Verimliliği Projelerine Yeni Destekler Açıklandı',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=23',
    imageHint: 'solar panels energy',
    content: 'Enerji ve Tabii Kaynaklar Bakanlığı, sanayi tesisleri ve konutlarda enerji verimliliğini artırmaya yönelik yeni teşvik ve destek programlarını duyurdu. Amaç, enerji tüketimini azaltmak ve dışa bağımlılığı düşürmek.',
    publishDate: '6 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/gundem/enerji-verimliligi-destekleri-23232.html'
  },
   {
    id: '24',
    title: 'İçişleri Bakanlığı\'ndan Siber Güvenlik Uyarısı: Dolandırıcılık Yöntemlerine Dikkat',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=24',
    imageHint: 'hacker computer code',
    content: 'İçişleri Bakanlığı Siber Suçlarla Mücadele Daire Başkanlığı, artan online dolandırıcılık vakalarına karşı vatandaşları uyardı. Özellikle sahte web siteleri, oltalama (phishing) saldırıları ve telefon dolandırıcılığı yöntemlerine karşı dikkatli olunması gerektiği belirtildi.',
    publishDate: '5 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/gundem/siber-guvenlik-uyarisi-dolandiricilik-24242.html'
  },
  {
    id: '25',
    title: 'Türkiye Büyük Millet Meclisi Yeni Yasama Yılına Hazırlanıyor',
    category: 'GÜNDEM',
    imageUrl: 'https://picsum.photos/800/500?random=25',
    imageHint: 'parliament building politics',
    content: 'TBMM, yaz tatilinin ardından yeni yasama yılı için hazırlıklarını sürdürüyor. Yeni dönemde meclis gündemine gelmesi beklenen önemli yasa teklifleri ve düzenlemeler bulunuyor.',
    publishDate: '4 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/gundem/tbmm-yeni-yasama-yili-hazirliklari-25252.html'
  },
   // --- Add more articles for other categories if needed ---
  {
    id: '26',
    title: 'Fenerbahçe Avrupa Ligi\'nde Güçlü Rakiplerle Eşleşti',
    category: 'SPOR',
    imageUrl: 'https://picsum.photos/800/500?random=26',
    imageHint: 'soccer stadium night',
    content: 'Fenerbahçe, UEFA Avrupa Ligi grup aşaması kura çekiminde güçlü rakiplerle aynı gruba düştü. Teknik direktör ve yönetim, zorlu bir grup olduğunu ancak hedeflerinin gruptan çıkmak olduğunu belirtti.',
    publishDate: '11 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/spor/fenerbahce-avrupa-ligi-grup-26262.html'
  },
  {
    id: '27',
    title: 'Yerli Elektrikli Otobüsler Şehir İçi Ulaşımda Yaygınlaşıyor',
    category: 'EKONOMİ',
    imageUrl: 'https://picsum.photos/800/500?random=27',
    imageHint: 'electric bus city',
    content: 'Türkiye\'de üretilen yerli elektrikli otobüsler, birçok büyükşehir belediyesi tarafından toplu taşımada kullanılmaya başlandı. Çevre dostu ve sessiz çalışan bu otobüsler, hem yakıt tasarrufu sağlıyor hem de karbon emisyonunu azaltıyor.',
    publishDate: '11 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/ekonomi/yerli-elektrikli-otobusler-27272.html'
  },
   {
    id: '28',
    title: 'Türkiye\'nin Antarktika Bilim Seferi Başarıyla Tamamlandı',
    category: 'BİLİM TEKNOLOJİ',
    imageUrl: 'https://picsum.photos/800/500?random=28',
    imageHint: 'antarctica ice snow',
    content: 'Türkiye\'nin Ulusal Antarktika Bilim Seferi, belirlenen hedeflere ulaşarak başarıyla tamamlandı. Sefer ekibi, iklim değişikliği, buzullar ve deniz ekosistemi üzerine önemli bilimsel araştırmalar gerçekleştirdi.',
    publishDate: '10 Temmuz 2024',
    sourceUrl: 'https://www.trthaber.com/haber/bilim-teknoloji/antarktika-bilim-seferi-tamamlandi-28282.html'
  },


];


