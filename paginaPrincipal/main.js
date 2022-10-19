//function do pesquisar
let btn = document.querySelector('.hide');
let container = document.querySelector('.container')

btn.addEventListener('click', function() {
    if(container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
    }
});



//passgem dos slideshow
let count = 1;
document.getElementById('radio1').checked = true;


setInterval(function() {
    nextImage();
}, 5000);


function nextImage() {
    if(count > 4) {
        count = 1;
    }
    document.getElementById('radio' + count).checked = true;
    count++;
}