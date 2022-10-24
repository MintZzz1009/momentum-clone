const API_KEY = "03dd8cc0b062ac32502f553898151c42";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;  
  fetch(url)
  .then(response => response.json())
  .then(data => { 
    const weatherIcon = document.querySelector("#weather-icon");
    const currentWeather = document.querySelector("#weather span:first-child");
    const cityName = document.querySelector(".weather-column > span");
    console.log(weatherIcon);
    const currentTemp = document.querySelector(".weather__current-temp");
    const listItemTemp = document.querySelectorAll("#temp-list li");

    weatherIcon.src =`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    currentWeather.append(data.weather[0].main);
    cityName.append(data.name);
    console.log(weatherIcon.src);
    currentTemp.prepend(`${Math.round(data.main.temp)}°`);
    listItemTemp[0].append(`${Math.round(data.main.temp_max)}°`);
    listItemTemp[1].append(`${Math.round(data.main.temp_min)}°`);
  })
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

function handleTempList() {
  const listTemp = document.querySelector("#temp-list");
  if (listTemp.classList.toggle("slide")) {
    tempListButton.innerHTML = '<i class="fa-solid fa-caret-down"></i>';
  } else {
    tempListButton.innerHTML = '<i class="fa-solid fa-caret-up"></i>';
  }
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);

const tempListButton = document.querySelector(".weather__current-temp > button");
tempListButton.addEventListener("click", handleTempList);

