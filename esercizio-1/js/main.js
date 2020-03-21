// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

// inizializzo le variabili
var firstNum, secNum, msg, d, hours, minutes;



d = new Date();
hours = d.getHours();
minutes = d.getMinutes();

// chiedo due numeri in successione
firstNum = prompt('Primo numero?')
secNum = prompt('Secondo numero?')

// stabilisco qual è il numero maggiore
if (firstNum > secNum) {
  msg = 'Il numero maggiore è ' + "<span style=\"color:white\">" + firstNum + "</span>";
} else if (firstNum < secNum) {
  msg = 'Il numero maggiore è ' + "<span style=\"color:white\">" + secNum + "</span>";
} else {
  msg = 'I numeri sono uguali'
}

// stampo a video il numero maggiore

document.getElementById('user').innerHTML = '[agrossano@me]';
document.getElementById('numero').innerHTML = msg;
document.getElementById('time').innerHTML = hours + ":" + minutes;
