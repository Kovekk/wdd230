const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=240533739ba10554329c7aebc9cdaab7';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=240533739ba10554329c7aebc9cdaab7';

async function apiFetch() {
    try {
        const response = await fetch(url);
        const forecastResponse = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            const forecastData = await forecastResponse.json();
            displayResults(data, forecastData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data, forecastData) {
    // ******* Current Weather *******
    // get html elements
    const currentTemp = document.querySelector("#currentTemp");
    const weatherCondition = document.querySelector("#weatherCondition");
    const humidity = document.querySelector("#humidity");

    // get weather API info
    const apiCurrentTemp = data.main.temp;
    const apiWeatherCondition = data.weather[0].description;
    const apiHumidity = data.main.humidity;

    // fill elements with data and text
    currentTemp.textContent = `${apiCurrentTemp} F`;
    weatherCondition.textContent = `${apiWeatherCondition}`;
    humidity.textContent = `Humidity: ${apiHumidity}%`;

    // ******* 3-Day Forecast *******
    // Get html elements
    const day1Date = document.querySelector("#day1Date");
    const day2Date = document.querySelector("#day2Date");
    const day3Date = document.querySelector("#day3Date");

    const day1High = document.querySelector("#day1High");
    const day2High = document.querySelector("#day2High");
    const day3High = document.querySelector("#day3High");

    const day1Low = document.querySelector("#day1Low");
    const day2Low = document.querySelector("#day2Low");
    const day3Low = document.querySelector("#day3Low");

    // Get weather API info
    const apiDay1Date = new Date((forecastData.list[0].dt_txt)).toLocaleString("en-US", {month: "short", day: "numeric"});
    const apiDay2Date = new Date((forecastData.list[8].dt_txt)).toLocaleString("en-US", {month: "short", day: "numeric"});
    const apiDay3Date = new Date((forecastData.list[16].dt_txt)).toLocaleString("en-US", {month: "short", day: "numeric"});

    const day1Temp = getHighLow(forecastData, 8);
    const day2Temp = getHighLow(forecastData, 16);
    const day3Temp = getHighLow(forecastData, 24);

    const apiDay1High = day1Temp[0];
    const apiDay2High = day2Temp[0];
    const apiDay3High = day3Temp[0];

    const apiDay1Low = day1Temp[1];
    const apiDay2Low = day2Temp[1];
    const apiDay3Low = day3Temp[1];

    // fill elements with data and text
    day1Date.textContent = `${apiDay1Date}`;
    day2Date.textContent = `${apiDay2Date}`;
    day3Date.textContent = `${apiDay3Date}`;

    day1High.textContent = `High: ${apiDay1High} F`;
    day2High.textContent = `High: ${apiDay2High} F`;
    day3High.textContent = `High: ${apiDay3High} F`;

    day1Low.textContent = `Low: ${apiDay1Low} F`;
    day2Low.textContent = `Low: ${apiDay2Low} F`;
    day3Low.textContent = `Low: ${apiDay3Low} F`;
}

// takes the weather data and a start position as arguments
// returns an array containing the high temp and low temp in an array
// [high temp, low temp]
function getHighLow(data, start) {
    let high = 0;
    let low = 500;
    const end = start + 8;
    for (let i = start; i < end; i++) {
        const temp = data.list[i].main.temp;
        console.log(temp);
        if (temp > high) {high = temp;}
        if (temp < low) {low = temp;}
    }
    const highLow = [high, low];
    return highLow;
}

apiFetch();