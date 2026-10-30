/**
 * BLUEZ' BAKERY — 3D Floating Bakery Product Gallery
 * Core Application Engine: 3D Physics, Scrapbook Rendering, Cart & WhatsApp Ordering
 */

// ==========================================
// 1. PRODUCT CATALOG DATA (FROM BLUEZI REFS)
// ==========================================

const PRODUCTS_DATA = [
  {
    id: 'pizza-bread',
    name: 'Pizza Bread',
    handwrittenName: 'Roti Pizza Spesial',
    category: 'savory',
    price: 6000,
    priceFormatted: 'Rp 6.000',
    tag: 'Best Seller',
    spanClass: 'span-featured',
    shortDesc: 'Roti bulat empuk dengan saus bolognese gurih, sosis pilihan, potongan paprika renyah, dan lelehan keju berlimpah.',
    fullDesc: 'Roti bulat lembut dengan adonan empuk khas Bluezi, disiram saus bolognese kaya rasa, sosis pilihan, bawang bombay segar, potongan paprika renyah, dan keju melimpah. Disempurnakan dengan taburan oregano untuk aroma otentik pizzeria Italia. Cheesy, savory, and packed with flavor in every bite.',
    images: {
      cutout: 'public/images/products/enhanced/pizza-bread.png?v=photoreal_v5',
      real1: 'assets/real_photos/bluezi2/pizza_bread_flat_top.jpg',
      real2: 'assets/real_photos/bluezi2/pizza_bread_bluezi_box.jpg',
      real3: 'assets/real_photos/bluezi2/pizza_tray_display.jpg'
    },
    photoShape: 'round',
    highlights: ['Saus Bolognese Gurih', 'Sosis Sapi Pilihan', 'Paprika & Bawang Bombay', 'Keju Leleh Berlimpah', 'Taburan Oregano Wangi'],
    polaroidLabel: 'Loyang fresh oven'
  },
  {
    id: 'roti-abon',
    name: 'Roti Abon',
    handwrittenName: 'Chicken Floss Bun',
    category: 'savory',
    price: 6000,
    priceFormatted: 'Rp 6.000',
    tag: 'Staff Pick',
    spanClass: 'span-compact',
    shortDesc: 'Roti lembut bertabur abon ayam gurih melimpah, dipadukan dengan saus creamy sesame mayo istimewa.',
    fullDesc: 'Soft, fluffy bread topped with generous chicken floss, filling with our creamy sesame mayo. Savory, creamy, and full of flavor in every bite. Disajikan dalam craft paper boat dengan kertas motif kotak-kotak biru khas Bluezi.',
    images: {
      cutout: 'public/images/products/enhanced/roti-abon.png?v=photoreal_v5',
      real1: 'assets/real_photos/bluezi2/roti_abon_closeup.jpg',
      real2: 'assets/real_photos/bluezi2/roti_abon_bluezi_box.jpg',
      real3: 'assets/editorial/abon_tray.jpg'
    },
    photoShape: 'round',
    highlights: ['Abon Ayam Gurih Melimpah', 'Creamy Sesame Mayo', 'Adonan Super Fluffy', 'Kemasan Paper Box Cantik'],
    polaroidLabel: 'Pilihan sarapan favorit'
  },
  {
    id: 'floss-roll',
    name: 'Floss Roll',
    handwrittenName: 'Floss Roll Abon',
    category: 'savory',
    price: 7000,
    priceFormatted: 'Rp 7.000',
    tag: 'New Menu',
    spanClass: 'span-standard',
    shortDesc: 'Roti gulung lembut bertabur abon gurih melimpah di kedua ujungnya, dipadu creamy mayo, irisan cabai, dan daun bawang.',
    fullDesc: 'Roti gulung lembut istimewa Bluezi bertabur limpahan abon gurih di kedua ujung sisinya. Dibuat dari adonan roti yang sangat empuk dan moist, dipadukan dengan olesan saus creamy mayo yang gurih legit, serta taburan irisan daun bawang dan cabai merah segar di bagian atas untuk aroma dan kelezatan yang kaya.',
    images: {
      cutout: 'public/images/products/enhanced/floss-roll.png?v=photoreal_v5',
      real1: 'assets/editorial/floss_roll_tray.jpg'
    },
    photoShape: 'round',
    highlights: ['Limpahan Abon di Kedua Sisi', 'Saus Creamy Mayo Gurih', 'Irisan Cabai & Daun Bawang Segar', 'Adonan Roll Empuk & Moist'],
    polaroidLabel: 'Fresh oven floss roll'
  },
  {
    id: 'creamy-mushroom',
    name: 'Creamy Mushroom',
    handwrittenName: 'Roti Jamur Krim',
    category: 'savory',
    price: 6000,
    priceFormatted: 'Rp 6.000',
    tag: 'Chef Special',
    spanClass: 'span-standard',
    shortDesc: 'Roti lembut berisi sup jamur gurih dan potongan jamur asli, berpadu irisan sosis dan saus tomat.',
    fullDesc: 'Soft, fluffy bread filled with creamy mushroom soup and real mushroom pieces you can taste in every bite. Topped with rich mushroom cream, savory sausage, a drizzle of tomato sauce, and a sprinkle of oregano for that extra touch. Creamy, savory, and packed with flavor.',
    images: {
      cutout: 'public/images/products/enhanced/creamy-mushroom.png?v=photoreal_v5',
      real1: 'assets/real_photos/bluezi2/savory_sausage_bun.jpg',
      real2: 'assets/editorial/mushroom_tray.jpg'
    },
    photoShape: 'round',
    highlights: ['Potongan Jamur Asli', 'Krim Jamur Kental Gurih', 'Irisan Sosis Renyah', 'Paper Baker Cup'],
    polaroidLabel: 'Dipanggang dalam cup'
  },
  {
    id: 'strawberry-cream-bun',
    name: 'Strawberry Cream Bun',
    handwrittenName: 'Strawberry Butter Cream',
    category: 'sweet',
    price: 6000,
    priceFormatted: 'Rp 6.000',
    tag: 'Favorite',
    spanClass: 'span-standard',
    shortDesc: 'Kulit soes choux renyah lembut berpadu isian butter cream manis gurih dan potongan strawberry segar.',
    fullDesc: 'Kulit choux pastry lembut dan renyah khas Bluezi yang diisi dengan butter cream manis-gurih lembut istimewa, dipadukan dengan selai strawberry manis dan potongan buah strawberry segar di atasnya. Cita rasa klasik bakery artisan yang tak pernah salah!',
    images: {
      cutout: 'public/images/products/enhanced/strawberry-cream-bun.png?v=photoreal_v5',
      real1: 'assets/real_photos/bluezi2/strawberry_cream_bluezi_box.jpg',
      real2: 'assets/real_photos/bluezi2/strawberry_cream_tray.jpg'
    },
    photoShape: 'round',
    highlights: ['Isian Butter Cream Lembut', 'Potongan Strawberry Segar', 'Selai Strawberry Manis', 'Kulit Choux Keemasan'],
    polaroidLabel: 'Choux showcase Bluezi'
  },
  {
    id: 'strawberry-cream-cheese',
    name: 'Strawberry Cream Cheese',
    handwrittenName: 'Roti Krim Keju Strawberry',
    category: 'sweet',
    price: 6000,
    priceFormatted: 'Rp 6.000',
    tag: 'Must Try',
    spanClass: 'span-standard',
    shortDesc: 'Roti empuk dengan isian cream cheese gurih manis, selai strawberry, dan taburan crumble lezat.',
    fullDesc: 'Soft, golden bun generously filled with rich cream cheese and sweet strawberry jam, topped with delightful strawberry crumble. Perfect harmony of creamy, cheesy, and fruity flavors.',
    images: {
      cutout: 'public/images/products/enhanced/strawberry-cream-cheese.png?v=photoreal_v5'
    },
    photoShape: 'round',
    highlights: ['Rich Cream Cheese Filling', 'Sweet Strawberry Jam', 'Crispy Strawberry Crumble', 'Soft Fluffy Brioche'],
    polaroidLabel: 'Perpaduan krim keju & strawberry'
  },
  {
    id: 'mango-cream-bun',
    name: 'Mango Cream Bun',
    handwrittenName: 'Soes Vla Mango',
    category: 'sweet',
    price: 6000,
    priceFormatted: 'Rp 6.000',
    tag: 'Seasonal',
    spanClass: 'span-compact',
    shortDesc: 'Soes choux istimewa dengan isian vla rasa mangga manis-lembut dan potongan mangga segar di atasnya.',
    fullDesc: 'Soes choux renyah keemasan khas Bluezi dengan isian vla rasa mangga tropis manis dan lembut yang menyegarkan di setiap gigitan. Dipadukan dengan potongan buah mangga segar di atasnya. Pilihan camilan manis yang menyegarkan harimu!',
    images: {
      cutout: 'public/images/products/enhanced/mango-cream-bun.png?v=photoreal_v5',
      real1: 'assets/real_photos/bluezi2/strawberry_bun_crumble_top.jpg',
      real2: 'assets/real_photos/bluezi2/strawberry_bun_crumble2.jpg'
    },
    photoShape: 'round',
    highlights: ['Isian Vla Rasa Mangga', 'Potongan Mangga Segar', 'Kulit Soes Choux Renyah', 'Manis Dingin Tropis'],
    polaroidLabel: 'Manis buah alami'
  },
  {
    id: 'cranberry-cheese-sourdough',
    name: 'Cranberry Cheese Sourdough',
    handwrittenName: 'Artisan Cranberry Loaf',
    category: 'sourdough',
    price: 15000,
    priceFormatted: 'Rp 15.000',
    tag: 'Signature',
    spanClass: 'span-featured',
    shortDesc: 'Perpaduan asam-manis buah cranberry ruby dengan potongan keju gurih di dalam adonan sourdough artisan.',
    fullDesc: 'Our delicious sourdough brings together sweet, tangy cranberries and rich, savory cheese in every bite. With its signature sourdough flavor and the perfect balance of sweetness and creaminess, this one tastes like a piece of bakery heaven. Fermentasi alami 24 jam dengan kerak renyah bertabur tepung.',
    images: {
      cutout: 'public/images/products/enhanced/cranberry-cheese-sourdough.png?v=photoreal_v5',
      real1: 'assets/real_photos/bluezi1/cranberry_sourdough_tray.jpg',
      real2: 'assets/editorial/cranberry_sourdough_tray.jpg'
    },
    photoShape: 'oval',
    highlights: ['24-Hour Fermentation Starter', 'Tangy Ruby Cranberries', 'Potongan Keju Savory Leleh', 'Kerak Sourdough Renyah'],
    polaroidLabel: 'Fresh artisan loaves'
  },
  {
    id: 'double-choco-bread',
    name: 'Twisted Double Choco',
    handwrittenName: 'Twisted Double Choco',
    category: 'sweet',
    price: 6000,
    priceFormatted: 'Rp 6.000',
    tag: 'Best Seller',
    spanClass: 'span-standard',
    shortDesc: 'Roti brioche gulung cokelat lembut (twisted swirl) dengan lelehan pasta cokelat pekat di bagian tengah.',
    fullDesc: 'Roti gulung twisted brioche lembut istimewa Bluezi dengan perpaduan adonan cokelat empuk dan lelehan pasta cokelat pekat di bagian tengahnya. Setiap gigitan menghadirkan limpahan cokelat yang nikmat dan memanjakan lidah para pecinta cokelat.',
    images: {
      cutout: 'public/images/products/enhanced/double-choco.png?v=photoreal_v5',
      real1: 'assets/real_photos/bluezi2/choco_swirl_top.jpg',
      real2: 'assets/editorial/choco_tray.jpg'
    },
    photoShape: 'round',
    highlights: ['Pasta Cokelat Pekat', 'Adonan Brioche Cokelat', 'Kilau Glaze Karamel', 'Aroma Kakao Mewah'],
    polaroidLabel: 'Kemasan satuan Bluezi'
  },
  {
    id: 'choux-craquelin',
    name: 'Choux au Craquelin',
    handwrittenName: 'Choux au Craquelin',
    category: 'sweet',
    price: 8000,
    priceFormatted: 'Rp 8.000',
    tag: 'Favorite',
    spanClass: 'span-standard',
    shortDesc: 'Kulit soes choux garing keemasan dengan lapisan craquelin renyah dan isian silky vanilla custard dingin lembut.',
    fullDesc: 'Choux pastry istimewa khas Bluezi dengan topping lapisan gula craquelin manis gurih yang merekah renyah saat dipanggang. Diisi melimpah dengan silky vanilla custard cream dingin yang lumer di mulut. Tekstur renyah di luar dan creamy lembut di dalam. Tersedia satuan dan pilihan box isi 6.',
    images: {
      cutout: 'public/images/products/enhanced/choux-craquelin.png',
      real1: 'assets/editorial/choux_craquelin_box.jpg'
    },
    photoShape: 'round',
    highlights: ['Topping Craquelin Garing', 'Silky Vanilla Custard', 'Dipanggang Fresh Harian', 'Pilihan Box Isi 6'],
    polaroidLabel: 'Choux au Craquelin Bluezi'
  },
  {
    id: 'cookie-classic-chocochip',
    name: 'Choco Chip Cookie',
    handwrittenName: 'Classic Choco Chip',
    category: 'cookies',
    price: 12000,
    priceFormatted: 'Rp 12.000',
    tag: 'Classic Favorite',
    spanClass: 'span-standard',
    shortDesc: 'Cookies empuk soft-baked ala New York bertabur dark chocolate chunks melimpah dan renyahnya biskuit Oreo.',
    fullDesc: 'Cookies klasik istimewa khas Bluezi yang dipanggang dengan mentega pilihan dan brown sugar harum. Bertekstur soft-baked renyah di tepi dan chewy fudgy lembut di tengah. Diperkaya taburan dark chocolate chunks meleleh dan topping biskuit Oreo. Nikmat dinikmati hangat bersama susu atau kopi favoritmu.',
    images: {
      cutout: 'public/images/products/enhanced/cookie-classic-chocochip.png',
      real1: 'assets/editorial/cookie-classic-chocochip.jpg',
      real2: 'assets/editorial/cookie_classic_oreo.jpg'
    },
    photoShape: 'round',
    highlights: ['Soft-Baked Fudgy Texture', 'Dark Choco Chunks Melimpah', 'Biskuit Oreo Topping', '100% Real Butter'],
    polaroidLabel: 'Classic Choco Chip'
  },
  {
    id: 'cookie-red-velvet',
    name: 'Red Velvet Cookie',
    handwrittenName: 'Red Velvet Oreo',
    category: 'cookies',
    price: 12000,
    priceFormatted: 'Rp 12.000',
    tag: 'Best Seller',
    spanClass: 'span-standard',
    shortDesc: 'Adonan red velvet ruby khas Bluezi dengan topping biskuit Oreo utuh dan dark chocolate chunks meleleh.',
    fullDesc: 'Soft-baked cookie dengan warna merah ruby alami khas red velvet, dipadukan dengan aroma vanilla harum, potongan dark chocolate chunks mewah, dan biskuit Oreo utuh renyah di atasnya. Tekstur empuk lumer dengan rasa manis-gurih yang seimbang.',
    images: {
      cutout: 'public/images/products/enhanced/cookie-red-velvet.png',
      real1: 'assets/editorial/cookie-red-velvet.jpg',
      real2: 'assets/editorial/cookie_red_velvet.jpg'
    },
    photoShape: 'round',
    highlights: ['Ruby Red Velvet Dough', 'Topping Biskuit Oreo Utuh', 'Dark Chocolate Chunks', 'Tekstur Chewy Fudgy'],
    polaroidLabel: 'Red Velvet Oreo'
  },
  {
    id: 'cookie-tiramisu',
    name: 'Tiramisu Cookie',
    handwrittenName: 'Tiramisu Cream Swirl',
    category: 'cookies',
    price: 12000,
    priceFormatted: 'Rp 12.000',
    tag: 'Specialty',
    spanClass: 'span-standard',
    shortDesc: 'Espresso aromatik berpadu swirl mascarpone cream lembut dan taburan cocoa powder murni di atas cookie soft-baked.',
    fullDesc: 'Inspirasi dessert Italia klasik dalam sebutir soft cookie mewah. Adonan cookie dipadukan dengan ekstrak kopi espresso aromatik, dihias swirl mascarpone cream lembut di tengahnya, dan ditaburi cocoa powder premium murni. Rich, aromatic, and melts in your mouth.',
    images: {
      cutout: 'public/images/products/enhanced/cookie-tiramisu.png',
      real1: 'assets/editorial/cookie-tiramisu.png',
      real2: 'assets/editorial/WhatsApp_Image_2026-10-26_at_17.47.38.jpeg.png'
    },
    photoShape: 'round',
    highlights: ['Aroma Espresso Wangi', 'Swirl Mascarpone Cream', 'Pure Cocoa Dusting', 'Lumer di Mulut'],
    polaroidLabel: 'Tiramisu Cream Cookie'
  },
  {
    id: 'cookie-double-dark',
    name: 'Double Choco Cookie',
    handwrittenName: 'Double Choco Lava',
    category: 'cookies',
    price: 12000,
    priceFormatted: 'Rp 12.000',
    tag: 'Double Choco',
    spanClass: 'span-standard',
    shortDesc: 'Adonan double choco cocoa pekat berpadu isian lelehan molten chocolate lava premium yang lumer saat digigit.',
    fullDesc: 'Kelezatan mutlak bagi para pecinta cokelat sejati! Adonan soft-baked cookie double choco dengan bubuk kakao pekat premium yang menyimpan rahasia isian molten chocolate lava di bagian tengahnya. Setiap gigitan menghadirkan sensasi lelehan cokelat hangat yang melimpah dan decadent.',
    images: {
      cutout: 'public/images/products/enhanced/cookie-double-dark.png',
      real1: 'assets/editorial/cookie-double-dark.png',
      real2: 'assets/editorial/cookie_double_choco_tray.jpg'
    },
    photoShape: 'round',
    highlights: ['Double Choco Cocoa Dough', 'Molten Choco Lava Center', 'Sensasi Leleh Mewah', 'Cokelat Belgia Premium'],
    polaroidLabel: 'Double Choco Lava'
  },
  {
    id: 'double-choco-loaf',
    name: 'Double Choco Loaf',
    handwrittenName: 'Dark Choco Sourdough',
    category: 'sourdough',
    price: 15000,
    priceFormatted: 'Rp 15.000',
    tag: 'Artisan',
    spanClass: 'span-standard',
    shortDesc: 'Roti sourdough artisan cokelat pekat dengan limpahan chocolate chips dan kerak renyah istimewa.',
    fullDesc: 'Naturally fermented artisan sourdough loaf made with premium dark cocoa and studded with decadent dark chocolate chips. A deep, sophisticated chocolate experience with a chewy crumb and crispy crust.',
    images: {
      cutout: 'public/images/products/enhanced/double-choco-loaf.png?v=clean_v7'
    },
    photoShape: 'oval',
    highlights: ['Artisan Dark Cocoa Dough', 'Generous Dark Choco Chips', 'Natural Wild Yeast Starter', 'Deep Chocolate Aroma'],
    polaroidLabel: 'Artisan chocolate batard'
  }
];

