// L'utente inserisce un numero nel prompt, se è pari stampa il numero,
// se è dispari stampa il numero successivo

let userNumber = parseInt(prompt('Dimmi un numero'));

if (userNumber % 2 === 0){
    alert(userNumber);
} else {
    alert(userNumber + 1);
}