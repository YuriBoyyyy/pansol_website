document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        let currentIndex = 0;
        const slides = slider.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        }

        showSlide(currentIndex);
        setInterval(nextSlide, 2000);
    });
});
