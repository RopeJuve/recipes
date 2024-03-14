const menuBtn = document.getElementById('menu');
const menuList = document.getElementById('menuList');
const closeBtn = document.getElementById('closeBtn');
const animateListItems = document.querySelectorAll('#listItem');
const link = document.querySelector('#recipes');


menuBtn.addEventListener('click', () => {
    menuList.classList.add('translate-x-[0px]', 'transition-all', 'duration-700', 'ease-in-out');
    animateListItems.forEach((item) => {
        item.classList.add(`animate-fade`);
    })
});

link.addEventListener('mouseover', () => {
    console.log('hovered');
    menuList.classList.add('translate-x-[0px]', 'transition-all', 'duration-700', 'ease-in-out');
    animateListItems.forEach((item) => {
        item.classList.add(`animate-fade`);
    })
});

menuList.addEventListener('mouseleave', () => {
    console.log('hovered');
    menuList.classList.remove('translate-x-[0px]');
    animateListItems.forEach((item) => {
        item.classList.remove(`animate-fade`);
    });
});


closeBtn.addEventListener('click', () => {
    menuList.classList.remove('translate-x-[0px]');
    animateListItems.forEach((item) => {
        item.classList.remove(`animate-fade`);
    });

});