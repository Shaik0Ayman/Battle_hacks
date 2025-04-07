// Initialize QR Scanner
const qrReader = new Html5Qrcode("qr-reader");
const scanHistory = JSON.parse(localStorage.getItem("scanHistory")) || [];

qrReader.start(
  { facingMode: "environment" },
  {
    fps: 10,
    qrbox: 250
  },
  (decodedText) => {
    displayProductInfo(decodedText);
  },
  (errorMessage) => {
    console.warn(errorMessage);
  }
);

// Process Manual Input
function processManualInput() {
  const manualInput = document.getElementById("manual-input").value.trim();
  if (manualInput) {
    displayProductInfo(manualInput);
  } else {
    alert("Please enter a valid QR code.");
  }
}

// Auto-Fill Simulation
function autoFillSimulation() {
  const simulatedQR = "12345"; // Example QR code for simulation
  displayProductInfo(simulatedQR);
}

// Display Product Info
function displayProductInfo(qrCode) {
  const productData = {
    "12345": {
      name: "Smartphone",
      price: "₹699",
      description: "A high-end smartphone with excellent features.",
      image: "https://via.placeholder.com/300",
      expiry: "2023-12-31"
    },
    "67890": {
      name: "Wireless Headphones",
      price: "₹199",
      description: "Noise-cancelling wireless headphones.",
      image: "https://via.placeholder.com/300",
      expiry: "2023-11-15"
    }
  };

  const product = productData[qrCode];
  if (product) {
    const isExpired = new Date(product.expiry) < new Date();
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-expiry").textContent = `Expiry: ${product.expiry}`;
    document.getElementById("product-status").textContent = isExpired ? "This product is expired!" : "";
    document.getElementById("product-status").classList.toggle("hidden", !isExpired);

    document.getElementById("product-info").classList.remove("hidden");
    document.getElementById("qr-result").classList.remove("hidden");
    document.getElementById("result-text").textContent = qrCode;

    addToScanHistory(product.name, qrCode);
  } else {
    alert("Product not found for the given QR code.");
  }
}

// Add to Scan History
function addToScanHistory(productName, qrCode) {
  scanHistory.push({ productName, qrCode, timestamp: new Date().toLocaleString() });
  localStorage.setItem("scanHistory", JSON.stringify(scanHistory));
  renderScanHistory();
}

// Render Scan History
function renderScanHistory() {
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = "";
  scanHistory.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.productName} (QR: ${item.qrCode}) - ${item.timestamp}`;
    historyList.appendChild(listItem);
  });
}

// Navigate to Product Page
function navigateToProductPage() {
  const productName = document.getElementById("product-name").textContent;
  alert(`Navigating to the product page for: ${productName}`);
  // Redirect logic can be added here
}

// Initial Render
renderScanHistory();
