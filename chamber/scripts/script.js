// Giving function to the hamburger button
const hamButton = document.querySelector("#hamButton");
const nav = document.querySelector("nav ul");

hamButton.addEventListener("click", toggleNav);

function toggleNav() {
    nav.classList.toggle("active");
}

// add current date to header

const currentDateTag = document.querySelector("#currentDate");
let currentDate = new Date().toLocaleString("en-GB", {dateStyle: "full"});
currentDateTag.innerHTML = currentDate;


// add last modified to footer

const lastModifiedTag = document.querySelector("#lastModified");

const options = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
};
let lastUpdated = new Date(document.lastModified).toLocaleString("en-US", options);

lastModifiedTag.innerHTML = `Last Modified: ${lastUpdated}`;

// add copyright year to footer

const copyright = document.querySelector("#copyright");

const currentYear = new Date().toLocaleString("en-US", {year: "numeric"});

copyright.innerHTML = `&copy;${currentYear} Provo Chamber`

