const temp = parseInt(document.querySelector("#weather h4").innerHTML.slice(0,2));
const windSpeed = parseInt(document.querySelector("#windSpeed").innerHTML.slice(12,14));

const windChill = 35.74 + 0.6215*temp - 35.75*(windSpeed**0.16) + 0.4275*temp*(windSpeed**0.16);

document.querySelector("#windChill").innerHTML = `Feels like ${windChill.toFixed(1)}&deg;F`