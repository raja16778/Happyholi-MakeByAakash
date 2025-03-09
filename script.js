// Play Fireworks Sound
function showFireworks() {
    alert("🎆 Fireworks Start! 🎆");
    let fireworksAudio = new Audio('fireworks.mp3');
    fireworksAudio.loop = true; // 🔥 Fireworks sound loop karega
    fireworksAudio.play();
}

// Toggle Menu
function toggleMenu() {
    let menu = document.getElementById('dropdown');
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}