/**
 * BLUEZ' BAKERY — ORDER PAGE APPLICATION LOGIC (order.js)
 * Dedicated Checkout & WhatsApp Integration Engine
 */

// ==========================================
// 1. PRODUCT CATALOG DATA (Source of Truth)
// ==========================================
const BAKERY_PRODUCTS = [
  {
    id: 'pizza-bread',
    name: 'Pizza Bread',
    category: 'savory',
    categoryLabel: 'Savory',
    price: 5000,
    priceFormatted: 'Rp 5.000',
    shortDesc: 'Roti bulat empuk dengan saus bolognese gurih, sosis sapi pilihan, paprika renyah, dan lelehan keju.',
    image: 'public/images/products/enhanced/pizza-bread.png?v=photoreal_v5'
  },
  {
    id: 'roti-abon',
    name: 'Roti Abon',
    category: 'savory',
    categoryLabel: 'Savory',
    price: 5000,
    priceFormatted: 'Rp 5.000',
    shortDesc: 'Roti lembut bertabur abon ayam gurih melimpah, dipadukan saus creamy sesame mayo istimewa.',
    image: 'public/images/products/enhanced/roti-abon.png?v=photoreal_v5'
  },
  {
    id: 'floss-roll',
    name: 'Floss Roll',
    category: 'savory',
    categoryLabel: 'Savory',
    price: 7000,
    priceFormatted: 'Rp 7.000',
    shortDesc: 'Roti gulung empuk bertabur abon gurih melimpah di kedua ujungnya, dipadu creamy mayo, irisan cabai, dan daun bawang.',
    image: 'public/images/products/enhanced/floss-roll.png?v=photoreal_v5'
  },
  {
    id: 'creamy-mushroom',
    name: 'Creamy Mushroom',
    category: 'savory',
    categoryLabel: 'Savory',
    price: 5000,
    priceFormatted: 'Rp 5.000',
    shortDesc: 'Roti lembut berisi sup jamur gurih, potongan jamur asli, irisan sosis, dan taburan oregano.',
    image: 'public/images/products/enhanced/creamy-mushroom.png?v=photoreal_v5'
  },
  {
    id: 'strawberry-cream-bun',
    name: 'Strawberry Cream Bun',
    category: 'sweet',
    categoryLabel: 'Sweet Cream',
    price: 5000,
    priceFormatted: 'Rp 5.000',
    shortDesc: 'Kulit choux pastry renyah lembut dengan isian butter cream manis gurih lembut dan potongan strawberry segar.',
    image: 'public/images/products/enhanced/strawberry-cream-bun.png?v=photoreal_v5'
  },
  {
    id: 'strawberry-cream-cheese',
    name: 'Strawberry Cream Cheese',
    category: 'sweet',
    categoryLabel: 'Sweet Cream',
    price: 5000,
    priceFormatted: 'Rp 5.000',
    shortDesc: 'Roti empuk dengan isian cream cheese gurih manis, selai strawberry, dan crumble renyah.',
    image: 'public/images/products/enhanced/strawberry-cream-cheese.png?v=photoreal_v5'
  },
  {
    id: 'mango-cream-bun',
    name: 'Mango Cream Bun',
    category: 'sweet',
    categoryLabel: 'Sweet Cream',
    price: 5000,
    priceFormatted: 'Rp 5.000',
    shortDesc: 'Choux pastry istimewa dengan isian vla rasa mangga tropis manis-lembut dan topping potongan mangga asli.',
    image: 'public/images/products/enhanced/mango-cream-bun.png?v=photoreal_v5'
  },
  {
    id: 'cranberry-cheese-sourdough',
    name: 'Cranberry Cheese Sourdough',
    category: 'sourdough',
    categoryLabel: 'Artisan Loaf',
    price: 15000,
    priceFormatted: 'Rp 15.000',
    shortDesc: 'Adonan sourdough fermentasi 24 jam dengan buah cranberry ruby manis-asam dan keju savory gurih.',
    image: 'public/images/products/enhanced/cranberry-cheese-sourdough.png?v=photoreal_v5'
  },
  {
    id: 'double-choco-bread',
    name: 'Twisted Double Choco',
    category: 'sweet',
    categoryLabel: 'Sweet Cream',
    price: 5000,
    priceFormatted: 'Rp 5.000',
    shortDesc: 'Roti brioche gulung cokelat lembut (twisted swirl) dengan lelehan pasta cokelat pekat di tengah.',
    image: 'public/images/products/enhanced/double-choco.png?v=photoreal_v5'
  },
  {
    id: 'choux-craquelin',
    name: 'Choux Craquelin',
    category: 'sweet',
    categoryLabel: 'Sweet Cream',
    price: 8000,
    priceFormatted: 'Rp 8.000',
    shortDesc: 'Kulit soes choux garing keemasan dengan lapisan craquelin renyah dan isian silky vanilla custard dingin lembut.',
    image: 'public/images/products/enhanced/choux-craquelin.png'
  },
  {
    id: 'cookie-classic-chocochip',
    name: 'Choco Chip Cookie',
    category: 'cookies',
    categoryLabel: 'Cookies',
    price: 12000,
    priceFormatted: 'Rp 12.000',
    shortDesc: 'Cookies empuk soft-baked ala New York bertabur dark chocolate chunks melimpah dan renyahnya biskuit Oreo.',
    image: 'public/images/products/enhanced/cookie-classic-chocochip.png'
  },
  {
    id: 'cookie-red-velvet',
    name: 'Red Velvet Cookie',
    category: 'cookies',
    categoryLabel: 'Cookies',
    price: 12000,
    priceFormatted: 'Rp 12.000',
    shortDesc: 'Adonan red velvet ruby khas Bluezi dengan topping biskuit Oreo utuh dan dark chocolate chunks meleleh.',
    image: 'public/images/products/enhanced/cookie-red-velvet.png'
  },
  {
    id: 'cookie-tiramisu',
    name: 'Tiramisu Cookie',
    category: 'cookies',
    categoryLabel: 'Cookies',
    price: 12000,
    priceFormatted: 'Rp 12.000',
    shortDesc: 'Espresso aromatik berpadu swirl mascarpone cream lembut dan taburan cocoa powder murni di atas cookie soft-baked.',
    image: 'public/images/products/enhanced/cookie-tiramisu.png'
  },
  {
    id: 'cookie-double-dark',
    name: 'Double Choco Cookie',
    category: 'cookies',
    categoryLabel: 'Cookies',
    price: 12000,
    priceFormatted: 'Rp 12.000',
    shortDesc: 'Adonan double choco cocoa pekat berpadu isian lelehan molten chocolate lava premium yang lumer saat digigit.',
    image: 'public/images/products/enhanced/cookie-double-dark.png'
  },
  {
    id: 'box-souvenir-2-roti',
    name: 'Box Souvenir (Isi 2 Roti)',
    category: 'box',
    categoryLabel: 'Box Isi 2',
    price: 14000,
    priceFormatted: 'Start from Rp 14.000',
    shortDesc: 'Box kemasan kraft eksklusif isi 2 roti bebas pilih dengan clear dome lid & stiker segel resmi BLUEZ\' Studio.',
    image: 'assets/souvenir_roti/box-packaging-berry-abon.jpg'
  },
  {
    id: 'double-choco-loaf',
    name: 'Double Choco Loaf',
    category: 'sourdough',
    categoryLabel: 'Artisan Loaf',
    price: 15000,
    priceFormatted: 'Rp 15.000',
    shortDesc: 'Roti sourdough artisan cokelat pekat berlimpah dark chocolate chips dengan kerak renyah istimewa.',
    image: 'public/images/products/enhanced/double-choco-loaf.png?v=photoreal_v5'
  },
  {
    id: 'hamper-paket-a',
    name: 'Parcel Paket A',
    category: 'hampers',
    categoryLabel: 'Parcel A (Min. 3)',
    price: 40000,
    priceFormatted: 'Rp 40.000',
    shortDesc: 'Paket 6 item snack lengkap keranjang anyam kubah transparan, pita satin biru, & free kartu ucapan (*min. pembelian 3 pcs).',
    image: 'public/images/hampers/hamper-dome-basket.jpg',
    isHamper: true
  },
  {
    id: 'hamper-paket-b',
    name: 'Parcel Paket B',
    category: 'hampers',
    categoryLabel: 'Parcel B (Min. 5)',
    price: 30000,
    priceFormatted: 'Rp 30.000',
    shortDesc: '1 bag snack anak pilihan dalam pouch kuping kelinci imut, free amplop THR 5k & kartu ucapan (*min. pembelian 5 pcs).',
    image: 'public/images/hampers/hamper-bunny-pouch.jpg',
    isHamper: true
  },
  {
    id: 'hamper-paket-c',
    name: 'Parcel Paket C',
    category: 'hampers',
    categoryLabel: 'Parcel C (Min. 4)',
    price: 35000,
    priceFormatted: 'Rp 35.000',
    shortDesc: '1 bag snack anak pilihan dalam tas ransel pop-art kartun 2D unik & free kartu ucapan (*min. pembelian 4 pcs).',
    image: 'public/images/hampers/hamper-2d-backpack.jpg',
    isHamper: true
  },
  {
    id: 'hamper-paket-d',
    name: 'Parcel Paket D',
    category: 'hampers',
    categoryLabel: 'Parcel D (7 Item)',
    price: 85000,
    priceFormatted: 'Rp 85.000',
    shortDesc: 'Paket parcel 7 item pilihan keluarga dalam kemasan nampan Idul Fitri elegan, free kartu ucapan, & bisa request isian.',
    image: 'public/images/hampers/hamper-eid-compact.jpg',
    isHamper: true
  },
  {
    id: 'hamper-paket-e',
    name: 'Parcel Paket E',
    category: 'hampers',
    categoryLabel: 'Parcel E (9 Item)',
    price: 75000,
    priceFormatted: 'Rp 75.000',
    shortDesc: 'Paket parcel bertingkat 9 item dengan aneka wafer, stik cokelat & sirup segar, free kartu ucapan, & bisa request isian.',
    image: 'public/images/hampers/hamper-eid-classic.jpg',
    isHamper: true
  },
  {
    id: 'hamper-paket-f',
    name: 'Parcel Paket F',
    category: 'hampers',
    categoryLabel: 'Parcel F (10 Item)',
    price: 110000,
    priceFormatted: 'Rp 110.000',
    shortDesc: 'Bingkisan Idul Fitri semarak 10 item berhias garland hijau rindang, biskuit & minuman, free kartu ucapan, & bisa request isian.',
    image: 'public/images/hampers/hamper-eid-garland.jpg',
    isHamper: true
  },
  {
    id: 'hamper-paket-g',
    name: 'Parcel Paket G',
    category: 'hampers',
    categoryLabel: 'Parcel G (11 Item)',
    price: 170000,
    priceFormatted: 'Rp 170.000',
    shortDesc: 'Parcel tingkat tinggi megah 11 item lengkap dengan toples cookies cokelat, permen Yupi, Astor & bunga, free kartu ucapan, & bisa request isian.',
    image: 'public/images/hampers/hamper-eid-tower-large.jpg',
    isHamper: true
  },
  {
    id: 'hamper-paket-premium',
    name: 'Parcel Paket Premium',
    category: 'hampers',
    categoryLabel: 'Premium (14 Item)',
    price: 260000,
    priceFormatted: 'Rp 260.000',
    shortDesc: 'Hampers tabung akrilik eksklusif 14 item premium, biskuit kaleng & Astor mewah, dekorasi lampu fairy lights, & free kartu ucapan.',
    image: 'public/images/hampers/hamper-premium-cylinder.jpg',
    isHamper: true
  },
  {
    id: 'hamper-cookie-box',
    name: 'Hampers Cookies Jar',
    category: 'hampers',
    categoryLabel: 'Cookies Hamper',
    price: 50000,
    priceFormatted: 'Rp 50.000',
    shortDesc: 'Toples cookies jar kedap udara dengan kemasan box motif gingham hijau klasik & pita satin merah elegan.',
    image: 'public/images/hampers/hamper-cookie-box.jpg',
    isHamper: true
  },
  {
    id: 'hamper-mini-basket',
    name: 'Hampers Mini Woven Basket',
    category: 'hampers',
    categoryLabel: 'Boutique Basket',
    price: 45000,
    priceFormatted: 'Rp 45.000',
    shortDesc: 'Keranjang anyam natural estetik berpadu pita gingham biru khas Bluezi berisi camilan manis pilihan.',
    image: 'public/images/hampers/hamper-mini-basket.jpg',
    isHamper: true
  },
  {
    id: 'hamper-deluxe-basket',
    name: 'Hampers Deluxe Woven Basket',
    category: 'hampers',
    categoryLabel: 'Deluxe Basket',
    price: 45000,
    priceFormatted: 'Rp 45.000',
    shortDesc: 'Keranjang anyam berhandle tangan berisi aneka biskuit, cokelat, dan minuman sari buah segar.',
    image: 'public/images/hampers/hamper-woven-handle.jpg',
    isHamper: true
  },
  {
    id: 'hamper-eid-mid',
    name: 'Parcel Eid Special',
    category: 'hampers',
    categoryLabel: 'Eid Special',
    price: 45000,
    priceFormatted: 'Rp 45.000',
    shortDesc: 'Paket parcel Idul Fitri lengkap dengan sari buah segar dan biskuit keju renyah.',
    image: 'public/images/hampers/hamper-eid-mid.jpg',
    isHamper: true
  },
  {
    id: 'hamper-eid-floral',
    name: 'Parcel Eid Floral Deluxe',
    category: 'hampers',
    categoryLabel: 'Luxury Floral',
    price: 45000,
    priceFormatted: 'Rp 45.000',
    shortDesc: 'Paket parcel deluxe dengan dekorasi bunga mawar peach, minuman dingin, dan biskuit kaleng.',
    image: 'public/images/hampers/hamper-eid-floral.jpg',
    isHamper: true
  }
];

// Target WhatsApp Business Number
const BAKERY_WA_PHONE = '6281398301616';

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
const orderState = {
  cart: [],
  selectedCategory: 'all',
  deliveryMethod: 'Kurir Instan Bandung (GoSend / GrabExpress)',
  customer: {
    name: '',
    phone: '',
    address: '',
    notes: ''
  }
};

// Currency Formatter: Rp 15.000
function formatIDR(amount) {
  return 'Rp ' + Number(amount).toLocaleString('id-ID');
}

// Audio SFX for Interactions
const soundFX = {
  ctx: null,
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  },
  playPop() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(480, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(780, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (_) {}
  },
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
};

// ==========================================
// 3. CART PERSISTENCE & SYNC
// ==========================================
function loadSavedCart() {
  try {
    const raw = localStorage.getItem('bluezi_cart');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        // Re-map with current product data to guarantee up-to-date pricing
        orderState.cart = parsed.map(item => {
          if (item && item.isBox) {
            return {
              id: item.id,
              isBox: true,
              name: 'Bakery Box',
              breads: item.breads || [],
              hasSpecialPackaging: Boolean(item.hasSpecialPackaging),
              packagingFee: item.packagingFee || (item.hasSpecialPackaging ? 2000 : 0),
              breadSubtotal: item.breadSubtotal || ((item.breads?.[0]?.price || 0) + (item.breads?.[1]?.price || 0)),
              price: item.price,
              image: item.thumb || item.breads?.[0]?.thumb || 'public/images/products/enhanced/roti-abon.png',
              qty: Math.max(1, parseInt(item.qty, 10) || 1)
            };
          }
          if (item && (item.isHamper || (item.id && item.id.startsWith('hamper-')) || item.id === 'bluezi-hampers')) {
            let shortHamperName = item.name || 'Hampers';
            if (shortHamperName.length > 25) {
              shortHamperName = shortHamperName.replace(/^Hampers:\s*/i, 'Hampers ').slice(0, 24).trim();
            }
            return {
              id: item.id,
              name: shortHamperName,
              price: item.price || 30000,
              image: item.thumb || item.image || 'public/images/hampers/hamper-dome-basket.jpg',
              qty: Math.max(1, parseInt(item.qty, 10) || 1),
              isHamper: true
            };
          }
          if (item && item.id === 'artisan-soft-cookie') {
            item.id = 'cookie-classic-chocochip';
          }
          const matched = BAKERY_PRODUCTS.find(p => p.id === item.id);
          if (matched) {
            return {
              id: matched.id,
              name: matched.name,
              price: matched.price,
              image: matched.image,
              qty: Math.max(1, parseInt(item.qty, 10) || 1)
            };
          }
          return null;
        }).filter(Boolean);
      }
    }
  } catch (e) {
    console.warn('Failed to load cart from localStorage', e);
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('bluezi_cart', JSON.stringify(orderState.cart));
  } catch (e) {
    console.warn('Failed to save cart to localStorage', e);
  }
}

