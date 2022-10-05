const clock = document.querySelector("h2#clock");


/*
function sayHello() {
  console.log("Hello");
}
setInterval(sayHello, 5000);  // 매 5초마다 sayHello 함수 실행
setTimeout(sayHello, 5000);   // 실행하면 5초 지연 후 실행
*/

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

getClock();
setInterval(getClock, 1000);