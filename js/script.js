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
3. Store inputs in variables
4. Set price/km in a variable
5. Set discout value variables
6. Add listener for submit button
    6.1 Collect datas from input values
    6.2 Validate datas
    6.3 Set the outcome depending on the inserted datas
        6.3.1 calculate standard price
        6.3.2 if underage calculate underage price
        6.3.3 if over 65 calculate over 65 price
        6.3.4 print final price
7. Print price on page.

----------------------------------------------------------------------------------------*/

// 1. Store targets in variable

const targetPrice = document.getElementById('price');
////console.log(targetPrice);
const targetError = document.getElementById('error-message');
const targetNameSurnameDisplay1 = document.getElementById('name-surname-display-1');
const targetNameSurnameDisplay2 = document.getElementById('name-surname-display-2');
const targetNCarryage1 = document.getElementById('n-carryage-1');
const targetNCarryage2 = document.getElementById('n-carryage-2');
const targetCpCode1 = document.getElementById('cp-code-1');
const targetCpCode2 = document.getElementById('cp-code-2');
const targetKm1 = document.getElementById('km-1');
const targetKm2 = document.getElementById('km-2');
const targetOriginalPrice = document.getElementById('original-price');
const targetDiscountApplied = document.getElementById('discount-applied');

// 2. Store button in variable

const submitButton = document.getElementById('submit');
console.log(submitButton);

// 3. Store inputs in variables 

const inputNameSurname = document.getElementById('name-surname');
const inputKilometers = document.getElementById('kilometers');
const inputAge = document.getElementById('age');

// 4. Set price/km in a variable

const kmPrice = 0.21;
console.log(kmPrice);

// 5. Set discout value variables

const underageDiscount = 0.2;
console.log(underageDiscount);

const over65Discount = 0.4;
console.log(over65Discount);



//6. Add listener for submit button

submitButton.addEventListener('click', function(){

    //6.1 Collect values from inputs
    const nameSurname = inputNameSurname.value.trim();
    const kilometers = inputKilometers.value.trim();
    const age = inputAge.value;

    //6.2 Validate datas

    let isValid = true;

    if (!nameSurname){

        isValid = false;
        targetError.classList.remove('d-none');
        targetError.innerText = "Il campo nome e cognome non può essere vuoto"

    }

    if (kilometers <= 0){

        isValid = false;
        targetError.classList.remove('d-none');
        targetError.innerText = "Il valore dei km deve essere positivo"

    } 
    
    if (isValid) {

        targetError.classList.add('d-none');
        targetOriginalPrice.innerHTML  = '';
        targetDiscountApplied.innerText = '';

        //6.3 Set the outcome depending on the inserted datas

        //6.3.1 calculate standard price
        let finalPrice = kilometers * kmPrice;

        //6.3.2 if underage calculate underage price
        if(age == "underage"){
            const ageType = inputAge.options[inputAge.selectedIndex].text;
            targetOriginalPrice.innerHTML  = `Prezzo base: <span class="text-danger text-decoration-line-through">${finalPrice.toFixed(2)}€</span>`
            targetDiscountApplied.innerText = `Sconto per ${ageType}: ${underageDiscount * 100}%`;
            finalPrice -= finalPrice*underageDiscount;
        } 
        
        //6.3.3 if over 65 calculate over 65 price
        else if (age == "over65"){
            const ageType = inputAge.options[inputAge.selectedIndex].text;
            targetOriginalPrice.innerHTML  = `Prezzo base: <span class="text-danger text-decoration-line-through">${finalPrice.toFixed(2)}€</span>`
            targetDiscountApplied.innerText = `Sconto per ${ageType}: ${over65Discount * 100}%`;
            finalPrice -= finalPrice*over65Discount;
        }

        //6.3.4 print final price
        const carryageNo = "N. carrozza: " + (Math.floor(Math.random() * 9) + 1);
        const cpCode = "Codice CP: " + (Math.floor(Math.random() * (99999 - 10000 + 1) + 10000));
        console.log(carryageNo);
        targetPrice.innerText = "Prezzo: " + finalPrice.toFixed(2) + "€";
        targetNameSurnameDisplay1.innerText = nameSurname.toUpperCase();
        targetNameSurnameDisplay2.innerText = nameSurname.toUpperCase();
        targetNCarryage1.innerText = carryageNo;
        targetNCarryage2.innerText = carryageNo;
        targetCpCode1.innerText = cpCode;
        targetCpCode2.innerText = cpCode;
        targetKm1.innerText = "Km da percorrere: " + kilometers;
        targetKm2.innerText = "Km da percorrere: " + kilometers;
    }

})