// Standalone Hampers Data for dedicated Showcase Slider
const BLUEZI_HAMPERS_DATA = {
    id: 'bluezi-hampers',
    name: 'Hampers & Parcel',
    handwrittenName: 'Hampers Bluezi',
    category: 'hampers',
    price: 30000,
    priceFormatted: 'Start from Rp 30.000',
    tag: 'Special Gift',
    spanClass: 'span-featured',
    shortDesc: 'Paket hampers cantik pilihan toples cookies jar, parcel Idul Fitri Paket A-G & Premium, pouch kelinci, tas 2D, & snack tower mewah.',
    fullDesc: 'Koleksi hampers & parcel spesial dari Bluezi Bakery & Studio dengan acuan paket Idul Fitri & gift pilihan: Paket A (Rp 40.000), Paket B (Rp 30.000), Paket C (Rp 35.000), Paket D (Rp 85.000), Paket E (Rp 75.000), Paket F (Rp 110.000), Paket G (Rp 170.000), Paket Premium tabung akrilik lampu (Rp 260.000), toples cookies jar (Rp 50.000), serta hampers keranjang estetik (Rp 45.000). Lengkap dengan pita satin elegan dan free greeting card spesial!',
    images: {
      cutout: 'public/images/hampers/hamper-dome-basket.jpg',
      real1: 'public/images/hampers/hamper-eid-tower-large.jpg',
      real2: 'public/images/hampers/hamper-cookie-box.jpg'
    },
    gallery: [
      {
        src: 'public/images/hampers/hamper-dome-basket.jpg',
        title: 'Parcel Paket A — Dome Basket Gift',
        shortTitle: 'Parcel Paket A',
        price: 'Rp 40.000',
        numericPrice: 40000,
        tag: 'Paket A (Min. 3)',
        desc: 'Paket 6 item snack lengkap dengan keranjang anyam kubah transparan, pita satin biru, & free kartu ucapan (*min. pembelian 3).'
      },
      {
        src: 'public/images/hampers/hamper-bunny-pouch.jpg',
        title: 'Parcel Paket B — Cute Bunny Treat Pouch',
        shortTitle: 'Parcel Paket B',
        price: 'Rp 30.000',
        numericPrice: 30000,
        tag: 'Paket B (Min. 5)',
        desc: '1 bag snack anak pilihan dalam pouch kuping kelinci imut, free amplop THR 5k & kartu ucapan (*min. pembelian 5).'
      },
      {
        src: 'public/images/hampers/hamper-2d-backpack.jpg',
        title: 'Parcel Paket C — 2D Cartoon Backpack',
        shortTitle: 'Parcel Paket C',
        price: 'Rp 35.000',
        numericPrice: 35000,
        tag: 'Paket C (Min. 4)',
        desc: '1 bag snack anak pilihan dalam tas ransel pop-art kartun 2D unik & free kartu ucapan (*min. pembelian 4).'
      },
      {
        src: 'public/images/hampers/hamper-eid-compact.jpg',
        title: 'Parcel Paket D — Compact Eid Celebration',
        shortTitle: 'Parcel Paket D',
        price: 'Rp 85.000',
        numericPrice: 85000,
        tag: 'Paket D (7 Item)',
        desc: 'Paket parcel 7 item pilihan keluarga, kemasan nampan Idul Fitri elegan, free kartu ucapan, & bisa request isian.'
      },
      {
        src: 'public/images/hampers/hamper-eid-classic.jpg',
        title: 'Parcel Paket E — Classic Eid Snack Tower',
        shortTitle: 'Parcel Paket E',
        price: 'Rp 75.000',
        numericPrice: 75000,
        tag: 'Paket E (9 Item)',
        desc: 'Paket parcel bertingkat 9 item dengan aneka wafer, stik cokelat & sirup, free kartu ucapan, & bisa request isian.'
      },
      {
        src: 'public/images/hampers/hamper-eid-garland.jpg',
        title: 'Parcel Paket F — Festive Garland Eid Hamper',
        shortTitle: 'Parcel Paket F',
        price: 'Rp 110.000',
        numericPrice: 110000,
        tag: 'Paket F (10 Item)',
        desc: 'Bingkisan Idul Fitri semarak 10 item berhias garland hijau rindang, biskuit & minuman, free kartu ucapan, & bisa request isian.'
      },
      {
        src: 'public/images/hampers/hamper-eid-tower-large.jpg',
        title: 'Parcel Paket G — Grand Eid Celebration Tower',
        shortTitle: 'Parcel Paket G',
        price: 'Rp 170.000',
        numericPrice: 170000,
        tag: 'Paket G (11 Item)',
        desc: 'Parcel tingkat tinggi megah 11 item lengkap dengan toples cookies cokelat, permen Yupi, Astor & bunga, free kartu ucapan, & bisa request isian.'
      },
      {
        src: 'public/images/hampers/hamper-premium-cylinder.jpg',
        title: 'Parcel Paket Premium — Deluxe Cylinder Hamper',
        shortTitle: 'Parcel Paket Premium',
        price: 'Rp 260.000',
        numericPrice: 260000,
        tag: 'Premium (14 Item)',
        desc: 'Hampers tabung akrilik eksklusif 14 item premium, biskuit Astor & kaleng mewah, dekorasi lampu fairy lights estetik, free kartu ucapan, & bisa request isian.'
      },
      {
        src: 'public/images/hampers/hamper-cookie-box.jpg',
        title: 'Jar Cookies & Gingham Box Ribbon',
        shortTitle: 'Hampers Cookies Jar',
        price: 'Rp 50.000',
        numericPrice: 50000,
        tag: 'Favorite Cookies',
        desc: 'Toples cookies jar kedap udara dengan kemasan motif kotak gingham hijau & pita satin merah.'
      },
      {
        src: 'public/images/hampers/hamper-mini-basket.jpg',
        title: 'Mini Woven Basket with Gingham Ribbon',
        shortTitle: 'Hampers Mini Basket',
        price: 'Rp 45.000',
        numericPrice: 45000,
        tag: 'Boutique Gift',
        desc: 'Keranjang anyam natural estetik berpadu pita gingham biru khas Bluezi.'
      },
      {
        src: 'public/images/hampers/hamper-woven-handle.jpg',
        title: 'Deluxe Woven Snack Basket',
        shortTitle: 'Hampers Deluxe Basket',
        price: 'Rp 45.000',
        numericPrice: 45000,
        tag: 'Deluxe Basket',
        desc: 'Keranjang anyam berhandle tangan berisi aneka biskuit, cokelat, dan minuman.'
      },
      {
        src: 'public/images/hampers/hamper-eid-mid.jpg',
        title: 'Special Eid Snack & Beverage Parcel',
        shortTitle: 'Parcel Eid Special',
        price: 'Rp 45.000',
        numericPrice: 45000,
        tag: 'Eid Special',
        desc: 'Paket parcel Idul Fitri lengkap dengan minuman sari buah segar dan biskuit keju.'
      },
      {
        src: 'public/images/hampers/hamper-eid-floral.jpg',
        title: 'Floral Celebration Deluxe Hamper',
        shortTitle: 'Parcel Eid Floral',
        price: 'Rp 45.000',
        numericPrice: 45000,
        tag: 'Luxury Floral',
        desc: 'Paket parcel deluxe dengan dekorasi bunga mawar peach, minuman dingin, dan kaleng biskuit.'
      }
    ],
    photoShape: 'round',
    highlights: ['Harga Mulai Rp 30.000', 'Toples Cookies / Paket A-G & Premium', 'Pita Satin Elegan & Hiasan Bunga', 'Free Custom Kartu Ucapan Spesial'],
    polaroidLabel: 'Gift & Parcel by Bluezi'
  };


