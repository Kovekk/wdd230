const copyrightFooter = document.querySelector("#copyright");
copyrightFooter.innerHTML = `&copy; 2023 | Robert Lowry | Utah`;

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