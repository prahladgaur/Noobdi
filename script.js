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

  // Check if the current date and time matches the desired date and time
  const desiredDate = new Date("2024-10-21T23:50:00"); // Example: October 22, 2024, 15:30:00 (3:30 PM)
  if (
    now.getFullYear() === desiredDate.getFullYear() &&
    now.getMonth() === desiredDate.getMonth() &&
    now.getDate() === desiredDate.getDate() &&
    now.getHours() === desiredDate.getHours() &&
    now.getMinutes() === desiredDate.getMinutes() &&
    now.getSeconds() === desiredDate.getSeconds()
  ) {
    enableWatchButton(); // Call function to enable the button
  }
}

function enableWatchButton() {
    const watchButton = document.getElementById('watch-video-button');
    watchButton.disabled = false;
    watchButton.addEventListener('click', showVideo);
}

function showVideo() {
    // Create a new div element
    const videoContainer = document.createElement('div');
    videoContainer.id = 'video-container';
    videoContainer.style.position = 'fixed';
    videoContainer.style.top = '50%';
    videoContainer.style.left = '50%';
    videoContainer.style.transform = 'translate(-50%, -50%)';
    videoContainer.style.zIndex = '1000';
    videoContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    videoContainer.style.padding = '20px';
    videoContainer.style.borderRadius = '10px';

    // Create the video element
    const videoElement = document.createElement('video');
    videoElement.src = './images/video/video.mp4'; // Replace with your actual video file path
    videoElement.autoplay = true;
    videoElement.controls = true;
    videoElement.style.width = '600px'; // Adjust as needed
    videoElement.style.height = 'auto';

    // Create a close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px';
    closeButton.style.right = '5px';
    closeButton.style.backgroundColor = 'red';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '30px';
    closeButton.style.height = '30px';

    // Add click event to close the video popup
    closeButton.addEventListener('click', () => {
        document.body.removeChild(videoContainer);
    });

    // Append the video and close button to the container
    videoContainer.appendChild(videoElement);
    videoContainer.appendChild(closeButton);

    // Append the container to the body
    document.body.appendChild(videoContainer);
}

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
