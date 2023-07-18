// get the json data
const url = "https://brotherblazzard.github.io/canvas-content/fruit.json"

async function getFruitData() {
    const response = await fetch(url);
    const json = await response.json();

    displayOrder(json);
}

function displayOrder(fruits) {
    // get document elements
    const fname = document.querySelector("input[type='text']");
    const email = document.querySelector("input[type='email']");
    const phone = document.querySelector("input[type='tel']");
    const fruit1 = document.querySelector("#fruit1");
    const fruit2 = document.querySelector("#fruit2");
    const fruit3 = document.querySelector("#fruit3");
    const instructions = document.querySelector("textarea");
    
    const orderDate = new Date().toLocaleString("en-US", {month: "short", day: "numeric", weekday: "short", year: "numeric"});
    
    // get fruit data
    function getFruit(fruit) {
        for (let i = 0; i < fruits.length; i++) {
            if (fruit == fruits[i].name) {
                return fruits[i];
            }
        }
        return null;
    }
    const fruitData1 = getFruit(fruit1.value);
    const fruitData2 = getFruit(fruit2.value);
    const fruitData3 = getFruit(fruit3.value);

    const totalcarbs = parseFloat(fruitData1.nutritions.carbohydrates) + parseFloat(fruitData2.nutritions.carbohydrates)+ parseFloat(fruitData3.nutritions.carbohydrates);
    const totalprotein = parseFloat(fruitData1.nutritions.protein) + parseFloat(fruitData2.nutritions.protein)+ parseFloat(fruitData3.nutritions.protein);
    const totalfat = parseFloat(fruitData1.nutritions.fat) + parseFloat(fruitData2.nutritions.fat)+ parseFloat(fruitData3.nutritions.fat);
    const totalsugar = parseFloat(fruitData1.nutritions.sugar) + parseFloat(fruitData2.nutritions.sugar)+ parseFloat(fruitData3.nutritions.sugar);
    const totalcalories = parseFloat(fruitData1.nutritions.calories) + parseFloat(fruitData2.nutritions.calories)+ parseFloat(fruitData3.nutritions.calories);

    // Make the form page disapear and create a new order confirmation page
    document.querySelector("form").classList.toggle("disappear");

    // create elements needed to create
    const tdate = document.createElement("p");
    const tfname = document.createElement("p");
    const temail = document.createElement("p");
    const tphone = document.createElement("p");
    const tfruit1 = document.createElement("p");
    const tfruit2 = document.createElement("p");
    const tfruit3 = document.createElement("p");
    const tinstructions = document.createElement("p");
    const div = document.createElement("div");
    const ttitle = document.createElement("h2");
    const tcarbs = document.createElement("p");
    const tprotein = document.createElement("p");
    const tfat = document.createElement("p");
    const tsugar = document.createElement("p");
    const tcalories = document.createElement("p");
    const again = document.createElement("a");


    // fill elements with text content
    tdate.textContent = `${orderDate}`;
    tfname.textContent = `${fname.value}`;
    temail.textContent = `${email.value}`;
    tphone.textContent = `${phone.value}`;
    tfruit1.textContent = `${fruit1.value}`;
    tfruit2.textContent = `${fruit2.value}`;
    tfruit3.textContent = `${fruit3.value}`;
    tinstructions.textContent = `${instructions.value}`;
    ttitle.textContent = "Nutrition:";
    tcarbs.textContent = `Carbs: ${totalcarbs.toFixed(1)}g`;
    tprotein.textContent = `Protein: ${totalprotein.toFixed(1)}g`;
    tfat.textContent = `Fat: ${totalfat.toFixed(1)}g`;
    tsugar.textContent = `Sugars: ${totalsugar.toFixed(1)}g`;
    tcalories.textContent = `Calories: ${totalcalories.toFixed(0)}`;

    again.classList.add("button");
    again.setAttribute("href", "fresh.html");
    again.textContent = "Make another drink";

    // add to the form element
    const main = document.querySelector("main");
    main.appendChild(tdate);
    main.appendChild(tfname);
    main.appendChild(temail);
    main.appendChild(tphone);
    main.appendChild(tfruit1);
    main.appendChild(tfruit2);
    main.appendChild(tfruit3);
    main.appendChild(tinstructions);
    div.appendChild(ttitle);
    div.appendChild(tcarbs);
    div.appendChild(tprotein);
    div.appendChild(tfat);
    div.appendChild(tsugar);
    div.appendChild(tcalories);
    main.appendChild(div);
    main.appendChild(again);

    
    const totalDrinks = parseInt(localStorage.getItem("totalDrinksMade"));
    const newTotal = totalDrinks + 1;
    localStorage.setItem("totalDrinksMade", newTotal);
}


const submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", getFruitData);