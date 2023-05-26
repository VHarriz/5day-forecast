var apiKey = 'bae7b6b12fe5fda2bee3036086e5c096';
var city ;
var queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=imperial';
var date = dayjs();

var searchButtonEl = document.querySelector('.searchButton');
var citySearchFieldEl = document.querySelector('.citySearchField');
var searchHistory = document.querySelector('.searchHistory');
var todayWeatherEl = document.querySelector('.todayWeather');

function forecastLookup() {
    var city = citySearchFieldEl.value;
    var apiKey = 'bae7b6b12fe5fda2bee3036086e5c096';
    var queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=imperial';

    return fetch(queryURL)
    .then(function(response) {
        console.log(response);
        return response.json();
        
    });

}