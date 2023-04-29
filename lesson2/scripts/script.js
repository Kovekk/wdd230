const footer = document.querySelector("footer");

const currentYear = new Date().toLocaleString("en-US", {year: "numeric"});

const options = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
};
let lastUpdated = new Date(document.lastModified).toLocaleString("en-US", options);

footer.innerHTML = `&copy; ${currentYear} | Robert Lowry | Last updated: ${lastUpdated}`