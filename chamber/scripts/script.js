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