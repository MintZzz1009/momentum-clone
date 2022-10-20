const API_KEY = "03dd8cc0b062ac32502f553898151c42";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => { 
  const cityName = document.querySelector("#weather span:first-child");
  const currentWeather = document.querySelector("#weather span:last-child")
  cityName.innerText = `지역: ${data.name}`;
  currentWeather.innerText =`날씨: ${data.weather[0].main} / 현재온도: ${data.main.temp}℃ (최고: ${data.main.temp_max}℃, 최저: ${data.main.temp_min}℃)`;
  
  console.log(weather[0].main);

  })
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);