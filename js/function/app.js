// -----------------------------ternary operator ? ----------------------------------------------------
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
// }

// function checkAge(age) {
    // return ((age > 18) ? true : confirm('Did parents allow you?'));
// IF (age > 18) gražiam "?" true kitu atvėju else ":" grąžinam confirn
// }
    // checkAge();
// ---------------------------------------------------------------------------------

// if … else if … else if … else
// if ? else :
// function example(…) {
//     return condition1 ? value1
//          : condition2 ? value2
//          : condition3 ? value3
//          : value4;
// }
// ---------------------------------------------------------------------------------
// Parašykite funkciją min(a, b), kuri grąžina mažiausiai iš dviejų skaičių a ir b
// Pvz.:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
// function min (a, b){
//     if (a>b){
//     console.log(b);
//     }else{
//     console.log(a);
//     }
// }
// min(2,5);

// geriau daryti:
// function min(a, b) {
//     return Math.min(a,b);
// }
// ---------------------------------------------------------------------------------
