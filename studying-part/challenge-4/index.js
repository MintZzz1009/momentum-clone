/*
크리스마스 이브 시간 계산
현재 시간 계산
두 시간 차 계산

함수 실행
interval 1초로 실행
*/
// 'December 17, 1995 03:24:00'
// 1995, 11, 17, 3, 24, 0

const date = new Date();
const christmasEve = new Date(2022, 11, 25, 0, 0, 0);
const afterTime = Number(christmasEve);

const jsClock = document.querySelector(".js-clock");

function handleRemainTime() {

  const nowTime = Date.now();
  const remainTime = afterTime - nowTime;

  const remainDays = String(Math.floor(remainTime / 1000 / 60 / 60 / 24)).padStart(2,"0");

  // 총 남은시간(밀리초)에서 day가 차지하는 부분 제외
  const throwDays = remainTime - (remainDays * 1000 * 60 * 60 * 24);
  const remainHours = String(Math.floor(throwDays / 1000 / 60 / 60)).padStart(2, "0");

  // 총 남은시간(밀리초)에서 days, hours가 차지하는 부분 제외
  const throwDaysHours = throwDays - (remainHours * 1000 * 60 * 60);
  const remainMinutes = String(Math.floor(throwDaysHours / 1000 / 60)).padStart(2, "0");

  // 총 남은시간(밀리초)에서 days, hours, minutes가 차지하는 부분 제외
  const throwDaysHoursMinutes = throwDaysHours - (remainMinutes * 1000 * 60);
  const remainSeconds = String(Math.floor(throwDaysHoursMinutes / 1000)).padStart(2, "0");

  jsClock.innerHTML = `${remainDays}d ${remainHours}h ${remainMinutes}m ${remainSeconds}s`
  
}

handleRemainTime();
setInterval(handleRemainTime, 1000);

