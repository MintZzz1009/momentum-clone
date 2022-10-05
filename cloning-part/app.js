const loginForm = document.getElementsByClassName("login-form")[0];
const loginFormInput = document.getElementsByClassName("login-form__input")[0];
const loginFormButton = document.getElementsByClassName("login-form__button")[0];
const greeting = document.querySelector(".greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


// const loginForm = document.getElementsByClassName("login-form");
// const loginFormInput = loginForm.querySelector(".login-form__input");
// const loginFormButton = loginForm.querySelector(".login-form__button");

// const loginFormInput = document.querySelector(".login-form__input");
// const loginFormButton = document.querySelector(".login-form__button");

function handleClickLoginFormButton (event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginFormInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  /*
  if (username === "") {
    alert("please write your name.");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  } else {
  console.log("Hello!", loginFormInput.value);
  }
  */
  // console.log(greeting);
  // greeting.innerText = "Hello! " + username;
  paintGreetings(username);
  // greeting.innerText = `Hello! ${username}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  greeting.innerText = `Hello! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form 
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleClickLoginFormButton);
} else {
  // show the greetings
  paintGreetings(savedUsername); 
  // greeting.innerText = `Hello! ${savedUsername}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
}

/*
const link = document.querySelector("a");

function handleClickLink(event) {
  event.preventDefault();
  console.log(event);

}

loginFormButton.addEventListener("click", handleClickLoginFormButton);
link.addEventListener("click", handleClickLink);
*/