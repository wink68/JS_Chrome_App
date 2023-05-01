const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const loginBorder = document.querySelector(".login-form");

function handleOne() {
    loginBorder.style.background = `linear-gradient(0deg,transparent,#E3493B,#E3493B)`;
}
function handleTwo() {
    loginBorder.style.background = `linear-gradient(0deg,transparent,#45f3ff,#45f3ff)`;
}
function handleThree() {
    loginBorder.style.background = `linear-gradient(0deg,transparent,#28B78D,#28B78D)`;
}
function handleFour() {
    loginBorder.style.background = `linear-gradient(0deg,transparent,#E8487F,#E8487F)`;
}
function handleFive() {
    loginBorder.style.background = `linear-gradient(0deg,transparent,#FF5B00,#FF5B00)`;
}
function handleSix() {
    loginBorder.style.background = `linear-gradient(0deg,transparent,#FEEB51,#FEEB51)`;
}

one.addEventListener("click", handleOne);
two.addEventListener("click", handleTwo);
three.addEventListener("click", handleThree);
four.addEventListener("click", handleFour);
five.addEventListener("click", handleFive);
six.addEventListener("click", handleSix);