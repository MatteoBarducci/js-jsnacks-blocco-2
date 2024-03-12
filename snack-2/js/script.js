// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const userFirstWord = prompt('Dimmi una parola');
const userSecondWord = prompt('Dimmi una parola');

if (userFirstWord.length > userSecondWord.length){
    alert (userSecondWord + ' ' + userFirstWord);
} else {
    alert(userFirstWord + ' ' + userSecondWord);
}