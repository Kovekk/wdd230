const footer = document.querySelector(footer);

const options = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
}

footer.innerHTML = `<p>&copy 2023 | Robert Lowry | Utah/n${newDate().toLocaleDateString("in-US", options)}</p>`