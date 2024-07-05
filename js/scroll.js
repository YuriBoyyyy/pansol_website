window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) { // Adjust the scroll position as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});