function loadSavedCustomerData() {
  orderState.customer.name = localStorage.getItem('bluezi_cust_name') || '';
  orderState.customer.phone = localStorage.getItem('bluezi_cust_phone') || '';
  orderState.customer.address = localStorage.getItem('bluezi_cust_address') || '';
  orderState.customer.notes = localStorage.getItem('bluezi_cust_notes') || '';
  orderState.deliveryMethod = localStorage.getItem('bluezi_delivery_method') || 'Kurir Instan (GoSend / GrabExpress)';

  const nameInput = document.getElementById('custName');
  const phoneInput = document.getElementById('custPhone');
  const addrInput = document.getElementById('custAddress');
  const notesInput = document.getElementById('custNotes');

  if (nameInput) nameInput.value = orderState.customer.name;
  if (phoneInput) phoneInput.value = orderState.customer.phone;
  if (addrInput) addrInput.value = orderState.customer.address;
  if (notesInput) notesInput.value = orderState.customer.notes;

  // Set active delivery radio
  const deliveryRadios = document.querySelectorAll('input[name="orderDelivery"]');
  deliveryRadios.forEach(radio => {
    if (radio.value === orderState.deliveryMethod) {
      radio.checked = true;
      const card = radio.closest('.delivery-card');
      if (card) card.classList.add('selected');
    } else {
      const card = radio.closest('.delivery-card');
      if (card) card.classList.remove('selected');
    }
  });
}

