// Sukurkime aplanką pavadinimu “Strings” ir jame inicijuokime du failus index.html ir script.js.	
// Index.html faile patalpinime startinį kodą, kuriame būtų pirminiai, privalomi tag’ai (<html>, <head>, <body> su privalomais child tag’ai);	
// Index.html failo <body> tag’o viduje susikurkime tuščią <div> turintį id=”main”;	
// index.html ir script.js susiekime „External JavaScript“ būdu (prieš <head> arba </body> tag’us);

// Atsidarome script.js failą ir sukuriame kintamąjį “userInfoOutput”, kuriam priskiriame index.html faile esantį <div> su id=”main” (naudokite: document.getelementbyid());	
// Susikurkite objektą “user”, kuriam nurodykite šias savybes: vardas, pavardė;
	
// Kintamąjam userInfoOutput naudojant “.innerHTML =” DOM nuosavybę ir atgalinius klavišus (backticks) 
// t.y. ``, sukurkite H2 tag, kuris, nurodo “User Information” ir 
// <p> tag’ą, kuriame pateiktas, toks sakinys “Vartotojo vardas yra (vardas), o pavardė (pavardę).”

// let userInfoOutput = document.getElementById('main');
// // object creation
// let user = {
//     name: "Mantas",
//     lastname: "Luk"
// };

// userInfoOutput.innerHTML = `<h2>User information</h2>
//                   <p>Vartotojo vardas yra ${user.name}, o pavardė ${user.lastname}.</p>`;
// arba
// userInfoOutput.innerHTML = userInfoOutput.innerHTML + `<h2>User information</h2>
// <p>Vartotojo vardas yra ${user.name}, o pavardė ${user.lastname}.</p>`;
// --------------------------------------------------------------------------------------------------------
// Parašykite if...else sąlygą, kuri:	
// consolė’je atspausdins lyginis“, jei skaičius yra lyginis skaičius;	
// consolė’je atspausdins „nelyginis“, jei skaičius yra nelyginis skaičius.
// Įsitikinkite, kad išbandėte savo kodą su skirtingomis vertėmis.
// Pvz.: Jei skaičius lygus 1, tada konsolėje turėtų būti atspausdinama “nelyginis”.

// let number = + prompt("Įveskite skaičių: ");
// if(number % 2 == 0) {
//     console.log("Lyginis skaičius");
// }else {
//     console.log("Nelyginis skaičius");
// }

// let x = 6;

// if (x % 2 == 0){
//     console.log("Skaicius yra lyginis");
// } else {
//     console.log("skaicius ne lyginis");
// }

// let number = +prompt("Įveskite žmonių grupę");

// if (number <= 0){
//     console.log("Ne grupė");
// } else if (number == 1){
//     console.log("Solo");
// } else if (number == 2) {
//     console.log("Duetas");
// } else if (number == 3) {
//     console.log("Trio");
// } else if (number == 4){
//     console.log("Kvartetas");
// } else if (number >4){
//     console.log("Didelė grupė");
// } else {
//     // apsisaugojimas, kad ne skaicius
//     console.log('Error');
// }
// ------------------------------------------------------------------------------------------------------------------------


