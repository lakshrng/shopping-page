const products = [
    { id: 1, name: "Wireless Earbuds", price: 19.99, image: "https://th.bing.com/th/id/OIP.7A4VMnWmySnvsQYnp3zgJAHaHs?rs=1&pid=ImgDetMain" },
    { id: 2, name: "Iphone 15 Plus", price: 29.99, image: "https://th.bing.com/th/id/OIP.nwLz8briMMcINTOtT8SDHQAAAA?rs=1&pid=ImgDetMain" },
    { id: 3, name: "E.Irodov Physics", price: 39.99, image: "https://cdn01.sapnaonline.com/product_media/9788123926360/md_9788123926360_060720231042335.jpg" },
    { id: 4, name: "Lenovo A15 laptop", price: 49.99, image: "https://p1-ofp.static.pub//fes/cms/2025/02/17/gqqhsfks155sz2453m4nqpvq0s43nj237979.png" },
    { id: 5, name: "Samsung Smart watch", price: 59.99, image: "https://www.bhphotovideo.com/images/images2500x2500/apple_mj3t2ll_a_watch_sport_smartwatch_42mm_1187199.jpg" },
    { id: 6, name: "Skybag Backpack", price: 59.99, image: "https://th.bing.com/th/id/OIP.eEqeKNgqvh2nNQBHIJgmgAHaKJ?rs=1&pid=ImgDetMain" }


];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

const cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const dateAdded = new Date().toLocaleString(); 
        cart.push({ ...product, dateAdded });
        updateCart();
    }
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            ${item.name} - $${item.price} 
            <br>
            <span>(Added: ${item.dateAdded})</span>
            <button onclick="removeFromCart(${item.id})">Remove</button>
            <br>
            <br>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });
    totalPrice.textContent = total.toFixed(2);
}

displayProducts();
