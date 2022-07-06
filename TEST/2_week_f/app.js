// |---------------------------------------------------------------------------------------------------|
// |                                                                                                   |
// |                                    Ternary operator                                               |
// |https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator   |
// |---------------------------------------------------------------------------------------------------|
// |function checkAge(age) {                                                                           | 
// |    if (age > 18) {                                                                                |
// |      return true;                                                                                 | 
// |    } else {                                                                                       | 
// |      return confirm('Did parents allow you?');                                                    | 
// |    }                                                                                              | 
// |}                                                                                                  | 
// |---------------------------------------------------------------------------------------------------|
// function checkAge(age) {
//     // sąlyga "if ?" grąžinam true, "else :" sąlyga
//     return ((age > 18) ? true : confirm('Did parents allow you?'));
// }
// checkAge();
// |-------------------------funkcija-------------------------------------------------------------|
// Parašykite funkciją min(a, b), kuri grąžina mažiausiai iš dviejų skaičių a ir b
// Pvz.:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
//  BLOGAS BET PATINKANTIS PASIŽAISTI
// function min(num1, num2) {
//     if (num1 > num2){
//         console.log('Number ' + num1 + ' yra daygiau už ' +num2);
//     } else if (num1 == num2){
//         console.log('Number ' + num1 + ' yra lygus ' +num2);
//     } else if (num1 < num2){ 
//         console.log('Number ' + num1 + ' yra mažiau už ' +num2);
//     }
// }
// min(17,17);
// min(16,17);
// min(17,18);
// TINKANTIS VARIANTAS, bet nepatinkantis
// function min (a, b){
//     if (a>b){
//     console.log(b);
//     }else{
//     console.log(a);
//     }
// }
// min(2,5);
// function min(a,b){
//     return Math.min(a,b)
// }
// console.log(min(8,15));
// |---------------------------------------------------------------------------------------------------|
// Parašykitė funkciją plusplus kuri priima 2 parametrus:	
// skaičius	
// kiek kartu prie šio skaičiaus reikia pridėti 1
// Pvz.: plusPlus(10, 3) grąžina 13. Svarbu: turi pridėti butent 1, o ne tesiog sudėti du skaičius
// function plusPlus(a, b) {
    // i = 0 ir i mažiau už b tada pridedam po 1
//     for (let i= 0; i < b; i++){
    // numeri a pridedam po 1
//         a++; 
//     }
//     // grąžinam numerį a
//     return a;
// }
    // iškviečiam į console ir pridedam skaičius 8 + 9
//     console.log(plusPlus(8,9));
// |---------------------------------------------------------------------------------------------------|
// Parašykite funkciją checkNumber, turinčią vieną parametrą, kuri:	
// Patikrins skaičius nuo 1 iki (begalybės - 1)	
// Jei skaičius dalijamas iš 3, pamatysime "Skaičius dalijasi iš 3"	
// Jei skaičius dalijamas iš 5, pamatysime "Skaičius dalijasi iš 5"	
// Jei skaičius dalijamas iš 3 ir 5, pamatysime "Skaičius dalijasi iš 3 ir iš 5"	
// Jei skaičius nesidalija iš 3 arba 5, pamatysime Skaičius "Skaičius nesidalija nei iš 3 nei iš 5"
// Iškvietus: console.log(checkNumber(15));
// Rezultatas: "Skaičius dalijasi iš 3 ir iš 5".
// function checkNumber(num){
//     //  taip pat galima pakeisti
//     // iš num % 3 į const numMod3 = num % 3 ir įrašyti, taip apt ir su num % 5;
//     if (isNaN(num)){
//         return false;
//     }
//     if (num % 3 ===0 && num % 5 ===0){
//         return 'Skaičius dalijasi iš 3 ir iš 5';
//     }
//     if (num % 3 ===0) {
//         return 'Skaičius dalijasi iš 3';
//     } 
//     if (num % 5 ===0){
//         return 'Skaičius dalijasi iš 5';
//     } 
//         return 'Skaičius nesidalija nei iš 3 nei iš 5'; 
// }
// console.log(checkNumber(3));
// console.log(checkNumber(5));
// console.log(checkNumber(14));
// console.log(checkNumber(15));
