// Arrow function for responsive navbar
const navSlide = () => {
    const hamburger = document.querySelector('.ham-burger');
    const nav = document.querySelector('.hamburger-nav');

    hamburger.addEventListener('click', () => {
        // Toggle Navbar class
        nav.classList.toggle('nav-active');

        // HamBurger Animation class toggle
        hamburger.classList.toggle('toggle');
    });
}

// Function call
navSlide();