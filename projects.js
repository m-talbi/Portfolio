const projectsSection = document.getElementById('portfolio');
const docBody = document.querySelector('body');
const popupContainer = document.querySelector('.details');

const projects = [
  {
    img: {
      src: './img/project-7-desktop.png',
      alt: 'Math Magicians preview',
    },
    title: 'Math Magicians',
    type: ['Desktop', 'FRONTEND DEV', '2022'],
    description: 'Math Magicians is a simple calculator app that lets you perform basic arithmetic operations such as addition, subtraction, multiplication, and division. With an easy-to-use interface, you can quickly get the answers to all your mathematical problems with ease. ',
    technologies: ['Reactjs', 'SCSS', 'Javascript', 'Jest'],
    demo: 'https://math-magicians.onrender.com/',
    source: 'https://github.com/Kweeka1/math-magicians',
  },
  {
    img: {
      src: './img/project-8-desktop.png',
      alt: 'Leaderboard preview',
    },
    title: 'Leaderboard',
    type: ['Desktop', 'FRONTEND DEV', '2022'],
    description: 'The leaderboard project is a basic application that displays scores submitted by different players. It also allows you to submit your score thanks to the external Leaderboard API service. ',
    technologies: ['Reactjs', 'SCSS', 'Javascript', 'Redux', 'Jest'],
    demo: 'https://kweeka1.github.io/leaderboard/dist/',
    source: 'https://github.com/Kweeka1/leaderboard',
  },
  {
    img: {
      src: './img/project-3-desktop.jpg',
      alt: 'League Challengers tracker preview',
    },
    title: 'League Challengers Tracker',
    type: ['Mobile', 'FRONTEND DEV', '2023'],
    description: 'League Challengers Tracker is a basic application that aims to provide users with access to real-time statistics from Riot Games for the top challenger players in League of Legends. With this project, you can retrieve stats such as champion scores, KDA, and win rate for recent games played by these players, across all regions. You can also filter players to find the ones that best meet your needs.',
    technologies: ['Reactjs', 'SCSS', 'Javascript', 'Redux', 'Jest'],
    demo: 'https://league-challengers-tracker.onrender.com/',
    source: 'https://github.com/Kweeka1/metrics-app',
  },
  {
    img: {
      src: './img/project-4-desktop.png',
      alt: 'Series Guide Application preview',
    },
    title: 'Series Guide Application',
    type: ['Desktop', 'FRONTEND Dev', '2022'],
    description: 'Series Guide Application is a small application that displays some of the popular shows in the world. It also allows users to share their comments and feedback about their favored shows and give a thumbs up thanks to the external Involvement and TVMaze API services.',
    technologies: ['HTML', 'SCSS', 'Javascript', 'Webpack', 'Jest'],
    demo: 'https://kweeka1.github.io/movies-app/dist/',
    source: 'https://github.com/Kweeka1/movies-app',
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
