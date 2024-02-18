const body = document.body;
const modeButton = document.querySelector('.mode');
const moonIcon = document.querySelector('.moon');
const modeIcon = document.querySelector('.mode');

// Check if dark mode is initially set
const isDarkMode = body.classList.contains('dark');

// Set the initial icon based on the mode
moonIcon.classList.toggle('sun', !isDarkMode);

modeButton.addEventListener('click', function () {
    body.classList.toggle('dark');
    moonIcon.classList.toggle('sun');
    modeIcon.classList.toggle('day');
});
