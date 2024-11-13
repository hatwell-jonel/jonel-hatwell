const cartItemsContainer = document.getElementById('cartItems');
const totalDisplay = document.getElementById('total');
let cart = [];


function updateCart() {
    
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.className = 'cart-item';

        const itemName = document.createElement('span');
        itemName.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        const itemQuantity = document.createElement('input');
        itemQuantity.type = 'number';
        itemQuantity.min = 1;
        itemQuantity.value = item.quantity;
        itemQuantity.onchange = () => updateQuantity(item.name, parseInt(itemQuantity.value));

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeItemFromCart(item.name);

        cartItem.appendChild(itemName);
        cartItem.appendChild(itemQuantity);
        cartItem.appendChild(removeButton);

        cartItemsContainer.appendChild(cartItem);
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}


function addItemToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function updateQuantity(name, quantity) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
            removeItemFromCart(name);
        }
        updateCart();
    }
}

function removeItemFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}



