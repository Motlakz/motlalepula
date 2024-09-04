const body = document.body;
const modeButton = document.querySelector('.mode');
const moonIcon = document.querySelector('.moon');
const modeIcon = document.querySelector('.mode');
const logos = document.querySelectorAll('.logo');

// Check if dark mode is initially set
const isDarkMode = body.classList.contains('dark');

// Set the initial icon based on the mode
moonIcon.classList.toggle('sun', !isDarkMode);

modeButton.addEventListener('click', function () {
    body.classList.toggle('dark');
    moonIcon.classList.toggle('sun');

    // Check if dark mode is enabled
    const isDarkMode = body.classList.contains('dark');

    // Change the logo based on the mode for each logo element
    logos.forEach((logo) => {
        logo.src = isDarkMode ? './assets/portfolio-logo.png' : './assets/portfolio-logo-dark.png';
    });
});

// Scroll reveal animation
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const header = document.querySelector('header > div');
const image = document.querySelector('figure > div');
const article = document.querySelector('article');

const headerAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const imageAnimation = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
};

const articleAnimation = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut", delay: 0.4 }
};

framerMotion.motion(header, headerAnimation);
framerMotion.motion(image, imageAnimation);
framerMotion.motion(article, articleAnimation);
