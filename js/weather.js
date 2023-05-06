const API_KEY = "f106a472745a0b328406fea696f4bd2b";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const icon = document.querySelector("#weather-icon");
        const weather = document.querySelector(".weather span:nth-child(1)");
        const temperature = document.querySelector(".weather span:nth-child(2)")
        const city = document.querySelector(".weather span:nth-child(3)");

        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="날씨 아이콘" id="wn-icon">`;
        weather.innerHTML = `${data.weather[0].main}`;
        temperature.innerHTML = `${data.main.temp}°C`;
        city.innerHTML = data.name;
      });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

