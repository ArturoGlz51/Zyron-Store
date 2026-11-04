"use strict";

const IMG = "assets/";
const photos = [
  "photo-1672872476232-da16b45c9001.jpg",
  "photo-1600998837340-4887228e311f.jpg",
  "photo-1642345843526-6279c8880a49.jpg",
  "photo-1790619372499-9ba4e6f68e82.jpg",
  "photo-1593305841991-05c297ba4575.jpg",
  "photo-1603481588273-2f908a9a7a1b.jpg",
  "photo-1552820728-8b83bb6b773f.jpg",
  "photo-1586182987320-4f376d39d787.jpg",
  "photo-1701281941392-fd6c2d8d652b.jpg",
  "photo-1585620385456-4759f9b5c7d9.jpg",
];

const catalogSeed = [
  {
    id: 1,
    name: "GRAND THEFT AUTO VI",
    category: "Acción",
    platform: "PS5",
    price: 1799,
    oldPrice: 0,
    stock: 10,
    image:
      "https://cdn.mos.cms.futurecdn.net/v2/t%3A0%2Cl%3A420%2Ccw%3A1080%2Cch%3A1080%2Cq%3A80%2Cw%3A1080/NHhN5TgkBCkzZVSpvRZ3am.jpeg",
    description:
      "Explora el estado de Leonida y Vice City en la nueva entrega de Grand Theft Auto. Preventa simulada.",
    age: 18,
    players: 1,
    duration: 60,
    rating: 4.9,
  },
  {
    id: 2,
    name: "MARVEL'S SPIDER-MAN 2",
    category: "Acción",
    platform: "PS5",
    price: 1299,
    oldPrice: 1499,
    stock: 15,
    image:
      "https://www.pcrichard.com/dw/image/v2/BFXM_PRD/on/demandware.static/-/Sites-pcrichard-master-product-catalog/default/dw4b0aa084/images/hires/Z_711719567653.jpg?sh=800&sm=fit&sw=800",
    description:
      "Acompaña a Peter Parker y Miles Morales en una aventura contra nuevos enemigos.",
    age: 16,
    players: 1,
    duration: 20,
    rating: 4.9,
  },
  {
    id: 3,
    name: "GOD OF WAR RAGNARÖK",
    category: "Aventura",
    platform: "PS5",
    price: 999,
    oldPrice: 1299,
    stock: 12,
    image: "https://www.game.co.uk/images/imgzoom/39/39556569_xxl.jpg",
    description:
      "Kratos y Atreus enfrentan los desafíos del Ragnarök en los nueve reinos.",
    age: 18,
    players: 1,
    duration: 25,
    rating: 4.9,
  },
  {
    id: 4,
    name: "ASTRO BOT",
    category: "Plataformas",
    platform: "PS5",
    price: 1199,
    oldPrice: 0,
    stock: 20,
    image:
      "https://www.bigw.com.au/medias/sys_master/images/images/h88/hd5/61946200064030.jpg",
    description:
      "Acompaña a Astro en una aventura de plataformas por diferentes galaxias.",
    age: 7,
    players: 1,
    duration: 12,
    rating: 4.9,
  },
  {
    id: 5,
    name: "GRAN TURISMO 7",
    category: "Carreras",
    platform: "PS5",
    price: 899,
    oldPrice: 1199,
    stock: 16,
    image:
      "https://i5.walmartimages.ca/asr/6cc3e7e9-d167-42f4-acbf-877b19c37f55.c0c0db9bbf490b34b4ca1dd976781ec5.jpeg?odnBg=FFFFFF&odnHeight=2000&odnWidth=2000",
    description:
      "Disfruta la conducción con automóviles, circuitos y competencias.",
    age: 7,
    players: 2,
    duration: 30,
    rating: 4.8,
  },
  {
    id: 6,
    name: "ZELDA: TEARS OF THE KINGDOM",
    category: "Aventura",
    platform: "Nintendo Switch",
    price: 1199,
    oldPrice: 0,
    stock: 14,
    image:
      "https://i5.walmartimages.com/asr/fe745024-4a88-4e92-8c0d-5cdd1a1326b5.4186558cbf30cf7ddaae40302ac5ce46.jpeg",
    description:
      "Explora Hyrule con Link y descubre aventuras en sus cielos y profundidades.",
    age: 12,
    players: 1,
    duration: 60,
    rating: 4.9,
  },
  {
    id: 7,
    name: "MARIO KART WORLD",
    category: "Carreras",
    platform: "Nintendo Switch 2",
    price: 1599,
    oldPrice: 0,
    stock: 18,
    image:
      "https://alloswitch.ma/cdn/shop/files/Mario_Kart_World_Switch_2.webp?v=1758560068&width=3840",
    description:
      "Compite con Mario y sus amigos en carreras por un mundo conectado.",
    age: 7,
    players: 4,
    duration: 5,
    rating: 4.8,
  },
  {
    id: 8,
    name: "MINECRAFT",
    category: "Aventura",
    platform: "Nintendo Switch",
    price: 699,
    oldPrice: 899,
    stock: 25,
    image:
      "https://media.falabella.com/falabellaPE/124592528_01/w%3D1200%2Ch%3D1200%2Cfit%3Dpad",
    description:
      "Construye, explora y sobrevive en mundos creados con bloques.",
    age: 7,
    players: 4,
    duration: 50,
    rating: 4.8,
  },
  {
    id: 9,
    name: "PLAYSTATION 5 SLIM",
    category: "Consolas",
    platform: "PS5",
    price: 10999,
    oldPrice: 11999,
    stock: 8,
    image:
      "https://img-prd-pim.poorvika.com/product/Sony-playstation-5-slim-standard-d-chassi-white-Product-View.png",
    description: "Consola PlayStation 5 Slim con lector de discos.",
    age: 0,
    players: 1,
    duration: 0,
    rating: 4.9,
  },
  {
    id: 10,
    name: "XBOX SERIES X",
    category: "Consolas",
    platform: "Xbox Series",
    price: 11999,
    oldPrice: 0,
    stock: 6,
    image:
      "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202009/21/00194482000018____5__1200x1200.jpg",
    description:
      "Consola Xbox Series X de alto rendimiento con lector de discos.",
    age: 0,
    players: 1,
    duration: 0,
    rating: 4.9,
  },
  {
    id: 11,
    name: "NINTENDO SWITCH 2",
    category: "Consolas",
    platform: "Nintendo Switch 2",
    price: 11999,
    oldPrice: 0,
    stock: 10,
    image:
      "https://f.fcdn.app/imgs/75de89/www.zonatecno.com.uy/zoteuy/621e/original/catalogo/108083_108083_1/2000-2000/consola-nintendo-switch-2-consola-nintendo-switch-2.jpg",
    description:
      "Consola Nintendo Switch 2 con modos portátil, sobremesa y televisión.",
    age: 0,
    players: 1,
    duration: 0,
    rating: 4.9,
  },
  {
    id: 12,
    name: "DUALSENSE EDGE",
    category: "Accesorios",
    platform: "PS5",
    price: 4499,
    oldPrice: 0,
    stock: 12,
    image:
      "https://store.sony.com.sg/cdn/shop/products/CFI-ZCP1GDualsenseEdge_1200x.png?v=1754993838",
    description:
      "Control inalámbrico de alto rendimiento personalizable para PS5.",
    age: 0,
    players: 1,
    duration: 0,
    rating: 4.8,
  },
  {
    id: 13,
    name: "CONTROL INALÁMBRICO XBOX",
    category: "Accesorios",
    platform: "Xbox Series",
    price: 1399,
    oldPrice: 1699,
    stock: 20,
    image: "https://www.pbtech.com/imgprod/G/A/GAMMST2032__1.jpg",
    description:
      "Control inalámbrico Xbox en color negro con diseño ergonómico.",
    age: 0,
    players: 1,
    duration: 0,
    rating: 4.8,
  },
  {
    id: 14,
    name: "PULSE ELITE",
    category: "Accesorios",
    platform: "PS5",
    price: 2999,
    oldPrice: 0,
    stock: 15,
    image:
      "https://store.sony.co.nz/dw/image/v2/ABBC_PRD/on/demandware.static/-/Sites-sony-master-catalog/default/dwc903d3fe/images/PS5ELITEWIRELESSHS/PS5ELITEWIRELESSHS.png?sh=442&sm=fit&sw=442",
    description:
      "Auriculares inalámbricos PULSE Elite para jugar con audio detallado.",
    age: 0,
    players: 1,
    duration: 0,
    rating: 4.7,
  },
];

