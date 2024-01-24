const body = document.body;
const modeButton = document.querySelector('.mode');
const moonIcon = document.querySelector('.moon');
const modeIcon = document.querySelector('.mode');

modeButton.addEventListener('click', function () {
    body.classList.toggle('light');
    moonIcon.classList.toggle('sun');
    modeIcon.classList.toggle('day');
});
