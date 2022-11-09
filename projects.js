const projectsSection = document.getElementById('portfolio');
const docBody = document.querySelector('body');
const popupContainer = document.querySelector('.details');

const projects = [
  {
    img: {
      src: './img/project-1-desktop.png',
      alt: 'tonic project preview',
    },
    title: 'Tonic',
    type: ['CANOPY', 'BACKEND DEV', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    demo: '',
    source: '',
  },
  {
    img: {
      src: './img/project-2-desktop.png',
      alt: 'Multi-Post Stories project preview',
    },
    title: 'Multi-Post Stories',
    type: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
    demo: '',
    source: '',
  },
  {
    img: {
      src: './img/project-5-desktop.png',
      alt: 'To do application preview',
    },
    title: 'To Do App',
    type: ['WEB', 'FRONTEND DEV', '2022'],
    description: 'To do List project is a small application where you can save your todo things or tasks inside browser\'s local storage so you won\'t forget about them and you can also tick each one to be marked as completed.',
    technologies: ['HTML', 'CSS', 'Javascript', 'Webpack'],
    demo: 'https://kweeka1.github.io/to-do-list/dist/',
    source: 'https://github.com/Kweeka1/to-do-list',
  },
  {
    img: {
      src: './img/project-6-desktop.png',
      alt: '2022 Global artificial intelligence conference page preview',
    },
    title: 'Global AI Conference page',
    type: ['WEB', 'FRONTEND DEV', '2022'],
    description: 'This is my personel version of the conference page design by Cindy Shin in Behance. where I try to implement the mockup as precisely as possible. And I also changed the page content to talk about The Global AI Summit which is a two-way conversation that engages every attendee, speaker, and partner in a rich dialogue about how AI can solve complex problems, empower businesses, and transform society.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    demo: 'https://kweeka1.github.io/capstone-project-conference-page/',
    source: 'https://github.com/Kweeka1/capstone-project-conference-page',
  },
];

const openURLInNewTab = (url) => {
  if (!url) return;
  window.open(url, '_blank');
};

const generateList = (arr) => arr.reduce((elements, element) => `${elements}<li>${element}</li>`, '');

const generatePopupSection = (project) => `
    <section class="section_detail_wrapper">
      <article class="section_detail">
        <div class="flex section_detail__title">
          <h1>${project.title}</h1>
          <img class="close-detail" src="./img/close-detail.svg" alt="Close project details" />
        </div>
        <ul class="flex project_details">
         ${generateList(project.type)}
        </ul>
        <img src=${project.img.src} alt=${project.img.alt} />
        <div class="project_description__container">
          <p>${project.description}</p>
          <div>
            <ul class="flex project_coding_langs">
              ${generateList(project.technologies)}
            </ul>
            <div class="flex gap project_links">
              <button linkto="${project.demo ? new URL(project.demo) : ''}" class="btn-primary btn-outlined project_details_btn">
                <span>See live</span>
                <img src="./img/liveArrow.svg" alt="link to live demo" />
              </button>
              <button linkto="${project.source ? new URL(project.source) : ''}" class="btn-primary btn-outlined project_details_btn">
                <span>See source</span>
                <img src="./img/github.svg" alt="link to github code" />
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>`;

const generateCard = (project, id) => `
    <section class="card flex bg-white">
      <img class="desktop-bg" src="${project.img.src}" alt="${project.img.alt}" />
      <article>
        <h3>${project.title}</h3>
        <ul class="flex project_details">
          ${generateList(project.type)}
        </ul>
        <p>${project.description}</p>
        <ul class="flex project_coding_langs">
          ${generateList(project.technologies)}
        </ul>
        <button id=${id} class="project-detail btn-primary btn-outlined">See Project</button>
      </article>
    </section>`;

window.addEventListener('load', () => {
  projects.forEach((project, index) => {
    const card = generateCard(project, index);
    projectsSection.insertAdjacentHTML('beforeend', card);
  });

  const projectBtns = document.querySelectorAll('.project-detail');

  projectBtns.forEach((expandCardBtn) => {
    expandCardBtn.addEventListener('click', () => {
      popupContainer.classList.toggle('show');
      docBody.classList.toggle('backdrop_filter_details');
      docBody.style.overflowY = 'hidden';

      popupContainer.replaceChildren('');

      const popupSection = generatePopupSection(projects[expandCardBtn.id]);
      popupContainer.insertAdjacentHTML('beforeend', popupSection);

      const closeIcon = document.querySelector('.close-detail');

      // below code will close Popup if user clicked outside it.
      popupContainer.addEventListener('click', (ev) => {
        if (ev.target !== popupContainer) return;
        docBody.classList.remove('backdrop_filter_details');
        popupContainer.classList.remove('show');
        docBody.style.overflowY = 'scroll';
      });

      closeIcon.addEventListener('click', () => {
        docBody.classList.toggle('backdrop_filter_details');
        popupContainer.classList.toggle('show');
        docBody.style.overflowY = 'scroll';
      });

      const linksBtns = document.querySelector('.project_links');

      linksBtns.childNodes.forEach((btn) => {
        btn.addEventListener('click', (ev) => {
          if (ev.target.nodeName === 'BUTTON') return openURLInNewTab(ev.target.getAttribute('linkto'));
          const btnEl = ev.target.closest('button');
          return openURLInNewTab(btnEl.getAttribute('linkto'));
        });
      });
    });
  });

  window.addEventListener('resize', () => {
    docBody.classList.remove('backdrop_filter_details');
    popupContainer.classList.remove('show');
    docBody.style.overflowY = 'scroll';
  });
});
