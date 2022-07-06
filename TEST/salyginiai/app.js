// Parašykite funkciją, pavadintą getLaugh(), 
// kuri turi vieną parametrą, skaičių, kuris žymi sugrįžtančių „ha“ skaičių.
// Iškvietus: console.log(laugh(4));
// Rezultatas: "hahahaha!" 
// P.S.
// Padarykite po 1 variantą su kievienu ciklu. [WHILE, DO-WHILE, FOR]

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
    // // ha kartojasi 4 kartus
    // console.log(getLaughFor(4)+ '!');
    // console.log(getLaughWhile(4)+ '!');
    // console.log(getLaughDoWhile(4)+ '!');

 const getLaughFor = (ha) => {
    msg = '';

    for (let i = 0; i < ha; i++) {
       msg = msg + 'ha';        
    }
    return msg;
 }
 const getLaughWhile = (ha) => {
    let msg = '';
    let i = 0;
    while (i < ha) {
        msg +='ha';
        i++;    
    }
    return msg; 
 }
const getLaughDoWhile = (ha) => {
    let msg = '';
    let i = 0;
    do {
        i++;
        msg += 'ha';
    } while (i < ha);
    return msg;
}
 
 console.log(getLaughFor(4)+'!');
 console.log(getLaughWhile(4)+'!');
 console.log(getLaughDoWhile(4)+'!');
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// Praeina tiek per objekta tiek per masyva ir paima jų(masyvo, objekto) numeri 0,1,2 - 3 ([0],[1],[2] -3)
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// Gražina pačias reikšmes a, b, c.
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 const arr = ['a', 'b', 'c'];
// gali buti ir let index(i) in arr
 for (const index in arr) {
    // čia turi būti console
   console.log(index);
 }
 for (const i of arr){
    console.log(i);
 }

//  const getHighestNumber = (num) => {
//     for (const i of arr){
        
//      }
//     return getHighestNumber;
//  }
//  console.log(getHighestNumber(34,7,8,55,6,7,9,52,56));
// tokiu atvėju galima praleisti {return}
const getHighestNumber = (...arr2) => Math.max(...arr2)

console.log('Rezultas:',getHighestNumber(34,7,8,55,6,7,9,52,56), 'didžiausias skaičius');

 



 


