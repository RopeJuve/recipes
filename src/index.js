const menuBtn = document.getElementById('menu');
const menuList = document.getElementById('menuList');
const closeBtn = document.getElementById('closeBtn');


menuBtn.addEventListener('click', () => {
    menuList.classList.add('translate-x-[0px]', 'transition-all', 'duration-700', 'ease-in-out');
});

closeBtn.addEventListener('click', () => {
    menuList.classList.remove('translate-x-[0px]');
})