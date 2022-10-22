const API_KEY = "03dd8cc0b062ac32502f553898151c42";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;  
  fetch(url)
  .then(response => response.json())
  .then(data => { 
  const cityName = document.querySelector("#weather span:nth-child(2)");
  const currentWeather = document.querySelector("#weather span:nth-child(3)");
  const currentTemp = document.querySelector("#weather span:nth-child(4)");
  const listItemTemp = document.querySelectorAll("#temp-list li");

  cityName.innerText = `지역: ${data.name}`;
  currentWeather.innerText =`날씨: ${data.weather[0].main}`;
  currentTemp.innerText = `현재: ${data.main.temp}°`;
  listItemTemp[0].innerText = `최고: ${data.main.temp_max}°`; 
  listItemTemp[1].innerText = `최저: ${data.main.temp_min}°`;
  })
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

function handleTempList() {
  const listTemp = document.querySelector("#temp-list");
  if (listTemp.classList.toggle("hidden")) {
    tempListButton.innerText = "🔽";  
  } else {
  tempListButton.innerText = "🔼";
  }
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);

const tempListButton = document.querySelector("#weather > button");
tempListButton.addEventListener("click", handleTempList);

