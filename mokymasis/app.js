// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

//   console.log(checkAge(17));


// let age = 0;

// let result = (age > 18) ? true : confirm('Did parents allow you?');

// console.log('20');

const getCheckAge = (age) => {return (age > 18) ? true : confirm('Did parents allow you?');}
console.log(getCheckAge(19));

let cities = [
   "Vilnius", 
   "Kaunas",
   "Klaipėda", 
   "Šiauliai", 
   "Panevėžys", 
   "Marijampolė"
];

let getFavoriteCity = (name, surname, city) => {
   return `${name} ${surname} favorite city is ${city}`;
}

console.log(getFavoriteCity("Mantas", "Luk", cities[0]));