function saveCustomerData() {
  localStorage.setItem('bluezi_cust_name', orderState.customer.name);
  localStorage.setItem('bluezi_cust_phone', orderState.customer.phone);
  localStorage.setItem('bluezi_cust_address', orderState.customer.address);
  localStorage.setItem('bluezi_cust_notes', orderState.customer.notes);
  localStorage.setItem('bluezi_delivery_method', orderState.deliveryMethod);
}

// ==========================================
// 4. RENDERING & UI UPDATES
// ==========================================

const orderThumbIndices = {};

function slideOrderProductThumb(productId, delta) {
  const product = BAKERY_PRODUCTS.find(p => p.id === productId);
  if (!product || !product.gallery || product.gallery.length === 0) return;
  if (orderThumbIndices[productId] === undefined) {
    orderThumbIndices[productId] = 0;
  }
  const total = product.gallery.length;
  orderThumbIndices[productId] = (orderThumbIndices[productId] + delta + total) % total;
  const currentIdx = orderThumbIndices[productId];

  const imgEl = document.getElementById(`orderThumb-${productId}`);
  const counterEl = document.getElementById(`orderThumbCount-${productId}`);
  if (imgEl) imgEl.src = product.gallery[currentIdx];
  if (counterEl) counterEl.textContent = `${currentIdx + 1}/${total}`;
  soundFX.playPop();
}

