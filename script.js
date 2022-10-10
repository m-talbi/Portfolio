const navBar = document.getElementById('navbar');
const navIcon = document.getElementById('nav-icon');
const navMenuLinks = document.getElementById('nav-menu-links');
const body = document.querySelector('body');

body.addEventListener('scroll', () => {
  if (navBar.scrollTop !== 0) navBar.style.boxShadow = '2px 2px 2px 1px rgba(0, 0, 0, 0.2);';
});

navIcon.addEventListener('click', () => {
  if (navIcon.firstElementChild.id === 'hamburger-icon') {
    body.style.overflowX = 'hidden';
    navIcon.firstElementChild.src = './img/close-icon.svg';
    navIcon.firstElementChild.id = 'close-icon';
  } else {
    body.style.overflowX = 'scroll';
    navIcon.firstElementChild.src = './img/hamburger-icon.svg';
    navIcon.firstElementChild.id = 'hamburger-icon';
  }

  navMenuLinks.classList.toggle('links_active');
  navBar.classList.toggle('nav_active');
});
