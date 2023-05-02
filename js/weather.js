const API_KEY = "f106a472745a0b328406fea696f4bd2b";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(res => res.json()).then(data => {
      const weather = document.querySelector(".weather span:nth-child(1)");
      const temperature = document.querySelector(".weather span:nth-child(2)")
      const city = document.querySelector(".weather span:nth-child(3)");
      weather.innerText = `날씨: ${data.weather[0].main}`;
      temperature.innerText = `온도: ${data.main.temp}`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

