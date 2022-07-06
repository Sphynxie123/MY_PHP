// Parašykitė funkcijas (tiek paprasta funkcija, tiek arrow) 
// kuri suskaičioja skaičiaus dalių suma panaudojant rekursiją.
// sumOfDigits(4321) => 4+3+2+1
// sumOfDigitsArrow(4321) => 4+3+2+1
function sumOfDigits(num) {
    // kandagi reikia surasti skaitmenų sumą , skaičiuojame nuo galo
    // prisiliginam skaičių 0, jeigu nulis būna nulis
    if (num === 0){
        return 0;
    } else {
        // tada numerį dalinam iš 10(liekaną) ir pridedam sveiką skaičių
        // sveiko skaičiaus tipas (parseInt) ir dalinam iš 10, ir taip toliau darom, kol baigsis skaičiai.
        return (num % 10) + sumOfDigits(parseInt(num / 10));
    }
}
console.log(sumOfDigits(5326));
let sumOfDigitsArrow = (num1) => {
    if (num1 === 0){
        return 0;
    }
    return (num1 % 10) + sumOfDigitsArrow(parseInt(num1 / 10));
}
console.log(sumOfDigitsArrow(5318));

// funkcija nuo funkcijaARROW skiriasi - 
// po funkcijos pavadinimo pridėtos lygybės = (num1) tik  => {} visą kitą taspats.
