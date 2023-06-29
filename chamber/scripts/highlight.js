const url = "data.json";

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data.directory);
}

function filterByMembership (business) {
    membershipLevel = business.membershiplevel;
    return (membershipLevel == "Silver" || membershipLevel == "Gold");
}

function displayData(business) {
    const highMembership = business.filter(filterByMembership);
    
}