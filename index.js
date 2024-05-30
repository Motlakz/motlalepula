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
