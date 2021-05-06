//Un alert() espone 5 numeri generati casualmente.

//creo funzione per numeri random
function numeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//creo array per contenere i numeri random
var numeriEstratti = [];

//creo ciclo per estrarre numeri random 5 volte
while (numeriEstratti.length < 5) {
    var numero = numeriRandom(1, 100);
    if (!numeriEstratti.includes(numero)) {
        numeriEstratti.push(numero);
    }
}

//alert con i numeri random
alert("I numeri estratti sono: " + numeriEstratti + ". Memorizzali!");


//Da li parte un timer di 30 secondi.
var tempo = 5; //31
var numeriUtente = [];

var intervallo = setInterval(function () {
    tempo--;
    document.getElementById("timer").innerHTML = tempo;
    if (tempo == 0) { //sistemare! parte prima l'allerta e poi si stampa a video lo 0
        clearInterval(intervallo);


        //Dopo 30 secondi l'utente deve inserire, uno alla volta,
        //i numeri che ha visto precedentemente, tramite il prompt().
        //Dopo che sono stati inseriti i 5 numeri, il software dice
        //quanti e quali dei numeri da indovinare sono stati individuati.
        for (var i = 0; i < 5; i++){
            do {
                var numeroInserito = parseInt(prompt(`Inserisci il ${i + 1} numero!`));
            } while (isNaN(numeroInserito));
            if (numeriEstratti.includes(numeroInserito)) {
                numeriUtente.push(numeroInserito);
            }
        }
        alert(`Ne hai indovinati ${numeriUtente.length} su ${numeriEstratti.length}! Cioè hai indovinato: ${numeriUtente}.`);
    }
}, 1000);



