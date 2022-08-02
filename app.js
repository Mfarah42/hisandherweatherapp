// Initialize storage
const storage = new Storage();

// Get stored
const weatherLocation = storage.getHisLocationData();
const herWeatherlocation = storage.getHerLocationData();

// Initialize Weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const herWeather = new Weather(
  herWeatherlocation.city,
  herWeatherlocation.state
);
const ui = new UI();
const herui = new HERUI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);
document.addEventListener("DOMContentLoaded", getHerWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  weather.changeLocation(city, state);
  getWeather();

  // close modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}

function getHerWeather() {
  herWeather
    .getWeather()
    .then((results) => {
      herui.paint(results);
    })
    .catch((err) => console.log(err));
}
