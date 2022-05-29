// 1 užduotis parsent pakeičia tipa? nes + ir + pvz 1 + 2 = 12???
// let num1 = parseInt(prompt('Enter Number 1:'));
// let num2 = parseInt(prompt('Enter Number 2:'));
// console.log('Sum: ', num1 +num2);

// 2 užuotis Sukurkite kodą, kuris sukurs penkis atsitiktinius skaičius (skaičiai negali būti didesni nei 10) 
// ir juos priskirs kintamiesiems, kurie turi iki dviejų skaičių po kablelio;
// Tada suraskite, kuris iš sukurtų skaičių yra:
// didžiausias;
// mažiausias.

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
// parseFloat - pasirenka random float skaičių(nuo 1 iki 10) ir po kablelio 2 reiksmes
let a = parseFloat(getRandomArbitrary(1,10).toFixed(2)),
    b = parseFloat(getRandomArbitrary(1,10).toFixed(2)),
    c = parseFloat(getRandomArbitrary(1,10).toFixed(2)),
    d = parseFloat(getRandomArbitrary(1,10).toFixed(2)),
    e = parseFloat(getRandomArbitrary(1,10).toFixed(2));
// Po 'pasirinkti skaiciai:' dedamas kablelis, specialiai + netinka nes prideda stringa, o ne išveda, nors rezultate buna šiuo atveju gerai
    console.log('Pasirinktini skaičiai: ', a, b, c, d, e);
    console.log('Didžiausias skaičius - ', Math.max(a, b, c, d, e));
    console.log('Mažiausias skaičius - ', Math.min(a, b, c, d, e));