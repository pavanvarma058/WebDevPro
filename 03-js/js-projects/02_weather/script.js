document.addEventListener("DOMContentLoaded", function () {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temparatureDisplay = document.getElementById("temparature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "c5f964edbdf610401a53320fdb6bfd5e";

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    // it may throw an error
    // server/databse is always in another contient

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    // gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const respone = await fetch(url);
    console.log(typeof respone);
    console.log("Response", respone);

    if (!respone.ok) {
      throw new Error("City not found");
    }
    const data = await respone.json();
    return data;
  }

  function displayWeatherData(data) {
    // displays the data
    console.log(data);
    const { name, main, weather } = data;
    cityNameDisplay.textContent = name;
    temparatureDisplay.textContent = `Temparature: ${main.temp}`;
    descriptionDisplay.textContent = `Weather: ${weather[0].description}`;
    // unlock the display
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    // shows the error message
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }
});
