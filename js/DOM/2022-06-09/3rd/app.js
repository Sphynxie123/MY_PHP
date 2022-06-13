// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  if (heightOutput && widthOutput){
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
  }
}

window.onresize = reportWindowSize;

// resize - pakeisti dydi