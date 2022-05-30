const carouselSlide = document.querySelector('.slider-container');
const carouselImages = document.querySelectorAll('.slider-container img');


//Knapper
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners

nextBtn.addEventListener('click', function() {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', function() {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', function() {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2 ;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter ;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

//Arrays

var emner = ["smarthome", "klimatips", "voresplanet", "sparel", "bæredygtig"];
console.log(emner)
