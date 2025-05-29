const apiKey = "fcbb18ad00cd63b2de3106f46ac7fc31"; 
const city = "Oaxaca,mx"; 


const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;


const tempElement = document.getElementById("weather-temp");
const descElement = document.getElementById("weather-desc");
const humidityElement = document.getElementById("weather-humidity");
const forecastList = document.getElementById("forecast-list");


fetch(currentWeatherURL)
  .then((response) => response.json())
  .then((data) => {
    const temp = data.main.temp.toFixed(1);
    const desc = data.weather[0].description;
    const humidity = data.main.humidity;

    tempElement.textContent = `Temperature: ${temp}°C`;
    descElement.textContent = `Condition: ${desc}`;
    humidityElement.textContent = `Humidity: ${humidity}%`;
  })
  .catch((error) => {
    console.error("Error fetching current weather:", error);
    tempElement.textContent = "Weather unavailable.";
  });


fetch(forecastURL)
  .then((response) => response.json())
  .then((data) => {
    const forecastDays = [];

   
    for (let i = 0; i < data.list.length; i++) {
      const forecast = data.list[i];
      if (forecast.dt_txt.includes("12:00:00")) {
        const date = new Date(forecast.dt_txt);
        const day = date.toLocaleDateString("en-US", { weekday: "short" });
        const temp = forecast.main.temp.toFixed(1);
        const icon = forecast.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        forecastDays.push({ day, temp, iconUrl });

        if (forecastDays.length === 3) break;
      }
    }

    forecastList.innerHTML = "";
    forecastDays.forEach((day) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${day.day}</strong>: ${day.temp}°C <img src="${day.iconUrl}" alt="icon" style="vertical-align:middle; height:30px;" />`;
      forecastList.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Error fetching forecast:", error);
    forecastList.innerHTML = "<li>Forecast unavailable.</li>";
  });

