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
    price: 5000,
    priceFormatted: 'Rp 5.000',
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
    price: 5000,
    priceFormatted: 'Rp 5.000',
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
    id: 'creamy-mushroom',
    name: 'Creamy Mushroom',
    handwrittenName: 'Roti Jamur Krim',
    category: 'savory',
    price: 5000,
    priceFormatted: 'Rp 5.000',
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
    handwrittenName: 'Soes Vla Strawberry',
    category: 'sweet',
    price: 5000,
    priceFormatted: 'Rp 5.000',
    tag: 'Favorite',
    spanClass: 'span-standard',
    shortDesc: 'Kulit soes choux renyah lembut berpadu vla strawberry manis dan potongan buah segar.',
    fullDesc: 'Our soft, fluffy choux pastries come with sweet strawberry pieces, topped with a swirl of cream and fresh strawberry slices. Light, creamy, fruity, and made to satisfy your sweet cravings. Rasanya seimbang antara manis segar buah berry dan kelembutan vla susu premium.',
    images: {
      cutout: 'public/images/products/enhanced/strawberry-cream-bun.png?v=photoreal_v5',
      real1: 'assets/real_photos/bluezi2/strawberry_cream_bluezi_box.jpg',
      real2: 'assets/real_photos/bluezi2/strawberry_cream_tray.jpg'
    },
    photoShape: 'round',
    highlights: ['Buah Strawberry Segar', 'Krim Vla Susu Dingin', 'Kulit Choux Keemasan', 'Crumble Gurih Manis'],
    polaroidLabel: 'Choux showcase Bluezi'
  },
  {
    id: 'strawberry-cream-cheese',
    name: 'Strawberry Cream Cheese',
    handwrittenName: 'Roti Krim Keju Strawberry',
    category: 'sweet',
    price: 5000,
    priceFormatted: 'Rp 5.000',
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
    handwrittenName: 'Soes Mango Custard',
    category: 'sweet',
    price: 5000,
    priceFormatted: 'Rp 5.000',
    tag: 'Seasonal',
    spanClass: 'span-compact',
    shortDesc: 'Soes choux istimewa dengan isian custard mangga tropis lembut dan topping potongan mangga segar manis.',
    fullDesc: 'Smooth, fruity mango filling and fresh mango slices on top! Light, creamy, and fruity. Dibuat dengan mangga matang pilihan yang dipadu custard vanilla susu lembut. Pilihan camilan manis yang menyegarkan di hari santaimu.',
    images: {
      cutout: 'public/images/products/enhanced/mango-cream-bun.png?v=photoreal_v5',
      real1: 'assets/real_photos/bluezi2/strawberry_bun_crumble_top.jpg',
      real2: 'assets/real_photos/bluezi2/strawberry_bun_crumble2.jpg'
    },
    photoShape: 'round',
    highlights: ['Topping Mangga Segar Manis', 'Smooth Mango Custard', 'Puff Renyah Ringan', 'Aroma Tropis Menyegarkan'],
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
    name: 'Double Choco Bread',
    handwrittenName: 'Twisted Choco Swirl',
    category: 'sweet',
    price: 5000,
    priceFormatted: 'Rp 5.000',
    tag: 'Best Seller',
    spanClass: 'span-standard',
    shortDesc: 'Roti gulung cokelat lembut dengan lelehan pasta cokelat pekat di bagian tengah.',
    fullDesc: 'Made with soft, fluffy chocolate dough and a rich chocolate filling tucked right in the center. Every bite brings you that perfect chocolatey goodness, with a tender texture that makes it hard to stop at just one. A twist of chocolate heaven for your sweet cravings.',
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
    id: 'double-choco-loaf',
    name: 'Double Choco Loaf',
    handwrittenName: 'Dark Choco Sourdough',
    category: 'sourdough',
    price: 15000,
    priceFormatted: 'Rp 15.000',
    tag: 'Artisan',
    spanClass: 'span-compact',
    shortDesc: 'Roti sourdough artisan cokelat pekat dengan limpahan chocolate chips dan kerak renyah istimewa.',
    fullDesc: 'Naturally fermented artisan sourdough loaf made with premium dark cocoa and studded with decadent dark chocolate chips. A deep, sophisticated chocolate experience with a chewy crumb and crispy crust.',
    images: {
      cutout: 'public/images/products/enhanced/double-choco-loaf.png?v=photoreal_v5'
    },
    photoShape: 'oval',
    highlights: ['Artisan Dark Cocoa Dough', 'Generous Dark Choco Chips', 'Natural Wild Yeast Starter', 'Deep Chocolate Aroma'],
    polaroidLabel: 'Artisan chocolate batard'
  }
];

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
}
const sfx = new SoundFX();

