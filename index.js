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
        description: "A modern and responsive portfolio website showcasing my skills, projects, and contact information.",
        tech: "HTML, CSS, JavaScript"
    },
    {
        title: "Interactive To-Do App",
        description: "A task management application that allows users to add, complete, and remove tasks efficiently.",
        tech: "JavaScript, HTML, CSS"
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