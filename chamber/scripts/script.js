// Giving function to the hamburger button
const hamButton = document.querySelector("#hamButton");
const nav = document.querySelector("nav ul");

hamButton.addEventListener("click", toggleNav);

function toggleNav() {
    nav.classList.toggle("active");
}