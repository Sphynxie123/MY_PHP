// tol kol true pirma patikrina sąlyga
// let i = 0;
// while(i<5) {
//     console.log(i);
//     i++;
// }

// i = 1;
// while(i<=5) {
//     console.log(i);
//     i++;
// }

// for

// for (let i = 0; i < 5; i++) {
//    console.log(i);
    
// }

// for (let j = 0; j <= 5; j++) {
//     console.log(j);
    
// }
// ---------------------------------------------------------------------------------------------------------
// Parašykite funkciją, pavadintą getLaugh(), kuri turi vieną parametrą, 
// skaičių, kuris žymi sugrįžtančių „ha“ skaičių.
// Iškvietus: console.log(laugh(4));
// Rezultatas: "hahahaha!"

// function getLaughFor(ha){
// // sukuriam tuščia žinute
//     let msg = '';
//     for (let i = 0; i < ha; i++) {
// // į tuščią žinutę įrašom ha ir eina pagal sąlygą
//         msg +='ha';
        
//     }
// // pridedam gale ! būtinai reikia RETURN
//     return msg;
// }

// function getLaughWhile(ha){
// // sukuriam tuščia žinute
//     let msg = '';
//     let i = 0;
//     while (i < ha) {
// // į tuščią žinutę įrašom ha ir eina pagal sąlygą
//         msg += 'ha';
//         i++;
//     }
//     return msg ;
// }
// function getLaughDoWhile (ha){
// // sukuriam tuščia žinute
//     let msg = '';
//     let i = 0;
//     do {
// // į tuščią žinutę įrašom ha ir eina pagal sąlygą
//         msg +='ha';
//         i++;
//     } while (i < ha);
//     return msg;
// }
// console.log(getLaughFor(4)+ '!');
// console.log(getLaughWhile(4)+ '!');
// console.log(getLaughDoWhile(4)+ '!');
// ---------------------------------------------------------------------------------------------------------
// Parašykite funkciją (arrow function), pavadintą getHighestNumber(), 
// kuri turi vieną parametrą, kuris žymi visus galimus įvesti skaičius. 
// Funkcijos tikslas yra leisti vartotojui, kaip argumentus nurodyti bet kokius skaičius 
// ir grąžinama bus didžiausias skaičius iš visų nurodytų.
// Patarimas: gali prireikti (...args) kaip parametro!
// Iškvietus: console.log(getHighestNumber(34,7,8,55,6,7,9,52,56);
// Rezultatas: "56" – didžiausias skaičius
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// ---------------------------------------------------------------------------------------------------------

// (...args) <--gali būti args bet kas  paima reikšmes (Math.max(34,7,8,55,6,7,9,52,56)
// Math.max(...args) - randa didžiausią skaičių

let getHighestNumber = (...args) => Math.max(...args);
      console.log(getHighestNumber(34, 7, 8, 55, 6, 7, 9, 52, 56)+ ' - didžiausias skaičius');
