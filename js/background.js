const images = ["bg1.jpg", "bg2.jpg"];
const chosenImage = Math.floor(Math.random() * images.length);

document.body.style.backgroundImage = `url("img/${images[chosenImage]}")`;