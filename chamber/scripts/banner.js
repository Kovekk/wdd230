// show banner on monday and tuesday only

const banner = document.querySelector("#banner");
console.log(new Date().getDay());

switch (new Date().getDay()) {
    case 1:
    case 2:
        banner.classList.toggle("show-banner");
        break;
    default:
        break;
}