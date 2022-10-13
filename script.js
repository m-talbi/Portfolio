const navBar = document.getElementById('navbar');
const navIcon = document.getElementById('nav-icon');
const navMenuLinks = document.getElementById('nav-menu-links');
const body = document.querySelector('body');
const links = document.querySelectorAll('.nav_menu__container a');
const underline = document.getElementById('underline');
const portfolio = document.getElementById('portfolio');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

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

  switch (true) {
    // Portfolio projects Section
    case (scrollTop > (portfolio.offsetTop - 200) && scrollTop < (about.offsetTop - 200)):
      underline.style.display = 'block';
      underline.style.width = `${links[0].scrollWidth + 14}px`;
      underline.style.left = `${links[0].offsetLeft - 6}px`;
      break;
    // About Section
    case (scrollTop > (about.offsetTop - 200) && scrollTop < (contact.offsetTop - 100)):
      underline.style.display = 'block';
      underline.style.width = `${links[1].scrollWidth + 14}px`;
      underline.style.left = `${links[1].offsetLeft - 6}px`;
      break;
    // Contact Section
    case (scrollTop > (contact.offsetTop - 100)):
      underline.style.display = 'block';
      underline.style.width = `${links[2].scrollWidth + 14}px`;
      underline.style.left = `${links[2].offsetLeft - 6}px`;
      break;
    default:
      underline.style.width = '0';
      underline.style.left = `${links[0].offsetLeft - 6}px`;
  }
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