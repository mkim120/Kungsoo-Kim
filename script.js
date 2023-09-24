const body = document.querySelector('body');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

const modeToggle = document.getElementById('mode-toggle');

function toggleMode() {
  body.classList.toggle('dark-mode');
  main.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
}

modeToggle.addEventListener('click', toggleMode);