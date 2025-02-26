document.addEventListener("DOMContentLoaded", function () {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temparatureDisplay = document.getElementById("temparature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "c5f964edbdf610401a53320fdb6bfd5e";

  getWeatherBtn.addEventListener("click", function () {
    const city = cityInput.value.trim();
    if (!city) return;
  });

  function fetchWeatherData(city) {
    // gets the data
  }

  function displayWeatherData(weatherData) {
    // displays the data
  }

  function showError() {
    // shows the error message
  }
});
