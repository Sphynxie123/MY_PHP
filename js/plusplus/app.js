// Parašykitė funkciją pluspluskuri priima 2 parametrus:
// skaičius
// kiek kartu prie šio skaičiaus reikia pridėti 1
// Pvz.: plusPlus(10, 3) grąžina 13. Svarbu: turi pridėti butent 1, o ne tesiog sudėti du skaičius

// function plusPlus(a, b) {
    
//     for (let i= 0; i < b; i++){
//         a++; 
//     }
//     return a;
// }
//     console.log(plusPlus(8,9));

// function plusPlus(num1, num2) {
//     for (let i = 0; i < num2; i++) {
//       num1 += 1;          
//     }
//   }
//   plusPlus(5, 3);

// function sumPlus(number, count) {
//     for (let i = 0; i < count; i++) {
//         number++;       
//     }
//     return number;
// }
// console.log(sumPlus(5, 5));
// -------------------------------------factorial užduotis 5! = 5*4*3*2*1-------------------------------------
// function factorial(a){
//     if (a === 0){
//         return 1;
//     } else {
//         return a * factorial(a-1);
//     }
// }
// console.log(factorial(4));
// --------------------------------------------------------------------------Užduotis--------------------------------------------------------------------------
// Parašykitė funkcijas (tiek paprasta funkcija, tiek arrow) kuri suskaičioja skaičiaus dalių suma panaudojant rekursiją.
// sumOfDigits(4321) => 4+3+2+1
// sumOfDigitsArrow(4321) => 4+3+2+1
// --------------------------------------------------------------------------Užduotis--------------------------------------------------------------------------
// |-------------------------------------Note------------------------------------------------------------|
// |dalinama % 10 liekana, pvz,  5326 % 10 6+2+3+5, skaičiuojama iš galo iki kol liekana 0 tampa.        |
// |                                                                                                     |
// |-------------------------------------Note------------------------------------------------------------|

// function sumOfDigits(a) {
//     if (a === 0){
//         return 0;
//     } else {
//         return a + sumOfDigits(a-1);
//     }
// }
// console.log(sumOfDigits(8));

// let sumOfDigitsArrow = (a) =>{
//     if (a === 0){
//         return 0;
//     }
//     return a + sumOfDigitsArrow(a-1);
// };
// console.log(sumOfDigitsArrow(8));
// --------------------------------------------------------------------------recursija funkcija pati save išsikviečia--------------------------------------------------------------------------
// function sumOfDigits(number) {
//     if (number == 0) {
//         return 0;
//     }
//     let remainder = number % 10;
//     let remainNum = Math.floor(number / 10);
//     return remainder + sumOfDigits(remainNum);
// }
// const sumOfDigitsArrow = number => 
//     number ? 
//     (number % 10) + sumOfDigitsArrow(Math.floor(number / 10)) : 
//     0;

// console.log(sumOfDigitsArrow(6321));

// |------------------------------------------NOTE ------------------------------------------------------------------------------------- |
// |f-ja Math.floor() grąžina didžiausią sveikąjį skaičių arba jam lygų skaičių apvalina skaiciu į mažesnę pusę.                         |
// |------------------------------------------NOTE ------------------------------------------------------------------------------------- |
// function sumOfDigits(number) {
//     if (number == 0) {
//         return 0;
//     }
//     let remainder = number % 10;
//     let remainNum = Math.floor(number / 10);
//     return remainder + sumOfDigits(remainNum);
// }
// const sumOfDigitsArrow = number => 
//     number ? 
//     (number % 10) + sumOfDigitsArrow(Math.floor(number / 10)) : 
//     0;
// F-ja parseInt - grąžina sveikąjį skaičių.
// function sumOfDigits(a) {
//     if (a === 0) {
//         return 0;
//     } else {
//         return (a % 10) + sumOfDigits(parseInt(a / 10));
// |-------------------------------------Note------------------------------------------------------------|
// |dalinama % 10 liekana, pvz,  5326 % 10 6+2+3+5, skaičiuojama iš galo iki kol liekana 0 tampa.        |
// |                                                                                                     |
// |-------------------------------------Note------------------------------------------------------------|
//     }
// }
// console.log(sumOfDigits(5326));

// let sumOfDigitsArrow = (a) => {
// if (a === 0) {
//     return 0;
// }
// return (a % 10) + sumOfDigitsArrow(parseInt(a / 10));
// };
// console.log(sumOfDigitsArrow(5326));
// |-------------------------------------------------------------------------------------------------------------------------------------| 
// |https://developer.mozilla.org/en-US/docs/Web/API/console/assert ???????????                                                          |
// |Metodas console.assert() į konsolę įrašo klaidos pranešimą, jei tvirtinimas klaidingas. Jei teiginys yra teisingas, nieko neįvyksta. |
// |-------------------------------------------------------------------------------------------------------------------------------------| 

// Perrašykite šią “function declaration” būdu parašytą funkciją į “arrow function” (jeigu manote, kad reikia, sutvarkykite funkcijos kūną):

// let cities = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Marijampolė"];
// function getFavoriteCity(name, surname, city) {
//     let user = `${name} ${surname}`;
//     let favoriteCity = city;
//     return `${user} favorite city is ${favoriteCity}`;
// }
// getFavoriteCity("Name", "Surname", cities[5]);

// let cities = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Marijampolė"];
// const getFavoriteCity = (name, surname, city) => `${name} ${surname} favorite city is ${city}`;

// getFavoriteCity("Vardas", "Pavarde", cities[5]);

// console.log(getFavoriteCity("Mantas", "Luk", cities[1]));
// |-------------------------------------------------------------------------------------------------------------------------------------|
// Parašykite funkciją checkNumber, turinčią vieną parametrą, kuri:	
// Patikrins skaičius nuo 1 iki (begalybės - 1)	
// Jei skaičius dalijamas iš 3, pamatysime "Skaičius dalijasi iš 3"	
// Jei skaičius dalijamas iš 5, pamatysime "Skaičius dalijasi iš 5"	
// Jei skaičius dalijamas iš 3 ir 5, pamatysime "Skaičius dalijasi iš 3 ir iš 5"	
// Jei skaičius nesidalija iš 3 arba 5, pamatysime Skaičius "Skaičius nesidalija nei iš 3 nei iš 5"
// Iškvietus: console.log(checkNumber(15));
// Rezultatas: "Skaičius dalijasi iš 3 ir iš 5".
// |-------------------------------------------------------------------------------------------------------------------------------------|

// function checkNumber (a){
//     if (a % 3 === 0 && a % 5 ===0){
//         return "Skaičius dalijasi iš 3 ir 5 ";
//     }
//     if (a % 3 != 0 && a % 5 != 0 ){
//         return "Skaičius nesidalina iš 3 ir 5 ";
//     }
//     if (a % 3 === 0) {
//         return "Skaičius dalijasi iš 3 ";
//     } 
//     if (a % 5 === 0){
//         return "Skaičius dalijasi iš 5 ";
//     }else {
//         return "Tai ne skaičius";
//     }  
    
// }

// console.log(checkNumber(7));
// console.log(checkNumber(15));
// console.log(checkNumber(1));
// console.log(checkNumber(30));


for (let x= 9; x>= 1; x--) {
    console.log("hello " +x);
}