// ==========================================
// 2. STATE MANAGEMENT
// ==========================================

const state = {
  currentFilter: 'all',
  searchQuery: '',
  viewMode: 'scrapbook', // 'scrapbook' or 'grid'
  cart: [],
  activeModalProduct: null,
  activeModalView: 'cutout',
  modalQty: 1
};

// Simple Web Audio API Synthesizer for tactile feedback
class SoundFX {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }
  playPop() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(480, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(780, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch (e) {
      // Audio autoplay restrictions graceful fallback
    }
  }
  playSuccess() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.08, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.22);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.22);
      });
    } catch (_) {}
  }
  playCrinkle() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(540, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.13);
    } catch (e) {}
  }
  playMeow() {
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      // Sweet two-tone cat meow pitch slide
      osc.frequency.setValueAtTime(520, t);
      osc.frequency.exponentialRampToValueAtTime(860, t + 0.12);
      osc.frequency.exponentialRampToValueAtTime(740, t + 0.26);
      osc.frequency.exponentialRampToValueAtTime(420, t + 0.40);

      gain.gain.setValueAtTime(0.01, t);
      gain.gain.linearRampToValueAtTime(0.2, t + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.44);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.45);
    } catch (e) {}
  }
  playAngryHiss() {
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.3);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(3400, t);
      filter.frequency.exponentialRampToValueAtTime(1200, t + 0.3);
      filter.Q.setValueAtTime(2.5, t);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.28, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(t);
      noise.stop(t + 0.31);
    } catch (e) {}
  }
  playPoop() {
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(190, t);
      osc.frequency.exponentialRampToValueAtTime(50, t + 0.22);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(420, t);
      filter.frequency.exponentialRampToValueAtTime(140, t + 0.22);

      gain.gain.setValueAtTime(0.32, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.22);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.23);
    } catch (e) {}
  }
  playMunch() {
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      for (let i = 0; i < 3; i++) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const offset = i * 0.08;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(360 + i * 80, t + offset);
        osc.frequency.exponentialRampToValueAtTime(160, t + offset + 0.06);
        gain.gain.setValueAtTime(0.18, t + offset);
        gain.gain.exponentialRampToValueAtTime(0.01, t + offset + 0.06);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t + offset);
        osc.stop(t + offset + 0.07);
      }
    } catch (e) {}
  }
}
const sfx = new SoundFX();

// ==========================================
// 3. 3D TILT PHYSICS & PARALLAX ENGINE
// ==========================================

function init3DPhysics() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Keep hero stage cat mascot upright and level — prevent any 3D flipping or distortion
  const heroInner = document.getElementById('heroStageInner');
  if (heroInner) {
    heroInner.style.transform = 'none';
  }

  // Interactive Card Tilt for Product Cards only
  attachCardsTilt();
}

