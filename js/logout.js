const logOutBtn = document.querySelector("#logOut");

function handleHome() {
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("toDos");
    location.reload();
}

logOutBtn.addEventListener("click", handleHome);