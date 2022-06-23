// Naudojant ES6 klases sukurkite objekto Filmas (Movie) kūrimo konstruktorių, kuris turės šias savybes: 
// 1. name; 2. year; 3. director; 4. budget; 5. income.
// ir metodus: 
// 1. getIntroduction, kuris grąžins filmo pilną pavadinimą (su name, year, director); 
// 2. getProfit, kuris grąžins sumą, kurią uždirbo (pelną) filmas.
// Testavimui, sukurkite du filmus, kurie turės nurodytas savybes ir metodus.

let Dzon = new Movie('Mantas', 1999, 'Director1', 5000, 1000000,);
let Tom = new Movie('Thomas', 2005, 'Director2', 10000, 5000000);
console.log(Dzon);
console.log(Dzon.getIntroduction());
console.log(Dzon.getProfit());

console.log(Tom);
console.log(Tom.getIntroduction());
console.log(Tom.getProfit());