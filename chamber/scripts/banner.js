// show banner on monday and tuesday only

const banner = document.querySelector("#banner");

switch (new Date().getDay()) {
    case 1:
    case 2:
        banner.classList.toggle("show-banner");
        break;
    default:
        break;
}