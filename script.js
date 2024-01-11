// PSEUDOCODE
// When I enter a city name and press the search button, the website saves that city name in a variable and saves to local storage.
let citySearchEl = document.querySelector("#search-box");
let searchInputEl = document.querySelector("#city-search");
let searchedCity = "";
// The site then passes the city name to the weather API and also displays the city name in the #city-name h2.
let citySearchHandler = function (event) {
  event.preventDefault();

  searchedCity = searchInputEl.value;
  console.log(searchedCity);
  if (searchedCity) {
    getCityWeather(searchedCity);
    getCityForecast(searchedCity);
  } else {
    alert("Please enter a valid city");
  }
};

let getCityForecast = function () {
  let apiUrl =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    searchedCity +
    "&appid=24436c094ae63125e618e94d2ac2df4c&units=imperial";

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(displayForecast);
      } else {
        alert("Error:" + response.statusText);
      }
    })
    .catch(function (error) {
      alert("unable to connect to OpenWeather");
    });
};
let getCityWeather = function () {
  let apiUrl =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    searchedCity +
    "&appid=24436c094ae63125e618e94d2ac2df4c&units=imperial";

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(displayWeather);
      } else {
        alert("Error:" + response.statusText);
      }
    })
    .catch(function (error) {
      alert("unable to connect to OpenWeather");
    });
};

let displayWeather = function (weatherData) {
  console.log(weatherData);
  let cityName = document.querySelector("#city-name");
  cityName.textContent = weatherData.name;
  let currentWeather = document.querySelector("#current-weather");
  let currentTemp = currentWeather.querySelector("#temp");
  let currentWind = currentWeather.querySelector("#wind");
  let currentHum = currentWeather.querySelector("#humidity");

  currentTemp.textContent = "Temperature: " + weatherData.main.temp + " °F";
  currentWind.textContent = "Wind Speed: " + weatherData.wind.speed + " MPH";
  currentHum.textContent = "Humidity: " + weatherData.main.humidity + " %";
};

let displayForecast = function (forecastData) {
  console.log(forecastData);
  console.log(forecastData.list[10]);
  let futureForecasts = [2, 10, 18, 26, 34];
  nextDay = document.querySelector("#2");
  thirdDay = document.querySelector("#10");
  fourthDay = document.querySelector("#18");
  fifthDay = document.querySelector("#26");
  sixthDay = document.querySelector("#34");
  let forecastDay = "";
  for (var listItem = 2; listItem < 42; listItem += 8) {
    forecastDay = listItem;
    console.log(forecastDay);
  }
  let forecastEl = document.querySelector("#forecast-blocks");
};
// The API sends back the weather conditions of the city.
// The site displays the weather conditions for that city in the current weather div, populating the list items with temperature, wind, and humidity.
// The API also sends back the 5-day forecast for the city.
// The site takes that forecast data and populates the #forecast-blocks with their respective dates, temps, winds, and humidities.
// The site adds a new button in the #past-searches box that displays the city name.
// When the user clicks on any of these buttons, all of the weather forecast elements change to show that city's forecast.

citySearchEl.addEventListener("submit", citySearchHandler);
