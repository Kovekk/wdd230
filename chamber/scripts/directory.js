const url = "data.json";

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data.directory);
}

function displayData(directory) {
    directory.forEach((company) => {
        // Creating the elements for each card
        const directorySection = document.querySelector("#directory");
        const card = document.createElement("div");
        const name = document.createElement("h3");
        const address = document.createElement("p");
        const number = document.createElement("p");
        const website = document.createElement("p");
        const membershipLevel = document.createElement("p");
        const image = document.createElement("img");

        // adding data to each part of the card
        name.textContent = company.name;
        address.textContent = company.address;
        number.textContent = company.number;
        website.textContent = company.website;
        membershipLevel.textContent = company.membershiplevel;

        // adding attributes to img
        image.setAttribute("src", company.filename);
        image.setAttribute("alt", company.name);
        image.setAttribute("loading", "lazy");

        // adding the card elements to the section element
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(website);
        card.appendChild(membershipLevel);
        directorySection.appendChild(card);
    })
}

getData();

// creating the function that will switch between grid view and list view

function toggleView() {
    const page = document.querySelector("#directory");
    page.classList.toggle("gridView");
    page.classList.toggle("listView");
}

const button = document.querySelector("#toggleView");
button.addEventListener("click", toggleView);