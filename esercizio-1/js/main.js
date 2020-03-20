// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

// inizializzo le variabili
var firstNum, secNum, msg;

// chiedo due numeri in successione
firstNum = prompt('Primo numero?')
secNum = prompt('Secondo numero?')

// stabilisco qual è il numero maggiore
if (firstNum > secNum) {
  msg = 'Il numero maggiore è: ' + firstNum;
} else if (firstNum < secNum) {
  msg = 'Il numero maggiore è: ' + secNum;
} else {
  msg = 'I numeri sono uguali'
}

// stampo a video il numero maggiore

document.getElementById('numero').innerHTML = msg;