const seedProducts = catalogSeed;
const admin = {
  id: 1,
  name: "Administrador ZYRON",
  email: "admin@zyron.demo",
  password: "Admin123!",
  role: "admin",
  active: true,
  phone: "",
  address: "",
  city: "",
  postal: "",
};
const key = (name) => "zyron_vanilla_" + name;
function read(name, fallback) {
  try {
    let v = localStorage.getItem(key(name));
    return v === null ? fallback : JSON.parse(v);
  } catch {
    return fallback;
  }
}
function store(name, value) {
  localStorage.setItem(key(name), JSON.stringify(value));
}
const data = {
  products: read("products", seedProducts),
  cart: read("cart", {}),
  users: read("users", [admin]),
  orders: read("orders", []),
  session: read("session", null),
};
if (!data.users.some((u) => u.role === "admin")) data.users.unshift(admin);
const ui = {
  page: "home",
  selected: 1,
  category: "Todos",
  platform: "Todas",
  age: "Todas",
  players: "Todos",
  duration: "Todas",
  query: "",
  sort: "featured",
  accountTab: "orders",
  adminTab: "dashboard",
  editId: null,
  editingNew: false,
};
const money = (n) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);
const safe = (s) =>
  String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
const current = () =>
  data.users.find((u) => u.id === data.session && u.active) || null;
