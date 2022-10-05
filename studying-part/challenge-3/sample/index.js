const mainBody = document.body;
const mainDiv = document.querySelector("#imain");
const head2 = document.querySelector("#imain#ih2");

const maxNoInput = document.querySelector("#imaxNo");
const guessNoInput = document.querySelector("#iguessNo");
const goButton = document.querySelector("#igoButton");

function displayResult(result, msg) {
  const resultOutput = document.querySelector("#imain h2");
  const mainOutpout = document.querySelector("#imain p");
  const footerOut = document.querySelector("#ifooter");

  resultOutput.innerText = result;
  mainOutpout.innerText = msg;
  footerOut.innerText = msg;
}
function mouseClick() {
  //document.body.style.backgroundColor = "tomato";
  const maxValue = parseInt(maxNoInput.value);
  const gueValue = parseInt(guessNoInput.value);
  const ranValue = 1 + Math.floor(Math.random() * parseInt(maxValue));
  let displayMsg = `Max = ${maxValue}, Guess = ${gueValue}, Random = ${ranValue}`;
  if (gueValue === ranValue) {
    displayResult("!!!Congraturation!!!", displayMsg);
  } else {
    displayResult("!No luck-try again!", displayMsg);
  }
}
goButton.addEventListener("click", mouseClick);
