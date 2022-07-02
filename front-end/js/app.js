function myFunction(){
    alert('Hello World!');
}
let btn = document.querySelector('.btn');

btn?.addEventListener('click', () => {
    myFunction();
});

let inputCaseChange = document.querySelector('#input-case-change');

document.querySelector('#to-upper-case')?.addEventListener('click', (e) =>{
    e.preventDefault();
    // console.log(inputCaseChange.value);
    inputCaseChange.value = inputCaseChange.value.toUpperCase();
});

document.querySelector('#to-lower-case')?.addEventListener('click', (e) =>{
    e.preventDefault();
    // console.log(inputCaseChange.value);
    inputCaseChange.value = inputCaseChange.value.toLowerCase();
});

function capitalizeFirstLetter(inputCaseChange) {
    // paimam pirma raide charAt(0) ir pakeičiam didžiaja. Sustojam ties slice(1) (pirma raide)
    return inputCaseChange.value.charAt(0).toUpperCase() + inputCaseChange.value.slice(1);
}
// jei id dedam #.....
document.querySelector('#first-upper-case')?.addEventListener('click', (e) =>{
    e.preventDefault();    
    inputCaseChange.value = capitalizeFirstLetter(inputCaseChange);
});
function writeInLowerCaseFirstLetter(inputCaseChange) {
    return inputCaseChange.value.charAt(0).toLowerCase() + inputCaseChange.value.slice(1);
}
document.querySelector('#first-lower-case')?.addEventListener('click', (e) =>{
    e.preventDefault();
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

let btnBlock = document.querySelector('#block');
let btnUnblock = document.querySelector('#unblock');
let inpBlockUnblock = document.querySelector('#inpBlockUnblock');

function myBlock() {
    document.querySelector("#inpBlockUnblock").disabled = true;
}

function myUnBlock() {
    document.querySelector("#inpBlockUnblock").disabled = false;
}
btnBlock?.addEventListener('click', () => {
    
    myBlock();
});

btnUnblock?.addEventListener('click', () => {
    
    myUnBlock();
});

let img = document.querySelector('#image');
// keičiasi foto užvedant pele ir patraukiant
img?.addEventListener('mouseenter', function() {
    img.setAttribute('src', 'https://i.imgur.com/PLDVxza.jpg');
});
img?.addEventListener('mouseleave', function() {
    img.setAttribute('src', 'https://i.imgur.com/0DElr0H.jpg');
});
// Cursor
function myCursorPointer() {
    document.querySelector('#colorText').style.cursor = 'pointer';
}
function myCursorText() {
    document.querySelector('#colorText').style.cursor = 'text';
}
function myCursorHelp() {
    document.querySelector('#colorText').style.cursor = 'help';
}
let cursorPointer = document.querySelector('#cursorPointer');
let cursorHelp = document.querySelector('#cursorHelp');
let cursorText = document.querySelector('#cursorText');

cursorPointer?.addEventListener('click', () => {
    myCursorPointer();
});
cursorText?.addEventListener('click', () => {
    myCursorText();
});
cursorHelp?.addEventListener('click', () => {
    myCursorHelp();
});
// text color
function myColorRed(){
	document.querySelector('#colorText').style.color = "red";
}
function myColorGreen(){
	document.querySelector('#colorText').style.color = "green";
}
function myColorBlue(){
	document.querySelector('#colorText').style.color = "blue";
}
let colorRed = document.querySelector('#colorRed');
let colorGreen = document.querySelector('#colorGreen');
let colorBlue = document.querySelector('#colorBlue');

colorRed?.addEventListener('click', () => {
    myColorRed();
});
colorGreen?.addEventListener('click', () => {
    myColorGreen();
});
colorBlue?.addEventListener('click', () => {
    myColorBlue();
});
// border color
function myBorderColorRed(){
    // kodel netinka borderColor = "1px solid red"; ????
    document.querySelector('#colorText').style.outline = "1px solid red";
}
function myBorderColorGreen(){
    document.querySelector('#colorText').style.outline = "1px solid green";
}
function myBorderColorBlue(){
    document.querySelector('#colorText').style.outline = "1px solid blue";
}

let borderColorRed = document.querySelector('#borderColorRed');
let borderColorGreen = document.querySelector('#borderColorGreen');
let borderColorBlue = document.querySelector('#borderColorBlue');

borderColorRed?.addEventListener('click', () => {
    myBorderColorRed();
});
borderColorGreen?.addEventListener('click', () => {
    myBorderColorGreen();
});
borderColorBlue?.addEventListener('click', () => {
    myBorderColorBlue();
});

function myResetAll() {
    document.querySelector('#colorText').style.color = "";
    document.querySelector('#colorText').style.outline = "";
    document.querySelector('#colorText').style.cursor = "";
    
  }
  let resetAll = document.querySelector('#resetAll');
  
  resetAll?.addEventListener('click', () => {
      myResetAll();
  });
