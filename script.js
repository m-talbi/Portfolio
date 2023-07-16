const navBar = document.getElementById('navbar');
const navIcon = document.getElementById('nav-icon');
const navMenuLinks = document.getElementById('nav-menu-links');
const body = document.querySelector('body');
const links = document.querySelectorAll('.nav_menu__container a');
const underline = document.getElementById('underline');
const portfolio = document.getElementById('portfolio');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const languagesAccordion = document.getElementById('languages');
const frameworksAccordion = document.getElementById('frameworks');
const skillsAccordion = document.getElementById('skills');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1) navBar.style.boxShadow = '2px 2px 2px 1px rgba(0, 0, 0, 0.2)';
  else navBar.style.boxShadow = 'none';
});

function handleDesktopViewClick(ev) {
  ev.preventDefault();
  const sectionTopPos = document.getElementById(ev.target.textContent.toLowerCase()).offsetTop;
  window.scroll({ left: 0, top: sectionTopPos, behavior: 'smooth' });
}

function handleUnderline() {
  const scrollTop = window.scrollY;
  const offsetTop = [portfolio.offsetTop, about.offsetTop - 100, contact.offsetTop - 100];
  let sectionIndex = -1;

  if (scrollTop > offsetTop[0] && scrollTop < offsetTop[1]) {
    // Projects section
    sectionIndex = 0;
  } else if (scrollTop > offsetTop[1] && scrollTop < offsetTop[2]) {
    // About Section
    sectionIndex = 1;
  } else if (scrollTop > offsetTop[2]) {
    // Contact Section
    sectionIndex = 2;
  }

  underline.style.display = 'block';
  underline.style.width = `${links[sectionIndex].offsetWidth + 14}px`;
  underline.style.left = `${links[sectionIndex].offsetLeft - 6}px`;
}

function handleMobileViewClick() {
  if (navIcon.firstElementChild.id === 'hamburger-icon') {
    body.style.overflowY = 'hidden';
    navIcon.firstElementChild.src = './img/close-icon.svg';
    navIcon.firstElementChild.id = 'close-icon';
  } else {
    body.style.overflowY = 'scroll';
    navIcon.firstElementChild.src = './img/hamburger-icon.svg';
    navIcon.firstElementChild.id = 'hamburger-icon';
  }

  navMenuLinks.classList.toggle('links_active');
  navBar.classList.toggle('nav_active');
  body.classList.toggle('backdrop_filter');
}

function handleClick(ev) {
  return window.innerWidth < 820 ? handleMobileViewClick() : handleDesktopViewClick(ev);
}

function resetNavBar() {
  navMenuLinks.classList.remove('links_active');
  navBar.classList.remove('nav_active');
  body.classList.remove('backdrop_filter');
  navIcon.firstElementChild.src = './img/hamburger-icon.svg';
  navIcon.firstElementChild.id = 'hamburger-icon';
  body.style.overflowY = 'scroll';
}

links.forEach((link) => {
  link.addEventListener('click', handleClick);
});

navIcon.addEventListener('click', handleMobileViewClick);

window.addEventListener('resize', () => {
  resetNavBar();
  underline.style.display = 'none';
  underline.style.left = `${links[0].offsetLeft - 6}px`;

  links.forEach((link) => {
    link.removeEventListener('click', handleClick);
  });

  links.forEach((link) => {
    link.addEventListener('click', handleClick);
  });
});

window.addEventListener('scroll', () => {
  if (window.innerWidth < 820) return;
  handleUnderline();
});

const expandAccordion = (accordion) => {
  const isAccordionClosed = accordion.classList.contains('accordion_closed');
  accordion.classList.toggle('accordion_closed');
  const arrow = accordion.querySelector('.arrow');
  arrow.classList.toggle('rotate');
  if (isAccordionClosed) {
    const stack = accordion.nextElementSibling;
    const { height } = stack.getBoundingClientRect();
    window.scroll({ left: 0, top: stack.offsetTop - (height / 2), behavior: 'smooth' });
  }
};

languagesAccordion.addEventListener('click', () => expandAccordion(languagesAccordion));
frameworksAccordion.addEventListener('click', () => expandAccordion(frameworksAccordion));
skillsAccordion.addEventListener('click', () => expandAccordion(skillsAccordion));
