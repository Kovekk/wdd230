const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
  }

  const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let pBDay = document.createElement('p');
        let pBPlace = document.createElement('p');
        let portrait = document.createElement('img');

        // Build the h2 content out to show the prophet's full name
        h2.textContent = `${prophet.name} ${prophet.lastname}`;

    //   Build the p content to show the prophet's birthdate and birthplace
        pBDay.textContent = `Date of Birth: ${prophet.birthdate}`;
        pBPlace.textContent = `Place of Birth: ${prophet.birthplace}`

        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '259');

        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(pBDay);
        card.appendChild(pBPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    }); // end of forEach loop
  } // end of function expression
  
  getProphetData();