function attachCardsTilt() {
  const cards = document.querySelectorAll('.product-3d-card');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  cards.forEach((card) => {
    const inner = card.querySelector('.card-3d-inner');
    if (!inner) return;

    card.addEventListener('pointermove', (e) => {
      // Prevent tilt glitching during finger touch scrolling on mobile
      if (e.pointerType && e.pointerType !== 'mouse') return;
      if (window.innerWidth <= 768) return;

      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotX = -y * 14;
      const rotY = x * 16;

      inner.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-8px)`;
    });

    card.addEventListener('pointerleave', () => {
      inner.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

// Modal 3D Tilt
function attachModalTilt() {
  const modalStage = document.getElementById('modal3dStage');
  const modalDialog = document.getElementById('modalDialog3d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || !modalStage || !modalDialog) return;

  modalDialog.addEventListener('pointermove', (e) => {
    // Prevent tilt glitching during finger touch scrolling on mobile
    if (e.pointerType && e.pointerType !== 'mouse') return;
    if (window.innerWidth <= 768) return;

    const rect = modalDialog.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const rotX = -y * 12;
    const rotY = x * 15;

    modalStage.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
  });

  modalDialog.addEventListener('pointerleave', () => {
    modalStage.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

// ==========================================
// INTERACTIVE BLUEZI CAT MASCOT CONTROLLER
// ==========================================

const CAT_DIALOGS = [
  "Meow! Selamat datang di Bluezi Studio",
  "a little studio for cakes, pastries & sweet surprises",
  "Hari Minggu ketemu kami di GBLA Bandung ya!",
  "Sistem pemesanan kami Pre-order every week!",
  "Follow Instagram kami di @Bluezistudio ya!",
  "Semua roti kami dipanggang fresh tiap pagi lho!",
  "Coba Pizza Bread-nya, saus bolognese & kejunya lumer!",
  "Roti Abon ayamnya super fluffy & gurih berlimpah!",
  "Lagi pengen manis? Choux Strawberry dingin segar banget!",
  "Sourdough cranberry cheese kami fermentasi alami 24 jam!",
  "Mau pesan cepat? Klik tombol WhatsApp di kiri ya!",
  "Purrr... Senang kamu berkunjung ke Bluezi Studio!",
  "Nyam nyam! Aroma roti di Bluezi Studio wangi banget hari ini~"
];

const CAT_WARNING_DIALOGS = [
  "Jangan toel terus dong, nanti ngambek lho!",
  "Meooww! Ekor aku kesenggol nih, sudah ya!",
  "Awas ya toel sekali lagi, aku ngambek beneran nih!"
];

const CAT_ANGRY_DIALOGS = [
  "MEOOWW! Jangan diusik terus dong!",
  "GRRRR! Aku lagi ngambek nih!",
  "HUWAARGH! Jangan toel-toel terus ya!"
];

const CAT_PARTICLE_ICONS = ['✦', '✧', '★'];

function initInteractiveCat() {
  const catCard = document.getElementById('interactiveCatCard');
  const catImg = document.getElementById('interactiveCatImg');
  const bubble = document.getElementById('catDialogBubble');
  const bubbleText = document.getElementById('catBubbleText');
  const petCounter = document.getElementById('catPetCounter');
  const particlesContainer = document.getElementById('catParticles');
  const poopGround = document.getElementById('catPoopGround');
  const btnCalmCat = document.getElementById('btnCalmCat');

  if (!catCard || !catImg) return;

  let petCount = 0;
  let streakCount = 0;
  let poopDropCount = 0;
  let dialogIdx = 0;
  let isAngry = false;
  let streakResetTimer = null;

  function spawnCatParticles(container, count, customIcons = null) {
    if (!container) return;
    const icons = customIcons || CAT_PARTICLE_ICONS;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('span');
      particle.className = 'cat-particle';
      const icon = icons[Math.floor(Math.random() * icons.length)];
      particle.textContent = icon;

      const tx = (Math.random() - 0.5) * 180;
      const ty = -60 - Math.random() * 90;
      const rot = (Math.random() - 0.5) * 70;

      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      particle.style.setProperty('--rot', `${rot}deg`);
      particle.style.left = `${50 + (Math.random() - 0.5) * 35}%`;
      particle.style.top = `${50 + (Math.random() - 0.5) * 25}%`;

      container.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 1200);
    }
  }

  function dropPoopOnFloor() {
    // Kept clean without dropping emojis on the floor
    return;
  }

  function calmCatDown(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    isAngry = false;
    streakCount = 0;
    poopDropCount = 0;

    sfx.playMunch();

    catImg.classList.remove('cat-angry-rage');
    if (bubble) bubble.classList.remove('bubble-angry-mode');
    if (btnCalmCat) btnCalmCat.style.display = 'none';

    // Clear any dropped items
    if (poopGround) {
      poopGround.innerHTML = '';
    }

    if (bubbleText) {
      bubbleText.textContent = "Nyam nyam nyam... Rotinya enak banget! Terima kasih sudah menemani ya~";
    }
    if (petCounter) {
      petCounter.textContent = `Sudah baikan! Disapa ${petCount}x`;
    }

    if (particlesContainer) {
      spawnCatParticles(particlesContainer, 6, ['✦', '✧', '★']);
    }

    catImg.classList.remove('cat-bounce-active');
    void catImg.offsetWidth;
    catImg.classList.add('cat-bounce-active');
  }

  // Hook calm button
  if (btnCalmCat) {
    btnCalmCat.addEventListener('click', calmCatDown);
    btnCalmCat.addEventListener('touchend', (e) => {
      e.preventDefault();
      calmCatDown(e);
    });
  }
  window.calmCatDown = calmCatDown;

  function handleCatInteraction(e) {
    // If click originated from the calm button, do not anger cat
    if (e.target && e.target.closest('#btnCalmCat')) {
      return;
    }

    petCount++;
    streakCount++;

    // Reset inactivity timer
    if (streakResetTimer) clearTimeout(streakResetTimer);
    if (!isAngry) {
      streakResetTimer = setTimeout(() => {
        streakCount = 0;
      }, 5000);
    }

    // Retrigger bubble animation
    if (bubble) {
      bubble.style.animation = 'none';
      void bubble.offsetWidth;
      bubble.style.animation = isAngry ? 'angryBubbleShake 0.18s infinite alternate' : 'popBubble 0.35s var(--ease-elastic)';
    }

    // STATE 1: Normal Friendly Mascot (Clicks 1 to 4)
    if (streakCount < 5 && !isAngry) {
      sfx.playMeow();

      catImg.classList.remove('cat-bounce-active');
      void catImg.offsetWidth;
      catImg.classList.add('cat-bounce-active');

      dialogIdx = (dialogIdx + 1) % CAT_DIALOGS.length;
      if (bubbleText) bubbleText.textContent = CAT_DIALOGS[dialogIdx];
      if (petCounter) petCounter.textContent = `Disapa ${petCount}x`;

      if (particlesContainer) {
        spawnCatParticles(particlesContainer, 4);
      }
      return;
    }

    // STATE 2: Warning Annoyed Cat (Clicks 5 to 7)
    if (streakCount >= 5 && streakCount < 8 && !isAngry) {
      sfx.playMeow();

      catImg.classList.remove('cat-bounce-active');
      void catImg.offsetWidth;
      catImg.classList.add('cat-bounce-active');

      const warnIdx = Math.min(streakCount - 5, CAT_WARNING_DIALOGS.length - 1);
      if (bubbleText) bubbleText.textContent = CAT_WARNING_DIALOGS[warnIdx];
      if (petCounter) petCounter.textContent = `Awas Ngambek! (${streakCount}/8)`;

      if (particlesContainer) {
        spawnCatParticles(particlesContainer, 5, ['✦', '✧']);
      }
      return;
    }

    // STATE 3: ANGRY RAGE / NGAMBEK (Clicks 8+)
    isAngry = true;
    poopDropCount++;

    catImg.classList.add('cat-angry-rage');
    if (bubble) bubble.classList.add('bubble-angry-mode');

    // Play angry hiss sound
    sfx.playAngryHiss();

    const angryMsg = CAT_ANGRY_DIALOGS[Math.floor(Math.random() * CAT_ANGRY_DIALOGS.length)];
    if (bubbleText) bubbleText.textContent = angryMsg;
    if (petCounter) petCounter.textContent = `Sedang Ngambek! (${poopDropCount}x)`;

    if (particlesContainer) {
      spawnCatParticles(particlesContainer, 5, ['✦', '✧', '★']);
    }

    // Show Apology/Calm button
    if (btnCalmCat) {
      btnCalmCat.style.display = 'inline-flex';
    }
  }

  catCard.addEventListener('click', handleCatInteraction);
  catCard.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCatInteraction(e);
    }
  });

  // Mobile Cat Companion Tap Interaction
  const mobileCat = document.getElementById('heroCatMobileCompanion');
  const mobileCatBubble = document.getElementById('catMobileBubbleText');
  const mobileCatImg = document.getElementById('catMobileAvatarImg');

  if (mobileCat) {
    mobileCat.addEventListener('click', (e) => {
      handleCatInteraction(e);
      if (mobileCatBubble && bubbleText) {
        let text = bubbleText.textContent || 'Meow!';
        if (text.length > 26) text = text.slice(0, 24) + '...';
        mobileCatBubble.textContent = text;
      }
      if (mobileCatImg) {
        mobileCatImg.style.transform = 'scale(1.22) rotate(8deg)';
        setTimeout(() => {
          mobileCatImg.style.transform = 'scale(1) rotate(0deg)';
        }, 220);
      }
    });
    mobileCat.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        mobileCat.click();
      }
    });
  }
}

// ==========================================
// 4. RENDERING PRODUCTS & GALLERY
// ==========================================

function renderGallery() {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  // Filter products
  const filtered = PRODUCTS_DATA.filter((p) => {
    const matchesFilter = state.currentFilter === 'all' || p.category === state.currentFilter;
    const matchesSearch = !state.searchQuery || 
      p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      p.highlights.some(h => h.toLowerCase().includes(state.searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: #fbf7ee;">
        <img src="assets/products/bluezi-cat-mascot.png" alt="Bluezi Cat" style="width: 90px; margin-bottom: 1rem; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5));">
        <h3 style="font-family: var(--font-display); font-size: 1.5rem; margin-bottom: 0.5rem;">Tidak menemukan roti "${state.searchQuery}"</h3>
        <p style="color: var(--text-light-sub);">Coba cari dengan kata kunci lain atau pilih kategori di atas!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((product, idx) => {
    const span = state.viewMode === 'grid' ? 'span-standard' : product.spanClass;
    const washiClass = idx % 2 === 0 ? 'card-washi-left' : 'card-washi-right';
    const catBadgeClass = `cat-${product.category}`;

    return `
      <article class="product-3d-card ${span}" data-product-id="${product.id}" id="product-card-${product.id}">
        <div class="card-3d-inner">
          <div class="card-washi ${washiClass}" aria-hidden="true"></div>

          <!-- Floating Bakery Stage (Pure & Clean — Zero Overlap) -->
          <div class="card-floating-stage" onclick="openProductModal('${product.id}')" title="Klik untuk lihat detail ${product.name}">
            <!-- Cast ground shadow beneath floating cutout -->
            <div class="card-bread-shadow"></div>

            <!-- Floating photographic cutout -->
            <img 
              src="${product.images.cutout}" 
              alt="${product.name}" 
              class="card-bread-img"
              loading="eager"
              draggable="false"
            >
          </div>

          <!-- Product Details -->
          <div class="card-content-area">
            <div class="card-category-row">
              <span class="card-cat-badge ${catBadgeClass}">${product.category}</span>
              <span class="card-rating-tag">${product.tag}</span>
            </div>

            <h3 class="card-title">${product.name}</h3>

            <p class="card-desc">${product.shortDesc}</p>

            <div class="card-bottom-bar">
              <div class="card-price-box">
                <span class="price-sub">Harga Spesial</span>
                <span class="price-val">${product.priceFormatted}</span>
              </div>

              <div class="card-actions">
                <button 
                  type="button" 
                  class="btn-card-detail" 
                  onclick="openProductModal('${product.id}')" 
                  aria-label="Lihat detail ${product.name}"
                >
                  Lihat Detail
                </button>
                <button 
                  type="button" 
                  class="btn-add-bag" 
                  onclick="addToBagQuick('${product.id}')" 
                  aria-label="Tambah ${product.name} ke Keranjang"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  <span>Tambah</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  attachCardsTilt();
}

// ==========================================
// 5. 3D PRODUCT DETAIL MODAL
// ==========================================

function openProductModal(productId, initialView = 'cutout') {
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;

  state.activeModalProduct = product;
  state.activeModalView = initialView || 'cutout';
  state.modalQty = 1;

  // Set Content
  const modalImg = document.getElementById('modalProductImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDescription');
  const modalCatBadge = document.getElementById('modalCategoryBadge');
  const modalChips = document.getElementById('modalChipsWrap');
  const modalAnnotations = document.getElementById('modalAnnotations');
  const modalSwitcher = document.getElementById('modalViewSwitcher');
  const qtyValue = document.getElementById('qtyValue');

  modalTitle.textContent = product.name;
  modalPrice.textContent = product.priceFormatted;
  modalDesc.textContent = product.fullDesc;
  modalCatBadge.textContent = product.category;
  qtyValue.textContent = '1';

  // Render Highlights Chips
  modalChips.innerHTML = product.highlights.map(h => `<span class="chip-item">${h}</span>`).join('');

  // Clear Floating Depth Annotations
  if (modalAnnotations) modalAnnotations.innerHTML = '';

  // Gallery slider inside modal if product has multiple gallery items
  if (product.gallery && product.gallery.length > 0 && modalSwitcher) {
    let modalSlideIdx = 0;
    modalSwitcher.innerHTML = `
      <div class="modal-gallery-slider">
        <button type="button" class="modal-gallery-nav-btn prev" id="modalGalPrev" aria-label="Foto Sebelumnya">‹</button>
        <span class="modal-gallery-label" id="modalGalLabel">${product.gallery[0].title}</span>
        <button type="button" class="modal-gallery-nav-btn next" id="modalGalNext" aria-label="Foto Berikutnya">›</button>
      </div>
      <div class="modal-gallery-dots" id="modalGalDots">
        ${product.gallery.map((_, i) => `<span class="modal-dot ${i === 0 ? 'active' : ''}"></span>`).join('')}
      </div>
    `;

    const updateModalSlide = (newIdx) => {
      modalSlideIdx = (newIdx + product.gallery.length) % product.gallery.length;
      const cur = product.gallery[modalSlideIdx];
      if (modalImg) modalImg.src = cur.src;
      const lbl = document.getElementById('modalGalLabel');
      if (lbl) lbl.textContent = `${cur.title} (${cur.price})`;
      const dots = document.querySelectorAll('.modal-dot');
      dots.forEach((d, i) => d.classList.toggle('active', i === modalSlideIdx));
    };

    document.getElementById('modalGalPrev')?.addEventListener('click', (e) => {
      e.stopPropagation();
      updateModalSlide(modalSlideIdx - 1);
      if (typeof sfx !== 'undefined' && sfx.playPop) sfx.playPop();
    });

    document.getElementById('modalGalNext')?.addEventListener('click', (e) => {
      e.stopPropagation();
      updateModalSlide(modalSlideIdx + 1);
      if (typeof sfx !== 'undefined' && sfx.playPop) sfx.playPop();
    });
  } else if (modalSwitcher) {
    modalSwitcher.innerHTML = '';
  }

  // Display pure transparent floating cutout or first gallery photo
  if (modalImg) {
    modalImg.src = product.images.cutout;
    modalImg.className = 'modal-floating-image modal-photo-cutout-mode';
    modalImg.style.objectFit = 'contain';
    modalImg.style.width = 'auto';
    modalImg.style.height = 'auto';
    modalImg.style.aspectRatio = 'auto';
    modalImg.style.maxWidth = '90%';
    modalImg.style.maxHeight = window.innerWidth <= 768 ? '210px' : '340px';
    modalImg.style.borderRadius = '12px';
    modalImg.style.border = 'none';
    modalImg.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
  }

  // Open backdrop
  const backdrop = document.getElementById('productModalBackdrop');
  if (backdrop) {
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
  }
  const modalDialog = document.getElementById('modalDialog3d');
  if (modalDialog) modalDialog.scrollTop = 0;
  document.body.style.overflow = 'hidden';

  sfx.playCrinkle();
}

function switchModalView(viewKey) {
  if (!state.activeModalProduct) return;
  const product = state.activeModalProduct;
  const modalImg = document.getElementById('modalProductImage');
  if (modalImg) {
    modalImg.src = product.images.cutout;
    modalImg.className = 'modal-floating-image modal-photo-cutout-mode';
  }
}

function closeProductModal() {
  const backdrop = document.getElementById('productModalBackdrop');
  if (backdrop) {
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
  state.activeModalProduct = null;
  if (typeof sfx !== 'undefined' && sfx.playPop) {
    sfx.playPop();
  }
}

// ==========================================
// 6. SHOPPING CART & WHATSAPP GENERATOR
// ==========================================

function addToBagQuick(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  addToCart(product, 1);
  sfx.playPop();
  triggerCartButtonBounce();
}

// ==========================================
// 4. CART & BUILD YOUR OWN BAKERY BOX ENGINE
// ==========================================

const boxBuilderState = {
  selectedBreads: [], // Array of up to 2 product objects
  specialPackaging: false,
  packagingFee: 2000
};

function saveCartToStorage() {
  try {
    localStorage.setItem('bluezi_cart', JSON.stringify(state.cart));
  } catch (e) {
    console.warn('Failed to save cart to localStorage', e);
  }
}

function loadSavedCart() {
  try {
    const raw = localStorage.getItem('bluezi_cart');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        state.cart = parsed.map(item => {
          if (item && item.isBox) {
            item.name = 'Bakery Box';
            return item;
          }
          if (item && (item.isHamper || (item.id && item.id.startsWith('hamper-')))) {
            if (item.name && item.name.length > 25) {
              item.name = item.name.replace(/^Hampers:\s*/i, 'Hampers ').slice(0, 24).trim();
            }
            return item;
          }
          if (item && item.id === 'artisan-soft-cookie') {
            item.id = 'cookie-classic-chocochip';
          }
          const matched = PRODUCTS_DATA.find(p => p.id === item.id);
          if (matched) {
            return {
              id: matched.id,
              name: matched.name,
              price: matched.price,
              priceFormatted: matched.priceFormatted,
              thumb: matched.images?.cutout || item.thumb,
              qty: Math.max(1, parseInt(item.qty, 10) || 1)
            };
          }
          return item;
        }).filter(Boolean);
      }
    }
  } catch (e) {
    console.warn('Failed to load cart', e);
  }
}

function initBoxBuilder() {
  renderBoxBreadPicker();
  updateBoxBuilderUI();
  switchBoxViewMode('sim');
}

function renderBoxBreadPicker() {
  const grid = document.getElementById('boxBreadsGrid');
  if (!grid) return;

  const isFull = boxBuilderState.selectedBreads.length >= 2;
  const existingButtons = grid.querySelectorAll('.btn-pick-add-bread');

  // If already rendered, only toggle the is-full button class to preserve scroll position
  if (existingButtons.length > 0) {
    existingButtons.forEach(btn => {
      btn.classList.toggle('is-full', isFull);
    });
    return;
  }

  const breads = PRODUCTS_DATA.filter(p => p.category !== 'hampers' && p.category !== 'box');
  grid.innerHTML = breads.map(product => {
    return `
      <div class="box-bread-pick-card" id="pickCard-${product.id}">
        <img src="${product.images.cutout}" alt="${product.name}" class="box-bread-pick-thumb" loading="lazy">
        <div class="box-bread-pick-name">${product.name}</div>
        <div class="box-bread-pick-price">${formatIDR(product.price)}</div>
        <button type="button" 
                class="btn-pick-add-bread ${isFull ? 'is-full' : ''}" 
                onclick="addBreadToBox('${product.id}')"
                aria-label="Pilih ${product.name} ke Box">
          <span>+ Tambah</span>
        </button>
      </div>
    `;
  }).join('');
}

function addBreadToBox(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  // Maximum quantity: exactly 2 breads per box. Prevent adding 3rd bread.
  if (boxBuilderState.selectedBreads.length >= 2) {
    showToast('Box kamu sudah penuh (maksimal 2 roti)! Hapus salah satu jika ingin mengganti');
    sfx.playPop();
    return;
  }

  boxBuilderState.selectedBreads.push(product);
  sfx.playPop();
  switchBoxViewMode('sim'); // Auto-switch to simulator view so customer sees the slot fill

  if (boxBuilderState.selectedBreads.length === 2) {
    sfx.playSuccess();
    showToast(`2/2 Roti terpilih! Box siap dimasukkan ke keranjang.`);
  } else {
    showToast(`1/2 Roti terpilih: ${product.name}. Pilih 1 roti lagi.`);
  }

  updateBoxBuilderUI();
}

function removeBreadFromBox(slotIndex) {
  if (slotIndex >= 0 && slotIndex < boxBuilderState.selectedBreads.length) {
    const removed = boxBuilderState.selectedBreads.splice(slotIndex, 1)[0];
    sfx.playCrinkle();
    showToast(`${removed.name} dihapus dari box.`);
    updateBoxBuilderUI();
  }
}

function toggleBoxPackaging(enabled) {
  boxBuilderState.specialPackaging = Boolean(enabled);
  if (boxBuilderState.specialPackaging) {
    sfx.playPop();
    showToast('Special Packaging diaktifkan (+Rp 2.000)');
  }
  updateBoxBuilderUI();
}

function updateBoxBuilderUI() {
  const count = boxBuilderState.selectedBreads.length;
  const countLabel = document.getElementById('boxCountLabel');
  const counterPill = document.getElementById('boxSelectionCounter');
  const previewBadge = document.getElementById('previewPackagingBadge');
  const plasticLid = document.getElementById('boxPlasticLid');
  const pkgCard = document.getElementById('specialPackagingCard');
  const pkgCheckbox = document.getElementById('boxSpecialPackagingCheckbox');

  // 1. Counter Pill
  if (countLabel) {
    countLabel.textContent = `${count}/2 breads selected`;
  }
  if (counterPill) {
    if (count === 2) {
      counterPill.classList.add('is-complete');
    } else {
      counterPill.classList.remove('is-complete');
    }
  }

  // 2. Packaging Visual on Lid & Card
  if (pkgCheckbox) {
    pkgCheckbox.checked = boxBuilderState.specialPackaging;
  }
  if (pkgCard) {
    if (boxBuilderState.specialPackaging) {
      pkgCard.classList.add('is-active');
    } else {
      pkgCard.classList.remove('is-active');
    }
  }
  if (plasticLid) {
    if (boxBuilderState.specialPackaging) {
      plasticLid.classList.add('special-active');
    } else {
      plasticLid.classList.remove('special-active');
    }
  }
  if (previewBadge) {
    if (boxBuilderState.specialPackaging) {
      previewBadge.textContent = 'Special Packaging (+Rp 2.000)';
      previewBadge.classList.remove('is-standard');
    } else {
      previewBadge.textContent = 'Standard Packaging (Rp 0)';
      previewBadge.classList.add('is-standard');
    }
  }

  // 3. Render Slots 0 and 1
  for (let i = 0; i < 2; i++) {
    const slotEl = document.getElementById(`boxSlot${i}`);
    const bodyEl = document.getElementById(`slotBody${i}`);
    if (!slotEl || !bodyEl) continue;

    const bread = boxBuilderState.selectedBreads[i];
    if (bread) {
      slotEl.classList.remove('empty');
      slotEl.classList.add('filled');
      bodyEl.innerHTML = `
        <div class="slot-bread-container">
          <img src="${bread.images.cutout}" alt="${bread.name}" class="slot-bread-img">
          <span class="slot-bread-pill">${bread.name}</span>
          <button type="button" class="slot-remove-btn" onclick="removeBreadFromBox(${i})" title="Hapus ${bread.name}" aria-label="Hapus ${bread.name}">×</button>
        </div>
      `;
    } else {
      slotEl.classList.add('empty');
      slotEl.classList.remove('filled');
      bodyEl.innerHTML = `
        <div class="slot-empty-content">
          <div class="slot-plus-circle">+</div>
          <span class="slot-slot-label">Slot ${i + 1}</span>
          <span class="slot-slot-hint">${i === 0 ? 'Pilih roti pertama' : 'Pilih roti kedua'}</span>
        </div>
      `;
    }
  }

  // 4. Live Price Calculation
  const b1 = boxBuilderState.selectedBreads[0];
  const b2 = boxBuilderState.selectedBreads[1];
  const breadSubtotal = (b1 ? b1.price : 0) + (b2 ? b2.price : 0);
  const packagingFee = boxBuilderState.specialPackaging ? boxBuilderState.packagingFee : 0;
  const boxTotal = breadSubtotal + packagingFee;

  const bread1NameEl = document.getElementById('calcBread1Label');
  const bread1PriceEl = document.getElementById('calcBread1Price');
  const bread2NameEl = document.getElementById('calcBread2Label');
  const bread2PriceEl = document.getElementById('calcBread2Price');
  const subtotalEl = document.getElementById('calcBreadSubtotal');
  const pkgFeeEl = document.getElementById('calcPackagingFee');
  const totalEl = document.getElementById('calcBoxTotal');
  const addBtn = document.getElementById('btnAddBoxToCart');
  const addBtnLabel = document.getElementById('btnAddBoxBtnLabel');
  const validationHint = document.getElementById('boxCartValidationHint');

  if (bread1NameEl) bread1NameEl.textContent = b1 ? `• ${b1.name}:` : '• Roti 1:';
  if (bread1PriceEl) bread1PriceEl.innerHTML = b1 ? formatIDR(b1.price) : '<em>Belum dipilih</em>';

  if (bread2NameEl) bread2NameEl.textContent = b2 ? `• ${b2.name}:` : '• Roti 2:';
  if (bread2PriceEl) bread2PriceEl.innerHTML = b2 ? formatIDR(b2.price) : '<em>Belum dipilih</em>';

  if (subtotalEl) subtotalEl.textContent = formatIDR(breadSubtotal);
  if (pkgFeeEl) pkgFeeEl.textContent = formatIDR(packagingFee);
  if (totalEl) totalEl.textContent = formatIDR(boxTotal);

  // 5. Add Box To Cart Button State (Exactly 2 breads required)
  if (addBtn) {
    if (count === 2) {
      addBtn.disabled = false;
      if (addBtnLabel) addBtnLabel.textContent = `Add Box to Cart (${formatIDR(boxTotal)})`;
      if (validationHint) validationHint.style.display = 'none';
    } else {
      addBtn.disabled = true;
      if (addBtnLabel) {
        addBtnLabel.textContent = count === 0 ? 'Pilih 2 Roti Dahulu' : `Pilih 1 Roti Lagi (${count}/2)`;
      }
      if (validationHint) validationHint.style.display = 'block';
    }
  }

  // Refresh picker buttons
  renderBoxBreadPicker();
}

function addCustomBoxToCart() {
  if (boxBuilderState.selectedBreads.length !== 2) {
    showToast('Silakan pilih tepat 2 roti untuk membuat box');
    return;
  }

  const b1 = boxBuilderState.selectedBreads[0];
  const b2 = boxBuilderState.selectedBreads[1];
  const pkgFee = boxBuilderState.specialPackaging ? boxBuilderState.packagingFee : 0;
  const boxPrice = b1.price + b2.price + pkgFee;

  const customBoxItem = {
    id: 'box-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
    isBox: true,
    name: 'Bakery Box',
    breads: [
      { id: b1.id, name: b1.name, price: b1.price, thumb: b1.images.cutout },
      { id: b2.id, name: b2.name, price: b2.price, thumb: b2.images.cutout }
    ],
    hasSpecialPackaging: boxBuilderState.specialPackaging,
    packagingFee: pkgFee,
    breadSubtotal: b1.price + b2.price,
    price: boxPrice,
    qty: 1,
    thumb: b1.images.cutout
  };

  state.cart.push(customBoxItem);
  saveCartToStorage();
  updateCartUI();
  triggerCartButtonBounce();

  showToast(`1x Bakery Box (${formatIDR(boxPrice)}) ditambahkan ke keranjang.`);
  sfx.playSuccess();

  // Reset builder for next box
  boxBuilderState.selectedBreads = [];
  updateBoxBuilderUI();
}

function addToCart(product, qty) {
  const existing = state.cart.find(item => !item.isBox && item.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      priceFormatted: product.priceFormatted,
      thumb: product.images?.cutout || product.image,
      qty: qty
    });
  }

  saveCartToStorage();
  updateCartUI();
  triggerCartButtonBounce();
  showToast(`Ditambahkan ke keranjang: ${qty}x ${product.name}`);
}

