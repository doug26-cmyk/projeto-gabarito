const products = [
  {
    id: 1,
    title: 'Super Mario World',
    category: 'consoles',
    emoji: '🍄',
    image: 'Super-Mario-World.jpg',
    price: 89.9,
    rating: 4.9,
    tag: 'SNES',
    description: 'Plataforma clássica com fases memoráveis, mundos ricos e mecânicas perfeitas para nostalgia.',
    tags: ['mario', 'plataforma', 'pixel', 'snes', 'casual']
  },
  {
    id: 2,
    title: 'The Legend of Zelda',
    category: 'consoles',
    emoji: '🗡️',
    image: 'The_Legend_of_Zelda_1_capa.png',
    price: 94.5,
    rating: 5.0,
    tag: 'NES',
    description: 'Exploração intensa, mistério e aventura em um dos maiores clássicos da história dos games.',
    tags: ['zelda', 'aventura', 'rpg', 'fantasia', 'exploração']
  },
  {
    id: 3,
    title: 'Sonic the Hedgehog',
    category: 'consoles',
    emoji: '💨',
    image: 'Sonic_the_Hedgehog_1_Genesis_box_art.jpg',
    price: 79.9,
    rating: 4.8,
    tag: 'Mega Drive',
    description: 'Velocidade extrema, trilha marcante e um clássico obrigatório para fãs do gênero.',
    tags: ['sonic', 'corrida', 'velocidade', 'mega drive', 'arcade']
  },
  {
    id: 4,
    title: 'Apex Legends',
    category: 'online',
    emoji: '🔫',
    image: 'Apex_legends_capa.jpg',
    price: 0,
    rating: 4.7,
    tag: 'Free to Play',
    description: 'FPS online estratégico com partidas rápidas, personagens únicos e alto nível competitivo.',
    tags: ['fps', 'online', 'multiplayer', 'tiro', 'competitivo']
  },
  {
    id: 5,
    title: 'League of Legends',
    category: 'online',
    emoji: '⚔️',
    image: 'lol.jpg',
    price: 0,
    rating: 4.9,
    tag: 'MOBA',
    description: 'Estratégia em equipe, campeões, objetivos e partidas intensas que exigem cooperação.',
    tags: ['moba', 'online', 'equipe', 'estratégia', 'competitivo']
  },
  {
    id: 6,
    title: 'Stardew Valley',
    category: 'online',
    emoji: '🌾',
    image: 'Logo_of_Stardew_Valley.png',
    price: 39.9,
    rating: 4.9,
    tag: 'Co-op',
    description: 'Cultive, socialize, pesque e construa uma fazenda em um jogo relaxante e cheio de charme.',
    tags: ['farm', 'simulação', 'cooperativo', 'paz', 'rpg']
  },
  {
    id: 7,
    title: 'Camisa Pixel Nerd',
    category: 'geek',
    emoji: '👕',
    image: 'camisa-pixel-art.jpeg',
    price: 49.9,
    rating: 4.8,
    tag: 'Coleção',
    description: 'Estilo retro, conforto e design com estética gamer para qualquer fã de cultura geek.',
    tags: ['roupa', 'camisa', 'geek', 'pixel', 'estilo']
  },
  {
    id: 8,
    title: 'Mini Console Retropad',
    category: 'geek',
    emoji: '🕹️',
    image: 'mini-console-retropad.jpeg',
    price: 129.9,
    rating: 4.7,
    tag: 'Acessório',
    description: 'Controle compacto para jogar clássicos com conforto e nostalgia em um design premium.',
    tags: ['acessório', 'controle', 'retro', 'console', 'arcade']
  },
  {
    id: 9,
    title: 'Luminária Arcade',
    category: 'geek',
    emoji: '💡',
    image: 'luminária-estilo-arcade.jpeg',
    price: 199.9,
    rating: 4.9,
    tag: 'Decoração',
    description: 'Iluminação com visual vintage para montar sua mesa gamer com personalidade e estilo.',
    tags: ['decoração', 'mesa', 'arcade', 'geek', 'retro']
  }
];

const cart = [];

const productsGrid = document.getElementById('productsGrid');
const cartItems = document.getElementById('cartItems');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartCount = document.getElementById('cartCount');
const cartPanel = document.getElementById('cartPanel');
const filterButtons = document.querySelectorAll('.filter-btn');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatWindow = document.getElementById('chatWindow');

let activeFilter = 'all';

function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

