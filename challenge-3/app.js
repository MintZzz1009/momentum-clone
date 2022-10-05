const inputMaxNum = document.querySelector(".max-number");
const maxNum = inputMaxNum.value;
const inputUserNum = document.querySelector(".user-pick")
const userNum = inputUserNum.value;

const guessForm = document.querySelector(".guess-form");
const resultNum = document.querySelector(".result-number");
const winOrlost = document.querySelector(".win-or-lost");
const FINAL_RESULT = winOrlost.innerHTML;

const DRAW = "draw";
const WIN = "win";
const LOST = "lost";


function handlePlay(event) {
  event.preventDefault();
  inputUserNum.max = maxNum;
  const machineNum = Math.ceil(Math.random() * maxNum);
  resultNum.innerHTML = `You chose: ${userNum}, the machine chose: ${machineNum}`;
  if (userNum === machineNum) {
    FINAL_RESULT = `You ${DRAW}!`;
  } else if (userNum < machineNum) {
    FINAL_RESULT = `You ${LOST}!`;
  } else {
    FINAL_RESULT = `You ${WIN}!`;
  }
}

guessForm.addEventListener("submit", handlePlay);