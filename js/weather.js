const API_KEY = "03dd8cc0b062ac32502f553898151c42";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;  
  fetch(url)
  .then(response => response.json())
  .then(data => { 
    const weatherIcon = document.querySelector(".weather-icon");
    const currentWeather = document.querySelector(".weather__column > span");
    const cityName = document.querySelector(".weather__location > span");
    console.log(currentWeather);
    const currentTemp = document.querySelector(".weather__current-temp > span");
    const listItemTemp = document.querySelectorAll(".temp-list span");

    weatherIcon.src =`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    currentWeather.innerText = `${data.weather[0].main}`;
    cityName.innerText = `${data.name}`;
    console.log(weatherIcon.src);
    currentTemp.innerText = `${Math.round(data.main.temp)}°`;
    listItemTemp[0].innerText = `${Math.round(data.main.temp_max)}°`;
    listItemTemp[1].innerText = `${Math.round(data.main.temp_min)}°`;
  })
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

function handleTempList() {
  const listTemp = document.querySelector(".temp-list");
  if (listTemp.classList.toggle("slide")) {
    tempListButton.innerHTML = '<i class="fa-solid fa-caret-down"></i>';
  } else {
    tempListButton.innerHTML = '<i class="fa-solid fa-caret-up"></i>';
  }
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);

const tempListButton = document.querySelector(".weather__current-temp__button");
tempListButton.addEventListener("click", handleTempList);

