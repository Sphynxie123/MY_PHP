// Testuosime šį masyvą
let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];
// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;
// function arrDoubled (numbers){
//   return numbers.map(x => x*2);  
// }
// console.log(arrDoubled(numbers));

// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus
// function arrMultiplied(numbers, arrMultiNumber) {
//    return numbers.map(x => x*arrMultiNumber); 
// }
// console.log(arrMultiplied(numbers, 3));

// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve
function arrCountTwos(numbers) {
  
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] == 2){
        result = result + 1;       
      }      
  } 
  return result;
}
console.log('Dvejetai masyve - ', arrCountTwos(numbers));
 
// 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.
function arrIndexOfFirst(numbers, x) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == x){
          return i;
        } else {
          return numbers.indexOf(x);
        }
    }
}
console.log('Grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve', arrIndexOfFirst(numbers, 7));

// 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.
function arrIndexOfLast(numbers, x) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == x){
          return i;
        } else {
          return numbers.lastIndexOf(x);
        }
    }
}
console.log('Paskutinis surastas argumento nurodyto skaičiaus indeksas', arrIndexOfLast(numbers, -10));

// 6. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip, kad pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu, priešpaskutinis bus antru.
// Pvz.: Turime skaičius 32243;
// Iškvietus funkciją rezultata bus: 34223

function reverseNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      numbers.reverse();
    }
    // nepamiršti return!!!!!!!!!
    return reverse;
}
console.log('Pakeičia skaičius vietomis taip, kad apsikeistu vietomis pirmas su paskutiniu ir pan. ', numbers.reverse());


// 7. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"

function getMinMax(numbers) {
  return `Mažiausias: ${Math.min(...numbers)}, Didžiausias: ${Math.max(...numbers)}`;
}
console.log(getMinMax(numbers));

// 8. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). 
// Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu 
// pvz.: “Raidė “v” sakinyje rasta 4 kartus”.
  let sentence = 'Čia yra sakinys ir raidė';
  let letter = 'a';

    function checkForLetters(sentence, letter){
      let chars = sentence.split('');
      let count = 0;
          for (let i = 0; i < chars.length; i++) {
        if (letter == chars[i]){          
          count = count + 1;
        }      
      }
    return count;         
  }
  console.log(sentence, ': Mes ieškome raidės', letter, 'sakinyje rasta ', (checkForLetters(sentence, letter)), 'kartus');


// 9. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atsikrą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
// let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];
// // Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];
// function getFind(arr2){
//   let found = 
// }


// 10. Sukurkite funkciję checkIfAllSmaller(arr, max), BE MASYVO METODŲ, kuri patikrintų ar visi skaičiai masyve yra didesni negu perduota reikšmė max;
// Pvz.: Turime masyvą: let arr1 = [2, 7, 6, 9, 5];
// Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False

// 11. Parašykite funkciją filteredByLetter, kuri turi du parametrus: 1. masyvas; 2. raidė. Funkcija sukuria ir grąžina naują masyvą, kuriame yra visi masyvo, nurodyto kaip pirmas parametras elemntai, kuriuose galima rasti antru paramatetru nurodytą raidę.
// Testuosime šį masyvą
// let citiesOfLithuania = [
//   'Vilnius',
//   'Kaunas',
//   'Klaipėda',
//   'Šiauliai',
//   'Panevėžys',
//   'Alytus',
//   'Marijampolė',
//   'Mažeikiai',
//   'Jonava',
//   'Utena',
// ];

// 12. Parašykite penkias funkcijas:
// - calculateValue()
// - addition()
// - subtraction()
// - multiplication()
// - division()

// Pagridinė funkcija bus calculateValue(num1, num2, action), kuri priims tris argumentus: a) num1 - skaičius;b) num2 - skaičius; c) action - (matematinis veiksmas kaip string pvz. “substraction”). Būtina, kad funckija validuotų ar num1 ir num2 yra skaičiai.

// Priklausomai trečio argumento (action), su pirmais dviem (num1 ir num2) bus atliekamas matematinis veiksmas ir kviečiama viena iš keturių funkcijų, kurios priims du argumentus (num1 ir num2) ir grąžins atlikta veiksmą.

// Pastaba: šios funkcijos: addition(), subtraction(), multiplication(), division() turi būti kviečiamas calculateValue() viduje, o aprašomos išorėje.