// ==========================================
// 3. 3D TILT PHYSICS & PARALLAX ENGINE
// ==========================================

function init3DPhysics() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Hero Stage 3D Tilt
  const heroStage = document.getElementById('hero3dStage');
  const heroInner = document.getElementById('heroStageInner');

  if (heroStage && heroInner) {
    let heroBounds = heroStage.getBoundingClientRect();
    window.addEventListener('resize', () => {
      heroBounds = heroStage.getBoundingClientRect();
    });

    heroStage.addEventListener('pointermove', (e) => {
      const x = (e.clientX - heroBounds.left) / heroBounds.width - 0.5;
      const y = (e.clientY - heroBounds.top) / heroBounds.height - 0.5;

      const rotX = -y * 18; // Max 9 deg
      const rotY = x * 22;

      heroInner.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
    });

    heroStage.addEventListener('pointerleave', () => {
      heroInner.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }

  // Interactive Card Tilt
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
  "Meow! Selamat datang di Bluez' Bakery! 🐾",
  "Semua roti kami dipanggang fresh tiap pagi lho! 🥖",
  "Coba Pizza Bread-nya, saus bolognese & kejunya lumer! 🍕",
  "Roti Abon ayamnya super fluffy & gurih berlimpah! ✨",
  "Lagi pengen manis? Choux Strawberry dingin segar banget! 🍓",
  "Sourdough cranberry cheese kami fermentasi alami 24 jam! 🍞",
  "Mau pesan cepat? Klik tombol WhatsApp di kiri ya! 💬",
  "Purrr... Senang kamu main sama aku! 💙",
  "Nyam nyam! Aroma roti di Bluez' Studio wangi banget hari ini~ 🥐"
];

const CAT_PARTICLE_ICONS = ['🐾', '💙', '✨', '🥖', '🥐', '🍞', '🍕', '🍓', '❤️'];

function initInteractiveCat() {
  const catCard = document.getElementById('interactiveCatCard');
  const catImg = document.getElementById('interactiveCatImg');
  const bubble = document.getElementById('catDialogBubble');
  const bubbleText = document.getElementById('catBubbleText');
  const petCounter = document.getElementById('catPetCounter');
  const particlesContainer = document.getElementById('catParticles');

  if (!catCard || !catImg) return;

  let petCount = 0;
  let dialogIdx = 0;

  function handleCatInteraction(e) {
    petCount++;
    sfx.playMeow();

    // 1. Cat Bounce Animation
    catImg.classList.remove('cat-bounce-active');
    void catImg.offsetWidth; // Force reflow
    catImg.classList.add('cat-bounce-active');

    // 2. Cycle Speech Bubble Text
    dialogIdx = (dialogIdx + 1) % CAT_DIALOGS.length;
    if (bubbleText) {
      bubbleText.textContent = CAT_DIALOGS[dialogIdx];
    }
    if (petCounter) {
      petCounter.textContent = `Disapa ${petCount}x 🐾`;
    }

    // Retrigger bubble pop animation
    if (bubble) {
      bubble.style.animation = 'none';
      void bubble.offsetWidth;
      bubble.style.animation = 'popBubble 0.35s var(--ease-elastic)';
    }

    // 3. Spawn Burst Particles
    if (particlesContainer) {
      spawnCatParticles(particlesContainer, 5);
    }
  }

  function spawnCatParticles(container, count) {
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('span');
      particle.className = 'cat-particle';
      const icon = CAT_PARTICLE_ICONS[Math.floor(Math.random() * CAT_PARTICLE_ICONS.length)];
      particle.textContent = icon;

      const tx = (Math.random() - 0.5) * 160;
      const ty = -60 - Math.random() * 80;
      const rot = (Math.random() - 0.5) * 60;

      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      particle.style.setProperty('--rot', `${rot}deg`);
      particle.style.left = `${50 + (Math.random() - 0.5) * 30}%`;
      particle.style.top = `${50 + (Math.random() - 0.5) * 20}%`;

      container.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 1200);
    }
  }

  catCard.addEventListener('click', handleCatInteraction);
  catCard.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCatInteraction(e);
    }
  });
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
              loading="lazy"
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

  // Hide view switcher completely
  if (modalSwitcher) modalSwitcher.innerHTML = '';

  // Display pure transparent floating cutout
  if (modalImg) {
    modalImg.src = product.images.cutout;
    modalImg.className = 'modal-floating-image modal-photo-cutout-mode';
    modalImg.style.objectFit = 'contain';
    modalImg.style.width = 'auto';
    modalImg.style.height = 'auto';
    modalImg.style.aspectRatio = 'auto';
    modalImg.style.maxWidth = '90%';
    modalImg.style.maxHeight = '320px';
    modalImg.style.borderRadius = '0';
    modalImg.style.border = 'none';
    modalImg.style.boxShadow = 'none';
  }

  // Open backdrop
  const backdrop = document.getElementById('productModalBackdrop');
  backdrop.classList.add('open');
  backdrop.setAttribute('aria-hidden', 'false');
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
  backdrop.classList.remove('open');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  state.activeModalProduct = null;
}

