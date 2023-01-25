const button = document.getElementById("color-button");
const guitar = document.getElementById("guitar");
button.addEventListener("click", function () {
  const ra = Math.floor(Math.random() * 360);
  guitar.style.filter = `hue-rotate(${ra}deg)`;
});

function toggleMusic() {
  const audio = document.getElementById("bg-music");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