function updateCartUI() {
  const countBadge = document.getElementById('cartCountBadge');
  const floatingBadge = document.getElementById('floatingCartBadge');
  const floatingSubtotal = document.getElementById('floatingCartSubtotal');
  const subtitleCount = document.getElementById('cartSubtitleCount');
  const emptyState = document.getElementById('cartEmptyState');
  const itemsWrapper = document.getElementById('cartItemsWrapper');
  const itemsList = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const footerEl = document.getElementById('cartFooter');
  const stickyActionEl = document.getElementById('cartStickyActionBar');

  const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (countBadge) countBadge.textContent = totalItems;
  if (floatingBadge) floatingBadge.textContent = totalItems;
  if (floatingSubtotal) floatingSubtotal.textContent = formatIDR(totalPrice);
  if (subtitleCount) subtitleCount.textContent = `${totalItems} item dipilih`;

  if (state.cart.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (itemsWrapper) itemsWrapper.style.display = 'none';
    if (itemsList) itemsList.innerHTML = '';
    if (subtotalEl) subtotalEl.textContent = 'Rp 0';
    if (footerEl) footerEl.style.display = 'none';
    if (stickyActionEl) stickyActionEl.style.display = 'none';
  } else {
    if (emptyState) emptyState.style.display = 'none';
    if (itemsWrapper) itemsWrapper.style.display = 'block';
    if (footerEl) footerEl.style.display = 'block';
    if (stickyActionEl) stickyActionEl.style.display = 'block';

    itemsList.innerHTML = state.cart.map(item => {
      if (item.isBox && item.breads && item.breads.length >= 2) {
        return `
          <li class="cart-item-row cart-item-box-row" data-cart-id="${item.id}">
            <div class="cart-item-thumb-box cart-box-multi-thumb">
              <img src="${item.breads[0].thumb}" alt="${item.breads[0].name}" class="box-thumb-mini thumb-1">
              <img src="${item.breads[1].thumb}" alt="${item.breads[1].name}" class="box-thumb-mini thumb-2">
            </div>
            <div class="cart-item-details">
              <div class="cart-item-name">${item.isBox ? 'Bakery Box' : item.name}</div>
              <div class="cart-box-breads-details">
                <span class="box-bread-line">• 1x ${item.breads[0].name} (${formatIDR(item.breads[0].price)})</span>
                <span class="box-bread-line">• 1x ${item.breads[1].name} (${formatIDR(item.breads[1].price)})</span>
                <span class="box-pkg-line ${item.hasSpecialPackaging ? 'is-special' : ''}">
                  ${item.hasSpecialPackaging ? 'Special Packaging (+Rp 2.000)' : 'Standard Packaging (Rp 0)'}
                </span>
              </div>
              <div class="cart-item-price">${formatIDR(item.price * item.qty)} <span class="cart-unit-price">(@ ${formatIDR(item.price)})</span></div>
              <div class="cart-item-controls">
                <button class="cart-qty-btn" onclick="modifyCartItemQty('${item.id}', -1)" aria-label="Kurangi box">−</button>
                <span class="cart-qty-num">${item.qty}</span>
                <button class="cart-qty-btn" onclick="modifyCartItemQty('${item.id}', 1)" aria-label="Tambah box">+</button>
              </div>
            </div>
            <button class="cart-item-remove-btn" onclick="removeCartItem('${item.id}')" title="Hapus Box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </li>
        `;
      }

      return `
        <li class="cart-item-row" data-cart-id="${item.id}">
          <div class="cart-item-thumb-box">
            <img src="${item.thumb}" alt="${item.name}" class="cart-item-thumb">
          </div>
          <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${formatIDR(item.price * item.qty)}</div>
            <div class="cart-item-controls">
              <button class="cart-qty-btn" onclick="modifyCartItemQty('${item.id}', -1)" aria-label="Kurangi">−</button>
              <span class="cart-qty-num">${item.qty}</span>
              <button class="cart-qty-btn" onclick="modifyCartItemQty('${item.id}', 1)" aria-label="Tambah">+</button>
            </div>
          </div>
          <button class="cart-item-remove-btn" onclick="removeCartItem('${item.id}')" title="Hapus item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </li>
      `;
    }).join('');

    subtotalEl.textContent = formatIDR(totalPrice);
  }
  syncOrderFormUI();
}

function modifyCartItemQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeCartItem(productId);
  } else {
    saveCartToStorage();
    updateCartUI();
    sfx.playPop();
  }
}

function removeCartItem(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCartToStorage();
  updateCartUI();
  sfx.playCrinkle();
}

function formatIDR(amount) {
  return 'Rp ' + Number(amount).toLocaleString('id-ID');
}

function openCart() {
  const backdrop = document.getElementById('cartBackdrop');
  if (!backdrop) return;
  backdrop.classList.add('open');
  backdrop.setAttribute('aria-hidden', 'false');
  sfx.playCrinkle();
}

function closeCart() {
  const backdrop = document.getElementById('cartBackdrop');
  if (!backdrop) return;
  backdrop.classList.remove('open');
  backdrop.setAttribute('aria-hidden', 'true');
}

// Customer Data Storage Helper
function saveCustomerData(name, phone, address) {
  if (name) localStorage.setItem('bluezi_cust_name', name);
  if (phone) localStorage.setItem('bluezi_cust_phone', phone);
  if (address) localStorage.setItem('bluezi_cust_address', address);
}

// Send Formatted Order to WhatsApp
function sendOrderToWhatsApp({ name, phone, address, note, delivery }) {
  const bakeryPhone = '6281398301616';
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);

  let message = `*PESANAN BARU — BLUEZ' BAKERY*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*DATA PEMESAN:*\n`;
  message += `• *Nama:* ${name}\n`;
  message += `• *No. WhatsApp:* ${phone}\n`;
  message += `• *Alamat Pengiriman:* ${address}\n`;
  if (delivery) {
    message += `• *Metode Pengiriman:* ${delivery}\n`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*DAFTAR ITEM YANG DIPESAN (${totalCount} item):*\n`;

  state.cart.forEach((item, idx) => {
    if (item.isBox && item.breads && item.breads.length >= 2) {
      const b1 = item.breads[0];
      const b2 = item.breads[1];
      message += `\n*${item.name}* (Box #${idx + 1})\n`;
      message += `  • 1x ${b1.name} — ${formatIDR(b1.price)}\n`;
      message += `  • 1x ${b2.name} — ${formatIDR(b2.price)}\n`;
      message += `  • Special Packaging — ${item.hasSpecialPackaging ? formatIDR(item.packagingFee || 2000) : 'Rp 0'}\n`;
      message += `  Total per box: ${formatIDR(item.price)}\n`;
      message += `  Jumlah box: ${item.qty}\n`;
      message += `  Total pesanan box: ${formatIDR(item.price * item.qty)}\n`;
    } else {
      message += `${idx + 1}. ${item.name} (${item.qty}x @ ${formatIDR(item.price)}) = ${formatIDR(item.price * item.qty)}\n`;
    }
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*TOTAL ESTIMASI: ${formatIDR(totalPrice)}*\n`;
  if (note) {
    message += `*Catatan Khusus:* ${note}\n`;
  }
  message += `\nHalo min, saya mau pesan roti-roti di atas ya. Mohon konfirmasi ketersediaan stok fresh dan total biaya pengiriman ke alamat saya. Terima kasih!`;

  const encoded = encodeURIComponent(message);
  const waUrl = `https://api.whatsapp.com/send?phone=${bakeryPhone}&text=${encoded}`;

  showToast('Rincian pesanan telah disiapkan! Mengalihkan ke WhatsApp...');
  sfx.playSuccess();
  window.open(waUrl, '_blank');
}

// Cart Drawer Checkout -> Navigate to Dedicated Order Page
function checkoutViaWhatsApp() {
  const name = (document.getElementById('cartCustName')?.value || localStorage.getItem('bluezi_cust_name') || '').trim();
  const phone = (document.getElementById('cartCustPhone')?.value || localStorage.getItem('bluezi_cust_phone') || '').trim();
  const address = (document.getElementById('cartCustAddress')?.value || localStorage.getItem('bluezi_cust_address') || '').trim();
  const note = (document.getElementById('orderNoteInput')?.value || '').trim();

  saveCustomerData(name, phone, address);
  if (note) localStorage.setItem('bluezi_cust_notes', note);

  // Navigate to dedicated ordering page
  window.location.href = 'order.html';
}

// Order Form Submit Handler
function handleOrderFormSubmit(e) {
  if (e) e.preventDefault();

  if (state.cart.length === 0) {
    showToast('Silakan pilih minimal 1 roti favoritmu pada daftar di bawah!');
    return;
  }

  const name = (document.getElementById('orderCustName')?.value || '').trim();
  const phone = (document.getElementById('orderCustPhone')?.value || '').trim();
  const address = (document.getElementById('orderCustAddress')?.value || '').trim();
  const delivery = document.querySelector('input[name="orderDeliveryMethod"]:checked')?.value || 'Kurir Instan (GoSend / GrabExpress)';
  const notes = (document.getElementById('orderCustNotes')?.value || '').trim();

  if (!name) {
    showToast('Mohon masukkan nama lengkap pemesan');
    document.getElementById('orderCustName')?.focus();
    return;
  }
  if (!phone) {
    showToast('Mohon masukkan nomor WhatsApp / telepon aktif');
    document.getElementById('orderCustPhone')?.focus();
    return;
  }
  if (!address) {
    showToast('Mohon masukkan alamat lengkap pengiriman');
    document.getElementById('orderCustAddress')?.focus();
    return;
  }

  saveCustomerData(name, phone, address);
  sendOrderToWhatsApp({ name, phone, address, note: notes, delivery });
}

// Stepper updater from Order Form Picker
function updateOrderFormQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (item) {
    modifyCartItemQty(productId, delta);
  } else if (delta > 0) {
    addToBagQuick(productId);
  }
}

// Sync between Order Form Picker and Cart
function syncOrderFormUI() {
  const totalCountEl = document.getElementById('orderFormTotalCount');
  const subtotalEl = document.getElementById('orderFormSubtotal');

  const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (totalCountEl) totalCountEl.textContent = `${totalItems} item`;
  if (subtotalEl) subtotalEl.textContent = formatIDR(totalPrice);

  PRODUCTS_DATA.forEach(p => {
    const qtyEl = document.getElementById(`order-step-count-${p.id}`);
    const rowEl = document.getElementById(`order-row-${p.id}`);
    const cartItem = state.cart.find(i => i.id === p.id);
    const qty = cartItem ? cartItem.qty : 0;

    if (qtyEl) qtyEl.textContent = qty;
    if (rowEl) {
      if (qty > 0) rowEl.classList.add('selected');
      else rowEl.classList.remove('selected');
    }
  });
}

