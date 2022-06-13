// ---------------------------------------------------ID-------------------------------------------------------------------------------

const btn = document.querySelector('button');
const first = document.querySelector('#first');
const second = document.querySelector('#second');

if (btn) {
    // sukuriam Eventa, kuris veikia paspaudus 'click' iškviečia funkcija button
    btn.addEventListener('click', button)
}
function button(){
    if (second && first) {
    // pasirenkam pagal id inputa second reikšme ir prilyginam iš kurio id perkelti su reikšme, šiuo metu #first
    // #second prilygynam pirmai reikšmei #first
        second.value = first.value; 
    }   
}
// ---------------------------------------------------Name-------------------------------------------------------------------------------
// const copyInput =  document.getElementsByName('copy');

// const pasteInput = document.getElementsByName('paste');

// const buttonCopy = document.querySelector('button')

// function copyPaste (){
//     // patikrinimas pirmas masyvo elementas [0] in mygtukas kuriame atsiranda testas ir [0], i6 kurio paduodama
//     if (0 in pasteInput && 0 in copyInput) {
//         pasteInput[0].value = copyInput[0].value;
//     }
// }
// buttonCopy?.addEventListener('click', copyPaste);

// ?. if