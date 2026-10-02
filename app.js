// ===========================
// DATA — قائمة الأصناف
// ===========================
const menuItems = [
  // كبدة
  { id: 1,  name: 'كبدة فينو',              price: 17.5, img: 'kepda_fino.jpeg' },
  { id: 2,  name: 'كبدة شامي',              price: 20,   img: 'kepda_shamy.jpeg' },
  // سدق
  { id: 4,  name: 'سدق فينو',               price: 17.5, img: 'seduq_fino.jfif' },
  { id: 5,  name: 'سدق شامي',               price: 20,   img: 'photo.webp' },
  { id: 6,  name: 'سدق سوري',               price: 30,   img: 'seduq_sory.jpeg' },
  // شاورما
  { id: 7,  name: 'شاورما فينو',             price: 30,   img: 'shawerma_fino.jpeg' },
  { id: 9,  name: 'شاورما لحمة سوري',        price: 40,   img: 'IMG_8201_594_012510.jpg' },
  { id: 23, name: 'سندوتش شاورما فراخ',      price: 40,   img: 'shawerma_frakh.jpeg' },
  // كفتة بالسلطة
  { id: 10, name: 'كفتة بالسلطة فينو',      price: 20,   img: 'shamy.webp' },
  { id: 11, name: 'كفتة بالسلطة شامي',      price: 30,   img: 'kfino.webp' },
  { id: 12, name: 'كفتة بالسلطة سوري',      price: 30,   img: 'tortela.jpg' },
  // بانيه
  { id: 13, name: 'بانيه فينو',              price: 20,   img: 'nagets.jpeg' },
  // برجر — بوكس واحد بس
  { id: 16, name: 'برجر',                    price: 20,   img: 'burger1.jpeg' },
  { id: 47, name: 'برجر دوبل بالشيدر',       price: 40,   img: 'burger_double.jpeg' },
  // الشألباظ
  { id: 17, name: 'الشألباظ فينو',           price: 15,   img: 'shaqlpaz1.jpeg' },
  { id: 19, name: 'بطاطس سوري',              price: 20,   img: 'btates_sory.jpeg' },
  { id: 26, name: 'بطاطس موتزريلا سوري',    price: 30,   img: 'mudzrilla_batates1.jpeg' },
  // مكرونة
  { id: 28, name: 'مكرونة سادة',               price: 15,   img: 'Msada.jpeg' },
  { id: 29, name: 'مكرونة بطاطس',              price: 25,   img: 'mpotato.jpeg' },
  { id: 30, name: 'مكرونة بطاطس بالصوص',       price: 25,   img: 'msoce.jpeg' },
  { id: 31, name: 'مكرونة كبدة',               price: 35,   img: 'mkepda.jpeg' },
  { id: 32, name: 'مكرونة سدق',                price: 40,   img: 'mseduq.jpeg' },
  { id: 41, name: 'مكرونة بشاورما اللحمة',     price: 45,   img: 'mlahma.jpeg' },
  { id: 34, name: 'مكرونة بشاورما الفراخ',     price: 45,   img: 'mferakh.jpeg' },
  // إضافات ومقرمشات
  { id: 36, name: 'إضافة طحينة',               price: 10,   img: 'tehina1.jpeg' },
  { id: 37, name: 'كانز V7',                   price: 15,   img: 'cansV7.jpeg' },
  { id: 38, name: 'بيج شيبس بطعم الجبنة المتبلة', price: 10, img: 'chips_cheese.jpeg' },
  { id: 39, name: 'بيج شيبس بطعم الكباب',       price: 10,   img: 'chips_kapap.jpeg' },
  { id: 40, name: 'بيج شيبس بطعم الطماطم',      price: 10,   img: 'chips_tomato.jpeg' },
  // مشروبات
  { id: 43, name: 'بيبسي لتر ونص',              price: 40,   img: 'pepsi1.5.jpeg' },
  { id: 44, name: 'بيبسي 2 لتر ونص',            price: 45,   img: 'pepsi2.5.jpeg' },
  { id: 45, name: 'ازازة مياه 600 مللي',        price: 7,    img: 'water0.6.jpeg' },
  { id: 46, name: 'ازازة مياه 1.5 لتر',         price: 12,   img: 'water1.5.jpeg' },
  // وجبات
  { id: 21, name: 'وجبة فراخ',               price: 99,   available: false, img: 'wferak.jpeg',   desc: 'رز بسمتي + ربع فرخة مشوية + مخلل' },
  { id: 22, name: 'وجبة كفتة',               price: 99,   available: false, img: 'Screenshot 2026-09-14 191805.png', desc: 'رز بسمتي + 5 كفتة + مخلل' },
  { id: 25, name: '5 كفتة بالسلطة',          price: 50,   available: false, img: '5kofta.jpeg', desc: '5 كفتة + سلطة + علبة طحينة' },
  { id: 24, name: 'ربع فرخة',                price: 50,   available: false, img: 'rob3_farkha.jpeg' },
];

