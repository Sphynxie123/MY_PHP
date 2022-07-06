    // curent day
function startTime() {
    const todayDate = new Date().toISOString().slice(0, 10);
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('#clock').innerHTML = todayDate + " " + h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
// parodomas laikas 
startTime();

