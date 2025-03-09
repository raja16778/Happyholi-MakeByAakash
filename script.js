function goToHoliPage() {
    window.location.href = "holi-page.html";
}

function showFireworks() {
    alert("🎆🎇 पटाखे फूट रहे हैं! 🎇🎆");
    let audio = new Audio("fireworks.mp3");
    audio.play();
}

function playHoliSong() {
    document.getElementById("holiSong").play();
}

function openWhatsApp() {
    window.location.href = "https://wa.me/9569739986";
}