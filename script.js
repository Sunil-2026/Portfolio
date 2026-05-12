// ===== SKILLS DATA =====
const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" }
];

// ===== PROJECTS DATA =====
const projects = [
    {
        name: "Portfolio Website",
        tech: "HTML, CSS, JavaScript",
        status: "Completed"
    },
    {
        name: "Full Stack Delivery App",
        tech: "React.js, Node.js, MongoDB",
        status: "In Progress"
    },
    {
        name: "AI Resume Analyser",
        tech: "Python, OpenAI API",
        status: "Planned"
    }
];

// ===== BUILD SKILL CARDS =====
const skillsContainer = document.getElementById("skillsContainer");

for (let i = 0; i < skills.length; i++) {
    let card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = `
        <div class="skill-icon">${skills[i].icon}</div>
        <div class="skill-name">${skills[i].name}</div>
    `;
    skillsContainer.appendChild(card);
}

// ===== BUILD PROJECT CARDS =====
const projectsContainer = document.getElementById("projectsContainer");

for (let i = 0; i < projects.length; i++) {
    let statusClass = "";
    if (projects[i].status === "Completed") {
        statusClass = "status-done";
    } else if (projects[i].status === "In Progress") {
        statusClass = "status-progress";
    } else {
        statusClass = "status-planned";
    }

    let card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
        <div class="project-name">${projects[i].name}</div>
        <div class="project-tech">${projects[i].tech}</div>
        <span class="project-status ${statusClass}">
            ${projects[i].status}
        </span>
    `;
    projectsContainer.appendChild(card);
}

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(15, 15, 35, 0.98)";
    } else {
        navbar.style.backgroundColor = "rgba(15, 15, 35, 0.95)";
    }
});

let student={
    name:"sunil",
    age:19,
    cource:"bca",
};