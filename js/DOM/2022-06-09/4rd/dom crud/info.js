// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
// -----> užtikrina "DOMContentLoaded" kas šitą failą užkrautu, kai kiti būna pakrauti
// rekomenduojama visada naudoti, kad būtu saugesnis variantas.
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
//     // click - kai pelės kairysis mygtukas spustelį elementą
// // contextmenu - kai pelė dešniuoju klavišu spusteli mygtuką
// // mouseover / mouseout - kai pelės žymeklis užeina virš /palieka elementą
// // mousedown / mouseup - kai pelės mygtukas paspaudžiamas / atleidžiamas nuo elemento
// // mouemove - kai pelė juda
// // keydown ir keyup PVZ paspaudimas bet kokio mygtuko ir atspaudimas
//     window.addEventListener('mousemove', (event) => {
//         // console.log('DOM fully loaded and parsed');
//         console.log({event});
//     });
//     window.addEventListener('keyup', (event) => {
//         console.log(event.type, event.key, event.keyCode, String.fromCharCode(event.keyCode));
//     });
//     window.addEventListener('keydown', (event) => {
//         console.log(event.type, event.key, event.keyCode, String.fromCharCode(event.keyCode));
//     });

// });


