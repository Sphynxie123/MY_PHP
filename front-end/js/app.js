let btn = document.querySelector('.btn');

btn?.addEventListener('click', () => alert('Hello World!'));

let inputCaseChange = document.querySelector('#input-case-change');

document.querySelector('#to-upper-case')?.addEventListener('click', () =>{
    
    // console.log(inputCaseChange.value);
    inputCaseChange.value = inputCaseChange.value.toUpperCase();
});

document.querySelector('#to-lower-case')?.addEventListener('click', () =>{    
    // console.log(inputCaseChange.value);
    inputCaseChange.value = inputCaseChange.value.toLowerCase();
});

function capitalizeFirstLetter(inputCaseChange) {
    // paimam pirma raide charAt(0) ir pakeičiam didžiaja. Sustojam ties slice(1) (pirma raide)
    return inputCaseChange.value.charAt(0).toUpperCase() + inputCaseChange.value.slice(1);
}
// jei id dedam #.....
document.querySelector('#first-upper-case')?.addEventListener('click', () =>{
       
    inputCaseChange.value = capitalizeFirstLetter(inputCaseChange);
});
function writeInLowerCaseFirstLetter(inputCaseChange) {
    return inputCaseChange.value.charAt(0).toLowerCase() + inputCaseChange.value.slice(1);
}
document.querySelector('#first-lower-case')?.addEventListener('click', () =>{
    
    inputCaseChange.value = writeInLowerCaseFirstLetter(inputCaseChange);
});

let idEmail = document.querySelector('#email');
let idPhone = document.querySelector('#phone');
let btnSave = document.querySelector('#btnSave');
let emailCheck = document.querySelector('#emailCheck');
let phoneCheck = document.querySelector('#phoneCheck');
// console.log(idEmail);
btnSave?.addEventListener('click', function() {        
    if (!idEmail.value.includes('@') && idPhone.value == "") {
        idEmail.classList.add('is-invalid');
        emailCheck.style.display = 'block';
        idPhone.classList.add('is-invalid');
        phoneCheck.style.display = 'block';
    }else if (!idEmail.value.includes('@')) {
        idEmail.classList.add('is-invalid');
        emailCheck.style.display = 'block';
        idPhone.classList.remove('is-invalid');
        phoneCheck.style.display = 'none';
    }else if (idPhone.value == "") {
        idPhone.classList.add('is-invalid');
        phoneCheck.style.display = 'block';
        idEmail.classList.remove('is-invalid');
        emailCheck.style.display = 'none';
    }
});

// let btnBlock = document.querySelector('#block');
// let btnUnblock = document.querySelector('#unblock');

// btnBlock?.addEventListener('click', () => document.querySelector("#inpBlockUnblock").disabled = true);
// btnUnblock?.addEventListener('click', () => document.querySelector("#inpBlockUnblock").disabled = false);
// arba
let inpBlockUnblock = document.querySelector("#inpBlockUnblock");

document.querySelector('#block')?.addEventListener('click', () => inpBlockUnblock.disabled = true);
document.querySelector('#unblock')?.addEventListener('click', () => inpBlockUnblock.disabled = false);

let img = document.querySelector('#image');
// keičiasi foto užvedant pele ir patraukiant
img?.addEventListener('mouseenter', function() {
    img.setAttribute('src', 'https://i.imgur.com/PLDVxza.jpg');
});
img?.addEventListener('mouseleave', function() {
    img.setAttribute('src', 'https://i.imgur.com/0DElr0H.jpg');
});
// Cursor
// function myCursorPointer() {
//     document.querySelector('#colorText').style.cursor = 'pointer';
// }
// let cursorPointer = document.querySelector('#cursorPointer');
// function myCursorPointer() {
//     document.querySelector('#colorText').style.cursor = 'pointer';
// }
// cursorPointer?.addEventListener('click', () => {
//     myCursorPointer();
// });
// arba apačioje

let colorText = document.querySelector('#colorText');

cursorPointer?.addEventListener ('click', ()=> colorText.style.cursor = 'pointer');
cursorText?.addEventListener('click', () => colorText.style.cursor = 'text');
cursorHelp?.addEventListener('click', () => colorText.style.cursor = 'help');
// text color

colorRed?.addEventListener('click', () => colorText.style.color = "red");
colorGreen?.addEventListener('click', () => colorText.style.color = "green");
colorBlue?.addEventListener('click', () => colorText.style.color = "blue");
// border color

// kodel netinka borderColor = "1px solid red"; ????
borderColorRed?.addEventListener('click', () => colorText.style.outline = "1px solid red");
borderColorGreen?.addEventListener('click', () => colorText.style.outline = "1px solid green");
borderColorBlue?.addEventListener('click', () => colorText.style.outline = "1px solid blue");

function myResetAll() {
    colorText.style.color = "";
    colorText.style.outline = "";
    colorText.style.cursor = "";    
  }
  let resetAll = document.querySelector('#resetAll');

  resetAll?.addEventListener('click', (e) => {
    // // e.preventDefault(); kadangi tai yra linkas, kad paspaudus nešokinėtu į viršų. 116 eiliteje e nereikalingas
    // e.preventDefault();
      myResetAll();
  });
 