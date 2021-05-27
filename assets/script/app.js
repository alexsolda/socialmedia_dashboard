const bodyAdy = document.querySelector('body');
const bgTop = document.querySelector('.bg--top');
const mainText = document.querySelectorAll('h3, p, h1, a');
const cards = document.querySelectorAll('.card--big, .card--little');
const toggleText = document.querySelector('.bg-on-off');
const bgToggle = document.getElementById('liga-desliga');


bgToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        lightBG();
    } else {
        darkBG();
    };
});

function lightBG() {
    toggleText.classList.remove('dark-shadow');
    toggleText.classList.add('light-shadow');
    toggleText.innerHTML = 'Dark Mode';
    bodyAdy.style.backgroundColor = 'hsl(225, 100%, 98%)';
    bgTop.style.backgroundColor = 'hsl(227, 80%, 96%)';
    mainText.forEach((h) => {
        h.style.color = 'hsl(230, 17%, 14%)';
    });
    cards.forEach((card) => {
        card.style.backgroundColor = 'hsl(227, 47%, 96%)';
    });
}

function darkBG() {
    toggleText.classList.remove('light-shadow');
    toggleText.classList.add('dark-shadow');
    toggleText.innerHTML = 'Light Mode';
    bodyAdy.style.backgroundColor = 'hsl(230, 17%, 14%)';
    bgTop.style.backgroundColor = 'hsl(232, 19%, 15%)';
    mainText.forEach((h) => {
        h.style.color = 'hsl(228, 34%, 66%)';
    });
    cards.forEach((card) => {
        card.style.backgroundColor = 'hsl(228, 28%, 20%)';
    });
}