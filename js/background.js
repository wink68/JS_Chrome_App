const images = ["0.jpeg", "1.webp", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 이미지 태그 생성
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);