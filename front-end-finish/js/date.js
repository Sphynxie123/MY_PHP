// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
const countDownDate = new Date("July 23, 2021 14:00:00").getTime();
// Update the count down every 1 second
const x = setInterval(function() {
  // Get today's date and time
  let now = new Date().getTime();    
  // Find the distance between now and the count down date
  let distance = now - countDownDate;    
  // Time calculations for years, days, hours, minutes and seconds
  let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365)); 
  let days = Math.floor(distance % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("date").innerHTML =years + "y " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
   
}, 1000);



 

