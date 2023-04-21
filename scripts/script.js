const copyrightFooter = document.querySelector("#copyright");

const year = {year: "numeric"};
const currentYear = new Date().toLocaleString("en-US", year);

copyrightFooter.innerHTML = `&copy; ${currentYear} | Robert Lowry | Utah`;

const options = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
};

let lastModified = new Date(document.lastModified).toLocaleString("en-US", options);

const lastModifiedFooter = document.querySelector("#lastModified");
lastModifiedFooter.innerHTML = `Last modified: ${lastModified}`





// const footer = document.querySelector("footer p");
// footer.innerHTML = "new text!";