// qty per item (state)
const quantities = {};
menuItems.forEach(item => { quantities[item.id] = 1; });

// cart state
let cart = [];
let selectedCategory = 'all';

function getMenuCategory(item) {
  if (item.name.includes('برجر')) return 'burgers';
  if (item.name.startsWith('مكرونة')) return 'pasta';
  if (item.name.startsWith('بطاطس')) return 'potatoes';
  if (item.name.startsWith('إضافة') || item.name.includes('شيبس') || item.name.includes('V7') || item.name.includes('مياه')) return 'extras';
  if (item.name.startsWith('بيبسي')) return 'drinks';
  if (item.name.startsWith('وجبة') || item.name.startsWith('5 كفتة') || item.name.startsWith('ربع فرخة')) return 'meals';
  return 'sandwiches';
}

// ===========================
// RENDER MENU
// ===========================
function renderMenu() {
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = '';

  menuItems.forEach((item, index) => {
    const hasImg = item.img && item.img !== '';
    const card = document.createElement('div');
    card.className = `menu-card${item.available === false ? ' unavailable' : ''}`;
    card.dataset.category = getMenuCategory(item);
    card.style.animationDelay = `${index * 0.06}s`;
    card.innerHTML = `
      <div class="menu-card-img" ${hasImg ? `onclick="openLightbox('${item.img}','${item.name}')" style="cursor:zoom-in;"` : ''}>
        <span class="card-price-tag">${item.available === false ? 'غير متوفر حاليا' : `${formatPrice(item.price)} جنيه`}</span>
        ${hasImg
          ? `<img src="${item.img}" alt="${item.name}" style="display:block;" />
             <span class="zoom-hint"><i class="fa-solid fa-magnifying-glass-plus"></i> اضغط لعرض الأوردر</span>`
          : `<div class="img-placeholder">
               <i class="fa-solid fa-utensils"></i>
               <span>${item.name}</span>
             </div>`
        }
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        ${item.desc ? `<div class="menu-card-desc"><i class="fa-solid fa-circle-check"></i> ${item.desc}</div>` : ''}
        <div class="menu-card-price-label">${item.available === false ? 'غير متوفر حاليا' : `${formatPrice(item.price)} جنيه`}</div>
      </div>
      <div class="menu-card-footer">
        ${item.available === false
          ? '<span class="unavailable-label">غير متوفر حاليا</span>'
          : `<div class="qty-ctrl">
              <button onclick="changeQty(${item.id}, -1)">−</button>
              <span id="qty-${item.id}">1</span>
              <button onclick="changeQty(${item.id}, 1)">+</button>
            </div>
            <button class="add-btn" onclick="addToCart(${item.id})">
              <i class="fa-solid fa-plus"></i> أضف
            </button>`}
      </div>
    `;
    grid.appendChild(card);
  });

  // scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.menu-card').forEach(c => observer.observe(c));
}

function formatPrice(price) {
  return Number.isInteger(price) ? price : price.toFixed(1);
}

// ===========================
// QTY CONTROL
// ===========================
function changeQty(id, delta) {
  quantities[id] = Math.max(1, quantities[id] + delta);
  document.getElementById(`qty-${id}`).textContent = quantities[id];
}

