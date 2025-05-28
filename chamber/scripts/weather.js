
document.addEventListener("DOMContentLoaded", () => {
  const weatherContainer = document.getElementById("weatherContainer");
  const apiKey = "fcbb18ad00cd63b2de3106f46ac7fc31";
  const lat = 17.0732; // Oaxaca latitude
  const lon = -96.7266; // Oaxaca longitude
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const current = data.list[0];
      const forecast = data.list.filter((item, index) => index % 8 === 0).slice(1, 4);

      let html = `
        <p><strong>Current Temp:</strong> ${current.main.temp.toFixed(1)}°C</p>
        <p><strong>Conditions:</strong> ${current.weather[0].description}</p>
        <h3>3-Day Forecast</h3>
        <ul>
          ${forecast.map(day => {
            const date = new Date(day.dt_txt);
            return `<li><strong>${date.toLocaleDateString('en-US', { weekday: 'long' })}:</strong> ${day.main.temp.toFixed(1)}°C</li>`;
          }).join('')}
        </ul>
      `;

      weatherContainer.innerHTML = html;
    })
    .catch(error => {
      weatherContainer.innerHTML = "<p>Unable to load weather data.</p>";
      console.error(error);
    });
});
