// script.js
const generateBtn = document.getElementById("generate-btn");
const textInput = document.getElementById("text-input");
const qrCodeImg = document.getElementById("qr-code");
const emptyAlert = document.getElementById("emptyAlert");

generateBtn.addEventListener("click", () => {
    const text = textInput.value.trim();
    if (text) {
        // Generate QR Code using GoQR.me API
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
            text
        )}&size=200x200`;
        qrCodeImg.style.display = "block";
        qrCodeImg.src = qrCodeUrl;
    } else {
        emptyAlert.style.display = "block";
    }
});
