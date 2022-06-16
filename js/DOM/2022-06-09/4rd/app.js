const h2 = document.createElement("h2");
const getText = document.createTextNode("First text");
h2.appendChild(getText);
console.log(h2);

const getPTag = document.createElement("p");
const getSecondText = document.createTextNode("Second text");
getPTag.appendChild(getSecondText);
console.log(getPTag);

const getUlTag = document.createElement("ul");
const getLiTag = document.createElement("li");
getUlTag.appendChild(getLiTag);
console.log(getUlTag);

const getSecondPTag = document.createElement("p");
const getThirdText = document.createTextNode("Third text");
getUlTag.appendChild(getSecondText);
console.log(getSecondPTag);