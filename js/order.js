let cartItems = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cartItems.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    totalPrice = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = totalPrice;
}

function checkout() {
    alert(`Total Price: $${totalPrice}\nThank you for your purchase!`);
    cartItems = [];
    updateCart();
}
