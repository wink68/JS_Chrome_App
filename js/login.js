const login = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-input");
const loginSubmit = document.querySelector(".login-submit");
const greeting = document.querySelector(".greeting");
const main = document.querySelector('main');

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(e) {
  e.preventDefault();

  const username = loginInput.value;
  login.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem("username", username);

  paintGreeting(username);
}

function paintGreeting(username) {
  login.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello!! ${username}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  main.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {  // localStorage에 유저명이 없을 때
  login.classList.remove(HIDDEN_CLASSNAME);
  main.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  loginSubmit.addEventListener("submit", onLoginSubmit);
} else {                       // localStorage에 유저명이 있을 때
  paintGreeting(savedUsername);
}