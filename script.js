// First Page Button
function goToHoliPage() {
    window.location.href = "holi.html";
}

// Play Fireworks Sound
function showFireworks() {
    alert("🎆🎇 पटाखे फूट रहे हैं! 🎇🎆");
    let audio = new Audio("fireworks.mp3");
    audio.play();
}

// Auto Play Holi Song
function playHoliSong() {
    document.getElementById("holiSong").play();
}

// Open WhatsApp
function openWhatsApp() {
    window.location.href = "https://wa.me/9569739986";
}