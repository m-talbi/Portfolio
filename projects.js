const projectsSection = document.getElementById("portfolio")
const popup = document.querySelector('.datails');

const projects = [
  {
    img: {
      src: "./img/project-1-desktop.png",
      alt: "tonic project preview"
    },
    title: 'Tonic',
    type: ['CANOPY', 'BACKEND DEV', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'Javascript'],
  },
  {
    img: {
      src: "./img/project-2-desktop.png",
      alt: "Multi-Post Stories project preview"
    },
    title: 'Multi-Post Stories',
    type: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
  },
  {
    img: {
      src: "./img/project-3-desktop.png",
      alt: "Facebook 360 project preview"
    },
    title: 'Facebook 360',
    type: ['CANOPY', 'BACKEND DEV', '2015'],
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
  },
  {
    img: {
      src: "./img/project-4-desktop.png",
      alt: "Uber Navigation project preview"
    },
    title: 'Uber Navigation',
    type: ['UBER', 'Lead Developer', '2018'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
  }
]

window.onload = function () {
  projects.forEach((project, index) => {
    const card = generateCard(project, index)
    projectsSection.insertAdjacentHTML('beforeend', card)
  });

  

  const projectDetailBtns = document.querySelectorAll(".project-detail");
  

  projectDetailBtns.forEach(btn => {
    btn.addEventListener('click',() => {

      popup.classList.toggle('show');

      const detail = generateDetail(projects[btn.id]);
      popup.replaceChildren('');
      popup.insertAdjacentHTML('beforeend',  detail);

      const close = document.querySelector(".close-detail");
      close.addEventListener('click',() => {
        popup.classList.toggle('show');
      })
    })
  
  });
}

const generateList = (arr) => {
  let htmlCode = "";
  arr.forEach(element => {
    htmlCode += `<li>${element}</li>`;
  });
  
  return htmlCode;
}

const generateDetail = (project) => {
  return `
    <section class="section-detail">
    <img class="close-detail" src="./img/close-detail.svg" alt="Close project details" />
      <article>
        <div>
          <h1>${project.title}</h1>
           <ul>
             ${generateList(project.type)}
           </ul>
        </div>

        <div>
          <img src=${project.img.src} alt=${project.img.alt} />
        </div>

        <div>
          <p>${project.description}</p>

          <div>
            <ul>${generateList(project.technologies)}</ul>
            <button class="btn-primary btn-outlined">
              <img src="./img/liveArrow.svg" alt="link to live demo" />
              See live
            </button>
            <button class="btn-primary btn-outlined">
                <img src="./img/github.svg" alt="link to github code" />
              See source
            </button>
          </div>
        </div>
      </article>
    </section>
  `;
}

const generateCard = (project, id) => (
  `
    <section class="card flex bg-white">
      <img class="desktop-bg" src="${project.img.src}" alt="${project.img.alt}" />
      <article>
        <h3>${project.title}</h3>
        <ul class="flex project_details">
        ${generateList(project.type)}
        </ul>
        <p>
        ${project.description}
        </p>
        <ul class="flex project_coding_langs">
        ${generateList(project.technologies)}
        </ul>
        <button id=${id} class=" project-detail btn-primary btn-outlined">See Project</button>
      </article>
    </section>
  `
)
