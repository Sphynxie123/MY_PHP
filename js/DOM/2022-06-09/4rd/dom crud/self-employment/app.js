window.addEventListener('DOMContentLoaded', () =>{
    const divMain = document.querySelector('#main');
    
    const h2Tag = document.createElement('h2');
    const textH2 = document.createTextNode('This is text');

    h2Tag.appendChild(textH2);
    divMain.appendChild(h2Tag);

    const pTag = document.createElement('p');
    const textTag = document.createTextNode('This is second text');

    pTag.appendChild(textTag);
    divMain.appendChild(pTag);

    const ulTag = document.createElement('ul');
    const liTag = document.createElement('li');

    ulTag.appendChild(liTag);
    divMain.appendChild(ulTag);

    const secondPTag = document.createElement('p');
    const textSecondTag = document.createTextNode('This is third text');

    secondPTag.appendChild(textSecondTag);
    divMain.appendChild(secondPTag);   
    
    divMain.style.background = 'yellow';
    divMain.style.padding = '10px';
    divMain.style.width = '300px';
    divMain.style.margin = 'auto';

    // divMain.appendChild(h2tag, pTag, ulTag, secondPTag);

    console.log(divMain);
    console.log(h2Tag);
    console.log(pTag);
    console.log(ulTag);
    console.log(secondPTag);

});