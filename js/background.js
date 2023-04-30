const images = ["img/0.jpeg", "img/1.webp", "img/2.jpeg", "img/3.jpeg", "img/4.jpeg", "img/5.jpg"];

const chosenImage = Math.floor(Math.random() * images.length);

// 이미지 태그 생성
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
document.body.style.backgroundImage = `url("${images[chosenImage]}")`;