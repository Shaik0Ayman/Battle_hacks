import QRCode from 'qrcode';

// Import the QRCode library

// Function to generate QR Code
function generateQRCode() {
    const inputText = document.getElementById('text-input').value;
    const qrCodeContainer = document.getElementById('qrcode-container');

    // Clear previous QR Code
    qrCodeContainer.innerHTML = '';

    if (inputText.trim() === '') {
        alert('Please enter text to generate QR Code.');
        return;
    }

    // Generate QR Code
    QRCode.toCanvas(inputText, { width: 200 }, (error, canvas) => {
        if (error) {
            console.error('Error generating QR Code:', error);
            alert('Failed to generate QR Code.');
            return;
        }
        qrCodeContainer.appendChild(canvas);
    });
}

// Attach event listener to the button
document.getElementById('generate-btn').addEventListener('click', generateQRCode);