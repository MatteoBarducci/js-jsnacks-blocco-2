// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

const userNumber = (prompt('Dimmi un numero di 4 cifre'));

let sum = 0;
for (let i = 0; i < userNumber.length; i++){
    console.log(userNumber[i]);
    let thisNumber = parseInt(userNumber[i]);
    console.log(thisNumber)
    sum = sum + thisNumber
    console.log(sum)
}
alert('La somma delle 4 cifre del tuo numero è ' + sum)