const product = (id) => data.products.find((p) => p.id === Number(id));
const count = () => Object.values(data.cart).reduce((n, q) => n + q, 0);
function save(...names) {
  names.forEach((n) => store(n, data[n]));
}
function go(page) {
  if ((page === "account" || page === "checkout") && !current()) {
    ui.page = "login";
    ui.returnTo = page;
  } else if (page === "admin" && current()?.role !== "admin") {
    ui.page = "login";
    ui.returnTo = "admin";
  } else {
    ui.page = page;
    ui.returnTo = null;
  }
  render();
  window.scrollTo(0, 0);
}
function btn(label, action, extra = "") {
  return `<button type="button" class="zy-btn ${extra}" data-action="${action}">${label}</button>`;
}
function header() {
  return `<div class="utility-bar">ENVÍO GRATIS EN COMPRAS MAYORES A $1,499 &nbsp; • &nbsp; HASTA 12 MSI (PROMOCIÓN DEMOSTRATIVA)</div>
  <header class="site-header"><div class="header-inner"><button class="brand" data-go="home"><img src="assets/zyron-logo.svg" alt="ZYRON"></button>
  <nav><button data-go="home">INICIO</button><button data-go="catalog">VIDEOJUEGOS</button><button data-category="Consolas">CONSOLAS</button><button data-category="Accesorios">ACCESORIOS</button><button class="sale-link" data-category="Ofertas">OFERTAS</button></nav>
  <div class="header-actions"><button aria-label="Buscar" data-go="catalog">⌕</button><button aria-label="Cuenta" data-go="${current() ? (current().role === "admin" ? "admin" : "account") : "login"}">♙</button><button class="cart-icon" aria-label="Carrito" data-go="cart">🛒<i>${count()}</i></button></div></div></header>`;
}
function footer() {
  return `<footer class="zy-footer"><div><img src="assets/zyron-logo.svg" alt="ZYRON"><p>Tu mundo. Tus reglas.<br>Tu próxima historia empieza aquí.</p></div><div><b>COMPRA</b><button data-go="catalog">Videojuegos</button><button data-category="Accesorios">Accesorios</button><button data-category="Ofertas">Ofertas</button></div><div><b>ATENCIÓN</b><p>Tienda académica de demostración</p><p>Sin pagos ni envíos reales</p></div><div><b>ZYRON+</b><p>Guarda tu perfil, compra y consulta tus pedidos.</p></div><small>© 2026 ZYRON · PROYECTO ACADÉMICO</small></footer>`;
}
function card(p) {
  const discount =
    p.oldPrice > p.price
      ? `<b class="discount">-${Math.round((1 - p.price / p.oldPrice) * 100)}%</b>`
      : "";
  return `<article class="game-card"><button class="game-cover" data-detail="${p.id}"><img src="${safe(p.image)}" alt="${safe(p.name)}"><span class="cover-shade"></span>${discount}${p.stock ? "" : '<b class="out">AGOTADO</b>'}<span class="cover-platform">${safe(p.platform)}</span><strong>${safe(p.name)}</strong></button><div class="game-info"><span>${safe(p.category)}</span><button data-detail="${p.id}"><h3>${safe(p.name)}</h3></button><div class="game-rating">★ ${p.rating ?? 4.5}</div><div class="game-buy"><div><b>${money(p.price)}</b>${p.oldPrice ? `<del>${money(p.oldPrice)}</del>` : ""}</div><button aria-label="Agregar al carrito" data-add="${p.id}" ${p.stock ? "" : "disabled"}>＋</button></div></div></article>`;
}
function home() {
  return `<main>${document.getElementById("home-banner").innerHTML}
 <section class="zy-platform"><span>COMPRA POR PLATAFORMA</span><div>${["PS5", "Xbox Series", "Nintendo Switch", "PC"].map((p) => `<button data-platform="${p}">${safe(p)}</button>`).join("")}</div></section>
 <section class="featured"><div class="section-title"><div><span>LO MÁS JUGADO</span><h2>TENDENCIAS AHORA</h2></div><button data-go="catalog">VER TODO →</button></div><div class="games-grid">${data.products.slice(0, 4).map(card).join("")}</div></section>
 <section class="zy-banner"><img src="assets/${photos[4]}" alt="Zona gaming"><div><span>ELEVA TU SETUP</span><h2>JUEGA SIN<br>LÍMITES.</h2><p>Equipo de alto rendimiento para cada partida.</p>${btn("VER ACCESORIOS", "accessories", "zy-action")}</div></section>
 <section class="featured"><div class="section-title"><div><span>SELECCIÓN ZYRON</span><h2>RECIÉN LLEGADOS</h2></div><button data-go="catalog">VER TODO →</button></div><div class="games-grid">${data.products.slice(4, 8).map(card).join("")}</div></section><section class="zy-club"><span>ZYRON+</span><h2>JUEGA MÁS. PAGA MENOS.</h2><p>Tu centro de juego empieza aquí.</p><button class="zy-action" data-go="${current() ? "account" : "login"}">CREAR CUENTA →</button></section></main>`;
}
function optionList(values, selected) {
  return values
    .map(
      (v) =>
        `<option value="${safe(v)}" ${String(v) === String(selected) ? "selected" : ""}>${safe(v)}</option>`,
    )
    .join("");
}
function catalog() {
  let filtered = data.products.filter(
    (p) =>
      p.name.toLowerCase().includes(ui.query.toLowerCase()) &&
      (ui.category === "Todos" ||
        (ui.category === "Ofertas" && p.oldPrice > p.price) ||
        (ui.category === "Consolas" && p.category === "Consolas") ||
        p.category === ui.category) &&
      (ui.platform === "Todas" || p.platform === ui.platform) &&
      (ui.age === "Todas" || p.age <= +ui.age) &&
      (ui.players === "Todos" || p.players >= +ui.players) &&
      (ui.duration === "Todas" || p.duration <= +ui.duration),
  );
  if (ui.sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (ui.sort === "high") filtered.sort((a, b) => b.price - a.price);
  return `<main class="dark-page"><div class="catalog-hero"><span>INICIO / CATÁLOGO</span><h1>ENCUENTRA TU<br><em>PRÓXIMO JUEGO</em></h1><p>Explora juegos, consolas y accesorios.</p></div><div class="catalog-search"><input id="search" aria-label="Buscar productos" placeholder="Buscar videojuegos, consolas o accesorios..." value="${safe(ui.query)}"><button data-action="search">BUSCAR</button></div><div class="catalog-layout"><aside class="filter-panel"><div class="filter-title"><b>FILTROS</b><button data-action="clear-filters">LIMPIAR</button></div>
 ${filterSelect("category", "CATEGORÍA", ["Todos", ...new Set(data.products.map((p) => p.category)), "Ofertas"])}
 ${filterSelect("platform", "PLATAFORMA", ["Todas", ...new Set(data.products.map((p) => p.platform))])}
 ${filterSelect("age", "EDAD RECOMENDADA", ["Todas", 7, 12, 16, 18])}
 ${filterSelect("players", "NÚMERO DE JUGADORES", ["Todos", 1, 2, 4])}
 ${filterSelect("duration", "DURACIÓN MÁXIMA EN HORAS", ["Todas", 5, 15, 30, 60])}
 </aside><section class="catalog-results"><div class="results-top"><span><b>${filtered.length}</b> PRODUCTOS</span><label>ORDENAR POR <select data-filter="sort">${optionList(["featured", "low", "high"], ui.sort)}</select></label></div><div class="games-grid catalog-grid">${filtered.map(card).join("")}</div>${filtered.length ? "" : '<p class="no-results">No encontramos productos para esos filtros.</p>'}</section></div></main>`;
}
function filterSelect(key, label, options) {
  return `<div class="filter-block"><h3>${label}</h3><select data-filter="${key}" aria-label="${label}">${optionList(options, ui[key])}</select></div>`;
}
function detail() {
  const p = product(ui.selected);
  if (!p) return catalog();
  return `<main class="zy-content"><button data-go="catalog">← VOLVER AL CATÁLOGO</button><div class="zy-detail"><div class="zy-detail-image"><img src="${safe(p.image)}" alt="${safe(p.name)}"></div><div><span class="eyebrow">${safe(p.platform)} · ${safe(p.category)}</span><h1>${safe(p.name)}</h1><p>${safe(p.description)}</p><div class="zy-facts"><span>Edad recomendada: <b>${p.age || "No aplica"}</b></span><span>Jugadores: <b>${p.players || "No aplica"}</b></span><span>Duración: <b>${p.duration ? p.duration + " h" : "No aplica"}</b></span></div><h2>${money(p.price)}</h2><p>${p.stock} unidades disponibles</p><label>CANTIDAD <input type="number" id="detail-qty" min="1" max="${p.stock}" value="1"></label><div style="margin-top:20px"><button class="zy-action" data-add-detail="${p.id}" ${p.stock ? "" : "disabled"}>AGREGAR AL CARRITO</button></div></div></div></main>`;
}
function add(id, qty = 1) {
  const p = product(id);
  if (!p) return;
  qty = Math.max(1, Math.floor(Number(qty) || 1));
  if ((data.cart[id] || 0) + qty > p.stock) {
    alert("No hay suficientes existencias de este producto.");
    return;
  }
  data.cart[id] = (data.cart[id] || 0) + qty;
  save("cart");
  render();
}
function changeQty(id, delta) {
  let qty = (data.cart[id] || 0) + delta;
  const p = product(id);
  if (!p) return;
  if (qty > p.stock) {
    alert("Se alcanzó el inventario disponible.");
    return;
  }
  if (qty <= 0) delete data.cart[id];
  else data.cart[id] = qty;
  save("cart");
  render();
}
function removeItem(id) {
  delete data.cart[id];
  save("cart");
  render();
}
function cartItems() {
  return data.products.filter((p) => data.cart[p.id] > 0);
}
function totals() {
  let subtotal = cartItems().reduce((s, p) => s + p.price * data.cart[p.id], 0);
  return {
    subtotal,
    shipping: subtotal >= 1499 || subtotal === 0 ? 0 : 99,
    total: subtotal + (subtotal >= 1499 || subtotal === 0 ? 0 : 99),
  };
}
function cart() {
  const items = cartItems(),
    t = totals();
  return `<main class="light-page"><div class="page-heading"><span>INICIO / CARRITO</span><h1>TU CARRITO</h1><p>${items.length} PRODUCTOS</p></div>${items.length ? `<div class="cart-layout"><section class="cart-list">${items.map((p) => `<article class="cart-row"><div class="cart-cover"><img src="${safe(p.image)}" alt="${safe(p.name)}"><b>${safe(p.name)}</b></div><div class="cart-name"><span>${safe(p.platform)} · ${safe(p.category)}</span><h3>${safe(p.name)}</h3><button data-remove="${p.id}">ELIMINAR</button></div><div class="qty"><button data-decrease="${p.id}">−</button><b>${data.cart[p.id]}</b><button data-increase="${p.id}">+</button></div><strong>${money(p.price * data.cart[p.id])}</strong></article>`).join("")}<button class="continue" data-go="catalog">← CONTINUAR COMPRANDO</button></section><aside class="summary"><h2>RESUMEN</h2><div><span>Subtotal</span><b>${money(t.subtotal)}</b></div><div><span>Envío</span><b>${t.shipping ? money(t.shipping) : "GRATIS"}</b></div><div class="summary-total"><span>TOTAL</span><b>${money(t.total)}</b></div><button class="zy-action" data-go="checkout">FINALIZAR COMPRA →</button><small>Pago simulado para fines académicos</small></aside></div>` : `<div class="empty-cart"><h2>TU CARRITO ESTÁ VACÍO</h2><p>Hay grandes historias esperando por ti.</p><button class="zy-action" data-go="catalog">EXPLORAR CATÁLOGO</button></div>`}</main>`;
}
function login() {
  return `<main class="auth-page"><section class="auth-image"><img src="assets/${photos[4]}" alt="Setup gaming"><div></div><article><span>ZYRON+</span><h1>TU PARTIDA.<br>TU HISTORIA.</h1><p>Accede a tus compras, perfil y beneficios.</p></article></section><section class="auth-form"><button class="auth-back" data-go="home">← VOLVER A LA TIENDA</button><div class="auth-box"><span>BIENVENIDO</span><h2>INICIA SESIÓN</h2><form id="login-form"><label>CORREO<input name="email" type="email" required autocomplete="username"></label><label>CONTRASEÑA<input name="password" type="password" required autocomplete="current-password"></label><button class="zy-action">ENTRAR →</button></form><div class="auth-switch">¿AÚN NO TIENES CUENTA? <button data-go="register">REGÍSTRATE AQUÍ</button></div><p style="font-size:12px">Administrador: admin@zyron.demo / Admin123!</p></div></section></main>`;
}
function register() {
  return `<main class="auth-page"><section class="auth-image"><img src="assets/${photos[4]}" alt="Setup gaming"><div></div><article><span>ZYRON+</span><h1>ÚNETE AL<br>ESCUADRÓN.</h1></article></section><section class="auth-form"><button class="auth-back" data-go="login">← VOLVER A INICIAR SESIÓN</button><div class="auth-box"><h2>CREA TU CUENTA</h2><form id="register-form"><label>NOMBRE COMPLETO<input name="name" required minlength="2"></label><label>CORREO ELECTRÓNICO<input name="email" type="email" required></label><label>CONTRASEÑA (MÍN. 6 CARACTERES)<input name="password" type="password" minlength="6" required></label><button class="zy-action">REGISTRARME →</button></form></div></section></main>`;
}
function sessionLogin(form) {
  const email = form.elements.namedItem("email").value.trim().toLowerCase(),
    password = form.elements.namedItem("password").value;
  const u = data.users.find(
    (u) => u.email === email && u.password === password && u.active,
  );
  if (!u) {
    alert("Credenciales incorrectas o usuario desactivado.");
    return;
  }
  data.session = u.id;
  save("session");
  go(
    u.role === "admin"
      ? "admin"
      : ui.returnTo === "checkout"
        ? "checkout"
        : "account",
  );
}
function registerUser(form) {
  const name = form.elements.namedItem("name").value.trim(),
    email = form.elements.namedItem("email").value.trim().toLowerCase(),
    password = form.elements.namedItem("password").value;
  if (name.length < 2 || password.length < 6) {
    alert("Revisa el nombre y la contraseña.");
    return;
  }
  if (data.users.some((u) => u.email === email)) {
    alert("Este correo ya está registrado.");
    return;
  }
  const u = {
    id: Date.now(),
    name,
    email,
    password,
    role: "customer",
    active: true,
    phone: "",
    address: "",
    city: "",
    postal: "",
  };
  data.users.push(u);
  data.session = u.id;
  save("users", "session");
  go(ui.returnTo === "checkout" ? "checkout" : "account");
}
function logout() {
  data.session = null;
  save("session");
  go("home");
}
function account() {
  const u = current();
  if (!u) return login();
  const mine = data.orders
    .filter((o) => o.userId === u.id)
    .slice()
    .reverse();
  return `<main class="account-page"><div class="account-header"><div><span>MI CUENTA</span><h1>HOLA, ${safe(u.name.toUpperCase())}.</h1><p>Bienvenido a tu centro de juego.</p></div><button data-action="logout">CERRAR SESIÓN</button></div><div class="account-layout"><aside><div class="account-avatar">${safe(u.name.slice(0, 2).toUpperCase())}</div><b>${safe(u.name)}</b><span>${safe(u.email)}</span><nav><button class="${ui.accountTab === "orders" ? "active" : ""}" data-account-tab="orders">MIS PEDIDOS</button><button class="${ui.accountTab === "profile" ? "active" : ""}" data-account-tab="profile">MI PERFIL</button></nav></aside><section class="account-content">${
    ui.accountTab === "orders"
      ? `<div class="account-title"><div><span>HISTORIAL</span><h2>MIS PEDIDOS</h2></div><b>${mine.length} PEDIDOS</b></div>${mine.length ? mine.map((o) => `<article class="order-card"><div class="order-meta"><span>PEDIDO <b>#${safe(o.id)}</b></span><span>FECHA <b>${new Date(o.date).toLocaleDateString("es-MX")}</b></span><span>TOTAL <b>${money(o.total)}</b></span><i>${safe(o.status)}</i></div><div style="padding:20px">${o.items.map((i) => `<p>${i.qty} × ${safe(i.name)} — ${money(i.price * i.qty)}</p>`).join("")}<small>${safe(o.address)}</small></div></article>`).join("") : "<p>Aún no tienes pedidos. ¡Empieza a comprar!</p>"}`
      : `<div class="account-title"><h2>MI PERFIL</h2></div><form id="profile-form" class="profile-form">${[
          ["name", "NOMBRE"],
          ["email", "CORREO"],
          ["phone", "TELÉFONO"],
          ["address", "DIRECCIÓN"],
          ["city", "CIUDAD"],
          ["postal", "CÓDIGO POSTAL"],
        ]
          .map(
            ([k, t]) =>
              `<label>${t}<input name="${k}" ${k === "name" || k === "email" ? "required" : ""} ${k === "email" ? 'type="email"' : ""} value="${safe(u[k])}"></label>`,
          )
          .join("")}<button class="zy-action">GUARDAR CAMBIOS</button></form>`
  }</section></div></main>`;
}
function saveProfile(form) {
  const u = current();
  if (!u) return;
  const email = form.elements.namedItem("email").value.trim().toLowerCase();
  if (data.users.some((v) => v.id !== u.id && v.email === email)) {
    alert("El correo ya está registrado.");
    return;
  }
  for (const k of ["name", "email", "phone", "address", "city", "postal"])
    u[k] = form.elements.namedItem(k).value.trim();
  u.email = email;
  save("users");
  alert("Perfil actualizado");
  render();
}
function checkout() {
  const u = current();
  if (!u) return login();
  if (!cartItems().length) return cart();
  const t = totals();
  return `<main class="checkout-page"><header><img width="145" src="assets/zyron-logo.svg" alt="ZYRON"><span>COMPRA SIMULADA · SIN PAGO REAL</span></header><div class="checkout-layout"><section class="checkout-form"><span>FINALIZAR COMPRA</span><h1>DATOS DE ENVÍO</h1><p>Esto es una simulación académica.</p><form id="checkout-form"><label>NOMBRE<input value="${safe(u.name)}" readonly></label><label>CORREO<input value="${safe(u.email)}" readonly></label><label>DIRECCIÓN<input name="address" value="${safe(u.address)}" required></label><label>CIUDAD<input name="city" value="${safe(u.city)}" required></label><label>CÓDIGO POSTAL<input name="postal" value="${safe(u.postal)}" required></label><button class="zy-action">CONFIRMAR PEDIDO →</button></form><button data-go="cart">← VOLVER AL CARRITO</button></section><aside class="checkout-summary"><h2>TU PEDIDO</h2>${cartItems()
    .map(
      (p) =>
        `<div class="checkout-item"><img src="${safe(p.image)}" alt=""><span><b>${safe(p.name)}</b><small>${data.cart[p.id]} × ${money(p.price)}</small></span></div>`,
    )
    .join(
      "",
    )}<div><span>Subtotal</span><b>${money(t.subtotal)}</b></div><div><span>Envío</span><b>${money(t.shipping)}</b></div><div class="checkout-total"><span>TOTAL</span><b>${money(t.total)}</b></div></aside></div></main>`;
}
function placeOrder(form) {
  const u = current();
  const items = cartItems();
  if (!u || !items.length) return;
  if (items.some((p) => data.cart[p.id] > p.stock)) {
    alert("Inventario insuficiente.");
    return;
  }
  const t = totals();
  const addressField = form.elements.namedItem("address"),
    cityField = form.elements.namedItem("city"),
    postalField = form.elements.namedItem("postal");
  const address = [
    addressField.value,
    cityField.value,
    "C.P. " + postalField.value,
  ].join(", ");
  const order = {
    id: "ZYR-" + Date.now(),
    userId: u.id,
    customer: u.name,
    date: new Date().toISOString(),
    items: items.map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      qty: data.cart[p.id],
    })),
    total: t.total,
    status: "PROCESANDO",
    address,
  };
  for (const p of items) p.stock -= data.cart[p.id];
  u.address = addressField.value;
  u.city = cityField.value;
  u.postal = postalField.value;
  data.orders.push(order);
  data.cart = {};
  save("products", "orders", "cart", "users");
  ui.accountTab = "orders";
  alert("¡Pedido " + order.id + " confirmado! (simulación)");
  go("account");
}
function adminPage() {
  const tabs = [
    ["dashboard", "Resumen"],
    ["products", "Productos"],
    ["orders", "Pedidos"],
    ["users", "Usuarios"],
  ];
  return `<main class="admin-page"><aside class="admin-sidebar"><h2 style="color:#b8ff00">ZYRON ADMIN</h2><nav>${tabs.map(([k, t]) => `<button class="${ui.adminTab === k ? "active" : ""}" data-admin-tab="${k}">${t}</button>`).join("")}</nav><button class="store-link" data-go="home">← VER TIENDA</button><button class="store-link" data-action="logout">CERRAR SESIÓN</button></aside><section class="admin-main"><header><div><span>PANEL ADMINISTRATIVO</span><h1>${tabs.find((t) => t[0] === ui.adminTab)[1].toUpperCase()}</h1></div></header>${adminContent()}</section></main>`;
}
function table(headers, rows) {
  return `<div class="zy-table-wrap"><table class="zy-table"><thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.join("")}</tbody></table></div>`;
}
function adminContent() {
  if (ui.adminTab === "dashboard")
    return `<div class="stats-grid"><div><span>VENTAS VIGENTES</span><b>${money(data.orders.filter((o) => o.status !== "CANCELADO").reduce((n, o) => n + o.total, 0))}</b></div><div><span>PEDIDOS</span><b>${data.orders.length}</b></div><div><span>PRODUCTOS</span><b>${data.products.length}</b></div><div><span>USUARIOS</span><b>${data.users.length}</b></div></div><section class="low-stock"><h2>STOCK BAJO</h2>${data.products
      .filter((p) => p.stock < 10)
      .map(
        (p) =>
          `<div><img src="${safe(p.image)}" alt=""><span><b>${safe(p.name)}</b></span><i>${p.stock} UDS.</i></div>`,
      )
      .join("")}</section>`;
  if (ui.adminTab === "products")
    return `<section class="admin-panel"><div class="panel-tools"><input id="admin-search" placeholder="Buscar producto..." aria-label="Buscar producto"><button class="zy-action" data-action="new-product">+ AGREGAR PRODUCTO</button></div>${table(
      ["PRODUCTO", "CATEGORÍA", "PRECIO", "INVENTARIO", "EDITAR"],
      data.products.map(
        (p) =>
          `<tr data-search-row="${safe(p.name.toLowerCase())}"><td>${safe(p.name)}</td><td>${safe(p.category)}</td><td>${money(p.price)}</td><td>${p.stock}</td><td><button data-edit-product="${p.id}">EDITAR</button></td></tr>`,
      ),
    )}</section>`;
  if (ui.adminTab === "orders")
    return `<section class="admin-panel"><input id="admin-search" placeholder="Buscar pedido o cliente..." aria-label="Buscar pedido">${table(
      ["PEDIDO", "CLIENTE Y DETALLES", "FECHA", "TOTAL", "ESTADO"],
      data.orders
        .slice()
        .reverse()
        .map(
          (o) =>
            `<tr data-search-row="${safe((o.id + " " + o.customer).toLowerCase())}"><td>${safe(o.id)}</td><td>${safe(o.customer)}<details><summary>VER DETALLE</summary>${o.items.map((i) => `<p>${i.qty} × ${safe(i.name)}</p>`).join("")}<small>${safe(o.address)}</small></details></td><td>${new Date(o.date).toLocaleString("es-MX")}</td><td>${money(o.total)}</td><td><select data-order-status="${safe(o.id)}">${["PROCESANDO", "EN CAMINO", "ENTREGADO", "CANCELADO"].map((s) => `<option ${s === o.status ? "selected" : ""}>${s}</option>`).join("")}</select></td></tr>`,
        ),
    )}</section>`;
  return `<section class="admin-panel"><input id="admin-search" placeholder="Buscar usuario..." aria-label="Buscar usuario">${table(
    ["NOMBRE", "CORREO", "ROL", "PEDIDOS", "ESTADO"],
    data.users.map(
      (u) =>
        `<tr data-search-row="${safe((u.name + " " + u.email).toLowerCase())}"><td>${safe(u.name)}</td><td>${safe(u.email)}</td><td>${safe(u.role)}</td><td>${data.orders.filter((o) => o.userId === u.id).length}</td><td>${u.role === "admin" ? "ADMIN" : `<button data-toggle-user="${u.id}">${u.active ? "DESACTIVAR" : "ACTIVAR"}</button>`}</td></tr>`,
    ),
  )}</section>`;
}
function productModal(p, isNew) {
  return `<div class="zy-modal"><form id="product-form" class="zy-modal-card"><h2>${isNew ? "AGREGAR" : "EDITAR"} PRODUCTO</h2><div class="zy-fields">${[
    ["name", "Nombre", "text"],
    ["category", "Categoría", "text"],
    ["platform", "Plataforma", "text"],
    ["price", "Precio", "number"],
    ["stock", "Existencias", "number"],
    ["oldPrice", "Precio anterior", "number"],
    ["image", "Ruta/URL de imagen", "text"],
    ["description", "Descripción", "text"],
    ["age", "Edad mínima", "number"],
    ["players", "Jugadores", "number"],
    ["duration", "Duración (horas)", "number"],
  ]
    .map(
      ([k, label, type]) =>
        `<label>${label}<input name="${k}" type="${type}" ${k === "name" || k === "price" || k === "stock" ? "required" : ""} ${type === "number" ? 'min="0" step="1"' : ""} value="${safe(p[k] ?? "")}"></label>`,
    )
    .join(
      "",
    )}</div><div class="zy-actions"><button type="button" data-action="close-modal">CANCELAR</button><button class="zy-action">GUARDAR PRODUCTO</button></div></form></div>`;
}
function saveProduct(form) {
  const f = Object.fromEntries(new FormData(form)),
    p = {
      ...f,
      id: ui.editingNew
        ? Math.max(0, ...data.products.map((p) => p.id)) + 1
        : ui.editId,
      rating: 4.7,
    };
  for (const k of ["price", "stock", "oldPrice", "age", "players", "duration"])
    p[k] = Number(p[k] || 0);
  if (
    !p.name.trim() ||
    !Number.isFinite(p.price) ||
    p.price < 0 ||
    p.stock < 0
  ) {
    alert("Verifica nombre, precio e inventario.");
    return;
  }
  if (ui.editingNew) data.products.push(p);
  else
    data.products = data.products.map((x) =>
      x.id === p.id ? { ...x, ...p } : x,
    );
  save("products");
  ui.editId = null;
  document.querySelector(".zy-modal")?.remove();
  render();
}
function changeStatus(id, next) {
  const o = data.orders.find((o) => o.id === id);
  if (!o || o.status === next) return;
  if (o.status !== "CANCELADO" && next === "CANCELADO")
    for (const i of o.items) {
      const p = product(i.id);
      if (p) p.stock += i.qty;
    }
  if (o.status === "CANCELADO" && next !== "CANCELADO") {
    if (o.items.some((i) => (product(i.id)?.stock ?? 0) < i.qty)) {
      alert("No puedes reactivar: inventario insuficiente.");
      render();
      return;
    }
    for (const i of o.items) {
      const p = product(i.id);
      if (p) p.stock -= i.qty;
    }
  }
  o.status = next;
  save("orders", "products");
  render();
}
function render() {
  const guarded =
    ui.page === "admin" && current()?.role !== "admin" ? "login" : ui.page;
  const pages = {
    home,
    catalog,
    detail,
    cart,
    login,
    register,
    account,
    checkout,
    admin: adminPage,
  };
  let html =
    (guarded === "admin" ? "" : header()) +
    (pages[guarded] || home)() +
    (guarded === "admin" ? "" : footer());
  document.getElementById("app").innerHTML = html;
}

