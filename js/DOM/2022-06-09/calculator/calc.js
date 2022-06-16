// https://w3schools.invisionzone.com/topic/61217-simple-calculator-using-html-css-and-js/
// https://github.com/punampatel/Calculator-Excercise/blob/master/Event%20Listener%20Assignment


function addition (num1, num2){
    return num1 + num2;
}
function subtraction (num1, num2){
    return num1 - num2;
}
function multiplication (num1, num2){
    return num1 * num2;   
}
function division (num1, num2){
    return num1 / num2;  
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
function calculateValue (num1, num2, action){
    // patikrinam ar yra skaiciai
    if (isNaN(num1 != num1)){
        throw new Error ('Numberone is not a number');
    }
    if (isNaN(num2 != num2)){
        throw new Error ('Numberone is not a number');
    }
    const actions = [addition, subtraction, multiplication, division];
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    
     const indexOfAction = actions.map(x => x.name).indexOf(action);
    if (indexOfAction === -1){
        throw new Error ('Action not recognized');
    }
    return actions[indexOfAction](num1, num2);
}

const btn = document.querySelectorAll('button');
const inp = document.querySelector('#inp');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');
const name0 = document.querySelector('name0');
const name1 = document.querySelector('name1');
const name2 = document.querySelector('name2');
const name3 = document.querySelector('name3');
const name4 = document.querySelector('name4');
const name5 = document.querySelector('name5');
const name6 = document.querySelector('name6');
const name7 = document.querySelector('name7');
const name8 = document.querySelector('name8');
const name9 = document.querySelector('name9');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', takeClickValue);       
}
// inp.addEventListener('inp', updateValue);

function takeClickValue(e){
    // console.log(`You clicked ${e.target.innerText}`);       
    inp.value+= e.target.textContent;
}
function clearNumbers(){
    inp.value='';
}
clear.addEventListener('click', clearNumbers);

function equalButton() {   
    
    inp.value = `${inp.value} = ${eval(inp.value)}`; 
}
equal.addEventListener('click', equalButton);


// console.log('calculateValue: 1, 5, addition', calculateValue(1, 5, 'addition'));
// console.log('calculateValue: 1, 5, subtraction', calculateValue(1, 5, 'subtraction'));
// console.log('calculateValue: 1, 5, multiplication', calculateValue(1, 5, 'multiplication'));
// console.log('calculateValue: 1, 5, division', calculateValue(1, 5, 'division'));

// console.log('calculateValue: 1, 5, division', calculateValue(1, 'a', 'division'));
// console.log('calculateValue: 1, 5, division', calculateValue(1, 5, 'division'));  
