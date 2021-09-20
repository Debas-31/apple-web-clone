const openMenu = document.querySelector('.openMenu');
const mainMenu =  document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu')
function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
openMenu.addEventListener('click', show);

function exit(){
    mainMenu.style.top = '-100%';
}
closeMenu.addEventListener('click', exit);
mainMenu.addEventListener('click', exit);
