
# 🛒 Cart Sentinel

A smart shopping cart system integrating **ESP32-CAM** for QR scanning, **Firebase** for backend services, and **Tailwind CSS** for responsive UI — built in 36 hours during the DAYZERO Hackathon.

---

## 📦 Features

- 📷 **ESP32-CAM QR Code Scanning**  
  Scans product QR codes using the onboard camera and sends data to Firebase.
  
- ☁️ **Firebase Realtime Database + Hosting**  
  - Product inventory management  
  - Cart data synchronization  
  - Checkout and billing
  
- 🖥️ **Tailwind CSS Web Interface**  
  Minimal, mobile-friendly cart management panel.

- 🎒 **Servo-Powered Smart Bag Dispenser**  
  Dispenses bags on command after checkout (optional hardware add-on).

---

## 🛠️ Hardware Components

- ESP32-CAM Module  
- Servo Motor (for bag dispenser)  
- USB to Serial Adapter (for ESP32-CAM flashing)  
- Power Source (5V battery bank)  
- Optional: OLED display for debugging, buzzer  

---

## 🧰 Software Stack

- **Frontend**: HTML, Tailwind CSS, JavaScript  
- **Backend**: Firebase (Realtime Database, Hosting)  
- **Firmware**: Arduino sketch (ESP32-CAM) using `ESP32QRCodeReader`, `WiFi`, and `HTTPClient`

---

## 🚀 Setup Instructions

### 1️⃣ ESP32-CAM Setup

#### Flash Firmware

1. Install [Arduino IDE](https://www.arduino.cc/en/software) and add the ESP32 board via Board Manager.
2. Connect ESP32-CAM using a USB-to-Serial adapter (connect IO0 to GND to enable programming mode).
3. Upload the firmware (`CartSentinel.ino` from `/firmware/`).
   - Replace placeholders with your WiFi credentials and Firebase Realtime DB URL.
4. After flashing, disconnect IO0 from GND and press the ESP32 reset button.

#### Required Libraries

Install via Arduino Library Manager:
- `ESP32QRCodeReader`
- `WiFi.h`
- `HTTPClient.h`
- `ArduinoJson.h`

---

### 2️⃣ Firebase Setup

1. Create a project in [Firebase Console](https://console.firebase.google.com/).
2. Enable **Realtime Database** in test mode.
3. Set your database rules (for development/testing):
   ```json
   {
     "rules": {
       ".read": true,
       ".write": true
     }
   }
   ```
4. Copy your **Realtime Database URL** for use in ESP32 firmware.

---

### 3️⃣ Web Dashboard Setup

1. Go to `/web` folder in this repository.
2. Open `index.html` or `app.js` and replace the Firebase config block:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     databaseURL: "https://YOUR_PROJECT.firebaseio.com",
     projectId: "YOUR_PROJECT",
     storageBucket: "YOUR_PROJECT.appspot.com",
     messagingSenderId: "SENDER_ID",
     appId: "APP_ID"
   };
   ```
3. Open `index.html` in a browser or deploy it using the instructions below.

---

### 4️⃣ Firebase Backend Deployment (Optional)

To host the backend logic (for example, billing or logs), use Firebase Functions:

```bash
npm install -g firebase-tools
firebase login
firebase init functions
```

- Use Node.js as the runtime.
- Write your backend logic inside `functions/index.js`.
- Deploy with:
```bash
firebase deploy --only functions
```

---

### 5️⃣ Frontend Deployment via GitHub Pages

1. Push your project to GitHub.
2. Go to **Settings > Pages** in your repo.
3. Under **Source**, choose the `/web` folder (or root) on the `main` branch.
4. Save and wait for GitHub Pages to deploy.
5. Your site will be hosted at `https://<username>.github.io/<repo-name>/`

---

### 6️⃣ Integration Steps

- ESP32-CAM scans QR and extracts product ID → sends POST request to Firebase Realtime DB.
- Web app reads updated cart info from Firebase and displays it in real-time.
- Checkout updates database and triggers servo to dispense bag.
- Cart resets automatically or on command after checkout or clear.

---





## 📈 Future Enhancements

- Self-recharging battery via wheel dynamos  
- GPS Theft Prevention Module  
- UPI/QR Billing integration  

---

## 🧠 Built By Team BattleHacks

- 👨‍💻 Shaik Ayman Hameed Baig — Full-stack + Firebase  
- 🎨 Anushka Gope — UI/UX  
- 🧠 Ashwin S — Strategy and Pitch  
- 🔌 Mohamed Abdullah — Circuit Design and Hardware