// ==========================================
// 6. SHOPPING CART & WHATSAPP GENERATOR
// ==========================================

function addToBagQuick(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  addToCart(product, 1);
  sfx.playPop();
  openCart(); // Automatically open cart drawer so user sees items added!
}

function addToCart(product, qty) {
  const existing = state.cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      priceFormatted: product.priceFormatted,
      thumb: product.images.cutout,
      qty: qty
    });
  }

  updateCartUI();
  showToast(`Ditambahkan ke Keranjang: ${qty}x ${product.name}! 🍞`);
}

function updateCartUI() {
  const countBadge = document.getElementById('cartCountBadge');
  const floatingBadge = document.getElementById('floatingCartBadge');
  const floatingSubtotal = document.getElementById('floatingCartSubtotal');
  const subtitleCount = document.getElementById('cartSubtitleCount');
  const emptyState = document.getElementById('cartEmptyState');
  const itemsList = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const footerEl = document.getElementById('cartFooter');

  const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (countBadge) countBadge.textContent = totalItems;
  if (floatingBadge) floatingBadge.textContent = totalItems;
  if (floatingSubtotal) floatingSubtotal.textContent = formatIDR(totalPrice);
  if (subtitleCount) subtitleCount.textContent = `${totalItems} roti dipilih`;

  if (state.cart.length === 0) {
    emptyState.style.display = 'block';
    itemsList.innerHTML = '';
    subtotalEl.textContent = 'Rp 0';
    footerEl.style.display = 'none';
  } else {
    emptyState.style.display = 'none';
    footerEl.style.display = 'block';

    itemsList.innerHTML = state.cart.map(item => `
      <li class="cart-item-row">
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
    `).join('');

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
    updateCartUI();
    sfx.playPop();
  }
}

function removeCartItem(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  updateCartUI();
  sfx.playCrinkle();
}

function formatIDR(amount) {
  return 'Rp ' + amount.toLocaleString('id-ID');
}

function openCart() {
  const backdrop = document.getElementById('cartBackdrop');
  backdrop.classList.add('open');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  sfx.playCrinkle();
}

