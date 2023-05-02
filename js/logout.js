const logOutBtn = document.querySelector("#logOut");

function handleHome() {
    alert("To Do List가 리셋됩니다");
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("toDos");
    location.reload();
}

logOutBtn.addEventListener("click", handleHome);