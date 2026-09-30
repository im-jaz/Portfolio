// Skills Array

const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
    "Git & GitHub",
    "UI/UX Design"
];

// Projects Array

const projects = [
    {
        title: "Personal Portfolio Website",
        description: "A modern and visually pleasing calendar app.",
        tech: "HTML, CSS, JavaScript",
        image: "cal.jpg"
    },
    {
        title: "Interactive To-Do App",
        description: "A task management application that allows users to add, complete, and remove tasks efficiently.",
        tech: "JavaScript, HTML, CSS",
        image: "td.jpg"
    }
];

// Render Skills

const skillsContainer = document.getElementById("skills-container");

skills.forEach(skill => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");
    skillCard.textContent = skill;

    skillsContainer.appendChild(skillCard);
});

// Render Projects

const projectsContainer = document.getElementById("projects-container");

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">

        <div class="project-content">
            <div class="project-date">Featured Project</div>

            <h3>${project.title}</h3>

            <p>${project.description}</p>
        </div>

        <div class="project-footer">
            <span>${project.tech}</span>
        </div>
    `;

    projectsContainer.appendChild(projectCard);
});


