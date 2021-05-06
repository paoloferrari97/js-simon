//Un alert() espone 5 numeri generati casualmente.

//creo funzione per numeri random
function numeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//creo array per contenere i numeri random
var numeriEstratti = [];

//utente inserisce il max dei numeri estraibili
do {
    var numeroMax = parseInt(prompt("Inserisci il massimo numero estraibile dal pc! [>= a 5]"));
} while (isNaN(numeroMax) || numeroMax < 5);

//creo ciclo per estrarre numeri random 5 volte
while (numeriEstratti.length < 5) {
    var numero = numeriRandom(1, numeroMax);
    if (!numeriEstratti.includes(numero)) {
        numeriEstratti.push(numero);
    }
}

//alert con i numeri random
alert("I numeri estratti sono: " + numeriEstratti + ". Memorizzali!");


//Da li parte un timer di 30 secondi.
var tempo = 5; //31
var numeriUtente = [];
var numeriUtenteTutti = [];

var intervallo = setInterval(function () {
    tempo--;
    document.getElementById("timer").innerHTML = tempo;
    //quando tempo = 0 stoppo seiInterval, faccio inserire i numeri dall'utente e stampo il risultato
    if (tempo == 0) {
        clearInterval(intervallo);


        //Dopo 30 secondi l'utente deve inserire, uno alla volta,
        //i numeri che ha visto precedentemente, tramite il prompt().
        //Dopo che sono stati inseriti i 5 numeri, il software dice
        //quanti e quali dei numeri da indovinare sono stati individuati.

        for (var i = 0; i < 5; i++){
            //ciclo do-while per verificare che sia un numero (con parseInt lo rendo intero)
            do {
                var numeroInserito = parseInt(prompt(`Inserisci il ${i + 1} numero!`));
            } while (isNaN(numeroInserito));
            //verificare che numero inserito non sia uguale ai numeri gia inseriti in array numeri utente
            if (numeriUtente.includes(numeroInserito)) {
                alert("Non puoi inserire più volte lo stesso numero!");
                i--;
            } else if (numeriEstratti.includes(numeroInserito)) { //if per verificare se numeroInserito è uguale ad un numero estratto, se è vero lo pusho nell'arrey dei numero digitati dall'utente
                numeriUtente.push(numeroInserito);
                numeriUtenteTutti.push(numeroInserito);
            } else {
                numeriUtenteTutti.push(numeroInserito);
            }
        }
        //creo casi specifici su quanti indovinati
        if (numeriUtente.length == 0) {
            alert("Non hai indovinato neanche un numero! Mi spiace!");
            document.getElementById("messaggio").innerHTML = "Non hai indovinato neanche un numero! Mi spiace!";
            document.getElementById("numeri_utente").innerHTML = "I numeri da te inseriti sono: " + numeriUtenteTutti + ".";
            document.getElementById("numeri_random").innerHTML = "I numeri estratti dal computer sono: " + numeriEstratti + ".";
        } else if (numeriUtente.length == 1) {
            alert(`Hai indovinato 1 solo numero su ${numeriEstratti.length}! Cioè hai indovinato: ${numeriUtente}.`);
            document.getElementById("messaggio").innerHTML = `Hai indovinato 1 solo numero su ${numeriEstratti.length}! Cioè hai indovinato: ${numeriUtente}.`;
            document.getElementById("numeri_utente").innerHTML = "I numeri da te inseriti sono: " + numeriUtenteTutti + ".";
            document.getElementById("numeri_random").innerHTML = "I numeri estratti dal computer sono: " + numeriEstratti + ".";
        } else {
            alert(`Hai indovinato ${numeriUtente.length} numeri su ${numeriEstratti.length}! Cioè hai indovinato: ${numeriUtente}.`);
            document.getElementById("messaggio").innerHTML = `Hai indovinato ${numeriUtente.length} numeri su ${numeriEstratti.length}! Cioè hai indovinato: ${numeriUtente}.`;
            document.getElementById("numeri_utente").innerHTML = "I numeri da te inseriti sono: " + numeriUtenteTutti + ".";
            document.getElementById("numeri_random").innerHTML = "I numeri estratti dal computer sono: " + numeriEstratti + ".";
        }
    } else {
        document.getElementById("timer").innerHTML = tempo - 1;
    }
}, 1000);



