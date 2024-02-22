// const intro = document.querySelector('.tab1');
// const work = document.querySelector('.tab2');
// const about = document.querySelector('.tab3');
// const contact = document.querySelector('.tab4');
// const all = document.querySelector('.content');
// const closeButton = document.querySelector('.close');

// document.querySelector('.intro').addEventListener('click', () => {
//     all.classList.add('hidden');
//     intro.classList.remove('none');
//     intro.classList.add('flex')
// });

// closeButton.addEventListener('click', () => {
//     all.classList.remove('hidden');
//     intro.classList.add('hidden');
// });

// document.querySelector('.work').addEventListener('click', () => {
//     all.classList.add('hidden');
//     work.classList.remove('hidden');
// });

// closeButton.addEventListener('click', () => {
//     all.classList.remove('hidden');
//     work.classList.add('hidden');
// });

// document.querySelector('.about').addEventListener('click', () => {
//     all.classList.add('hidden');
//     about.classList.remove('hidden');
// });

// closeButton.addEventListener('click', () => {
//     all.classList.remove('hidden');
//     about.classList.add('hidden');
// });

// document.querySelector('.contact').addEventListener('click', () => {
//     all.classList.add('hidden');
//     contact.classList.remove('hidden');
// });

// closeButton.addEventListener('click', () => {
//     all.classList.remove('hidden');
//     contact.classList.add('hidden');
// });


const intro = document.querySelector('.tab1');
const work = document.querySelector('.tab2');
const about = document.querySelector('.tab3');
const contact = document.querySelector('.tab4');
const all = document.querySelector('.content');

document.querySelector('.intro').addEventListener('click', () => {
    all.classList.add('hidden');
    intro.style.display = 'flex';
});

document.querySelector('.work').addEventListener('click', () => {
    all.classList.add('hidden');
    work.style.display = 'flex';
});

document.querySelector('.about').addEventListener('click', () => {
    all.classList.add('hidden');
    about.style.display = 'flex';
});

document.querySelector('.contact').addEventListener('click', () => {
    all.classList.add('hidden');
    contact.style.display = 'flex';
});



const closeButtons = document.querySelectorAll('.close');

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        let parentElement = button.parentNode;
        let grandparentElement = parentElement.parentNode;

        grandparentElement.style.display = 'none';
        all.classList.remove('hidden')
    })
})




