// ---------------------------------------------------ID-------------------------------------------------------------------------------

// const btn = document.querySelector('button');
// // const firstInput = document.querySelector('first');
// // const secondInput = document.queryCommandValue('second');

// if (btn) {
//     // sukuriam Eventa, kuris veikia paspaudus 'click' iškviečia funkcija button
//     btn.addEventListener('click', button)
// }
// function button(){
//     // pasirenkam pagal id inputa second reikšme ir prilyginam iš kurio id perkelti su reikšme, šiuo metu #first
//     // #second prilygynam pirmai reikšmei #first
//     document.querySelector('#second').value = document.querySelector('#first').value;    
// }
// ---------------------------------------------------Name-------------------------------------------------------------------------------
const copyInput =  document.getElementsByName('copy');

const pasteInput = document.getElementsByName('paste');

const buttonCopy = document.querySelector('button')

function copyPaste (){
    pasteInput[0].value = copyInput[0].value;
    pasteInput?.pasteInput;
    copyInput?.copyInput;
}


buttonCopy?.addEventListener('click', copyPaste)

// ?. if