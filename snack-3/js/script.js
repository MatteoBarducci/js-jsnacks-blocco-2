// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numbers = [328, 383, 679, 685, 476, 846, 2698, 4839, 397, 1090]

let thisNumber;
let evenNumbers = []
let oddNumbers = []
for (let i = 0; i < numbers.length; i++){
    let thisNumber = numbers[i];
    
    if (thisNumber % 2 === 0){
        evenNumbers.push(thisNumber)
        document.getElementById('second-div').innerHTML = evenNumbers
    } else if (thisNumber % 2 !== 0){
        oddNumbers.push(thisNumber)
        document.getElementById('first-div').innerHTML = oddNumbers
    }
}