// ===========================
// ADD TO CART
// ===========================
function addToCart(id) {
  const item = menuItems.find(i => i.id === id);
  if (!item || item.available === false) return;
  const qty = quantities[id];

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...item, qty });
  }

  // reset qty display
  quantities[id] = 1;
  document.getElementById(`qty-${id}`).textContent = 1;

  updateCartUI();

  // bump animation on cart button
  const btn = document.querySelector('.cart-btn');
  btn.classList.remove('bump');
  void btn.offsetWidth; // reflow
  btn.classList.add('bump');
}

// ===========================
// REMOVE FROM CART
// ===========================
function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
}

// ===========================
// UPDATE CART UI
// ===========================
function updateCartUI() {
  const itemsContainer = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  const countEl = document.getElementById('cartCount');
  const giftNotice = document.getElementById('giftNotice');
  const minimumOrderNotice = document.getElementById('minimumOrderNotice');
  const confirmButton = document.querySelector('.cart-footer .confirm-btn');

  const totalQty = cart.reduce((sum, c) => sum + c.qty, 0);
  const totalPrice = cart.reduce((sum, c) => sum + c.price * c.qty, 0);

  countEl.textContent = totalQty;
  // bounce animation on count
  countEl.classList.remove('bounce');
  void countEl.offsetWidth;
  if (totalQty > 0) countEl.classList.add('bounce');
  totalEl.textContent = formatPrice(totalPrice);

  // gift offer
  giftNotice.style.display = totalPrice >= 150 ? 'flex' : 'none';
  minimumOrderNotice.style.display = totalPrice >= 70 ? 'none' : 'block';
  minimumOrderNotice.textContent = `الحد الأدنى للتوصيل 70 جنيه، باقي ${formatPrice(70 - totalPrice)} جنيه`;
  confirmButton.disabled = totalPrice < 70;

  if (cart.length === 0) {
    itemsContainer.innerHTML = '<p class="empty-cart">السلة فاضية دلوقتي</p>';
    return;
  }

  itemsContainer.innerHTML = cart.map(c => `
    <div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-name">${c.name}</div>
        <div class="cart-item-sub">${c.qty} × ${formatPrice(c.price)} جنيه</div>
      </div>
      <div class="cart-item-price">${formatPrice(c.qty * c.price)} جنيه</div>
      <button class="remove-item" onclick="removeFromCart(${c.id})" title="إزالة">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');
}

// ===========================
// CART TOGGLE
// ===========================
function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('active');
  document.getElementById('cartOverlay').classList.add('active');
}

// ===========================
// ORDER POPUP
// ===========================
function openOrderPopup() {
  if (cart.length === 0) {
    alert('السلة فاضية! أضف أصناف الأول.');
    return;
  }
  const totalPrice = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  if (totalPrice < 70) {
    alert('الحد الأدنى لطلب التوصيل 70 جنيه.');
    return;
  }
  document.getElementById('popupOverlay').classList.add('active');
}

function closeOrderPopup() {
  document.getElementById('popupOverlay').classList.remove('active');
}

// ===========================
// SEND ORDER TO WHATSAPP
// ===========================
function sendOrder(e) {
  e.preventDefault();

  const name    = document.getElementById('clientName').value.trim();
  const phone   = document.getElementById('clientPhone').value.trim();
  const area    = document.getElementById('deliveryArea').value;
  const address = document.getElementById('clientAddress').value.trim();

  const totalPrice = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  if (totalPrice < 70) {
    alert('الحد الأدنى لطلب التوصيل 70 جنيه.');
    closeOrderPopup();
    return;
  }
  const hasGift    = totalPrice >= 150;

  // كل صنف في سطر منفصل: الاسم — الكمية × السعر = الإجمالي
  const orderLines = cart.map((c, i) =>
    `${i + 1}. ${c.name}\n` +
    `   الكمية: ${c.qty} × ${formatPrice(c.price)} جنيه = ${formatPrice(c.price * c.qty)} جنيه`
  ).join('\n');

  const giftLine = hasGift
    ? '\n🎁 *هدية مجانية:* كانز بيبسي\n'
    : '';

  const itemCount = cart.reduce((s, c) => s + c.qty, 0);

  const message =
    `🍽️ *طلب جديد — مطعم النزاهة*\n` +
    `━━━━━━━━━━━━━━━━━━\n` +
    `👤 *الاسم:* ${name}\n` +
    `📱 *الموبايل:* ${phone}\n` +
    `📍 *المنطقة:* ${area}\n` +
    `🏠 *العنوان:* ${address}\n` +
    `━━━━━━━━━━━━━━━━━━\n` +
    `🧾 *تفاصيل الطلب (${itemCount} صنف):*\n` +
    `${orderLines}\n` +
    `${giftLine}` +
    `━━━━━━━━━━━━━━━━━━\n` +
    `💰 *المجموع الكلي: ${formatPrice(totalPrice)} جنيه*`;

  const waURL = `https://wa.me/201040244975?text=${encodeURIComponent(message)}`;
  window.open(waURL, '_blank');

  // reset
  cart = [];
  updateCartUI();
  closeOrderPopup();
  document.getElementById('orderForm').reset();
  document.getElementById('cartSidebar').classList.remove('active');
  document.getElementById('cartOverlay').classList.remove('active');
}

// ===========================
// SEARCH — Fuzzy

// normalize Arabic: remove diacritics, normalize alef/ya/ha variants

function normalizeAr(str) {
  return str
    .replace(/[\u064B-\u065F]/g, '')   // tashkeel
    .replace(/[أإآا]/g, 'ا')
    .replace(/[ىئ]/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/\s+/g, ' ')
    .trim();
}

// simple fuzzy: checks if all chars of query appear in order inside target
function fuzzyMatch(target, query) {
  const t = normalizeAr(target);
  const q = normalizeAr(query);
  if (q === '') return true;
  if (t.includes(q)) return true;        // exact substring match first
  // char-by-char fuzzy
  let ti = 0;
  for (let qi = 0; qi < q.length; qi++) {
    while (ti < t.length && t[ti] !== q[qi]) ti++;
    if (ti >= t.length) return false;
    ti++;
  }
  return true;
}

// score: lower = better match (0 = exact)
function matchScore(target, query) {
  const t = normalizeAr(target);
  const q = normalizeAr(query);
  if (t === q) return 0;
  if (t.startsWith(q)) return 1;
  if (t.includes(q)) return 2;
  return 3; // fuzzy
}

function filterMenu(query) {
  const q = query.trim();
  const cards = Array.from(document.querySelectorAll('.menu-card'));
  const clearBtn  = document.getElementById('searchClear');
  const noResults = document.getElementById('noResults');
  const termEl    = document.getElementById('searchTerm');

  clearBtn.style.display = q ? 'flex' : 'none';

  const grid = document.getElementById('menuGrid');
  let found = 0;

  cards.forEach(card => {
    const name = card.querySelector('.menu-card-name').textContent;
    const categoryMatch = selectedCategory === 'all' || card.dataset.category === selectedCategory;
    const isMatch = categoryMatch && fuzzyMatch(name, q);
    card.style.display = isMatch ? '' : 'none';
    if (isMatch) {
      found++;
      // sort by score: move best matches to top
      const score = matchScore(name, q);
      card.dataset.score = score;
    }
  });

  // re-order cards by score when searching
  if (q) {
    const visible = cards.filter(c => c.style.display !== 'none');
    visible.sort((a, b) => (a.dataset.score || 3) - (b.dataset.score || 3));
    visible.forEach(c => grid.appendChild(c));
  }

  noResults.style.display = (q && found === 0) ? 'block' : 'none';
  if (q && found === 0) termEl.textContent = q;
}

function setMenuCategory(category) {
  selectedCategory = category;
  document.querySelectorAll('.menu-category-btn').forEach(button => {
    const isActive = button.dataset.category === category;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  filterMenu(document.getElementById('menuSearch').value);
}

function clearSearch() {
  const input = document.getElementById('menuSearch');
  input.value = '';
  input.focus();
  filterMenu('');
}

// ===========================
// LIGHTBOX
// ===========================
function openLightbox(src, caption) {
  const lb  = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  img.src = src;
  cap.textContent = caption;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.getElementById('lightboxImg').src = '';
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

// ===========================
// INIT
// ===========================
renderMenu();
updateCartUI();

// scroll reveal للريفيوز
const reviewObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.animationDelay = `${i * 0.1}s`;
      e.target.classList.add('visible');
      reviewObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.review-card').forEach(c => reviewObserver.observe(c));