/* Delegación: eventos unidos al contenedor, no a cada tarjeta renderizada. */
document.addEventListener("click", (e) => {
  const b = e.target.closest(
    "[data-go],[data-action],[data-detail],[data-add],[data-add-detail],[data-remove],[data-increase],[data-decrease],[data-category],[data-platform],[data-account-tab],[data-admin-tab],[data-edit-product],[data-toggle-user]",
  );
  if (!b) return;
  if (b.dataset.go) {
    go(b.dataset.go);
    return;
  }
  if (b.dataset.detail) {
    ui.selected = +b.dataset.detail;
    go("detail");
    return;
  }
  if (b.dataset.add) {
    add(+b.dataset.add);
    return;
  }
  if (b.dataset.addDetail) {
    add(+b.dataset.addDetail, document.getElementById("detail-qty")?.value);
    return;
  }
  if (b.dataset.remove) {
    removeItem(+b.dataset.remove);
    return;
  }
  if (b.dataset.increase) {
    changeQty(+b.dataset.increase, 1);
    return;
  }
  if (b.dataset.decrease) {
    changeQty(+b.dataset.decrease, -1);
    return;
  }
  if (b.dataset.category) {
    ui.category = b.dataset.category;
    go("catalog");
    return;
  }
  if (b.dataset.platform) {
    ui.platform = b.dataset.platform;
    go("catalog");
    return;
  }
  if (b.dataset.accountTab) {
    ui.accountTab = b.dataset.accountTab;
    render();
    return;
  }
  if (b.dataset.adminTab) {
    ui.adminTab = b.dataset.adminTab;
    render();
    return;
  }
  if (b.dataset.editProduct) {
    ui.editId = +b.dataset.editProduct;
    ui.editingNew = false;
    document.body.insertAdjacentHTML(
      "beforeend",
      productModal(product(ui.editId), false),
    );
    return;
  }
  if (b.dataset.toggleUser) {
    const u = data.users.find((u) => u.id === +b.dataset.toggleUser);
    if (u && u.role !== "admin") {
      u.active = !u.active;
      save("users");
      render();
    }
    return;
  }
  switch (b.dataset.action) {
    case "buy-featured":
      add(1);
      go("cart");
      break;
    case "detail-featured":
      ui.selected = 1;
      go("detail");
      break;
    case "accessories":
      ui.category = "Accesorios";
      go("catalog");
      break;
    case "clear-filters":
      Object.assign(ui, {
        category: "Todos",
        platform: "Todas",
        age: "Todas",
        players: "Todos",
        duration: "Todas",
        query: "",
        sort: "featured",
      });
      render();
      break;
    case "search":
      ui.query = document.getElementById("search").value.trim();
      render();
      break;
    case "logout":
      logout();
      break;
    case "new-product":
      ui.editId = null;
      ui.editingNew = true;
      document.body.insertAdjacentHTML(
        "beforeend",
        productModal(
          {
            name: "",
            category: "Acción",
            platform: "PC",
            price: 0,
            stock: 0,
            oldPrice: 0,
            image: IMG + photos[0],
            description: "",
            age: 12,
            players: 1,
            duration: 10,
          },
          true,
        ),
      );
      break;
    case "close-modal":
      document.querySelector(".zy-modal")?.remove();
      break;
  }
});
document.addEventListener("change", (e) => {
  const t = e.target;
  if (t.matches("[data-filter]")) {
    ui[t.dataset.filter] = t.value;
    render();
  }
  if (t.matches("[data-order-status]"))
    changeStatus(t.dataset.orderStatus, t.value);
});
document.addEventListener("input", (e) => {
  if (e.target.id === "admin-search") {
    const q = e.target.value.toLowerCase().trim();
    document
      .querySelectorAll("[data-search-row]")
      .forEach((row) => (row.hidden = !row.dataset.searchRow.includes(q)));
  }
});
document.addEventListener("submit", (e) => {
  const form = e.target;
  if (
    ![
      "login-form",
      "register-form",
      "profile-form",
      "checkout-form",
      "product-form",
    ].includes(form.id)
  )
    return;
  e.preventDefault();
  if (form.id === "login-form") sessionLogin(form);
  if (form.id === "register-form") registerUser(form);
  if (form.id === "profile-form") saveProfile(form);
  if (form.id === "checkout-form") placeOrder(form);
  if (form.id === "product-form") saveProduct(form);
});
render();
