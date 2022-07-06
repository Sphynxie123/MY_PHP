// Perrašykite šią “function declaration” būdu parašytą funkciją į “arrow function” 
// (jeigu manote, kad reikia, sutvarkykite funkcijos kūną):
// let cities = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Marijampolė"];
// function getFavoriteCity(name, surname, city) {
//     let user = `${name} ${surname}`;
//     let favoriteCity = city;
//     return `${user} favorite city is ${favoriteCity}`;
// }
// getFavoriteCity("Name", "Surname", cities[5]);

const cities = [
    "Vilnius", 
    "Kaunas",
    "Klaipėda", 
    "Šiauliai", 
    "Panevėžys", 
    "Marijampolė"
];

const getFavoriteCity = (name, surname, city) =>{
        return `${name} ${surname} favorite city is ${city}`;
    }
    console.log(getFavoriteCity("Mantas", "Luk", cities[0]));

// --------------------------------------------------Arrow funkcija parašoma su terner operatoju--------------------------------------------------------------
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

//   console.log(checkAge(17));

const getcheckAge = (age) => {
    return (age > 18) ? true : confirm('Did parents allow you?');
}
console.log(getcheckAge(19));

const min = (a, b) => {
    if (a > b){
        console.log('Number ' + a + ' yra daygiau už ' +b);
    } else if (a == b){
        console.log('Number ' + a + ' yra lygus ' +b);
    } else if (a < b){ 
        console.log('Number ' + a + ' yra mažiau už ' +b);
    }
}
min(17,17);
min(16,17);
min(17,18);

const getPlusplus = (num1, num2) => {
    for (let i = 0; i < num2; i++) {     
        num1++;  
    }
    return num1 ;
}
console.log(getPlusplus(5,9));

const getCheckNumber = (num) => {
    
    if (isNaN(num)){
        return false;
    }
    if (num % 3 == 0 && num % 5 == 0){
        return 'Skaičius dalijasi iš 3 ir iš 5';
    }
    if (num % 3 == 0){
        return 'Skaičius dalijasi iš 3';
    }
    if (num % 5 ==0){
        return 'Skaičius dalijasi iš 5';
    }
        return 'Skaičius nesidalija nei iš 3, nei iš 5';
    
}

console.log(getCheckNumber('a'));
console.log(getCheckNumber(15));
console.log(getCheckNumber(3));
console.log(getCheckNumber(5));
console.log(getCheckNumber(7));