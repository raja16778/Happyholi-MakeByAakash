// Fireworks Effect
function showFireworks() {
    alert("🎆 Fireworks Start! 🎆");
    let audio = new Audio('fireworks.mp3');
    audio.loop = true; // 🔥 Fireworks sound loop karega
    audio.play();
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