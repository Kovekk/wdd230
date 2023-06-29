// using local storage to show how long it has been since the user last visited in days

const todaysDate = new Date();
const lastVisited = new Date(localStorage.getItem("lastVisited"));

switch (lastVisited) {
    case null:
        localStorage.setItem("lastVisited", todaysDate);
        break;
    default:
        const daysSinceLastVisit = Math.floor((todaysDate - lastVisited) / (1000*60*60*24));
        document.querySelector("#lastVisited").innerHTML = `You last visited ${daysSinceLastVisit} days ago`;
        localStorage.setItem("lastVisited", todaysDate);
}