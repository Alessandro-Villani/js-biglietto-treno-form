/*------------------------------------TRACCIA-------------------------------------------

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

----------------------------------------------------------------------------------------*/

/*--------------------------------------TODO----------------------------------------------

1. Store target in variable
2. Store button in variable
3. Set price/km in a variable
4. Set discout value variables
5. Add listener for submit button
    5.1 Validate datas
    5.2 Set the outcome depending on the inserted datas
6. Print price on page.

----------------------------------------------------------------------------------------*/

// 1. Store target in variable

const targetPrice = document.getElementById('price');
////console.log(targetPrice);

// 2. Store button in variable

const submitButton = document.getElementById('submit');
console.log(submitButton);

// 3. Set price/km in a variable

const kmPrice = 0.21;
console.log(kmPrice);

// 4. Set discout value variables

const underageDiscount = 0.2;
console.log(underageDiscount);

const over65Discount = 0.4;
console.log(over65Discount);




