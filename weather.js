class Weather {
  constructor(city, state) {
    this.apiKey = "4536fe1f0ab1e4e27703e146c6b04498";
    this.city = city;
    this.state = state;
  }

  // Fetch Coordinates
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},US&units=imperial&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change Location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
