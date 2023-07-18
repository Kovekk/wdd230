// Displaying the total amount of drinks on the home page.

if (localStorage.getItem("totalDrinksMade") == null) {
    localStorage.setItem("totalDrinksMade", 0);
}

let totalDrinks = localStorage.getItem("totalDrinksMade");

try {
    document.querySelector("#drinksOrdered p").textContent = `You've made ${totalDrinks} fresh drinks so far!`;
} catch (error) {
    console.log(error);
}