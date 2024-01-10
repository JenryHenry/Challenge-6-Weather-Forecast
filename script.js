// PSEUDOCODE
// When I enter a city name and press the search button, the website saves that city name in a variable and saves to local storage.
let citySearchEl = document.querySelector("#search-box");
let searchInputEl = document.querySelector("#city-search");
// The site then passes the city name to the weather API and also displays the city name in the #city-name h2.
let citySearchHandler = function (event) {
  event.preventDefault();

  var searchedCity = searchInputEl.value;
  console.log(searchedCity);
};
// The API sends back the weather conditions of the city.
// The site displays the weather conditions for that city in the current weather div, populating the list items with temperature, wind, and humidity.
// The API also sends back the 5-day forecast for the city.
// The site takes that forecast data and populates the #forecast-blocks with their respective dates, temps, winds, and humidities.
// The site adds a new button in the #past-searches box that displays the city name.
// When the user clicks on any of these buttons, all of the weather forecast elements change to show that city's forecast.

citySearchEl.addEventListener("submit", citySearchHandler);