// Render Product Selection List
function renderProductsList() {
  const container = document.getElementById('productsListContainer');
  if (!container) return;

  const filtered = BAKERY_PRODUCTS.filter(p => {
    if (orderState.selectedCategory === 'all') return true;
    return p.category === orderState.selectedCategory;
  });

  container.innerHTML = filtered.map(p => {
    const inCart = orderState.cart.find(item => item.id === p.id);
    const qty = inCart ? inCart.qty : 0;
    const hasQty = qty > 0;

    let badgeClass = 'badge-savory';
    if (p.category === 'sweet') badgeClass = 'badge-sweet';
    if (p.category === 'cookies') badgeClass = 'badge-cookies';
    if (p.category === 'sourdough') badgeClass = 'badge-sourdough';
    if (p.category === 'hampers') badgeClass = 'badge-hampers';

    const currentSlideIdx = orderThumbIndices[p.id] || 0;
    const currentImg = p.gallery && p.gallery.length > 0 ? p.gallery[currentSlideIdx] : p.image;
    const thumbHtml = p.gallery && p.gallery.length > 1 ? `
      <div class="order-thumb-slider">
        <img src="${currentImg}" alt="${p.name}" class="order-product-thumb" id="orderThumb-${p.id}" loading="lazy">
        <div class="order-thumb-nav">
          <button type="button" class="order-thumb-arrow prev" onclick="event.stopPropagation(); slideOrderProductThumb('${p.id}', -1)" aria-label="Foto Sebelumnya">‹</button>
          <span class="order-thumb-counter" id="orderThumbCount-${p.id}">${currentSlideIdx + 1}/${p.gallery.length}</span>
          <button type="button" class="order-thumb-arrow next" onclick="event.stopPropagation(); slideOrderProductThumb('${p.id}', 1)" aria-label="Foto Berikutnya">›</button>
        </div>
      </div>
    ` : `
      <div class="order-product-thumb-box">
        <img src="${p.image}" alt="${p.name}" class="order-product-thumb" loading="lazy">
      </div>
    `;

    return `
      <div class="order-product-card ${hasQty ? 'has-qty' : ''}" id="prod-card-${p.id}">
        <div class="order-product-left">
          ${thumbHtml}
          <div class="order-product-details">
            <div class="order-product-title-row">
              <span class="order-product-name">${p.name}</span>
              <span class="order-product-badge ${badgeClass}">${p.categoryLabel}</span>
            </div>
            <p class="order-product-desc">${p.shortDesc}</p>
            <span class="order-product-price-tag">${p.priceFormatted}</span>
          </div>
        </div>
        <div class="order-product-controls">
          <button type="button" class="stepper-btn" onclick="modifyProductQty('${p.id}', -1)" aria-label="Kurangi ${p.name}">−</button>
          <span class="stepper-val" id="qty-val-${p.id}">${qty}</span>
          <button type="button" class="stepper-btn" onclick="modifyProductQty('${p.id}', 1)" aria-label="Tambah ${p.name}">+</button>
        </div>
      </div>
    `;
  }).join('');
}

