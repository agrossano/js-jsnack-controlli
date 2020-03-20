// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

// inizializzo le variabili
var firstWord, secWord, shortWord, longWord;

// chiedo due parole in successione
firstWord = prompt('Prima parola?')
secWord = prompt('Seconda parola?')

// assegno le variabili per il messaggio di parola lunga e corta
msgLong = ' La parola più lunga è: ';
msgShort = ' La parola più corta è: ';

// stabilisco qual è la parola più corta e quella più lunga
if (firstWord.length > secWord.length) {
  longWord = msgLong + firstWord + '.';
  shortWord = msgShort + secWord + '.';
} else if (firstWord.length < secWord.length) {
  longWord = msgLong + secWord + '.';
  shortWord = msgShort + firstWord + '.';
} else {
  shortWord = 'La parola ' + firstWord + ' e ';
  longWord = 'la parola ' + secWord + ' hanno la stessa lunghezza. ';
}

// stampo a video prima la parola più corta e poi quella più lunga

document.getElementById('parola').innerHTML = shortWord + longWord;
