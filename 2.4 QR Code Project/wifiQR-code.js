import QRCode from 'qrcode';


// Define your WiFi credentials
const ssid = 'Telia-2CB1A9'; // Your WiFi name
const password = 'your password'; // Your WiFi password
const encryption = 'WPA'; // Can be 'WPA', 'WEP', or 'nopass' for no password

// Create the WiFi QR code string
const wifiString = `WIFI:T:${encryption};S:${ssid};P:${password};;`;

// Generate the QR code and save it as an image
QRCode.toFile('wifi_qr.png', wifiString, (err) => {
  if (err) throw err;
  console.log('WiFi QR code generated and saved as wifi_qr.png');
});