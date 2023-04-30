const images = ["bg1.jpg", "bg2.jpg"];

const chosenImage = Math.floor(Math.random() * images.length);

// 이미지 태그 생성
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
document.body.style.backgroundImage = `url("img/${images[chosenImage]}")`;