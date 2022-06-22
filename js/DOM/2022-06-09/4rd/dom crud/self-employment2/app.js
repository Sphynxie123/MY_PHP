/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
 // gali paspausti ir ideti funkcija tada issiskleidzia
let hamburg = document.querySelector('.icon');

hamburg.addEventListener('click', (e)=>{  

  myFunction();
    
}) 

let image = document.querySelector('#image');
let images = ['images.jpg', 'images2.jpg', 'images3.jpg', 'images4.jpg'];

setInterval(function(){
  let random = Math.floor(Math.random() * images.length);

  image.src =  "images/" + images[random];
}, 2000);

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}
// iskvieciam ir tada rodo laika
startTime();

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

let form = document.querySelector('form');
let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (fname.value == "" || lname.value == ""){
      alert('Please fill required fields');
    return false;
  } else {
      alert('Code has accepted : you can try another');
    return true; 
  }
}) 
