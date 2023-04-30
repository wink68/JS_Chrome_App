const homeBtn = document.querySelector("#home");

function handleHome() {
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("toDos");
    location.reload();
}

homeBtn.addEventListener("click", handleHome);