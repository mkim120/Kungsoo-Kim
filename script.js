const body = document.querySelector('body');
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

const modeToggle = document.getElementById('mode-toggle');

const border = document.getElementById('dark-mode-border');

const card = document.querySelectorAll('.card-footer');

function toggleMode() {
  body.classList.toggle('dark-mode');
  nav.classList.toggle('navbar-dark');
  main.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');

  if (border.style.display === 'block') {
    border.style.display = 'none';
  } else {
    border.style.display = 'block';
  }

  for (let e = 0; e < card.length; e++) {
    card[e].classList.toggle('bg-dark');
  }
}

modeToggle.addEventListener('click', toggleMode);

// fade and slide in on scroll

const items = document.querySelectorAll('.item');

const options = {
  threshold: 0.4
}

function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}

const observer = new IntersectionObserver(addSlideIn, options)

items.forEach(item => {
  observer.observe(item);
})