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
    shortDesc: 'Kulit choux pastry renyah lembut berpadu vla susu manis dingin dan potongan strawberry segar.',
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
    shortDesc: 'Choux pastry istimewa dengan isian custard mangga tropis lembut dan topping buah mangga manis.',
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
    name: 'Double Choco Bread',
    category: 'sweet',
    categoryLabel: 'Sweet Cream',
    price: 5000,
    priceFormatted: 'Rp 5.000',
    shortDesc: 'Roti gulung brioche cokelat lembut (twisted swirl) dengan lelehan pasta cokelat pekat di tengah.',
    image: 'public/images/products/enhanced/double-choco.png?v=photoreal_v5'
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
  deliveryMethod: 'Kurir Instan (GoSend / GrabExpress)',
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
    if (p.category === 'sourdough') badgeClass = 'badge-sourdough';

    return `
      <div class="order-product-card ${hasQty ? 'has-qty' : ''}" id="prod-card-${p.id}">
        <div class="order-product-left">
          <div class="order-product-thumb-box">
            <img src="${p.image}" alt="${p.name}" class="order-product-thumb" loading="lazy">
          </div>
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
  const product = BAKERY_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = orderState.cart.findIndex(item => item.id === productId);

  if (existingIndex > -1) {
    const newQty = orderState.cart[existingIndex].qty + delta;
    if (newQty <= 0) {
      orderState.cart.splice(existingIndex, 1);
    } else {
      orderState.cart[existingIndex].qty = newQty;
    }
  } else if (delta > 0) {
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

  // Delivery method indicator
  if (deliveryPillEl) {
    let icon = '🛵';
    if (orderState.deliveryMethod.includes('Sameday')) icon = '📦';
    if (orderState.deliveryMethod.includes('Ambil')) icon = '🏪';
    deliveryPillEl.innerHTML = `
      <span>${icon}</span>
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
      itemsListEl.innerHTML = orderState.cart.map(item => `
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
      `).join('');
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
    <span>${isError ? '⚠️' : '🍞'}</span>
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

  // Compose Beautiful WhatsApp Message
  let message = `🍞 *PESANAN BARU — BLUEZ' BAKERY* 🍞\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 *DATA PEMESAN:*\n`;
  message += `• *Nama:* ${name}\n`;
  message += `• *No. WhatsApp:* ${phone}\n`;
  message += `• *Alamat Pengiriman:* ${address}\n`;
  message += `• *Metode Pengiriman:* ${orderState.deliveryMethod}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📦 *DAFTAR ROTI YANG DIPESAN (${totalCount} item):*\n`;

  orderState.cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} (${item.qty}x @ ${formatIDR(item.price)}) = ${formatIDR(item.price * item.qty)}\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *ESTIMASI SUBTOTAL ROTI: ${formatIDR(subtotal)}*\n`;
  if (orderState.customer.notes) {
    message += `📝 *Catatan Khusus:* ${orderState.customer.notes}\n`;
  }
  message += `\nHalo min, saya mau pesan roti-roti di atas ya. Mohon konfirmasi ketersediaan stok fresh dan total biaya pengiriman ke alamat saya. Terima kasih! ✨`;

  const encoded = encodeURIComponent(message);
  const waUrl = `https://api.whatsapp.com/send?phone=${BAKERY_WA_PHONE}&text=${encoded}`;

  soundFX.playSuccess();
  showOrderToast('Rincian pesanan telah siap! Mengalihkan ke WhatsApp... 💬');

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

  // Category Filter Buttons
  const filterPills = document.querySelectorAll('.order-filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      orderState.selectedCategory = pill.dataset.filter || 'all';
      renderProductsList();
      soundFX.playPop();
    });
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

// Expose globals for onclick handlers
window.modifyProductQty = modifyProductQty;
window.validateAndSubmitOrder = validateAndSubmitOrder;
