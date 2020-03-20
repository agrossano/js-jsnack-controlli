//  Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// inizializzo le variabili
var a, b, c, d, e, sum;

// chiedo cinque numeri da inserire
a = parseInt(prompt('Inserisci il primo numero'));
b = parseInt(prompt('Inserisci il secondo numero'));
c = parseInt(prompt('Inserisci il terzo numero'));
d = parseInt(prompt('Inserisci il quarto numero'));
e = parseInt(prompt('Inserisci il quinto numero'));


// sommo i numeri ricevuti
sum = a + b + c + d + e;

// stampo a video la somma

document.getElementById('somma').innerHTML = 'La somma dei numeri è: ' + sum;
