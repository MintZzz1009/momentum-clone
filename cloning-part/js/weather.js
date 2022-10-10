function onGeoOK(position) {
  const lat = positon.coords.latitude;
  const lng = positon.coords.longitude;
  console.log("You live in", lat, lng);
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition