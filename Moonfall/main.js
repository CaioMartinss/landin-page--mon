let btn = document.querySelector('.hide');
let container = document.querySelector('.container')

btn.addEventListener('click', function () {
    if (container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
    }
});


let botaPS = document.querySelector('.botao-play-secundario');
let titulo = document.querySelector('.title');

botaPS.addEventListener('mouseover', function () {
    alert(titulo.style = 'assistr ao trailer');
});