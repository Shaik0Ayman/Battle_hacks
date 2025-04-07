// Select elements from the DOM
const productList = document.getElementById('product-list');
const cart = document.getElementById('cart');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
];

// Render products in the product list
function renderProducts() {
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (product) {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <h4>${product.name}</h4>
            <p>Price: $${product.price}</p>
        `;
        cart.appendChild(cartItem);
    }
}

// Event delegation for add-to-cart buttons
productList.addEventListener('click', event => {
    if (event.target.classList.contains('add-to-cart')) {
        const productId = event.target.getAttribute('data-id');
        addToCart(productId);
    }
});

// Initialize the app
renderProducts();