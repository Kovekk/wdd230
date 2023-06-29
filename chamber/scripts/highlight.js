const newurl = "data.json";

async function getData() {
    const response = await fetch(newurl);
    const data = await response.json();
    displayData(data.directory);
}

function filterByMembership (business) {
    membershipLevel = business.membershiplevel;
    return (membershipLevel == "Silver" || membershipLevel == "Gold");
}

function displayHighlight (member) {
    // Create html elements
    const section = document.createElement("section");
    const nameH3 = document.createElement("h3");
    const picture = document.createElement("picture");
    const mediumSource = document.createElement("source");
    const largeSource = document.createElement("source");
    const smallImg = document.createElement("img");
    const numberP = document.createElement("p");
    const websiteA = document.createElement("a");

    // putting picture element together
    mediumSource.setAttribute("srcset", member.srcset[1]);
    mediumSource.setAttribute("media", "(min-width:600px) and (max-width: 899px)");
    largeSource.setAttribute("srcset", member.srcset[2]);
    largeSource.setAttribute("media", "(min-width: 900px)");
    smallImg.setAttribute("src", member.srcset[0]);
    smallImg.setAttribute("alt", `${member.name} logo`);
    picture.appendChild(mediumSource);
    picture.appendChild(largeSource);
    picture.appendChild(smallImg);

    // putting phone number and website together
    numberP.innerHTML = `${member.number} | `;
    websiteA.innerHTML = "Website";
    websiteA.setAttribute("href", member.website);
    numberP.appendChild(websiteA);

    // adding text to name
    nameH3.innerHTML = member.name;

    // putting everything into the section element
    section.appendChild(nameH3);
    section.appendChild(picture);
    section.appendChild(numberP);

    // add section to div#spotlight
    document.querySelector("#spotlight").appendChild(section);
}

function displayData(business) {
    const highMembership = business.filter(filterByMembership);
    const highlightOne = displayHighlight(highMembership[4]);
    const highlightTwo = displayHighlight(highMembership[1]);
    const highlightThree = displayHighlight(highMembership[0]);
}

getData();