function renderProducts() {
  const visibleProducts = activeFilter === 'all'
    ? products
    : products.filter((product) => product.category === activeFilter);

  productsGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-visual" aria-label="${product.title}">
        ${product.image ? `<img src="${product.image}" alt="${product.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" /><span class="fallback-emoji" style="display:none;">${product.emoji}</span>` : product.emoji}
      </div>
      <div class="product-content">
        <div class="product-badges">
          <span class="product-tag">${product.tag}</span>
          <span class="product-rating">★ ${product.rating}</span>
        </div>

        <h3>${product.title}</h3>
        <p>${product.description}</p>

        <div class="product-footer">
          <span class="price">${product.price === 0 ? 'Gratuito' : formatCurrency(product.price)}</span>
          <button class="add-cart" type="button" data-add-to-cart="${product.id}">Adicionar</button>
        </div>
      </div>
    </article>
  `).join('');
}

function updateCart() {
  cartItems.innerHTML = '';

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Seu carrinho está vazio.</p>';
    cartSubtotal.textContent = formatCurrency(0);
    cartCount.textContent = '0';
    return;
  }

  const subtotal = cart.reduce((total, item) => total + item.price, 0);
  cartSubtotal.textContent = formatCurrency(subtotal);
  cartCount.textContent = String(cart.length);

  cartItems.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <h4>${item.title}</h4>
        <span>Qnt: ${item.quantity}</span>
      </div>
      <div class="cart-item-price">${formatCurrency(item.price * item.quantity)}</div>
    </div>
  `).join('');
}

function addToCart(productId) {
  const product = products.find((item) => item.id === Number(productId));
  if (!product) return;

  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
    existing.price = product.price * existing.quantity;
  } else {
    cart.push({ ...product, quantity: 1, price: product.price });
  }

  updateCart();
  cartPanel.classList.add('visible');
}

function filterProducts(filter) {
  activeFilter = filter;
  filterButtons.forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle('active', active);
  });
  renderProducts();
}

function addMessage(content, sender = 'bot') {
  const message = document.createElement('div');
  message.className = `message ${sender}`;
  message.textContent = content;
  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function detectGameFromPrompt(prompt) {
  const text = prompt.toLowerCase();

  const rules = [
    {
      keywords: ['mario', 'plataforma', 'pixel', 'snes', 'super mario', 'correr e pular'],
      product: products[0]
    },
    {
      keywords: ['zelda', 'fantasia', 'exploração', 'rpg', 'aventura'],
      product: products[1]
    },
    {
      keywords: ['sonic', 'corrida', 'velocidade', 'mega drive', 'arcade'],
      product: products[2]
    },
    {
      keywords: ['fps', 'tiro', 'matar', 'online', 'multiplayer', 'competitivo'],
      product: products[3]
    },
    {
      keywords: ['moba', 'equipe', 'estratégia', 'mapa', 'rpg online', 'clash'],
      product: products[4]
    },
    {
      keywords: ['fazenda', 'simulação', 'calmo', 'cooperativo', 'agrícola', 'paz'],
      product: products[5]
    },
    {
      keywords: ['camisa', 'roupa', 'geek', 'estilo', 'pixel', 'nerd'],
      product: products[6]
    },
    {
      keywords: ['controle', 'teclado', 'retro', 'acessório', 'console'],
      product: products[7]
    },
    {
      keywords: ['decoração', 'mesa', 'luminária', 'arcade', 'geek', 'retro'],
      product: products[8]
    }
  ];

  const rule = rules.find((entry) => entry.keywords.some((keyword) => text.includes(keyword)));
  return rule ? rule.product : null;
}

function handleChatSubmit(event) {
  event.preventDefault();
  const prompt = chatInput.value.trim();

  if (!prompt) {
    addMessage('Me diga pelo menos uma característica do jogo que você procura.', 'bot');
    return;
  }

  addMessage(prompt, 'user');
  chatInput.value = '';

  const suggestion = detectGameFromPrompt(prompt);

  if (suggestion) {
    const resultMessage = `Pelo que você descreveu, o mais provável é ${suggestion.title}. Ele combina com ${suggestion.tags.slice(0, 3).join(', ')} e pode ser perfeito para o seu perfil.\n\nPreço: ${suggestion.price === 0 ? 'Gratuito' : formatCurrency(suggestion.price)}`;
    addMessage(resultMessage, 'bot');
    addMessage(`Quer adicionar ${suggestion.title} ao carrinho?`, 'bot');

    const action = document.createElement('button');
    action.type = 'button';
    action.className = 'primary-button';
    action.textContent = `Adicionar ${suggestion.title}`;
    action.addEventListener('click', () => addToCart(suggestion.id));
    chatWindow.appendChild(action);
    return;
  }

  addMessage('Não encontrei um match exato, mas posso te sugerir por categoria: plataforma, corrida, RPG, FPS ou geek. Explique mais um detalhe e eu refinarei a busca.', 'bot');
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => filterProducts(button.dataset.filter));
});

productsGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-add-to-cart]');
  if (!button) return;
  addToCart(button.dataset.addToCart);
});

document.getElementById('cartToggle').addEventListener('click', () => {
  cartPanel.classList.toggle('visible');
});

document.getElementById('closeCart').addEventListener('click', () => {
  cartPanel.classList.remove('visible');
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Seu carrinho está vazio. Adicione pelo menos um item antes de finalizar a compra.');
    return;
  }

  alert('Compra finalizada com sucesso! Em breve, nosso atendimento responderá no WhatsApp para confirmar o pedido.');
  cart.length = 0;
  updateCart();
  cartPanel.classList.remove('visible');
});

chatForm.addEventListener('submit', handleChatSubmit);

renderProducts();
updateCart();
