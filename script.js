function showParagraph(paragraphNumber) {
  var paragraph1 = document.getElementById("paragraph1");
  var paragraph2 = document.getElementById("paragraph2");

  if (paragraphNumber === 1) {
    paragraph1.style.display = "block";
    paragraph1.classList.add("highlighted");
    paragraph2.style.display = "none";
    paragraph2.classList.remove("highlighted");
  } else if (paragraphNumber === 2) {
    paragraph2.style.display = "block";
    paragraph2.classList.add("highlighted");
    paragraph1.style.display = "none";
    paragraph1.classList.remove("highlighted");
  }
}

const memeSlider = document.querySelector(".meme-slider");

let isDown = false;
let startX;
let scrollLeft;

memeSlider.addEventListener("mousedown", (e) => {
  isDown = true;
  memeSlider.classList.add("active");
  startX = e.pageX - memeSlider.offsetLeft;
  scrollLeft = memeSlider.scrollLeft;
});

memeSlider.addEventListener("mouseleave", () => {
  isDown = false;
  memeSlider.classList.remove("active");
});

memeSlider.addEventListener("mouseup", () => {
  isDown = false;
  memeSlider.classList.remove("active");
});

memeSlider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - memeSlider.offsetLeft;
  const walk = (x - startX) * 2; // The 2 here is a factor to increase the scrolling speed
  memeSlider.scrollLeft = scrollLeft - walk;
});

function updateTime() {
  const currentTimeElement = document.getElementById("current-time");
  const now = new Date();

  // Format hours, minutes, and seconds
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Update the content of the h1 element
  currentTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

document.getElementById("notes-button").addEventListener("click", function() {
  const cardsContainer = document.getElementById("cards-container");
  
  // Toggle the display of the cards
  if (cardsContainer.style.display === "none") {
      cardsContainer.style.display = "flex";
  } else {
      cardsContainer.style.display = "none";
  }
});

// Function to show the carousel
function showCarousel() {
  const carousel = document.getElementById("carousel-container");
  carousel.classList.remove("hidden");
}

// Button to open the carousel
document.getElementById("notes-button").addEventListener('click', showCarousel);

// Close button for the carousel
document.getElementById("close-carousel").addEventListener('click', () => {
  const carousel = document.getElementById("carousel-container");
  carousel.classList.add("hidden");
});

// Function to handle hover music play and pause
const hoverMusicButton = document.getElementById("hover-music-button");
const hoverMusicAudio = document.getElementById("hover-music");

hoverMusicButton.addEventListener('mouseover', () => {
  hoverMusicAudio.play();
});

hoverMusicButton.addEventListener('mouseout', () => {
  hoverMusicAudio.pause();
  hoverMusicAudio.currentTime = 0; // Reset audio to the beginning
});

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately on page load
updateTime();

function playSound(id) {
  const sound = document.getElementById(id);
  sound.currentTime = 0; // Rewind to the start
  sound.play();
}

function pauseSound(id) {
  const sound = document.getElementById(id);
  sound.pause();
}