function closeCart() {
  const backdrop = document.getElementById('cartBackdrop');
  backdrop.classList.remove('open');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
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

  let message = `🍞 *PESANAN BARU — BLUEZ' BAKERY* 🍞\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 *DATA PEMESAN:*\n`;
  message += `• *Nama:* ${name}\n`;
  message += `• *No. WhatsApp:* ${phone}\n`;
  message += `• *Alamat Pengiriman:* ${address}\n`;
  if (delivery) {
    message += `• *Metode Pengiriman:* ${delivery}\n`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📦 *DAFTAR ROTI YANG DIPESAN (${totalCount} item):*\n`;

  state.cart.forEach((item, idx) => {
    message += `${idx + 1}. ${item.name} (${item.qty}x) = ${formatIDR(item.price * item.qty)}\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *TOTAL ESTIMASI: ${formatIDR(totalPrice)}*\n`;
  if (note) {
    message += `📝 *Catatan Khusus:* ${note}\n`;
  }
  message += `\nHalo min, saya mau pesan roti-roti di atas ya. Mohon konfirmasi ketersediaan stok fresh dan total biaya pengiriman ke alamat saya. Terima kasih! ✨`;

  const encoded = encodeURIComponent(message);
  const waUrl = `https://api.whatsapp.com/send?phone=${bakeryPhone}&text=${encoded}`;

  showToast('Rincian pesanan telah disiapkan! Mengalihkan ke WhatsApp... 💬');
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

  PRODUCTS.forEach(p => {
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
    picker.innerHTML = PRODUCTS.map(p => {
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

  let message = `Halo BLUEZ' BAKERY! 🍞✨\n`;
  message += `Saya tertarik untuk memesan langsung:\n\n`;
  message += `• ${product.name} (${qty}x) = ${formatIDR(total)}\n\n`;
  message += `Mohon info ketersediaan stok fresh hari ini ya. Terima kasih! ♡`;

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
    <span class="toast-icon">🍞</span>
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

// ==========================================
// 7. EVENT LISTENERS & INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Render
  renderGallery();
  init3DPhysics();
  initInteractiveCat();
  attachModalTilt();
  updateCartUI();
  initOrderForm();

  // 2. Category Nav Filters
  const filterBtns = document.querySelectorAll('.pill-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      state.currentFilter = btn.dataset.filter || 'all';
      renderGallery();
      sfx.playPop();
    });
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

  if (viewScrapbookBtn && viewGridBtn) {
    viewScrapbookBtn.addEventListener('click', () => {
      state.viewMode = 'scrapbook';
      viewScrapbookBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
      renderGallery();
      sfx.playPop();
    });

    viewGridBtn.addEventListener('click', () => {
      state.viewMode = 'grid';
      viewGridBtn.classList.add('active');
      viewScrapbookBtn.classList.remove('active');
      renderGallery();
      sfx.playPop();
    });
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
      showToast('🐾 Meow! Resep roti Bluezi dipanggang penuh cinta setiap fajar!');
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

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeProductModal();
    });
  }

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
      openCart(); // Automatically open cart drawer on modal add!
    });
  }

  if (modalInstantWaBtn) {
    modalInstantWaBtn.addEventListener('click', () => {
      if (!state.activeModalProduct) return;
      orderInstantWhatsApp(state.activeModalProduct, state.modalQty);
    });
  }
});

// Expose all functions to global window for seamless onclick attribute access
window.openCart = openCart;
window.closeCart = closeCart;
window.addToBagQuick = addToBagQuick;
window.addToCart = addToCart;
window.openProductModal = openProductModal;
window.switchModalView = switchModalView;
window.modifyCartItemQty = modifyCartItemQty;
window.removeCartItem = removeCartItem;
window.checkoutViaWhatsApp = checkoutViaWhatsApp;
window.handleOrderFormSubmit = handleOrderFormSubmit;
window.updateOrderFormQty = updateOrderFormQty;
window.syncOrderFormUI = syncOrderFormUI;
window.formatIDR = formatIDR;
