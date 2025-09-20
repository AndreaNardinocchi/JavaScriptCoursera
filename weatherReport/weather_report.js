function showweatherDetails(event) {
  event.preventDefault();
  const city = document.getElementById("city").value;
  const apiKey = "c3e26a0b5387b001f6f548f5710c0baf"; // Replace 'YOUR_API_KEY' with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

document
  .getElementById("weatherForm")
  .addEventListener("submit", showweatherDetails);

function showweatherDetailsGeo(event) {
  event.preventDefault();
  const lat = document.getElementById("lat").value;
  const lon = document.getElementById("lon").value;
  const apiKey = "c3e26a0b5387b001f6f548f5710c0baf"; // Replace 'YOUR_API_KEY' with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherInfoGeo = document.getElementById("weatherInfoGeo");
      weatherInfoGeo.innerHTML = `<h2>Weather in lat ${data.coord.lat} and ${data.coord.lon}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      const weatherInfoGeo = document.getElementById("weatherInfoGeo");
      weatherInfoGeo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

document
  .getElementById("weatherFormGeo")
  .addEventListener("submit", showweatherDetailsGeo);
