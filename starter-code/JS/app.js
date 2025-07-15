const closeBtn = document.querySelector('.close_btn');
const openBtn = document.querySelector('.nav_dropdown_btn');
const menu = document.querySelector('.mobile_menu');

openBtn.addEventListener('click', () => {
    menu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
})