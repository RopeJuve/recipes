const menuBtn = document.getElementById('menu');
const menuList = document.getElementById('menuList');
const closeBtn = document.getElementById('closeBtn');
const extendedRecipe = document.getElementById('extended-recipe');
const readMoreBtn = document.getElementById('read-more');
const readLessBtn = document.getElementById('read-less');
const animateListItems = document.querySelectorAll('#listItem');
const link = document.getElementById('recipes');
const ingredients = document.getElementById('ingredients');
const preparation = document.getElementById('preparation');
const preparationText = document.getElementById('preparation-text');
const ingredientsText = document.getElementById('ingredients-text');


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

readMoreBtn.addEventListener('click', () => {
    extendedRecipe.classList.add('h-[336px]', 'transition-all', 'duration-700', 'ease-in-out');
    readLessBtn.classList.remove('hidden');
    readMoreBtn.classList.add('hidden');
}  );


readLessBtn.addEventListener('click', () => {
    extendedRecipe.classList.remove('h-[336px]');
    readLessBtn.classList.add('hidden');
    readMoreBtn.classList.remove('hidden');
}  );

preparation.addEventListener('click', () => {
    preparationText.classList.remove('hidden');
    ingredientsText.classList.add('hidden');
});

ingredients.addEventListener('click', () => {  
    ingredientsText.classList.remove('hidden');
    preparationText.classList.add('hidden');
});