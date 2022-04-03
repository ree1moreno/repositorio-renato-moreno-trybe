const cartItems = document.querySelector('.cart__items');

// cria um elemento de imagem
function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

// // pega o sku de um item específico e acessa o texto
// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

// salva os itens do carrinho no localStorage
function saveCartItems() {
  localStorage.setItem('savedItems', cartItems.innerHTML);
}

// acionada quando clicada num item do carrinho
function cartItemClickListener(event) {
  // coloque seu código aqui
  const itemTarget = event.target;
  cartItems.removeChild(itemTarget);
  saveCartItems();
}

// cria os itens do carrinho
function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// carrega os itens do carrinho do localStorage
const loadCartItems = () => {
  cartItems.innerHTML = localStorage.getItem('savedItems');
  const cartItemsSaved = document.getElementsByClassName('cart__item');
  [...cartItemsSaved].forEach((item) => item.addEventListener('click', cartItemClickListener));
};

// cria um elemento generico
function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

// remove os itens do carrinho
function removeCartItems() {
  const removeButton = document.getElementsByClassName('empty-cart')[0];
  removeButton.addEventListener('click', () => {
  cartItems.innerText = '';
  });
}

removeCartItems();

// cria os cards dos produtos
function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  
  return section;
}

// cria um elemento 'p' com o texto 'loading' no corpo do html
function createLoading() {
  document.body.appendChild(createCustomElement('p', 'loading', 'loading...'));
}

// remove o elemento do loading do corpo do html
function removeLoading() {
  const loadText = document.querySelector('.loading');
  document.body.removeChild(loadText);
}

// adiciona evento de click aos botoes 'adicionar ao carrinho' da lista
function addItemToCart() {
  const cartButton = document.querySelectorAll('.item__add');
  cartButton.forEach((button) => {
    button.addEventListener('click', (event) => {
      const itemID = event.target.parentNode.children[0].innerText;
      const itemData = fetch(`https://api.mercadolibre.com/items/${itemID}`);
      itemData
      .then((response) => response.json())
      .then((result) => cartItems.appendChild(createCartItemElement(result)))
      .then(() => saveCartItems());
    });
  });
}

// faz a requisição dos produtos ao api
async function fetchProducts() {
  createLoading();
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  const data = await fetch(url);
  const productObject = await data.json();
  const result = await productObject.results;
  // console.log(result);
  result.forEach((product) => {
    const items = document.getElementsByClassName('items')[0];
    items.appendChild(createProductItemElement(product));
  });
  removeLoading();
  addItemToCart();
}

window.onload = () => {
  fetchProducts();
  loadCartItems();
};
