const url = 'https://api.openweathermap.org/data/2.5/weather?q=Provo&units=imperial&appid=240533739ba10554329c7aebc9cdaab7';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
function displayResults(weatherData) {
    // getting the html elements
    const weatherSymbol = document.querySelector("#weatherSymbol");
    const temp = document.querySelector("#temp");
    const weatherDesc = document.querySelector("#weatherDesc");
    const windSpeed = document.querySelector("#windSpeed");
    const windChill = document.querySelector("#windChill");

    const currentTemp = weatherData.main.temp.toFixed(0);
    const windSpeedNum = weatherData.wind.speed;

    weatherSymbol.setAttribute("src", `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);
    weatherSymbol.setAttribute("alt", weatherData.weather[0].description);
    weatherDesc.textContent = weatherData.weather[0].description;
    temp.textContent = `${currentTemp} F`;
    windSpeed.textContent = `Wind Speed: ${windSpeedNum} mph`;
    
    if (currentTemp <= 50 && windSpeedNum > 3.0) {
      const windChillNum = 35.74 + 0.6215*currentTemp - 35.75*(windSpeedNum**0.16) + 0.4275*currentTemp*(windSpeedNum**0.16);
      windChill.textContent = `Feels Like:  ${windChillNum.toFixed(1)} F`;
    } else {
      windChill.textContent = "N/A";
    }
}

  apiFetch();