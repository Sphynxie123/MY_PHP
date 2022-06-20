// masyvas info
const companies = [
    [
        'Alfreds Futterkiste',
        'Maria Anders',
        'Germany',
    ],
    [
        'Centro comercial Moctezuma',
        'Francisco Chang',
        'Mexico',
    ],
    [
        'Ernst Handel',
        'Roland Mendel',
        'Austria',
    ],
    [
        'Island Trading',
        'Helen Bennett',
        'UK',
    ],
    [
        'Laughing Bacchus Winecellars',
        'Yoshi Tannamuri',
        'Canada',
    ],
    [
        'Magazzini Alimentari Riuniti',
        'Giovanni Rovelli',
        'Italy',
    ],
];
// // visa sita sukeliam i cikla ------------------------------------------------------------------------
// // pasirenkam id companies lenteleje > tbody
// const companiesTbody = document.querySelector('#companies > tbody');
// window.addEventListener('DOMContentLoaded', (e) =>{
//     const tr = document.createElement('tr');

//     const tdCompany = document.createElement('td');
//     // sukuriam teksta si pavyzdi taikyti geriausia
//     const newContent = document.createTextNode('Alfreds Futterkiste');
//     // i td ikeliam teksta
//     tdCompany.appendChild(newContent);

//     const tdContact = document.createElement('td');
//     tdContact.textContent = 'Maria Anders';
    
//     const tdCountry = document.createElement('td');
//     tdCountry.innerText = 'Germany';
    
//     // // sukurem tbody html'e programiskai
//     companiesTbody.appendChild(tr);
//     // sukuriam html tr ir atvaizduojame jame.
//     tr.appendChild(tdCompany);
//     tr.appendChild(tdContact);
//     tr.appendChild(tdCountry);
//     console.log(tr)
//     console.log(tdCompany, tdContact, tdCountry);
// });
// // ---------------------------------------------------------------------------------------------------
// // ismeta visas vienodas reiksmes kaip ir pirma eilute---------------------------------------------------
// const companiesTbody = document.querySelector('#companies > tbody');
// window.addEventListener('DOMContentLoaded', (e) =>{
//     for (let company of companies) {       
    
//         const tr = document.createElement('tr');

//         const tdCompany = document.createElement('td');    
//         const newContent = document.createTextNode('Alfreds Futterkiste');
//         tdCompany.appendChild(newContent);

//         const tdContact = document.createElement('td');
//         tdContact.textContent = 'Maria Anders';
        
//         const tdCountry = document.createElement('td');
//         tdCountry.innerText = 'Germany';

//         companiesTbody.appendChild(tr);

//         tr.appendChild(tdCompany);
//         tr.appendChild(tdContact);
//         tr.appendChild(tdCountry);
//         console.log(tr)
//         console.log(tdCompany, tdContact, tdCountry);
//     }
// });
// // ---------------------------------------------------------------------------------------------------

// const companiesTbody = document.querySelector('#companies > tbody');
// window.addEventListener('DOMContentLoaded', (e) =>{
//     for (let company of companies) {       
    
//         const tr = document.createElement('tr');

//         const tdCompany = document.createElement('td');
//         // vietoj teksto document.createTextNode('Alfreds Futterkiste') irasome company[0]
//         const newContent = document.createTextNode(company[0]);
//         tdCompany.appendChild(newContent);

//         const tdContact = document.createElement('td');
//         tdContact.textContent = company[1];
        
//         const tdCountry = document.createElement('td');
//         tdCountry.innerText = company[2];

//         companiesTbody.appendChild(tr);

//         tr.appendChild(tdCompany);
//         tr.appendChild(tdContact);
//         tr.appendChild(tdCountry);
//         console.log(tr)
//         console.log(tdCompany, tdContact, tdCountry);
//     }
// });
// ----------------------------------------Sukuriam funkcija-----------------------------------------------------------
const companiesTbody = document.querySelector('#companies > tbody');
function createTdWithText(text){
    const td = document.createElement('td');
    const textNode = document.createTextNode(text);

    td.appendChild(textNode);

    return td;
}
window.addEventListener('DOMContentLoaded', (e) =>{
    for (let company of companies) {    
        const tr = document.createElement('tr');

        companiesTbody.appendChild(tr);
        // iskvieciam funkcija ir perduodam teksta
        // nesukamas ciklas nes jau masyve turime reiksmes
        tr.appendChild(createTdWithText(company[0]));
        tr.appendChild(createTdWithText(company[1]));
        tr.appendChild(createTdWithText(company[2]));

        // console.log(tr)
        // console.log(tdCompany, tdContact, tdCountry);
    }
});
// ---------------------------------------------------------------------------------------------------
