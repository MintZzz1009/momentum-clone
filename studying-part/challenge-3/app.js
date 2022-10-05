const inputMaxNum = document.querySelector(".max-number");
console.log("inputMaxNum = " + inputMaxNum);
console.log("typeof(inputMaxNum) = " + typeof(inputMaxNum));



const inputUserNum = document.querySelector(".user-pick")
console.log(inputUserNum);
console.log(typeof(inputUserNum));


const guessForm = document.querySelector(".guess-form");
console.log(guessForm);

const resultNum = document.querySelector(".result-number");
//resultNum.innerHTML = `You chose: ${userNum}, the machine chose: ${machineNum}`;

const winOrLost = document.querySelector(".win-or-lost");

/*
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
*/
function handlePlay(event) {
  event.preventDefault();

  const maxNum = parseInt(inputMaxNum.value);
  console.log("inputMaxNum.value = " + inputMaxNum.value);
  console.log("typeof(inputMaxNum.value) = " + typeof(inputMaxNum.value));
  console.log("maxNum = " + maxNum);
  console.log("typeof(maxNum) = " + typeof(maxNum));

  inputUserNum.max = maxNum;

  const userNum = parseInt(inputUserNum.value);
  console.log(userNum);
  console.log(typeof(userNum));

  const machineNum = Math.ceil(Math.random() * (maxNum + 1) - 1);
  resultNum.innerHTML = `You chose: ${userNum}, the machine chose: ${machineNum}`;

  const FINAL_RESULT = handleFinalResult(userNum, machineNum);

  winOrLost.innerHTML = `You ${FINAL_RESULT}!`;
}

function handleFinalResult(userNum, machineNum) {
  let FINAL_RESULT;
  if (userNum === machineNum) {
    FINAL_RESULT = "drew";
  } else if (userNum < machineNum) {
    FINAL_RESULT = "lost";
  } else {
    FINAL_RESULT = "won";
  }
  return FINAL_RESULT;
}

guessForm.addEventListener("submit", handlePlay);