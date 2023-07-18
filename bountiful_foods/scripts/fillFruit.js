// get the json data
const newurl = "https://brotherblazzard.github.io/canvas-content/fruit.json"

async function getFruitData() {
    const response = await fetch(newurl);
    const json = await response.json();

    displayFruit(json);
}

function displayFruit(fruits) {
    const fruit1 = document.querySelector("#fruit1");
    const fruit2 = document.querySelector("#fruit2");
    const fruit3 = document.querySelector("#fruit3");

    // create fruit selections
    for (let i = 0; i < fruits.length; i++) {
        const option = document.createElement("option");
        option.setAttribute("value", fruits[i].name);
        option.textContent = fruits[i].name;
        const option2 = document.createElement("option");
        option2.setAttribute("value", fruits[i].name);
        option2.textContent = fruits[i].name;
        const option3 = document.createElement("option");
        option3.setAttribute("value", fruits[i].name);
        option3.textContent = fruits[i].name;
        fruit1.appendChild(option);
        fruit2.appendChild(option2);
        fruit3.appendChild(option3);
    }
}

getFruitData();