// Modify Product Quantity
function modifyProductQty(productId, delta) {
  soundFX.playPop();
  const existingIndex = orderState.cart.findIndex(item => item.id === productId);

  if (existingIndex > -1) {
    const newQty = orderState.cart[existingIndex].qty + delta;
    if (newQty <= 0) {
      orderState.cart.splice(existingIndex, 1);
    } else {
      orderState.cart[existingIndex].qty = newQty;
    }
  } else if (delta > 0) {
    const product = BAKERY_PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    orderState.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCartToStorage();
  updateOrderSummary();
  updateSingleProductCardUI(productId);
}

// Efficient single card UI update
function updateSingleProductCardUI(productId) {
  const card = document.getElementById(`prod-card-${productId}`);
  const qtyEl = document.getElementById(`qty-val-${productId}`);
  const inCart = orderState.cart.find(i => i.id === productId);
  const qty = inCart ? inCart.qty : 0;

  if (qtyEl) qtyEl.textContent = qty;
  if (card) {
    if (qty > 0) {
      card.classList.add('has-qty');
    } else {
      card.classList.remove('has-qty');
    }
  }
}

// Render & Update Live Order Summary Card
function updateOrderSummary() {
  const emptyStateEl = document.getElementById('summaryEmptyState');
  const itemsListEl = document.getElementById('summaryItemsList');
  const deliveryPillEl = document.getElementById('summaryDeliveryPill');
  const totalCountEl = document.getElementById('summaryTotalCount');
  const subtotalEl = document.getElementById('summarySubtotal');
  const totalEstimateEl = document.getElementById('summaryTotalEstimate');
  const headerCartBadge = document.getElementById('headerCartCount');
  const summaryHeaderBadge = document.getElementById('summaryHeaderBadge');

  const totalQty = orderState.cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = orderState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Update Header and Summary Badges
  if (headerCartBadge) headerCartBadge.textContent = `${totalQty} roti`;
  if (summaryHeaderBadge) summaryHeaderBadge.textContent = `${totalQty} item`;
  if (totalCountEl) totalCountEl.textContent = `${totalQty} item`;
  if (subtotalEl) subtotalEl.textContent = formatIDR(subtotal);
  if (totalEstimateEl) totalEstimateEl.textContent = formatIDR(subtotal);

  // Update Mobile Sticky Checkout Bar
  const mobileBar = document.getElementById('orderMobileBar');
  const mobileBarCount = document.getElementById('mobileBarCount');
  const mobileBarTotal = document.getElementById('mobileBarTotal');
  if (mobileBarCount) mobileBarCount.textContent = `${totalQty} Roti`;
  if (mobileBarTotal) mobileBarTotal.textContent = formatIDR(subtotal);
  if (mobileBar) {
    if (totalQty > 0) {
      mobileBar.classList.add('visible');
    } else {
      mobileBar.classList.remove('visible');
    }
  }

  // Delivery method indicator
  if (deliveryPillEl) {
    deliveryPillEl.innerHTML = `
      <span>Metode: <strong>${orderState.deliveryMethod}</strong></span>
    `;
  }

  // Handle Empty vs Filled State
  if (totalQty === 0) {
    if (emptyStateEl) emptyStateEl.style.display = 'flex';
    if (itemsListEl) {
      itemsListEl.style.display = 'none';
      itemsListEl.innerHTML = '';
    }
  } else {
    if (emptyStateEl) emptyStateEl.style.display = 'none';
    if (itemsListEl) {
      itemsListEl.style.display = 'flex';
      itemsListEl.innerHTML = orderState.cart.map(item => {
        if (item.isBox && item.breads && item.breads.length >= 2) {
          const b1 = item.breads[0];
          const b2 = item.breads[1];
          return `
            <div class="summary-item-row summary-item-box-row">
              <div class="summary-item-info">
                <div class="mini-box-thumbs">
                  <img src="${b1.thumb || b1.image}" alt="${b1.name}">
                  <img src="${b2.thumb || b2.image}" alt="${b2.name}">
                </div>
                <div class="summary-item-title-group">
                  <span class="summary-item-name">${item.isBox ? 'Bakery Box' : item.name}</span>
                  <span class="summary-box-sub">• 1x ${b1.name} (${formatIDR(b1.price)}) + 1x ${b2.name} (${formatIDR(b2.price)})</span>
                  <span class="summary-box-pkg ${item.hasSpecialPackaging ? 'special' : ''}">
                    ${item.hasSpecialPackaging ? 'Special Packaging (+Rp 2.000)' : 'Standard Packaging (Rp 0)'}
                  </span>
                  <span class="summary-item-calc">${item.qty} box @ ${formatIDR(item.price)}</span>
                </div>
              </div>
              <span class="summary-item-subtotal">${formatIDR(item.price * item.qty)}</span>
              <button type="button" class="summary-item-remove-btn" onclick="modifyProductQty('${item.id}', -${item.qty})" title="Hapus box dari pesanan" aria-label="Hapus ${item.name}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          `;
        }

        return `
          <div class="summary-item-row">
            <div class="summary-item-info">
              <img src="${item.image}" alt="${item.name}" class="summary-item-img">
              <div class="summary-item-title-group">
                <span class="summary-item-name">${item.name}</span>
                <span class="summary-item-calc">${item.qty}x @ ${formatIDR(item.price)}</span>
              </div>
            </div>
            <span class="summary-item-subtotal">${formatIDR(item.price * item.qty)}</span>
            <button type="button" class="summary-item-remove-btn" onclick="modifyProductQty('${item.id}', -${item.qty})" title="Hapus dari pesanan" aria-label="Hapus ${item.name}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        `;
      }).join('');
    }
  }
}

// Toast Notification
function showOrderToast(message, isError = false) {
  const container = document.getElementById('orderToastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `order-toast ${isError ? 'toast-error' : 'toast-success'}`;
  toast.innerHTML = `
    <span class="toast-check">${isError ? '!' : '✓'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'all 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px) scale(0.95)';
    setTimeout(() => toast.remove(), 320);
  }, 3200);
}

// ==========================================
// 5. VALIDATION & WHATSAPP SUBMISSION
// ==========================================
function validateAndSubmitOrder() {
  const nameInput = document.getElementById('custName');
  const phoneInput = document.getElementById('custPhone');
  const addrInput = document.getElementById('custAddress');
  const notesInput = document.getElementById('custNotes');

  const errorName = document.getElementById('errorName');
  const errorPhone = document.getElementById('errorPhone');
  const errorAddress = document.getElementById('errorAddress');

  // Reset errors
  [nameInput, phoneInput, addrInput].forEach(el => el && el.classList.remove('input-error'));
  [errorName, errorPhone, errorAddress].forEach(el => el && el.classList.remove('visible'));

  let isValid = true;
  let firstInvalidEl = null;

  // 1. Validate Name
  const name = (nameInput?.value || '').trim();
  if (!name) {
    isValid = false;
    if (nameInput) nameInput.classList.add('input-error');
    if (errorName) {
      errorName.textContent = 'Nama lengkap wajib diisi ya!';
      errorName.classList.add('visible');
    }
    if (!firstInvalidEl) firstInvalidEl = nameInput;
  }

  // 2. Validate WhatsApp Number
  const phone = (phoneInput?.value || '').trim();
  const phoneDigits = phone.replace(/\D/g, '');
  if (!phone || phoneDigits.length < 9) {
    isValid = false;
    if (phoneInput) phoneInput.classList.add('input-error');
    if (errorPhone) {
      errorPhone.textContent = 'Masukkan nomor WhatsApp aktif (minimal 9-10 digit)';
      errorPhone.classList.add('visible');
    }
    if (!firstInvalidEl) firstInvalidEl = phoneInput;
  }

  // 3. Validate Address
  const address = (addrInput?.value || '').trim();
  if (!address || address.length < 8) {
    isValid = false;
    if (addrInput) addrInput.classList.add('input-error');
    if (errorAddress) {
      errorAddress.textContent = 'Mohon masukkan alamat lengkap pengiriman (beserta patokan)';
      errorAddress.classList.add('visible');
    }
    if (!firstInvalidEl) firstInvalidEl = addrInput;
  }

  // 4. Validate Products in Cart
  const totalCount = orderState.cart.reduce((sum, item) => sum + item.qty, 0);
  if (totalCount === 0) {
    isValid = false;
    showOrderToast('Silakan pilih minimal 1 roti favoritmu pada menu di samping!', true);
    const prodSection = document.getElementById('sectionPilihRoti');
    if (prodSection && !firstInvalidEl) firstInvalidEl = prodSection;
  }

  if (!isValid) {
    if (firstInvalidEl) {
      firstInvalidEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (firstInvalidEl.focus) firstInvalidEl.focus();
    }
    soundFX.playPop();
    return;
  }

  // Save validated data to state & localStorage
  orderState.customer.name = name;
  orderState.customer.phone = phone;
  orderState.customer.address = address;
  orderState.customer.notes = (notesInput?.value || '').trim();
  saveCustomerData();

  // Calculate totals
  const subtotal = orderState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Compose WhatsApp Message
  const hasHampers = orderState.cart.some(item => item.id === 'bluezi-hampers' || item.isHamper || (item.id && item.id.startsWith('hamper-')));
  let message = `*PESANAN BARU — BLUEZ' BAKERY & STUDIO*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*DATA PEMESAN:*\n`;
  message += `• *Nama:* ${name}\n`;
  message += `• *No. WhatsApp:* ${phone}\n`;
  message += `• *Alamat Pengiriman:* ${address}\n`;
  message += `• *Metode Pengiriman:* ${orderState.deliveryMethod}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*DAFTAR ITEM YANG DIPESAN (${totalCount} item):*\n`;

  orderState.cart.forEach((item, index) => {
    if (item.isBox && item.breads && item.breads.length >= 2) {
      const b1 = item.breads[0];
      const b2 = item.breads[1];
      message += `\n*${item.name}* (Box #${index + 1})\n`;
      message += `  • 1x ${b1.name} — ${formatIDR(b1.price)}\n`;
      message += `  • 1x ${b2.name} — ${formatIDR(b2.price)}\n`;
      message += `  • Special Packaging — ${item.hasSpecialPackaging ? formatIDR(item.packagingFee || 2000) : 'Rp 0'}\n`;
      message += `  Total per box: ${formatIDR(item.price)}\n`;
      message += `  Jumlah box: ${item.qty}\n`;
      message += `  Total pesanan box: ${formatIDR(item.price * item.qty)}\n`;
    } else {
      message += `${index + 1}. ${item.name} (${item.qty}x @ ${formatIDR(item.price)}) = ${formatIDR(item.price * item.qty)}\n`;
    }
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*ESTIMASI SUBTOTAL: ${formatIDR(subtotal)}*\n`;
  if (hasHampers) {
    message += `*Catatan Hampers:* Paket hampers start from 30k (mohon info ketersediaan varian parcel / toples cookies)\n`;
  }
  if (orderState.customer.notes) {
    message += `*Catatan Khusus:* ${orderState.customer.notes}\n`;
  }
  message += `\nHalo min, saya mau pesan item di atas ya. Mohon konfirmasi ketersediaan stok fresh dan total biaya pengiriman ke alamat saya. Terima kasih!`;

  const encoded = encodeURIComponent(message);
  const waUrl = `https://api.whatsapp.com/send?phone=${BAKERY_WA_PHONE}&text=${encoded}`;

  soundFX.playSuccess();
  showOrderToast('Rincian pesanan telah siap! Mengalihkan ke WhatsApp...');

  // Open WhatsApp in new tab / app
  setTimeout(() => {
    window.open(waUrl, '_blank');
  }, 400);
}

// ==========================================
// 6. INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadSavedCart();
  loadSavedCustomerData();
  renderProductsList();
  updateOrderSummary();

  // Check URL category parameter (e.g. order.html?category=hampers)
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  if (catParam) {
    const targetPill = document.querySelector(`.order-filter-pill[data-filter="${catParam}"]`);
    if (targetPill) {
      document.querySelectorAll('.order-filter-pill').forEach(p => p.classList.remove('active'));
      targetPill.classList.add('active');
      orderState.selectedCategory = catParam;
      renderProductsList();
    }
  }

  // Category Filter Buttons (Delegated for 100% Reliability)
  document.addEventListener('click', (e) => {
    const pill = e.target.closest('.order-filter-pill');
    if (pill) {
      document.querySelectorAll('.order-filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      orderState.selectedCategory = pill.dataset.filter || 'all';
      renderProductsList();
      soundFX.playPop();
    }
  });

  // Delivery Method Selection Cards
  const deliveryCards = document.querySelectorAll('.delivery-card');
  deliveryCards.forEach(card => {
    card.addEventListener('click', () => {
      deliveryCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        orderState.deliveryMethod = radio.value;
        localStorage.setItem('bluezi_delivery_method', radio.value);
        updateOrderSummary();
        soundFX.playPop();
      }
    });
  });

  // Real-time input synchronization to state and localStorage
  const bindInput = (id, key) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', (e) => {
      orderState.customer[key] = e.target.value;
      localStorage.setItem(`bluezi_cust_${key}`, e.target.value);
      el.classList.remove('input-error');
      const errEl = document.getElementById(`error${key.charAt(0).toUpperCase() + key.slice(1)}`);
      if (errEl) errEl.classList.remove('visible');
    });
  };

  bindInput('custName', 'name');
  bindInput('custPhone', 'phone');
  bindInput('custAddress', 'address');
  bindInput('custNotes', 'notes');

  // WhatsApp Submit Button
  const submitBtn = document.getElementById('btnSubmitOrder');
  if (submitBtn) {
    submitBtn.addEventListener('click', validateAndSubmitOrder);
  }

  // Header Cart Scroll to Summary
  const headerCart = document.getElementById('orderHeaderCart');
  if (headerCart) {
    headerCart.addEventListener('click', () => {
      const summaryCard = document.querySelector('.order-summary-card');
      if (summaryCard) summaryCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
});

function scrollToOrderSummary() {
  const summaryCard = document.querySelector('.order-summary-card');
  if (summaryCard) {
    summaryCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Expose globals for onclick handlers
window.modifyProductQty = modifyProductQty;
window.validateAndSubmitOrder = validateAndSubmitOrder;
window.scrollToOrderSummary = scrollToOrderSummary;
window.slideOrderProductThumb = slideOrderProductThumb;
