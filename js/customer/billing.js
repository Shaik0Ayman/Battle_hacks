// DEMO DATA: Only use this to populate test data
if (!localStorage.getItem("cart")) {
    const sampleCart = [
      { name: "Milk", price: 30, quantity: 2 },
      { name: "Bread", price: 25, quantity: 1 },
      { name: "Eggs", price: 60, quantity: 1 }
    ];
    localStorage.setItem("cart", JSON.stringify(sampleCart));
  }
  
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  // Load cart items dynamically
  function loadCart() {
    const cartTable = document.getElementById("cart-table");
    cartTable.innerHTML = "";
    let subtotal = 0;
  
    if (cart.length === 0) {
      cartTable.innerHTML = `<tr><td colspan="5" class="text-center py-4 text-gray-500">Your cart is empty.</td></tr>`;
      document.getElementById("subtotal").textContent = "₹0";
      document.getElementById("tax").textContent = "₹0";
      document.getElementById("total").textContent = "₹0";
      return;
    }
  
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
  
    const tax = subtotal * 0.05;
    const total = subtotal + tax;
  
    document.getElementById("subtotal").textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById("tax").textContent = `₹${tax.toFixed(2)}`;
    document.getElementById("total").textContent = `₹${total.toFixed(2)}`;
  }
  
  // Update quantity
  function updateQuantity(index, quantity) {
    if (quantity < 1) {
      alert("Quantity must be at least 1.");
      return;
    }
    cart[index].quantity = parseInt(quantity);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }
  
  // Remove item from cart
  function removeItem(index) {
    if (confirm("Are you sure you want to remove this item?")) {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCart();
    }
  }
  
  // Proceed to checkout
  function checkout() {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    alert("Thank you for your purchase!");
    localStorage.removeItem("cart");
    cart.length = 0;
    loadCart();
  }
  
  // Initial load
  window.onload = loadCart;
  