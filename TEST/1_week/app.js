// ---------------------------------------------------------------------------------------------------
// Sukurkite kodą, kuris lankytoją ragina įvesti du skaičius ir parodo jų sumą.

// let num = prompt('Enter nummber: '),
//     num2 = prompt('Enter second number: ');
// console.log('sum :', +num + +num2);
// -------------Arba-------------
// parseInt todėl nereikia console.log deti tiek daug +
// let num1 = parseInt(prompt('Enter Number 1:'));
// let num2 = parseInt(prompt('Enter Number 2:'));
// console.log('Sum: ', +num1 +num2);
// ---------------------------------------------------------------------------------------------------
// Sukurkite kodą, kuris sukurs penkis atsitiktinius skaičius (skaičiai negali būti didesni nei 10) ir juos priskirs kintamiesiems, kurie turi iki dviejų skaičių po kablelio;
// Tada suraskite, kuris iš sukurtų skaičių yra:
// didžiausias;	
// mažiausias.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Pasirenkam random skaičius
// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }
// Pasirenkam tipą float, nes du skaičiai po kablelio ir apsibrežiam skaičių min max, tada pasirenkam, kad būtu du skaičiai po kableio toFixed(2)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
// let a = parseFloat(getRandomArbitrary(1,10).toFixed(2)),
//     b = parseFloat(getRandomArbitrary(1,10).toFixed(2)),
//     c = parseFloat(getRandomArbitrary(1,10).toFixed(2)),
//     d = parseFloat(getRandomArbitrary(1,10).toFixed(2)),
//     e = parseFloat(getRandomArbitrary(1,10).toFixed(2)),
//     f = parseFloat(getRandomArbitrary(1,10).toFixed(2));

// console.log(a, b, c, d, e, f);

// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// console.log('Didžiausias yra: ', Math.max(a, b, c, d, e, f));

// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
// console.log('Mažiausias yra: ', Math.min(a, b, c, d, e, f));
// ---------------------------------------------------------------------------------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
// https://www.w3schools.com/jsref/jsref_regexp_tab.asp
//      I am a "double quoted" string inside "double quotes„;
// FirstLine;	
// \SecondLine;	
// ThirdLine.

// console.log('\tI am a "double quoted" string inside "double quotes„;\nFirstLine;\n\\SecondLine;\nThirdLine.');

// ---------------------------------------------------------------------------------------------------

// Sukurkite du kintamuosius x ir y ir priskirkite jiems reikšmes 50 ir 10.
// Atlikite šiuos veiksmus, naudodami operatorius, su  sukurtais kintamaisiais:	
// Sukuriamas naujas kintamasis “sum”, kuris yra lygus x kintamojo vertei sudėtai su y kintamuoju; 	
// Sukuriamas naujas kintamasis “difference”, kuris yra lygus x kintamojo vertei skirtumui su y kintamuoju;	
// Sukuriamas naujas kintamasis “multiplication”, kuris yra lygus x kintamojo vertei padaugintai iš y kintamuoju; 	
// Sukuriamas naujas kintamasis “division”, kuris yra lygus x kintamojo vertei padalintai iš y kintamuojo.

// let x = 50,
//     y = 10,
//     sum = x + y,
//     difference = x - y,
//     multiplication = x * y,
//     division = x / y;

//     console.log(sum);
//     console.log(difference);
//     console.log(multiplication);
//     console.log(division);
// ---------------------------------------------------------------------------------------------------
// Sukurkime aplanką pavadinimu “Strings” ir jame inicijuokime du failus index.html ir script.js.	
// Index.html faile patalpinime startinį kodą, kuriame būtų pirminiai, privalomi tag’ai (<html>, <head>, <body> su privalomais child tag’ai);	
// Index.html failo <body> tag’o viduje susikurkime tuščią <div> turintį id=”main”;	
// index.html ir script.js susiekime „External JavaScript“ būdu (prieš <head> arba </body> tag’us);	
// Atsidarome script.js failą ir sukuriame kintamąjį “userInfoOutput”, kuriam priskiriame index.html faile esantį <div> su id=”main” (naudokite: document.getelementbyid());	
// Susikurkite objektą “user”, kuriam nurodykite šias savybes: vardas, pavardė;	
// Kintamąjam userInfoOutput naudojant “.innerHTML =” DOM nuosavybę ir atgalinius klavišus (backticks) t.y. ``,
// sukurkite H2 tag, kuris, nurodo “User Information” ir <p> tag’ą, kuriame pateiktas, toks sakinys “Vartotojo vardas yra (vardas), o pavardė (pavardę).”

// let userInfoOutput = document.getElementById('main');

// let user = {
//     name: "Mantas",
//     lastName: "Luk"
// };

// userInfoOutput.innerHTML = `<h2>User information</h2>
//                         <p>Vartotojo vardas yra ${user.name}, o pavardė ${user.lastName}.</p>`;
// // jeigu nori pridėti prie esančio teksto prideti userInfoOutput.innerHTML = + userInfoOutput.innerHTML .....
// ---------------------------------------------------------------------------------------------------

// Parašykite if...else sąlygą, kuri:	
// consolė’je atspausdins lyginis“, jei skaičius yra lyginis skaičius;	
// consolė’je atspausdins „nelyginis“, jei skaičius yra nelyginis skaičius.
// Įsitikinkite, kad išbandėte savo kodą su skirtingomis vertėmis.
// Pvz.: Jei skaičius lygus 1, tada konsolėje turėtų būti atspausdinama “nelyginis”.

// let number = + prompt('Įveskite skaičių');
// // 2, nes tikrinam ar lyginis skaičius
// if (number % 2 == 0) {
//     console.log('Lyginis skaičius');
// } else {
//     console.log('Nelyginis skaičius');
// }
// ---------------------------------------------------------------------------------------------------
// if/else 
// Muzikinės grupės turi specialius pavadinimus pagal žmonių skaičių grupėje. Pvz., „kvartetas“ yra muzikinė grupė, kurią sudaro keturi muzikantai.
// Parašykite sąlyginių teiginių seriją (else...if statements), kuri:	
// Atspausdins consolėje "ne grupė" jei muzikantų yra mažiau ar lygu 0;	
// Atspausdins consolėje "solo" jei muzikantų yra 1;	
// Atspausdins consolėje "duetas" jei muzikantų yra 2;	
// Atspausdins consolėje "trio" jei muzikantų yra 3;	
// Atspausdins consolėje "kvartetas" jei muzikantų yra 4;	
// Atspausdins consolėje "didelė grupė" jei muzikantų yra daugiau nei 4.
// Įsitikinkite, kad išbandėte savo kodą su skirtingomis vertėmis.
// Pvz., Jeigu muzikantų yra 3, tada "trio" turi būti atspausdinama consolėje.

let number = +prompt('Įveskite muzikantų skaičių');

if (number <= 0) {
    console.log('Ne grupė');
} else if (number == 1) {
    console.log('Solo');
} else if (number == 2) {
    console.log('Duetas');
} else if (number == 3) {
    console.log('Trio');
} else if (number == 4) {
    console.log('Kvartetas');
} else if (number >= 5) {
    console.log('Didelė grupė'  );
} else {
    console.log('Tai yra ne skaičius');
}