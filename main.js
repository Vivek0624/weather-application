// Got api from https://www.weatherapi.com/
// https://www.weatherapi.com/api-explorer.aspx

// Get the necessary elements from the DOM
const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.getElementById('locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city');

// Default city when the page loads
let cityInput = 'Pune';

// Add click event to each city in the panel
cities.forEach((city) => {
  city.addEventListener('click', (e) => {
    // change from default city to the clicked one
    cityInput = e.target.innerHTML;

    // Function that fetches and displays all the data from the weather api (We will write it soon)

    fetchWeatherData();
    // Fade out the app (simple animation)
    app.style.opacity = '0';
  });
});

// Add submit event to the form
form.addEventListener('submit', (e) => {
  // if the input field (search bar) is empty, throw an alert
  if (search.value.lenght == 0) {
    alert('Please type in a city name');
  } else {
    // change from default city to the one written in the input field
    cityInput = search.value;
    // Fuction that fetches and displays all the data from the weather API (we will write it soon)
    fetchWeatherData();

    // Remove all text from the input field
    search.value = '';

    // Fade out the app (simple animation)
    app.style.opacity = '0';
  }

  // Prevent the Default behaviour of the form
  e.preventDefault();
});

// Function that returns a day of the week
// (Monday, Tuesday, Friday,....) from a date (12 03 2021)
// We will use this function later

function dayOfTheWeek() {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return weekday[new Date().getDay()];
}

// const dateee = 16 / 05 / 2022;
// console.log(new Date(dateee).getDay());

// Function that fetches and displays the data from the weather API

function fetchWeatherData() {
  // Fetch the data and dynamically add the city name with template literals
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=a6132fe5eea94e14a0d113541221605&q=${cityInput}&aqi=no`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Lets start by adding the temperature and weather condition to the page
      temp.innerHTML = data.current.temp_c + '&#176;';
      conditionOutput.innerHTML = data.current.condition.text;

      // Get the date and time from the city and extract the day, month, year, and time into individual variables
      const date = data.location.localtime;
      const y = parseInt(date.substr(0, 4));
      const m = parseInt(date.substr(5, 2));
      const d = parseInt(date.substr(8, 2));
      const time = date.substr(11);

      // Refromat the date into something more appealing and add it to the page
      // Original format: 2021-10-09 17:53
      // New format 17:53 - Friday 9, 10 2021

      dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${m} ${y}`;
      timeOutput.innerHTML = time;

      //   console.log(dateOutput);

      // Add the name of the city into the page
      nameOutput.innerHTML = data.location.name;

      // Get the corresponding icon url for the weather and extract a part of it
      const iconId = data.current.condition.icon.substr(
        '//cdn.weatherapi.com/weather/64x64/'.length
      );

      icon.src = './icons/' + iconId;

      // Add the weather details to the page
      cloudOutput.innerHTML = data.current.cloud + '%';
      humidityOutput.innerHTML = data.current.humidity + '%';
      windOutput.innerHTML = data.current.wind_kph + 'km/h';

      // Set default time of day
      let timeOfDay = 'day';
      // Get the unique id for each weather condition
      const code = data.current.condition.code;

      // Change to nigth if its night time in the city
      if (!data.current.is_day) {
        timeOfDay = 'night';
      }

      if (code == 1000) {
        // Set the background image to clear if the weather is clear
        app.style.backgroundImage = `url(./img/${timeOfDay}/clear.gif)`;
        // Change the button bg color depending on if its day or night
        btn.style.background = '#e5ba92';
        if (timeOfDay == 'night') {
          btn.style.background = '#181e27';
        }
      }
      // Same thing for cloudy weather
      else if (
        code == 1003 ||
        code == 1006 ||
        code == 1009 ||
        code == 1030 ||
        code == 1069 ||
        code == 1087 ||
        code == 1135 ||
        code == 1273 ||
        code == 1276 ||
        code == 1279 ||
        code == 1282
      ) {
        app.style.backgroundImage = `
    url(./img/${timeOfDay}/cloudy.gif)`;
        btn.style.background = '#fa6d1b';
        if (timeOfDay == 'night') {
          btn.style.background = '#181e27';
        }

        // And Rain
      } else if (
        code == 1063 ||
        code == 1069 ||
        code == 1072 ||
        code == 1150 ||
        code == 1153 ||
        code == 1180 ||
        code == 1183 ||
        code == 1186 ||
        code == 1189 ||
        code == 1192 ||
        code == 1204 ||
        code == 1207 ||
        code == 1240 ||
        code == 1243 ||
        code == 1246 ||
        code == 1249 ||
        code == 1252
      ) {
        app.style.backgroundImage = `url(./img/${timeOfDay}/rainy.gif)`;
        btn.style.background = '#647d75';
        if (timeOfDay == 'night') {
          btn.style.background = '#325c80';
        }
        // And finnaly snow
      } else {
        app.style.backgroundImage = `url(./img/${timeOfDay}/snowy.gif)`;
        // Change the button bg color depending on if its day or night
        btn.style.background = '#4d72aa';
        if (timeOfDay == 'night') {
          btn.style.background = '#1b1b1b';
        }
      }

      // Fade in the page once all is done
      app.style.opacity = '1';
    });
  // if the user types a city that doesn't exist, throw an alert
  // .catch(() => {
  //   alert('City not found, Please try again!');
  //   app.style.opacity = '1';
  // });
}

// Call the fucntion on page load
fetchWeatherData();

// Fade in the page
app.style.opacity = '1';
