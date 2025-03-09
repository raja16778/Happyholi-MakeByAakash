let fireworkAudio = new Audio("firework-sound.mp3");
fireworkAudio.loop = true; 

function startFireworks() {
    alert("🔥 पटाखे फूट रहे हैं! होली मुबारक! 🎆");
    fireworkAudio.play();
}