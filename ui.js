class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.description = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.details = document.getElementById("w-details");
    this.humidity = document.getElementById("w-humidity");
    this.maxToday = document.getElementById("w-max-today");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    console.log("his: ", weather);
    this.location.textContent = weather.name;
    this.description.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp + " F";
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.feelsLike.textContent = `Feels like: ${weather.main.feels_like} F`;
    this.maxToday.textContent = `Max today: ${weather.main.temp_max} F`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.wind.textContent = `WindSpeed: ${weather.wind.speed} MPH`;
  }
}
class HERUI {
  constructor() {
    this.location2 = document.getElementById("w-location-2");
    this.description2 = document.getElementById("w-desc-2");
    this.string2 = document.getElementById("w-string-2");
    this.icon2 = document.getElementById("w-icon-2");
    this.details2 = document.getElementById("w-details-2");
    this.humidity2 = document.getElementById("w-humidity-2");
    this.maxToday2 = document.getElementById("w-max-today-2");
    this.feelsLike2 = document.getElementById("w-feels-like-2");
    this.wind2 = document.getElementById("w-wind-2");
  }

  paint(weather) {
    console.log("her: ", weather);
    this.location2.textContent = weather.name;
    this.description2.textContent = weather.weather[0].description;
    this.string2.textContent = weather.main.temp + " F";
    this.icon2.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.feelsLike2.textContent = `Feels like: ${weather.main.feels_like} F`;
    this.maxToday2.textContent = `Max today: ${weather.main.temp_max} F`;
    this.humidity2.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.wind2.textContent = `WindSpeed: ${weather.wind.speed} MPH`;
  }
}
