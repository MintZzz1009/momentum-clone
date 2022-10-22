const clock = document.querySelector("h2#clock");


/*
function sayHello() {
  console.log("Hello");
}
setInterval(sayHello, 5000);  // 매 5초마다 sayHello 함수 실행
setTimeout(sayHello, 5000);   // 실행하면 5초 지연 후 실행
*/

// String.padStart(number, string) --> 
// String의 길이가 number보다 짧으면 시작부분에 string을 추가해서 
// 글자 수를 채운다.
// "Hello".padStart(10, "ab") --> 'ababaHello'


function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  //const seconds = String(date.getSeconds()).padStart(2, "0");
  if (hours < 12) {
    const meridiem = "am";
    clock.innerText = `${hours}:${minutes} ${meridiem}`;
  } else {
    const meridiem = "pm";
    clock.innerText = `${hours}:${minutes} ${meridiem}`;
  }
}

getClock();
setInterval(getClock, 1000);