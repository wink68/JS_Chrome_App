const leftBtn = document.querySelector("#left-btn");
const leftBar = document.querySelector(".left-con");
const rightBar = document.querySelector(".right-con");

function handleSideBar(e) {
    leftBar.classList.toggle("open-bar");
    rightBar.classList.toggle("open-bar");
}

leftBtn.addEventListener("click", handleSideBar);