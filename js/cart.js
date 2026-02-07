// Sample Cart Items (You can replace this with dynamic data)
let cartItems = [
    { id: 1, name: "Product 1", price: 78, quantity: 1, image: "images/c1.png" },
    { id: 2, name: "Product 2", price: 67, quantity: 2, image: "images/c2.png" },
    { id: 3, name: "Product 3", price: 108, quantity: 1, image: "images/c3.png" },
    { id: 4, name: "Product 4", price: 110, quantity: 1, image: "images/c4.png" }
];

// Function to Load Cart Items
function loadCart() {
    let cartTable = document.getElementById("cart-items");
    let total = 0;
    cartTable.innerHTML = "";

    cartItems.forEach((item, index) => {
        let subtotal = item.price * item.quantity;
        total += subtotal;

        cartTable.innerHTML += `
            <tr>
                <td><img src="${item.image}" alt="${item.name}"></td>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></td>
                <td>$${subtotal.toFixed(2)}</td>
                <td><span class="remove-btn" onclick="removeItem(${index})">&times;</span></td>
            </tr>
        `;
    });

    document.getElementById("cart-total").innerText = `${total.toFixed(2)}`;
}

// Function to Update Quantity
function updateQuantity(index, quantity) {
    cartItems[index].quantity = parseInt(quantity);
    loadCart();
}

// Function to Remove Item from Cart
function removeItem(index) {
    cartItems.splice(index, 1);
    loadCart();
}

// Load Cart on Page Load
window.onload = loadCart;
