const projectsSection = document.getElementById("portfolio")

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
  projects.forEach((project) => {
    const card = generateCard(project)
    projectsSection.insertAdjacentHTML('beforeend', card)
  })
}

const generateTechnologies = (tech) => {
  return `<li>${tech}</li>`
}

const generateCard = (project) => (
  `
    <section class="card flex bg-white">
      <img class="desktop-bg" src="${project.img.src}" alt="${project.img.alt}" />
      <article>
        <h3>${project.title}</h3>
        <ul class="flex project_details">
        ${project.type.map((detail) => {
          return "<li>" + detail + "</li>"
        })}
        </ul>
        <p>
        ${project.description}
        </p>
        <ul class="flex project_coding_langs">
        ${project.technologies.map((tech) => {
          return "<li>" + tech + "</li>"
        })}
        </ul>
        <button class="btn-primary btn-outlined">See Project</button>
      </article>
    </section>
  `
)