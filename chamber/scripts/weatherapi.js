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
}

  apiFetch();