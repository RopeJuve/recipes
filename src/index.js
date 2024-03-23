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
const line = document.getElementById('line');


const shortDescriptionText = 'With chocolate, banana and cream, the mole cake is a real favorite and especially popular with children. The nice thing: All you need is a good recipe to successfully bring the mole cake to the (birthday) table. The basis: a classic chocolate sponge cake. Cocoa in...'
const descriptionText = 'With chocolate, banana and cream, the mole cake is a real favorite and especially popular with children. The nice thing: All you need is a good recipe to successfully bring the mole cake to the (birthday) table. The basis: a classic chocolate sponge cake. Cocoa in combination with grated chocolate gives the mole cake its typical taste. Bananas flavored with lemon juice. And finally a sweet cream. Still missing the chocolate sprinkles on top. This is the only way to turn a simple dome cake into a real mole cake. To do this, simply spread the previously hollowed out batter crumbs on the cream.'
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
    extendedRecipe.innerText = descriptionText;
    readLessBtn.classList.remove('hidden');
    readMoreBtn.classList.add('hidden');
});


readLessBtn.addEventListener('click', () => {
    extendedRecipe.innerText = shortDescriptionText;
    readLessBtn.classList.add('hidden');
    readMoreBtn.classList.remove('hidden');
});

preparation.addEventListener('click', () => {
    preparationText.classList.remove('hidden');
    preparation.classList.add('text-black');
    line.classList.add('justify-end');
    ingredientsText.classList.add('hidden');
});

ingredients.addEventListener('click', () => {
    ingredientsText.classList.remove('hidden');
    line.classList.remove('justify-end');
    preparationText.classList.add('hidden');
});

const imageSrc = {
    small: 'https://recipesblob.oetker.de/assets/90d8d3338c9e4ed58710a111463b5709/290x400/maulwurfkuchen-qf_10926-dr-oetker.webp', // Default or small screens
    md: 'https://recipesblob.oetker.de/assets/90d8d3338c9e4ed58710a111463b5709/1272x764/maulwurfkuchen-qf_10926-dr-oetker.webp',   // Tailwind's md breakpoint (>=768px)
    lg: 'https://recipesblob.oetker.de/assets/90d8d3338c9e4ed58710a111463b5709/1272x764/maulwurfkuchen-qf_10926-dr-oetker.webp'     // Tailwind's lg breakpoint (>=1024px)
};


function updateImageSrc() {
    const screenWidth = window.innerWidth;
    const imgElement = document.getElementById('responsiveImage');

    if (screenWidth >= 1024) {
        imgElement.src = imageSrc.lg;
    } else if (screenWidth >= 768) {
        imgElement.src = imageSrc.md;
    } else {
        imgElement.src = imageSrc.small;
    }
}


window.addEventListener('resize', updateImageSrc);

updateImageSrc();