const chosenImage = Math.round(Math.random() * 4);
const redBtn = document.querySelector("#bgBtnOne");
const yellowBtn = document.querySelector("#bgBtnTwo");
const greenBtn = document.querySelector("#bgBtnThree");
const blueBtn = document.querySelector("#bgBtnFour");
const blackBtn = document.querySelector("#bgBtnFive");

function handleRedBg() {
    document.body.style.backgroundImage = `url("img/bg0.png")`;
}
function handleYellowBg() {
    document.body.style.backgroundImage = `url("img/bg1.png")`;
}
function handleGreenBg() {
    document.body.style.backgroundImage = `url("img/bg2.png")`;
}
function handleBlueBg() {
    document.body.style.backgroundImage = `url("img/bg3.png")`;
}
function handleBlackBg() {
    document.body.style.backgroundImage = `url("img/bg4.png")`;
}

redBtn.addEventListener("click", handleRedBg);
yellowBtn.addEventListener("click", handleYellowBg);
greenBtn.addEventListener("click", handleGreenBg);
blueBtn.addEventListener("click", handleBlueBg);
blackBtn.addEventListener("click", handleBlackBg);
document.body.style.backgroundImage = `url("img/bg${chosenImage}.png")`;