const loginForm = document.getElementsByClassName("login-form")[0];
const loginFormInput = document.getElementsByClassName("login-form__input")[0];
const loginFormButton = document.getElementsByClassName("login-form__button")[0];


// const loginForm = document.getElementsByClassName("login-form");
// const loginFormInput = loginForm.querySelector(".login-form__input");
// const loginFormButton = loginForm.querySelector(".login-form__button");

// const loginFormInput = document.querySelector(".login-form__input");
// const loginFormButton = document.querySelector(".login-form__button");

function handleClickLoginFormButton (event) {
  event.preventDefault();
  const username = loginFormInput.value;
  /*
  if (username === "") {
    alert("please write your name.");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  } else {
  console.log("Hello!", loginFormInput.value);
  }
  */
  loginForm.classList.add("hidden");  
  console.log(username);
  console.log(loginForm.classList);
}

const link = document.querySelector("a");

function handleClickLink(event) {
  event.preventDefault();
  console.log(event);

}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
//loginFormButton.addEventListener("click", handleClickLoginFormButton);
loginForm.addEventListener("submit", handleClickLoginFormButton);
link.addEventListener("click", handleClickLink);