// Initialize Order Form Picker and Sync
function initOrderForm() {
  const picker = document.getElementById('orderProductsPicker');
  if (picker) {
    picker.innerHTML = PRODUCTS_DATA.map(p => {
      const cartItem = state.cart.find(i => i.id === p.id);
      const qty = cartItem ? cartItem.qty : 0;
      return `
        <div class="order-picker-row ${qty > 0 ? 'selected' : ''}" id="order-row-${p.id}">
          <div class="order-picker-thumb-wrap">
            <img src="${p.images.cutout}" alt="${p.name}" class="order-picker-thumb" loading="lazy">
          </div>
          <div class="order-picker-info">
            <span class="order-picker-title">${p.name}</span>
            <div class="order-picker-meta-row">
              <span class="order-picker-cat">${p.category}</span>
              <span class="order-picker-price">${p.priceFormatted}</span>
            </div>
          </div>
          <div class="order-stepper">
            <button type="button" class="order-step-btn" onclick="updateOrderFormQty('${p.id}', -1)" aria-label="Kurangi ${p.name}">−</button>
            <span class="order-step-qty" id="order-step-count-${p.id}">${qty}</span>
            <button type="button" class="order-step-btn" onclick="updateOrderFormQty('${p.id}', 1)" aria-label="Tambah ${p.name}">+</button>
          </div>
        </div>
      `;
    }).join('');
  }

  // Restore saved details from localStorage
  const savedName = localStorage.getItem('bluezi_cust_name') || '';
  const savedPhone = localStorage.getItem('bluezi_cust_phone') || '';
  const savedAddress = localStorage.getItem('bluezi_cust_address') || '';

  const orderName = document.getElementById('orderCustName');
  const cartName = document.getElementById('cartCustName');
  const orderPhone = document.getElementById('orderCustPhone');
  const cartPhone = document.getElementById('cartCustPhone');
  const orderAddr = document.getElementById('orderCustAddress');
  const cartAddr = document.getElementById('cartCustAddress');

  if (orderName && savedName) orderName.value = savedName;
  if (cartName && savedName) cartName.value = savedName;
  if (orderPhone && savedPhone) orderPhone.value = savedPhone;
  if (cartPhone && savedPhone) cartPhone.value = savedPhone;
  if (orderAddr && savedAddress) orderAddr.value = savedAddress;
  if (cartAddr && savedAddress) cartAddr.value = savedAddress;

  const syncInputs = (src, dest, key) => {
    if (!src || !dest) return;
    src.addEventListener('input', (e) => {
      dest.value = e.target.value;
      localStorage.setItem(key, e.target.value);
    });
  };

  syncInputs(orderName, cartName, 'bluezi_cust_name');
  syncInputs(cartName, orderName, 'bluezi_cust_name');
  syncInputs(orderPhone, cartPhone, 'bluezi_cust_phone');
  syncInputs(cartPhone, orderPhone, 'bluezi_cust_phone');
  syncInputs(orderAddr, cartAddr, 'bluezi_cust_address');
  syncInputs(cartAddr, orderAddr, 'bluezi_cust_address');

  syncOrderFormUI();
}

// Instant Direct WhatsApp Order for single item in modal
function orderInstantWhatsApp(product, qty) {
  const phone = '6281398301616';
  const total = product.price * qty;

  let message = `Halo BLUEZ' BAKERY!\n`;
  message += `Saya tertarik untuk memesan langsung:\n\n`;
  message += `• ${product.name} (${qty}x) = ${formatIDR(total)}\n\n`;
  message += `Mohon info ketersediaan stok fresh hari ini ya. Terima kasih!`;

  const encoded = encodeURIComponent(message);
  const waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;

  window.open(waUrl, '_blank');
}

// Toast System
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <span class="toast-icon">✓</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'all 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px) scale(0.95)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Category Nav Filters (Header + In-Gallery) with Bulletproof Event Handling
function applyCategoryFilter(selectedFilter, shouldScroll = false) {
  const allPillBtns = document.querySelectorAll('.pill-btn');
  allPillBtns.forEach(b => {
    const matches = (b.dataset.filter || 'all') === selectedFilter;
    b.classList.toggle('active', matches);
    b.setAttribute('aria-selected', matches ? 'true' : 'false');
  });

  state.currentFilter = selectedFilter;
  renderGallery();
  if (typeof sfx !== 'undefined' && sfx.playPop) sfx.playPop();

  if (shouldScroll) {
    if (selectedFilter === 'box') {
      scrollToBoxBuilder(true);
      return;
    }
    if (selectedFilter === 'hampers') {
      const hampersSec = document.getElementById('hampers');
      if (hampersSec) {
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 70;
        const targetTop = hampersSec.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
        return;
      }
    }
    if (selectedFilter === 'cookies') {
      const cookiesSec = document.getElementById('cookies');
      if (cookiesSec) {
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 70;
        const targetTop = cookiesSec.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
        return;
      }
    }
    const gallerySection = document.getElementById('galleryControls') || document.querySelector('.scrapbook-filter-bar') || document.getElementById('productsGrid');
    if (gallerySection) {
      const headerHeight = document.querySelector('.site-header')?.offsetHeight || 70;
      const targetTop = gallerySection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
    }
  }
}

// Quick Add Cookie Directly to Cart
function addCookieDirect(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  addToCart(product, 1);
  if (typeof sfx !== 'undefined' && sfx.playPop) sfx.playPop();
}
window.addCookieDirect = addCookieDirect;

// Dedicated safe scroll to Box Builder (prevents scrolling if already visible in viewport)
function scrollToBoxBuilder(onlyIfNotVisible = false) {
  const boxSec = document.getElementById('box-builder');
  if (!boxSec) return;

  switchBoxViewMode('sim');

  const rect = boxSec.getBoundingClientRect();
  // If already visible in viewport, do NOT scroll!
  if (onlyIfNotVisible) {
    const isAlreadyVisible = (rect.top <= 140 && rect.bottom >= 220);
    if (isAlreadyVisible) return;
  }

  const headerHeight = document.querySelector('.site-header')?.offsetHeight || 70;
  const targetTop = rect.top + window.pageYOffset - headerHeight;
  window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
}

// Smooth scroll to gallery controls for "Jelajahi Menu Pilihan"
function scrollToGallery(e) {
  if (e && typeof e.preventDefault === 'function') e.preventDefault();
  const target = document.getElementById('galleryControls') || document.getElementById('gallery');
  if (target) {
    const headerHeight = document.querySelector('.site-header')?.offsetHeight || 70;
    const targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
  }
}

// View Mode Toggles (Scrapbook vs Grid)
function switchViewMode(mode) {
  state.viewMode = mode;
  const viewScrapbookBtn = document.getElementById('viewModeScrapbook');
  const viewGridBtn = document.getElementById('viewModeGrid');
  if (viewScrapbookBtn) viewScrapbookBtn.classList.toggle('active', mode === 'scrapbook');
  if (viewGridBtn) viewGridBtn.classList.toggle('active', mode === 'grid');
  renderGallery();
  if (typeof sfx !== 'undefined' && sfx.playPop) sfx.playPop();
}

// ==========================================
// 7. EVENT LISTENERS & INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Render & Cart Persistence
  loadSavedCart();
  renderGallery();
  init3DPhysics();
  initInteractiveCat();
  attachModalTilt();
  initBoxBuilder();
  updateCartUI();
  initOrderForm();

  const urlFilter = new URLSearchParams(window.location.search).get('filter');
  if (urlFilter) {
    applyCategoryFilter(urlFilter, false);
  }

  if (window.location.search.includes('preview_filled=1')) {
    addBreadToBox('strawberry-cream-cheese');
    addBreadToBox('roti-abon');
    toggleBoxPackaging(true);
  }

  // Delegated click handler on document for category pills & hero explore button
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.pill-btn');
    if (btn) {
      e.preventDefault();
      const selectedFilter = btn.dataset.filter || 'all';
      const isFromHeader = Boolean(btn.closest('.site-header'));
      applyCategoryFilter(selectedFilter, isFromHeader);
      return;
    }

    const heroBtn = e.target.closest('.btn-primary-3d');
    if (heroBtn) {
      scrollToGallery(e);
      return;
    }
  });

  // 3. Search Input
  const searchInput = document.getElementById('breadSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      renderGallery();
    });
  }

  // 4. View Mode Toggles (Scrapbook vs Grid)
  const viewScrapbookBtn = document.getElementById('viewModeScrapbook');
  const viewGridBtn = document.getElementById('viewModeGrid');
  if (viewScrapbookBtn) {
    viewScrapbookBtn.addEventListener('click', () => switchViewMode('scrapbook'));
  }
  if (viewGridBtn) {
    viewGridBtn.addEventListener('click', () => switchViewMode('grid'));
  }

  // 5. Lightweight Route Handler
  if (window.location.pathname.endsWith('/order') || window.location.pathname.endsWith('/order/') || window.location.hash === '#order' || window.location.hash === '#order-form') {
    window.location.replace('order.html');
  }

  // Hero Floating Items Click to Open Modal
  const heroFloatingItems = document.querySelectorAll('.bread-floating-item');
  heroFloatingItems.forEach(item => {
    item.addEventListener('click', () => {
      const pid = item.dataset.productId;
      if (pid) openProductModal(pid);
    });
  });

  // Cat Mascot Easter Egg
  const catSticker = document.getElementById('heroCatSticker');
  if (catSticker) {
    catSticker.addEventListener('click', () => {
      sfx.playPop();
      showToast('Meow! Resep roti Bluezi dipanggang penuh cinta setiap fajar!');
    });
  }

  // 6. Cart Drawer Toggles
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const emptyCartCtaBtn = document.getElementById('emptyCartCtaBtn');

  if (openCartBtn) openCartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartBackdrop) {
    cartBackdrop.addEventListener('click', (e) => {
      if (e.target === cartBackdrop) closeCart();
    });
  }
  if (emptyCartCtaBtn) {
    emptyCartCtaBtn.addEventListener('click', () => {
      closeCart();
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const cartCheckoutWaBtn = document.getElementById('cartCheckoutWaBtn');
  if (cartCheckoutWaBtn) cartCheckoutWaBtn.addEventListener('click', checkoutViaWhatsApp);

  // 7. Modal Handlers
  const modalBackdrop = document.getElementById('productModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const qtyMinusBtn = document.getElementById('qtyMinusBtn');
  const qtyPlusBtn = document.getElementById('qtyPlusBtn');
  const qtyValue = document.getElementById('qtyValue');
  const modalAddBagBtn = document.getElementById('modalAddBagBtn');
  const modalInstantWaBtn = document.getElementById('modalInstantWaBtn');

  // Robust click and touch handlers for modal closing
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeProductModal();
    });
    modalCloseBtn.addEventListener('touchend', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeProductModal();
    });
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      // Close if click occurred outside the white paper content stage
      if (!e.target.closest('.modal-content-stage')) {
        closeProductModal();
      }
    });
    modalBackdrop.addEventListener('touchend', (e) => {
      if (!e.target.closest('.modal-content-stage') && !e.target.closest('.modal-close-btn')) {
        closeProductModal();
      }
    }, { passive: true });
  }

  // Delegated document click listener for all modal close triggers
  document.addEventListener('click', (e) => {
    if (e.target.closest('#modalCloseBtn') || e.target.closest('.btn-modal-close-bottom') || e.target.closest('[data-close-modal]')) {
      e.preventDefault();
      closeProductModal();
    }
  });

  // Escape key closes modal & cart
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCart();
    }
  });

  if (qtyMinusBtn && qtyPlusBtn && qtyValue) {
    qtyMinusBtn.addEventListener('click', () => {
      if (state.modalQty > 1) {
        state.modalQty--;
        qtyValue.textContent = state.modalQty;
        sfx.playPop();
      }
    });

    qtyPlusBtn.addEventListener('click', () => {
      state.modalQty++;
      qtyValue.textContent = state.modalQty;
      sfx.playPop();
    });
  }

  if (modalAddBagBtn) {
    modalAddBagBtn.addEventListener('click', () => {
      if (!state.activeModalProduct) return;
      addToCart(state.activeModalProduct, state.modalQty);
      closeProductModal();
      triggerCartButtonBounce();
    });
  }

  if (modalInstantWaBtn) {
    modalInstantWaBtn.addEventListener('click', () => {
      if (!state.activeModalProduct) return;
      orderInstantWhatsApp(state.activeModalProduct, state.modalQty);
    });
  }

  // Initialize Hampers Showcase Slider
  renderHampersSlider();

  if (new URLSearchParams(window.location.search).get('openCart') === 'true') {
    setTimeout(openCart, 150);
  }
});

// ==========================================
// HAMPERS INTERACTIVE SLIDER ENGINE
// ==========================================
let currentHamperSlide = 0;
let hamperAutoTimer = null;

