const navBar = document.getElementById('navbar');
const navIcon = document.getElementById('nav-icon');
const navMenuLinks = document.getElementById('nav-menu-links');
const body = document.querySelector('body');
const links = document.querySelectorAll('.nav_menu__container a');
const main = document.querySelector('.headline');
const projects = document.querySelector('.projects');
const about = document.querySelector('.about');
const contact = document.querySelector('.footer__container');

body.addEventListener('scroll', () => {
  if (navBar.scrollTop !== 0) navBar.style.boxShadow = '2px 2px 2px 1px rgba(0, 0, 0, 0.2);';
});

function handler(){
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
  main.classList.toggle('backdrop_filter');
  projects.classList.toggle('backdrop_filter');
  about.classList.toggle('backdrop_filter');
  contact.classList.toggle('backdrop_filter');
}

navIcon.addEventListener('click', handler);


window.addEventListener('resize', () => {
  if(window.innerWidth < 820){
    links.forEach(link => {
      link.addEventListener('click', handler);
    });
  }
})