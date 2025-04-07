// Retrieve cart from localStorage or initialize an empty cart
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Load cart items dynamically
function loadCart() {
  const cartTable = document.getElementById("cart-table");
  cartTable.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item, index) => {
    const total = item.price * item.quantity;
    subtotal += total;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="border px-4 py-2">${item.name}</td>
      <td class="border px-4 py-2">₹${item.price}</td>
      <td class="border px-4 py-2">
        <input type="number" value="${item.quantity}" min="1" class="w-16 px-2 py-1 border rounded-lg" onchange="updateQuantity(${index}, this.value)">
      </td>
      <td class="border px-4 py-2">₹${total}</td>
      <td class="border px-4 py-2">
        <button class="text-red-600 hover:underline" onclick="removeItem(${index})">Remove</button>
      </td>
    `;
    cartTable.appendChild(row);
  });

  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;

  document.getElementById("subtotal").textContent = `₹${subtotal.toFixed(2)}`;
  document.getElementById("tax").textContent = `₹${tax.toFixed(2)}`;
  document.getElementById("total").textContent = `₹${total.toFixed(2)}`;
}

// Update quantity of an item in the cart
function updateQuantity(index, quantity) {
  if (quantity < 1) {
    alert("Quantity must be at least 1.");
    return;
  }
  cart[index].quantity = parseInt(quantity);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// Remove an item from the cart
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// Proceed to checkout
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  const confirmation = confirm("Are you sure you want to proceed to checkout?");
  if (confirmation) {
    alert("Thank you for your purchase!");
    localStorage.removeItem("cart");
    loadCart();
  }
}

// Initial load
document.addEventListener("DOMContentLoaded", loadCart);