function renderHampersSlider() {
  const track = document.getElementById('hamperTrack');
  const dotsContainer = document.getElementById('hamperDots');
  const thumbStrip = document.getElementById('hamperThumbStrip');
  const counterEl = document.getElementById('hamperCounter');
  if (!track) return;

  const hamperItem = BLUEZI_HAMPERS_DATA;
  const slides = (hamperItem && hamperItem.gallery) ? hamperItem.gallery : [];
  if (slides.length === 0) return;

  // Render slides
  track.innerHTML = slides.map((slide, idx) => `
    <div class="hamper-slide ${idx === 0 ? 'active' : ''}" data-slide-index="${idx}">
      <div class="hamper-slide-inner">
        <div class="hamper-slide-photo-wrap">
          <img src="${slide.src}" alt="${slide.title}" class="hamper-slide-img" loading="lazy">
          <div class="hamper-slide-badges">
            <span class="hamper-badge price-pill">${slide.price}</span>
            <span class="hamper-badge tag-pill">${slide.tag}</span>
          </div>
        </div>
        <div class="hamper-slide-info">
          <div class="hamper-slide-meta">
            <span class="hamper-category-label">PARCEL BY BLUEZI</span>
            <span class="hamper-slide-counter-small">${String(idx + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}</span>
          </div>
          <h3 class="hamper-slide-title">${slide.title}</h3>
          <p class="hamper-slide-desc">${slide.desc}</p>
          <div class="hamper-slide-features">
            <span class="feature-tag">Free Greeting Card</span>
            <span class="feature-tag">Pita Satin Mewah</span>
            <span class="feature-tag">Kualitas Terbaik</span>
          </div>
          <div class="hamper-slide-bottom">
            <div class="hamper-slide-price-box">
              <span class="price-label">Estimasi Harga</span>
              <span class="price-value">${slide.price}</span>
            </div>
            <div class="hamper-slide-actions">
              <a href="https://api.whatsapp.com/send?phone=6281398301616&text=Halo%20Bluezi%20Bakery!%20Saya%20tertarik%20pesan%20hampers%20varian%20${encodeURIComponent(slide.title)}%20(${encodeURIComponent(slide.price)}).%20Boleh%20info%20ketersediaan%20dan%20cara%20pemesanannya%3F" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="btn-slide-wa" 
                 title="Pesan via WhatsApp">
                <span>Pesan via WA</span>
              </a>
              <button type="button" class="btn-slide-bag" onclick="addHamperToBag(${idx})" title="Tambah ke keranjang">
                <span>+ Keranjang</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Render dots
  if (dotsContainer) {
    dotsContainer.innerHTML = slides.map((_, idx) => `
      <button type="button" class="hamper-dot ${idx === 0 ? 'active' : ''}" onclick="goToHamperSlide(${idx}); startHamperAutoSlide(${slides.length});" aria-label="Slide ${idx + 1}"></button>
    `).join('');
  }

  // Render thumbnail strip
  if (thumbStrip) {
    thumbStrip.innerHTML = slides.map((slide, idx) => `
      <button type="button" class="hamper-thumb-btn ${idx === 0 ? 'active' : ''}" onclick="goToHamperSlide(${idx}); startHamperAutoSlide(${slides.length});" title="${slide.title}">
        <img src="${slide.src}" alt="${slide.title}" class="hamper-thumb-img" loading="lazy">
        <span class="hamper-thumb-price">${slide.price.replace('Mulai ', '')}</span>
      </button>
    `).join('');
  }

  if (counterEl) {
    counterEl.textContent = `01 / ${String(slides.length).padStart(2, '0')}`;
  }

  setupHamperSliderEvents(slides.length);
  startHamperAutoSlide(slides.length);
}

function goToHamperSlide(index) {
  const track = document.getElementById('hamperTrack');
  const thumbStrip = document.getElementById('hamperThumbStrip');
  const hamperItem = BLUEZI_HAMPERS_DATA;
  const slides = (hamperItem && hamperItem.gallery) ? hamperItem.gallery : [];
  if (!track || slides.length === 0) return;

  const total = slides.length;
  currentHamperSlide = (index + total) % total;

  track.style.transform = `translateX(-${currentHamperSlide * 100}%)`;

  // Update dots
  const dots = document.querySelectorAll('.hamper-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentHamperSlide);
  });

  // Update thumbs & scroll thumbStrip horizontally without touching window scroll!
  const thumbs = document.querySelectorAll('.hamper-thumb-btn');
  thumbs.forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === currentHamperSlide);
  });
  if (thumbStrip && thumbs[currentHamperSlide]) {
    const activeThumb = thumbs[currentHamperSlide];
    const offset = activeThumb.offsetLeft - (thumbStrip.clientWidth / 2) + (activeThumb.clientWidth / 2);
    thumbStrip.scrollTo({ left: Math.max(0, offset), behavior: 'smooth' });
  }

  // Update counter
  const counterEl = document.getElementById('hamperCounter');
  if (counterEl) {
    counterEl.textContent = `${String(currentHamperSlide + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  }
}

function nextHamperSlide() {
  const hamperItem = BLUEZI_HAMPERS_DATA;
  const total = hamperItem && hamperItem.gallery ? hamperItem.gallery.length : 12;
  goToHamperSlide(currentHamperSlide + 1);
  if (typeof sfx !== 'undefined' && sfx.playPop) sfx.playPop();
}

function prevHamperSlide() {
  const hamperItem = BLUEZI_HAMPERS_DATA;
  const total = hamperItem && hamperItem.gallery ? hamperItem.gallery.length : 12;
  goToHamperSlide(currentHamperSlide - 1);
  if (typeof sfx !== 'undefined' && sfx.playPop) sfx.playPop();
}

function startHamperAutoSlide(total) {
  stopHamperAutoSlide();
  // Keep mobile view calm & stationary without sudden auto-sliding
  if (window.innerWidth <= 768) return;
  hamperAutoTimer = setInterval(() => {
    goToHamperSlide(currentHamperSlide + 1);
  }, 5000);
}

function stopHamperAutoSlide() {
  if (hamperAutoTimer) {
    clearInterval(hamperAutoTimer);
    hamperAutoTimer = null;
  }
}

function setupHamperSliderEvents(total) {
  const wrap = document.getElementById('hamperSliderWrap');
  const prevBtn = document.getElementById('hamperPrevBtn');
  const nextBtn = document.getElementById('hamperNextBtn');

  if (prevBtn) prevBtn.onclick = () => { prevHamperSlide(); startHamperAutoSlide(total); };
  if (nextBtn) nextBtn.onclick = () => { nextHamperSlide(); startHamperAutoSlide(total); };

  if (wrap) {
    wrap.addEventListener('mouseenter', stopHamperAutoSlide);
    wrap.addEventListener('mouseleave', () => startHamperAutoSlide(total));

    // Smooth touch swipe support with vertical scroll protection
    let startX = 0;
    let startY = 0;

    wrap.addEventListener('touchstart', (e) => {
      stopHamperAutoSlide();
      if (e.touches && e.touches.length > 0) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      }
    }, { passive: true });

    wrap.addEventListener('touchend', (e) => {
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = startY - endY;

      // Only trigger if horizontal swipe is clearly dominant over vertical scrolling
      if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY) * 1.3) {
        if (diffX > 0) {
          nextHamperSlide();
        } else {
          prevHamperSlide();
        }
      }
      startHamperAutoSlide(total);
    }, { passive: true });
  }
}

function addHamperToBag(slideIndex) {
  const hamperItem = BLUEZI_HAMPERS_DATA;
  if (!hamperItem || !hamperItem.gallery) return;
  const slide = hamperItem.gallery[slideIndex] || hamperItem.gallery[0];
  const shortName = slide.shortTitle || `Hampers (${slide.tag || 'Spesial'})`;
  const numericPrice = slide.numericPrice || parseInt(String(slide.price).replace(/[^0-9]/g, ''), 10) || 30000;

  const customHamperItem = {
    id: `hamper-${slideIndex}-${Date.now()}`,
    name: shortName,
    price: numericPrice,
    priceFormatted: formatIDR(numericPrice),
    thumb: slide.src,
    qty: 1,
    isHamper: true,
    tag: slide.tag
  };

  state.cart.push(customHamperItem);
  saveCartToStorage();
  updateCartUI();
  showToast(`Ditambahkan ke keranjang: ${shortName}`);
  if (typeof sfx !== 'undefined' && sfx.playSuccess) sfx.playSuccess();
  triggerCartButtonBounce();
}

// Expose all functions to global window for seamless onclick attribute access
window.openCart = openCart;
window.closeCart = closeCart;
window.addToBagQuick = addToBagQuick;
window.addToCart = addToCart;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.switchModalView = switchModalView;
window.applyCategoryFilter = window.applyCategoryFilter || applyCategoryFilter;
window.switchViewMode = window.switchViewMode || switchViewMode;
window.scrollToGallery = window.scrollToGallery || scrollToGallery;
window.modifyCartItemQty = modifyCartItemQty;
window.removeCartItem = removeCartItem;
window.checkoutViaWhatsApp = checkoutViaWhatsApp;
window.handleOrderFormSubmit = handleOrderFormSubmit;
window.updateOrderFormQty = updateOrderFormQty;
window.syncOrderFormUI = syncOrderFormUI;
window.formatIDR = formatIDR;
window.goToHamperSlide = goToHamperSlide;
window.nextHamperSlide = nextHamperSlide;
window.prevHamperSlide = prevHamperSlide;
window.addHamperToBag = addHamperToBag;
window.addBreadToBox = addBreadToBox;
window.removeBreadFromBox = removeBreadFromBox;
window.toggleBoxPackaging = toggleBoxPackaging;
window.addCustomBoxToCart = addCustomBoxToCart;
window.initBoxBuilder = initBoxBuilder;
window.scrollToBoxBuilder = scrollToBoxBuilder;
window.switchBoxViewMode = switchBoxViewMode;
window.selectBoxRealPhoto = selectBoxRealPhoto;
window.triggerCartButtonBounce = triggerCartButtonBounce;

function triggerCartButtonBounce() {
  const floatingBtn = document.getElementById('floatingCartBtn');
  const countBadge = document.getElementById('floatingCartBadge');
  const headerCart = document.getElementById('headerCartBtn') || document.getElementById('orderHeaderCart');
  
  [floatingBtn, countBadge, headerCart].forEach(el => {
    if (!el) return;
    el.classList.remove('cart-bump-animation');
    void el.offsetWidth;
    el.classList.add('cart-bump-animation');
  });
}

function switchBoxViewMode(mode) {
  const photoView = document.getElementById('boxRealPhotoVisual');
  const simView = document.getElementById('bakeryBoxVisual');
  const tabPhoto = document.getElementById('tabBoxRealPhoto');
  const tabSim = document.getElementById('tabBoxSimulation');

  if (mode === 'photo') {
    if (photoView) photoView.style.display = 'block';
    if (simView) simView.style.display = 'none';
    if (tabPhoto) tabPhoto.classList.add('is-active');
    if (tabSim) tabSim.classList.remove('is-active');
  } else {
    if (photoView) photoView.style.display = 'none';
    if (simView) simView.style.display = 'block';
    if (tabPhoto) tabPhoto.classList.remove('is-active');
    if (tabSim) tabSim.classList.add('is-active');
  }
}

function selectBoxRealPhoto(photoUrl, photoTitle) {
  const mainImg = document.getElementById('boxRealPhotoMainImg');
  const captionEl = document.getElementById('boxRealPhotoCaption');
  if (mainImg) mainImg.src = photoUrl;
  if (captionEl) captionEl.textContent = 'Contoh Box: ' + photoTitle;

  document.querySelectorAll('.box-photo-thumb-btn').forEach(btn => {
    const isTarget = btn.getAttribute('data-src') === photoUrl;
    btn.classList.toggle('active', isTarget);
  });
}

