const loginForm = document.getElementsByClassName("login-form")[0];
const loginFormInput = document.getElementsByClassName("login-form__input")[0];
const loginFormButton = document.getElementsByClassName("login-form__button")[0];


// const loginForm = document.getElementsByClassName("login-form");
// const loginFormInput = loginForm.querySelector(".login-form__input");
// const loginFormButton = loginForm.querySelector(".login-form__button");

// const loginFormInput = document.querySelector(".login-form__input");
// const loginFormButton = document.querySelector(".login-form__button");

function handleClickLoginFormButton () {
  console.log(loginFormInput.value);
}

loginFormButton.addEventListener("click", handleClickLoginFormButton);