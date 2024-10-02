let title = document.getElementById('title');

title.textContent = 'Aula de js';
title.style.color = 'orange';

let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    alert('voce clicou num botão');
})

let btn_createElement = document.getElementById('btn_createElement');

btn_createElement.addEventListener('click', () => {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = 'este é um paragrafo criado a partir do js';

    document.body.appendChild(newParagraph);
})

document.getElementById('span').innerHTML = '<p>sou uma tag P</p>';

