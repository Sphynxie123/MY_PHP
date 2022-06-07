// let arrSimple = [
//     'Kunigunda',
//     'Jonas',
//     'Novaldas'
// ];

// console.log(arrSimple, arrAsObject);
// console.log(arrSimple[2]);

// let arrMusic = [
//     'Jazz',
//     'Blues'
// ];
// console.log(arrMusic);

// arrMusic.push('Rock-n-Rol');
// console.log(arrMusic);

// arrMusic[1] ='Classics';
// console.log(arrMusic);
// // išimam ir iškviečiam, kad matytusi.
// console.log(arrMusic.shift());

// arrMusic.unshift('Rap','Reggae');
// console.log(arrMusic);

// ------------------------------------------Užduotis------------------------------------------------------------------------------------
// let arr = [11, -2, 34, 45, 19, 6];
// Sukurkite funkciją`getMaxSubSum(arr)`, kuri sugrąžins masyvo (Array) visų įvestų skaičių, kurie yra didesni nei 0 sumą.
// --------------------------------------------------------------------------------------------------------------------------------------
// let arr = [11,-2,34, 45, 19, 6];
// // pirmas elementas masyvas nuo 0 antras elementas kiek išmesti, trečias į kokį pakeisti. Galima ir išmesti pvz arr.splice(0,1);
// // arr.splice(0,1,12);
// // arr.splice(0,1);

// function getMaxSubSum(arr) {
//     // susikuriam "suma"
//     let sum= 0;
//     // ciklas tikrina masyve. pradeda nuo 0, nes teigiami, o arr.length visas masyvo ilgis
//     for (let i = 0; i < arr.length; i++) {
//     // tada tikrinam po viena elementa jeigu masyvas daugiau už nulį
//         if (arr[i] > 0){
//     // prie kiekvieno skaičiaus pridedam skaičiaus sumą
//             sum = sum + arr[i];
//         }         
//     }
//     // grąžinam sumą
//     return sum;
// }
// // console.log(arr);
// console.log(getMaxSubSum(arr));
// // The console.assert() method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
// console.assert(getMaxSubSum(arr) == 115, 'msg');
// ------------------------------------------Užduotis šiaip------------------------------------------------------------------------------
// const elements = ['M', 'A', 'N','T', 'A', 'S'];
// const elements = ['Sun', 'Earth', 'Moon'];

// console.log(elements.join());
// // output: "Sun,Earth,Moon"

// console.log(elements.join(''));
// output: MANTAS
// console.log(elements.join('-'));
// output: "Sun-Earth-Moon"
// --------------------------------------------------------------------------------------------------------------------------------------