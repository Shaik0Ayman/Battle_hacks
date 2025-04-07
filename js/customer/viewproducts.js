// Fetch and display products
document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products-container");

    // Mock API call to fetch products
    const fetchProducts = async () => {
        try {
            // Replace with your actual API endpoint
            const response = await fetch("https://api.example.com/products");
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching products:", error);
            return [];
        }
    };

    // Render products in the container
    const renderProducts = (products) => {
        productsContainer.innerHTML = ""; // Clear existing content
        if (products.length === 0) {
            productsContainer.innerHTML = "<p>No products available.</p>";
            return;
        }

        products.forEach((product) => {
            const productElement = document.createElement("div");
            productElement.className = "product";

            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <p>${product.description}</p>
            `;

            productsContainer.appendChild(productElement);
        });
    };

    // Initialize the view
    const initializeView = async () => {
        const products = await fetchProducts();
        renderProducts(products);
    };

    initializeView();
});