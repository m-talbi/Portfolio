const projectsSection = document.getElementById('portfolio');
const docBody = document.querySelector('body');
const popupContainer = document.querySelector('.details');

const projects = [
  {
    img: {
      src: './img/project-9-desktop.png',
      alt: 'Car Rental preview',
    },
    title: 'Car Rental',
    type: ['Desktop', 'FULL STACK DEV', '2023'],
    description: 'Car Rental is a basic app that allows users to reserve a car, add new cars, and delete existing ones. The backend is built using Ruby On Rails and communicates with Reactjs app on the frontend to provide a seamless user experience. The app also includes functionality for user authentication and authorization, allowing only authorized users to perform actions such as adding or deleting cars.',
    technologies: ['Ruby', 'Ruby On Rails', 'PostgreSQL', 'Reactjs', 'Redux'],
    demo: 'https://dev--thunderous-peony-7ad000.netlify.app/',
    source: 'https://github.com/wassimchakib/Car-Rental-Front-End',
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
    source: 'https://github.com/m-talbi/metrics-app',
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
    demo: 'https://m-talbi.github.io/movies-app/dist/',
    source: 'https://github.com/m-talbi/movies-app',
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
    demo: 'https://m-talbi.github.io/capstone-project-conference-page/',
    source: 'https://github.com/m-talbi/capstone-project-conference-page',
  },
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
    source: 'https://github.com/m-talbi/math-magicians',
  },
];

const openURLInNewTab = (url) => {
  if (!url) return;
  window.open(url, '_blank');
};

const generateList = (arr) => arr.reduce((elements, element) => `${elements}<li class="project_detail">${element}</li>`, '');

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
        <div class="flex-center project_preview">
          <img class="popup_preview_image" src=${project.img.src} alt="${project.img.alt}" />
        </div>
        <div class="project_description__container">
          <p>${project.description}</p>
          <div>
            <ul class="flex project_coding_langs">
              ${generateList(project.technologies)}
            </ul>
            <div class="flex gap project_links">
              <button linkto="${project.demo ? new URL(project.demo) : ''}" class="btn-primary btn-outlined project_details_btn">
                <span>See live</span>
                <svg class="live_demo_icon" width="18" height="20" viewBox="0 0 18 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" />
                </svg>
              </button>
              <button linkto="${project.source ? new URL(project.source) : ''}" class="btn-primary btn-outlined project_details_btn">
                <span>See source</span>
                <svg class="source_code_icon" fill="currentColor" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z" />
                </svg>
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
        <p class="project__description">${project.description}</p>
        <ul class="flex project_coding_langs">
          ${generateList(project.technologies)}
        </ul>
        <div class="btn-container">
          <button id=${id} class="project-detail btn-primary btn-outlined">See Project</button>
        </div>
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
