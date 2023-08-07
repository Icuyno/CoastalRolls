/* JS To Open & Close The Menu */
const menu = document.querySelector('.js-menu');
const menu_open = document.querySelector('.js-menu-open');
const menu_close = document.querySelector('.js-menu-close');

menu_open.addEventListener('click', () => {
    console.log('Menu opened');
    menu.classList.add('open');
})

menu_close.addEventListener('click', () => {
    menu.classList.remove('open');
})

