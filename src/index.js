const menuBtn = document.getElementById('menu');
const menuList = document.getElementById('menuList');
const closeBtn = document.getElementById('closeBtn');
const animateListItems = document.querySelectorAll('#listItem');


menuBtn.addEventListener('click', () => {
    menuList.classList.add('translate-x-[0px]', 'transition-all', 'duration-700', 'ease-in-out');
    animateListItems.forEach((item) => {
        item.classList.add(`animate-fade`);
    })
});

closeBtn.addEventListener('click', () => {
    menuList.classList.remove('translate-x-[0px]');
    animateListItems.forEach((item) => {
        item.classList.remove(`animate-fade`);
    });

});