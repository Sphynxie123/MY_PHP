// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth
// resize - pakeisti dydi
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function resizeListener() {
  if (heightOutput && widthOutput){
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
    // textContent privalo buti
  }
}
window.addEventListener("resize", resizeListener);
