const images = [
  "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"
]

const body = document.querySelector("body");
const todayImage = images[Math.floor(Math.random() * images.length)];
const IMG_PATH = `img/${todayImage}`;
body.style.backgroundImage = `url(${IMG_PATH})`;

//document.body.appendChild(backgroundImage);