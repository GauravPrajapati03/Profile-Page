// Type animation

const element = document.getElementById("type");

const roles = [
    "Frontend Developer",
    "Web Developer",
    "Full Stack Developer",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 120;

function typeEffect() {
    const current = roles[wordIndex];
    if (!isDeleting) {
        element.textContent = current.slice(0, charIndex++);
        speed = 120;
        if (charIndex === current.length + 1) {
            isDeleting = true;
            speed = 1000;
        }
    } else {
        element.textContent = current.slice(0, charIndex--);
        speed = 70;
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % roles.length;
            speed = 300;
        }
    }
    setTimeout(typeEffect, speed);
}

typeEffect();


// Interactive Nav Bar
let navLinks = document.querySelectorAll('.nav-link');

navLinks[0].classList.add('active');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(n => n.classList.remove('active'));
        link.classList.add('active');
    });
});


// Scroll to top
const scrollBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
})

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});