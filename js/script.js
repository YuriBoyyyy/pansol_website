const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
let slideIndex = 0;


function nextSlide() {
    if (slideIndex < slides.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    updateSlider();
}


function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`; // Slide one image width
}


setInterval(nextSlide, 2000);