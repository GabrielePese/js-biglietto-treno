// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere
// e l’età del passeggero.
// Sulla base di queste informazioni dovrà:
// calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.




var km = prompt ("Quanti km percorri?");
console.log (km)

var anni = prompt ("Quanti anni hai?");
console.log (anni)

if (anni < 18) { var costo = (km * 0.21) * 0.8}
else if (anni >= 65) { var costo = (km * 0.21) * 0.6}
else { var costo = km * 0.21};
console.log (costo)

var costo = costo.toFixed(2)

document.getElementById("title").innerHTML = "Il costo del biglietto è di " + costo + " euro" ;

if (costo > 50) { document.getElementById("title2").innerHTML = "Per il tuo biglietto hai speso più di 50 €. Infatti hai speso " + costo + " per questo hai diritto a un couopon del 10% sul prossimo viaggio "  }
