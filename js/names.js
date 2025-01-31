// Funzione che restituisce un oggetto con firstName e lastName
function createPerson(firstName, lastName) {

  return {

    firstName: firstName,
    lastName: lastName

  };

}

// Esporto la funziona per poterla utilizzare in altri file
module.exports = createPerson;