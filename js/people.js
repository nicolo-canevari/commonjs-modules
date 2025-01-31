// Importo la funzione da names.js
const createPerson = require('./names.js');

// Importo la funzione da hobbies.js
const createHobbies = require('./hobbies.js');

// Creo una funzione senza parametri che restituisce un oggetto con fullname e hobbies
function createFullProfile() {

    // Uso le due funzioni precedentemente importate per costruire l'oggetto
    const person = createPerson(`Alessandro`, `Magno`);
    const hobbies = createHobbies(`Conquistare l'Impero Persiano`, `Costruire città`, `Scoprire nuove culture`);

    // Restituisco l'oggetto con i dati
    return {

        fullName: `${person.firstName} ${person.lastName}`,
        hobbies: hobbies

    };

}

// Stampo per vedere l'output (node ./js/people)
console.log(createFullProfile());

