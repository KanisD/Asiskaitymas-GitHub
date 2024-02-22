const intro = document.querySelector('.tab1');
const all = document.querySelector('.content');
const closeButton = document.querySelector('.close');

document.querySelector('.intro').addEventListener('click', () => {
    all.classList.add('hidden');
    intro.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
    all.classList.remove('hidden');
    intro.classList.add('hidden');
});

